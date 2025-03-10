const highScores = JSON.parse(localStorage.getItem("highScore"))||[];
const list = document.querySelector("ol");
const content = highScores.map((score, index)=>{
	return`
	<li>
	<span>${index +1}</span>
	<span>${score.name}</span>
	<span>${score.score}</span>

	</li>
	`;
});
list.innerHTML= content.join("");