/*********************************
             variables
*********************************/

let fur;
let leftEye;
let rightEye;
let face;
const monkeySvg = document.getElementById('monkeySvg');
const saveLink = document.querySelector("a");
let buttons = document.querySelectorAll("button");

/*********************************
          eventListeners
*********************************/

monkeySvg.addEventListener("load", getMonkeyParts);
buttons.forEach((button) => button.addEventListener("click", (e) => hide(e.target.id)));
saveLink.addEventListener("click", printMonkeyLink);

/*********************************
          functions
*********************************/

function getMonkeyParts() {
  var monkeyCode = document.getElementById('monkeySvg').contentDocument;
  const monkeyParts = monkeyCode.querySelectorAll("path");
  fur = monkeyCode.getElementById("fur");
  face = monkeyCode.getElementById("face");
  leftEye = monkeyCode.querySelector("#leftEye");
  rightEye = monkeyCode.getElementById("rightEye");
  printMonkey(monkeyParts);
  return monkeyCode;
}

function hide(clickedBtn) {
  switch (clickedBtn) {
    case "furBtn":
      fur.classList.toggle("hidden");
      // const audio = new Audio('./on-the-banks-of-the-wabash.mid');
      // audio.play();
      break;
    case "leftBtn":
      leftEye.classList.toggle("hidden");
      break;
    case "faceBtn":
      face.classList.toggle("hidden");
      break;
    case "rightBtn":
      rightEye.classList.toggle("hidden");
      break;
  }
}

function generateMonkeyLink() {
  let monkeyCode = document.getElementById('monkeySvg').contentDocument;
  const monkeyParts = monkeyCode.querySelectorAll("path");
  let hiddenParts = [];

  for (part in monkeyParts) {
    if (monkeyParts[part].classList != undefined && monkeyParts[part].classList.contains("hidden")) {
      hiddenParts.push(monkeyParts[part].id)
    }
  }
  hiddenParts = hiddenParts.join();
  let monkeyLink;//hur göra så att det ej funkar om hiddenparts tom?
  if (hiddenParts){
  if (window.location.pathname)
  {monkeyLink = window.location.origin + window.location.pathname + "?hidden=" + hiddenParts;}
  else
  {monkeyLink = window.location.origin + "?hidden=" + hiddenParts;}}
  else {monkeyLink = "you haven't made any changes"}
  return monkeyLink;
}

function printMonkeyLink() {
  let monkeyLink = generateMonkeyLink();
  let label = document.createElement("label");
  label.setAttribute("for", "link");
  label.innerText = "your monkey is at: ";

  const section = document.querySelector("section");
  section.innerHTML = "";
  let inputField = document.createElement("input");
  label.setAttribute("id", "link");
  inputField.value = monkeyLink;
  section.appendChild(label)
  section.appendChild(inputField);

  //från StackOverflow 
  inputField.addEventListener('input', () => resizeInput); // bind the "resizeInput" callback on "input" event
  resizeInput.call(inputField); // immediately call the function}
}

function resizeInput() {
  this.style.width = this.value.length + "ch";
}

function getMonkey() {
  let monkeyString = new URLSearchParams(window.location.search); //plockar ut parametrar inkl frågetecken
  monkeyArray = monkeyString.getAll('hidden'); //tar bort frågetecken och gör array med ett värde
  let savedMonkey = monkeyArray.toString().split(","); //gör först till sträng sedan array med separata värden
  return savedMonkey;
}

function printMonkey(parts) {
  let savedMonkey = getMonkey();
  
  for (part in parts) {
    for (savedPart in savedMonkey) //det är unika id:n så loopen bör kunna bli kortare
    {
      if (savedMonkey[savedPart] == parts[part].id) {
        parts[part].classList.add("hidden");
      }
    }
  }
}