var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	 console.log("Play Video");
	 video.play();
	 document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
 });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
 });

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
 });

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal");
	video.classList.remove("oldSchool");
 });

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
 });

document.querySelector("#faster").addEventListener("click", function() {
	console.log("GO FASTER");
	video.playbackRate *= 1.05;
	console.log(video.playbackRate);
 });

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	var slider = this.value;
	video.volume = slider / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
 });

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute"
		
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Muted");
	}
 });

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime <= 60){
		console.log("Old Time: " + video.currentTime);
		video.currentTime += 15;
		console.log("New Time: " + video.currentTime);
	}
	else{
		console.log("Old Time: " + video.currentTime);
		console.log("Restart");
		video.currentTime = 0;
		console.log("New Time: " + video.currentTime);
	}
 });