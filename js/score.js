const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const list = document.querySelector("#scores-section ol");

const content = highScores.map((score, index) => `
  <li>
      <span>${index + 1}</span>
      <span>${score.name}</span>
      <span>${score.score}</span>
  </li>
`);

list.innerHTML = content.join("");
