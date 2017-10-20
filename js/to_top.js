function to_top(){
    var top_btn = document.getElementById("to-top");
    var timer = null;
    var flag = true;
    window.onscroll = function(){
        if(!flag) {
            clearInterval(timer);
        }
        flag = false;
    };

    top_btn.onclick = function() {
        timer = setInterval(function() {
            var otop = document.documentElement.scrollTop;
            document.documentElement.scrollTop -= 100;
            flag = true;
            if(otop === 0) {
                clearInterval(timer);
            }
        }, 30);
    };
}