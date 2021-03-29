let fur;
let leftEye;
let rightEye;
let face;
const monkeySvg = document.getElementById('monkeySvg');
const link = document.querySelector("a");

monkeySvg.addEventListener("load", getMonkeyParts);

function getMonkeyParts() {
  var monkeyCode = document.getElementById('monkeySvg').contentDocument;
  const monkeyParts = monkeyCode.querySelectorAll("path");
  fur = monkeyCode.getElementById("fur");
  face = monkeyCode.getElementById("face");
  leftEye = monkeyCode.querySelector("#leftEye");
  rightEye = monkeyCode.getElementById("rightEye");
  printMonkey(monkeyParts) //funkar för bara en kroppsdel
  return monkeyCode;
}

let buttons = document.querySelectorAll("button");

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

buttons.forEach((button) => button.addEventListener("click", (e) => hide(e.target.id)));
link.addEventListener("click", saveMonkey);

function saveMonkey() {
  let monkeyCode = document.getElementById('monkeySvg').contentDocument;
  const monkeyParts = monkeyCode.querySelectorAll("path");
  let hiddenParts = [];

  for (part in monkeyParts) {
    if (monkeyParts[part].classList != undefined && monkeyParts[part].classList.contains("hidden")) {
      hiddenParts.push(monkeyParts[part].id)
    }
  }
  hiddenParts = hiddenParts.join()
  let monkeyLink = document.createTextNode("your personal link: " + window.location.origin + "?hidden=" + hiddenParts);
  const section = document.querySelector("section");
  section.textContent="";
  section.appendChild(monkeyLink);
}

function getMonkey() {
  let monkeyString = new URLSearchParams(window.location.search);
  monkeyArray = monkeyString.getAll('hidden');
  let savedMonkey = monkeyArray.toString().split(",");
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