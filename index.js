window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#89ec89",
        "#f17474",
        "#ea82ff",
        "#e9e76e",
        "#8c27eb",
        "#5997d1"
    ]
    //lets start recording
    record.onclick = e => {
        console.log('I was clicked')
        record.disabled = true;
        record.style.backgroundColor ="#8c27eb";
        stopRecord.disabled=false;
        audioChunks = [];
        rec.start
    }
    //lets stop recording
    stopRecord.onclick = e => {
        console.log("I was clicked")
        record.disabled = false;
        stop.disabled=true;
        record.style.backgroundclolor = "#89ec89";
    }
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