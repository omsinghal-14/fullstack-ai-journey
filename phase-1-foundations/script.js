let count = 0;

const button = document.querySelector("#clickBtn");
const text = document.querySelector("#countText");

button.addEventListener("click", function () {
  count += 1;
  const word = count === 1 ? "time" : "times";
  text.textContent = `Clicked ${count} ${word}`;
});

let goals = JSON.parse(localStorage.getItem("goals"));

if (!goals) {
  goals = ["Become full stack developer", "Build AI projects", "Get hired"];
}

const goalList = document.querySelector("#goalList");

goals.forEach(function (goal) {
  const li = document.createElement("li");
  li.textContent = goal;

  li.addEventListener("click", function () {
    li.classList.toggle("active-heading");
  });

  goalList.appendChild(li);
});

const input = document.querySelector("#goalInput");
const addBtn = document.querySelector("#addGoalBtn");

addBtn.addEventListener("click", function () {
  const newGoal = input.value;

  if (newGoal.trim() === "") {
    alert("Please enter a goal.");
    return;
  }

  goals.push(newGoal);
  localStorage.setItem("goals", JSON.stringify(goals));

  const li = document.createElement("li");
  li.textContent = newGoal;

  li.addEventListener("click", function () {
    li.classList.toggle("active-heading");
  });

  goalList.appendChild(li);

  input.value = "";
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
