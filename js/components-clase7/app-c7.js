import Button from "./buttons-c7";
import Video from "./video-c7";

const myApp = document.getElementById("myApp");

let myButton = new Button("Signing", "btn btn-ouline-primary");

myApp.innerHTML = myButton.render();

let myVideo = new Video("https://www.w3schools.com/tags/movie.mp4");

myApp.innerHTML += myVideo.render();