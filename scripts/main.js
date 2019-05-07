var myImage=document.querySelector("img");
var image=1;

myImage.onclick = function() {
	image = image === 1 ? 2 : 1
	if(image === 1) {
		myImage.setAttribute("src","images/city.jpg");
	} else {
		myImage.setAttribute ("src","images/city2.jpg");
	}
}
var city = "New York";
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName(name) {
	var myName = name;
	if (!name) {
		myName = prompt("Please enter your name.");
		localStorage.setItem("name",myName);
	}
	myHeading.textContent = city + " is cool, " + myName;
}
setUserName(localStorage.getItem("name"));
myButton.onclick = function() { setUserName(); }

		
		
