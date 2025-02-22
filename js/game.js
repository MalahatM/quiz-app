const URL="https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
const fetchData=async()=>{
	const response=await fetch(URL);
	const json= await response.json();
	console.log(json);
	StaticRange()
};
const start=()=>{
	
}
window.addEventListener("load",fetchData);
