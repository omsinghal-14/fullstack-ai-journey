let count = 0;

const button = document.querySelector("#clickBtn");
const text = document.querySelector("#countText");

button.addEventListener("click", function() {
  count += 1;
const word = count === 1 ? "time" : "times";
text.textContent = `Clicked ${count} ${word}`;
});

let goals = [
  "Become full stack developer",
  "Build AI projects",
  "Get hired"
];

const goalList = document.querySelector("#goalList");

goals.forEach(function(goal) {
  const li = document.createElement("li");
  li.textContent = goal;

  li.addEventListener("click", function() {
    li.classList.toggle("active-heading");
  });
  
  goalList.appendChild(li);
});