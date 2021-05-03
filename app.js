let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
stop.classList.add("hidden")
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let timer;

let countDown = function countdown() {
    seconds.textContent--;
    if(seconds.textContent === "-1") {
        seconds.textContent = 59;
        minutes.textContent--;
    }
    if(minutes.textContent === "-1") {
        minutes.textContent = "25";
        seconds.textContent = "00";
        clearInterval(timer);
        start.classList.remove("hidden");
        stop.classList.remove("visible");
    }
}

function reset() {
    minutes.textContent = "25";
    seconds.textContent = "00";
}

start.addEventListener("click", function () {
    timer = setInterval(countDown, 1000);
    start.classList.add("hidden");
    stop.classList.add("visible");
});


stop.addEventListener("click", function() {
    clearInterval(timer);
    reset();
    start.classList.remove("hidden");
    stop.classList.remove("visible");
})