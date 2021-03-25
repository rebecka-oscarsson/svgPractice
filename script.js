let fur;
let lefteye;
const monkeySvg = document.getElementById('monkeySvg');

monkeySvg.addEventListener("load", function() {
    var monkeyCode = document.getElementById('monkeySvg').contentDocument;
    fur = monkeyCode.getElementById("fur");
    lefteye = monkeyCode.querySelector("#leftEye")
  });



let buttons = document.querySelectorAll("button");


function hide (clickedBtn) {
    switch(clickedBtn){
    case "furBtn": fur.classList.toggle("hidden");
    break;
    case "leftBtn": lefteye.classList.toggle("hidden");
    break;
    case "faceBtn": document.getElementById("face").classList.toggle("hidden");
    break;
    case "rightBtn": document.getElementById("rightEye").classList.toggle("hidden");
    break;
}
}

buttons.forEach((button)=>button.addEventListener("click", (e)=>hide(e.target.id)));

