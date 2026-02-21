let count = 0;

const button = document.querySelector("#clickBtn");
const text = document.querySelector("#countText");

button.addEventListener("click", function() {
  count = count + 1;
  text.textContent = "Clicked " + count + " times";
});