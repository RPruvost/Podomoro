
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let timer;

let countDown = function countDown() {
    seconds.textContent--;
    if(seconds.textContent === "-1") {
        seconds.textContent = 59;
        minutes.textContent--;
        document.getElementById("start").disabled = true;
    }
    else if(minutes.textContent === "-1") {
        minutes.textContent = "25";
        seconds.textContent = "00";
        clearInterval(timer);
        document.getElementById("start").disabled = true;
    }
}

function resetTimer() {
    minutes.textContent = "25";
    seconds.textContent = "00";
    document.getElementById("start").disabled = false;
}

start.addEventListener("click", function () {
    timer = setInterval(countDown, 1000);
});


stop.addEventListener("click", function() {
    clearInterval(timer);
    resetTimer();
})