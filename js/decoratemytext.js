window.onload = function () {
    "use strict";
    const decorateButton = document.getElementById("decorateButton");
    const checkbox = document.getElementById('blingckbox');
    decorateButton.onclick = decorateMyText;
    checkbox.onchange = checkBling;
    function decorateMyText() {
        setInterval(increaseFont, 500);
     }

     function checkBling(){
         var checkbox = document.getElementById('blingckbox');
         if (checkbox.checked != true){
             document.getElementById("myText").classList.remove("decorate")
         } else {
             document.getElementById("myText").className = "decorate";
         }
     }

     function increaseFont() {
         var computedFontSize = window.getComputedStyle(document.getElementById("myText")).fontSize;
         var fontSize = parseFloat(computedFontSize);
         console.log(fontSize)
         fontSize = fontSize + 2;
         if (fontSize > 50) {
             //clearInterval(myInterval)
         } else {
             document.getElementById("myText").style.fontSize = fontSize + "pt";
         }

     }
};
