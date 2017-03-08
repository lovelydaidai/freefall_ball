window.onload = function () {
    var nina = document.getElementById('nina');
    var disX = 0;
    var disY = 0;
    var prevX = 0;
    var prevY = 0;
    var iSpeedX = 0;
    var iSpeedY = 0;
    var timer = null;
    nina.onmousedown = function (ev) {
            var ev = ev || window.event;
            disX = ev.clientX - nina.offsetLeft;
            disY = ev.clientY - nina.offsetTop;
            prevX = ev.clientX;
            prevY = ev.clientY;
            document.onmousemove = function (ev) {
                var ev = ev||window.event;
                nina.style.left = ev.clientX - disX + 'px';
                nina.style.top = ev.clientY - disY + 'px';
                iSpeedX = ev.clientX - prevX;
                iSpeedY = ev.clientY - prevY;
                prevX = ev.clientX;
                prevy = ev.clientY;


            };
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
                start_move();
            };
            return false; //阻止默认事件
            };
    function start_move() {

        clearInterval(timer);
        timer = setInterval(function () {
            iSpeedY += 3;
            var T = nina.offsetTop + iSpeedY ;
            var L = nina.offsetLeft + iSpeedX;
            if (T >document.documentElement.clientHeight - nina.offsetHeight)
            {
                T = document.documentElement.clientHeight - nina.offsetHeight;
                iSpeedY *= -0.75;
                iSpeedX *= 0.75;
            }
            else if(T<0){
                T= 0;
                iSpeedY *= -1;
            }

            if (L >document.documentElement.clientWidth - nina.offsetWidth)
            {
               L = document.documentElement.clientWidth - nina.offsetWidth;
                iSpeedX *= -1;
            }
            else if(L<0){
                L= 0;
                iSpeedX *= -1;
            }
            nina.style.top= T + "px";
            nina.style.left = L + "px";
        },30);

    }
};

