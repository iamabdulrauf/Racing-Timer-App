

let raceEl = document.querySelector(".display");

let randomNumberOne = Math.floor(Math.random() * 100) + 1;
let randomNumberTwo = Math.floor(Math.random() * 100) + 1;
let timesEl = document.querySelector('.times');
let winnerEl = document.getElementById('runners');

function displayTime(){
    
    if(randomNumberOne < randomNumberTwo){
        raceEl.textContent = "Fastest Race is " + randomNumberOne + "sec";
        winnerEl.textContent = "Runner One Wins"
    }else if(randomNumberOne > randomNumberTwo){
        raceEl.textContent = "Fastest Race is " + randomNumberTwo + "sec";
        winnerEl.textContent = "Runner Two Wins"
    }else{
        raceEl.textContent = "Fastest Race is " + randomNumberOne + "sec";
        winnerEl.textContent = "The Race was drawn"
    }
    raceEl = document.querySelector(".display").style.display = "block";
    timesEl.textContent = "The race times are " + randomNumberOne + "sec" + " and " + randomNumberTwo + "sec";
    timesEl = document.querySelector('.times').style.display = "block";
    winnerEl = document.getElementById('runners').style.display = "block"; 
}


function reset(){
    raceEl = document.querySelector(".display").style.display = "none";
    timesEl = document.querySelector('.times').style.display = "none";
    winnerEl = document.getElementById('runners').style.display = "none";
}