console.log("Connected");

const intro = document.getElementById("intro");
// console.log(intro);
intro.innerText = "Introduction to DOM😎";

const me = document.getElementsByTagName("h2")[0];
me.style.color = "pink";

const pros = document.getElementsByClassName("pros")[0];
pros.innerHTML = `<h6>She can do ANYTHING</h6>`; //innerHTML changes the html therefore h1 is applied

//adding/deleting elements
const list = document.createElement("li");
list.innerText = "Adding and deleting Elements";

const ol = document.getElementsByTagName("ol")[0];
ol.appendChild(list);
ol.removeChild(list);

//Events
function func1(){
    console.log('Clicked');
}

const btn = document.getElementById("btn");
btn.addEventListener('mouseover', func1);

//localstorage
localStorage.setItem("name", "Nikita");
localStorage.setItem("About", JSON.stringify({
    loves: "Reading",
    hates: "Social Events",
    Tolerates: "Loud people"
}));

//to print keep blank p in HTML
const aboutt = localStorage.getItem("About");
console.log(JSON.parse(aboutt).loves);

document.getElementById("name").innerText = localStorage.getItem("name");
document.getElementById("about").innerText = JSON.parse(aboutt).loves;