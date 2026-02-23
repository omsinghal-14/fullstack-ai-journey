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
  fetch("http://localhost:3000/api/goals")
}

const goalList = document.querySelector("#goalList");

goalList.innerHTML = "";

goals.forEach(function(goal, index) {
  const li = document.createElement("li");
  li.textContent = goal;

  li.addEventListener("dblclick", function() {
    goals.splice(index, 1);
    localStorage.setItem("goals", JSON.stringify(goals));
    location.reload();
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
  location.reload();

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

const apiMessage = document.querySelector("#apiMessage");

fetch("/api/hello")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    apiMessage.textContent = data.message;
  })
  .catch(function () {
    apiMessage.textContent = "Could not load message.";
  });