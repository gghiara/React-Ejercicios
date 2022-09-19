import Button from "./components-clase7/buttons-c7.js";
import Video from "./components-clase7/video-c7.js";

const myApp = document.getElementById("myApp");

let myButton = new Button ("Signing", "btn btn-outline-primary");

myApp.innerHTML = myButton.render();

let myVideo = new Video("https://www.w3schools.com/tags/movie.mpg");

myApp.innerHTML += myVideo.render();