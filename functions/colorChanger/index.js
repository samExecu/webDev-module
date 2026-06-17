const colorBox = document.getElementById("color-box");
const colorPicker = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetBtn");

colorPicker.addEventListener("input", (event) => {
  colorBox.style.backgroundColor = event.target.value;
});

resetBtn.addEventListener("click", () => {
  colorBox.style.backgroundColor = "black";
  colorPicker.value = "black";
});
