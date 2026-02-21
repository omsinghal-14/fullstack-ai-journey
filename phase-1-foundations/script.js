let count = 0;

const button = document.querySelector("#clickBtn");
const text = document.querySelector("#countText");

button.addEventListener("click", function() {
  count += 1;
const word = count === 1 ? "time" : "times";
text.textContent = `Clicked ${count} ${word}`;
});