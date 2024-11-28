// HTML Element Vars
var input1El = document.getElementById("input1");
var input2El = document.getElementById("input2");
var input3El = document.getElementById("input3");
var avgbtnEl = document.getElementById("area-btn");
var avgoutEl = document.getElementById("area-out");

// Event Listener
avgbtnEl.addEventListener("click", calcArea);

// Event Function
function calcArea() {
  //input: Save 3 numbers into variables
  let num1 = Number(input1El.value);
  let num2 = Number(input2El.value);
  let num3 = Number(input3El.value);
  //Process: Calculate average, round the result to 1 decimal place
  let area = ((num1 + num2) / 2) * num3; //bracket order of operations
  area = area.toFixed(2);
  //output: display results
  avgoutEl.innerHTML = area;

  //clear inputs
  input1El.value = "";
  input2El.value = "";
  input3El.value = "";

  //Change Span output background
  avgoutEl.style.border = "2px solid green";
  avgoutEl.style.background = "lightblue";

  document.getElementById("img-container").innerHTML =
    "<img src='img/checkMark.png'>";
}
