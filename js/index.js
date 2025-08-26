console.log("index.js loaded successfully!");

// function to show only one section
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

const buttons = document.querySelectorAll("#difficulty-section button");

// handler for difficulty level
const selectHandler = (event) => {
  const level = event.target.innerText.toLowerCase();
  localStorage.setItem("level", level);

  showSection("game-section");
};

buttons.forEach((button) => {
  button.addEventListener("click", selectHandler);
});

// showing index section on load
window.addEventListener("load", () => {
  showSection("index-section");
});
