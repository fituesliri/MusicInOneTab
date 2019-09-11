window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    // const button = document.querySelector(".button");
    const colors = [
        "#89ec89",
        "#f17474",
        "#ea82ff",
        "#e9e76e",
        "#8c27eb",
        "#0a4175"
    ]
    // //lets start recording
    // button.onclick = e => {
    //     console.log('I was clicked')
    //     function mutePage() {
    //     var elems = document.querySelectorAll("video, audio");
    //    [].forEach.call(elems, function(elem) { muteMe(elem); });
    //     button.backgroundColor ="#8c27eb";
    //     button.disabled=false;
    // }

    //lets get going with the sound

    pads.forEach((pad, index) =>{
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createbubbles(index);
        });
    });

    //create a function that makes bubbles
    const createbubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1.1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
});