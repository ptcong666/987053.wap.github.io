(function () { // no globals
    "use strict";
    var startBtn = document.getElementById("start");
    var stopBtn = document.getElementById("stop");
    var textarea = document.getElementById("text-area");
    var size = document.getElementById("fontsize");
    var speed_selector = document.getElementById("turbo");
    var animation_selector = document.getElementById("animation");
    var animation_type = "BLANK";
    var speed = 250;
    var frame = "";
    var timer = null;

    startBtn.onclick = beginAnimation;
    stopBtn.onclick = stopAnimation;

    animation_selector.onchange = function () {
        stopAnimation();
    };

    size.onchange = function () {
        textarea.style.fontSize = document.getElementById("fontsize").value;
    };

    speed_selector.onchange = function () {
		if (speed_selector.checked){
			speed = 50;
		}
		else{
			speed = 250;
		}
		//only make change if already animating
		if(!stopBtn.disabled){
			clearInterval(timer);
			timer = setInterval(animate, speed);
		}
    };

    function beginAnimation() {
        if (animation_type != "BLANK") {
            startBtn.disabled = true;
            stopBtn.disabled = false;
            animation_selector.disabled = true;
            frame = ANIMATIONS[animation_type].split("=====\n");
            timer = setInterval(animate, speed);
        }
    }

    function animate() {
		var t = frame.shift(); // get/return + remove first element
		textarea.value = t;
		frame.push(t); // push first element to last
    }

    function stopAnimation() {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        animation_selector.disabled = false;
        animation_type = document.getElementById("animation").value;
        textarea.value = ANIMATIONS[animation_type];
        clearInterval(timer);
    }
})();
