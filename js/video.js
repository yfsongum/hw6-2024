var video;

/* 
	Page load:
	Initialize the video element and turn off autoplay and turn off looping.
*/
window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
    console.log("Autoplay is set to", video.autoplay);
    console.log("Looping is set to", video.loop);
/* 
	Play Button:
	Play the video and update the volume information.
*/
	document.querySelector("#play").addEventListener("click", function() {
	    video.play();
	    console.log("Play Video");
	    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	});
});



/* 
	Pause Button: Pause the video.
*/
document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Pause Video");
});


/*
	Slow Down:
	Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
*/
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed becomes", video.playbackRate, "; 10% slower than the original video.");
});


/*
	Speed Up:
	Increase the current video speed each time the button is clicked and log the new speed to the console.
	Change it by an amount proportional to the slow down. 
*/
const speedReversed = 1 / 0.9;
document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate *= speedReversed;
    console.log("New speed becomes", video.playbackRate, "; 10% faster than the original video.");
});


/*
	Skip Ahead:
	Advance the current video by 10 seconds.
	If the video length has been exceeded go back to the start of the video - no farther.
	Log the current location of the video.
*/
document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 >= video.duration) {
        video.currentTime = 0;
    } else {
		video.currentTime += 10;
	}
	console.log("You are at", video.currentTime, "s.");
});


/*
	Mute:
	Mute/unmute the video and update the text in the button.
*/
document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
		console.log("You unmuted the video.");
    } else {
        video.muted = true;
        this.textContent = "Unmute";
		console.log("You muted the video.");
    }
});


/*
	Volume Slider:
	Change the volume based on the slider and update the volume information.
*/
document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("You set the volume to", video.volume * 100 + "%");
});



/*
	Styled:
	Utilize the existing oldSchool class on the video element.
*/
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
    console.log("Changed to oldSchool style");
});


/*
	Original:
	Remove the oldSchool class from the video.
*/
document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("Changed to original style");
});








