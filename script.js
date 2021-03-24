let buttons = document.querySelectorAll("button");


function hide (clickedBtn) {
    switch(clickedBtn){
    case "furBtn": document.getElementById("fur").classList.toggle("hidden");
    break;
    case "leftBtn": document.querySelector("#leftEye").classList.toggle("hidden");
    break;
    case "faceBtn": document.getElementById("face").classList.toggle("hidden");
    break;
    case "rightBtn": document.getElementById("rightEye").classList.toggle("hidden");
    break;
}
}

buttons.forEach((button)=>button.addEventListener("click", (e)=>hide(e.target.id)));

