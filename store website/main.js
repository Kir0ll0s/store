

// caro's birthday 
let countDownDate = new Date("Nov 23,2023 12:00:00").getTime();

// console.log(countDownDate)
let counter = setInterval(()=>{
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    // get time units  
    // days 
    let days =Math.floor(dateDiff / (1000*60*60*24))
    // hours 
    let hours = Math.floor((dateDiff % (1000*60*60*24) / (1000*60*60)))
    // minutes
    let minutes = Math.floor((dateDiff % (1000*60*60) / (1000*60)))
    // seconds
    let seconds = Math.floor((dateDiff % (1000*60) / (1000)))

    document.querySelector(".days span").innerHTML= days< 10 ?`0${days}`:days;
    document.querySelector(".Hours span").innerHTML= hours< 10 ?`0${hours}`:hours;
    document.querySelector(".Minutes span").innerHTML= minutes< 10 ?`0${minutes}`:minutes;
    document.querySelector(".Seconds span").innerHTML= seconds < 10 ?`0${seconds}`:seconds;
    if(dateDiff<=0){
        clearInterval(counter)
    }
}, 1000);

