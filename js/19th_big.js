window.onload = function () {
    // 获取body对象
    var index = 0;
    var animated = false;
    var the_19 = ["富强", "民主", "自由", "和谐", "文明", "平等", "公正", "法治"];
    var body = document.body;
    body.onclick = function (b) {
        var text = document.createTextNode(the_19[index % the_19.length]);
        index++;
        var span = document.createElement("span");
        span.appendChild(text);
        body.appendChild(span);
        span.style.zIndex = 99999;
        span.style.color = "red";
        /*span.style.color = "#" + parseInt(Math.random() * (1 << 24).toString(16), 10);*/
        span.style.position = "absolute";
        span.style.top = b.pageY - 50 + "px";
        span.style.left = b.pageX + "px";
        span.style.fontSize = "20px";
        animate(span);
    };

    function animate(obj) {
        animated = true;
        var new_top = obj.offsetTop - 200;
        var interval = 50;
        var opc = 1;
        function go() {
            if (obj.offsetTop > new_top) {
                obj.style.top = obj.offsetTop - 10 + "px";
                opc = opc * 0.8;
                obj.style.opacity = opc;
                setTimeout(go, interval);
            } else {
                animated = false;
                obj.style.top = new_top + "px";
                obj.style.opacity = 0;
                body.removeChild(obj);
            }
        }

        go();
    }
};