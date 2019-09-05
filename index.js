let dom = document.getElementById('dom');
let container = document.getElementById('container');
let pinContainer = document.getElementById('pin-container');



let timerInterval = null;
let totalScore = 0;
let scoreWeight = 10;
let hits = 0;
let timeValue = {min:3,sec:0};
let totalTime = 90;
let isGameOn = false;

let {
    bgWidth,
    bgHeight
} = {
    bgWidth: 4250,
    bgHeight: 1670
};
let {
    bgX,
    bgY
} = {
    bgX: 0,
    bgY: 0
};
let {
    startX,
    startY
} = [0, 0];
let {
    endX,
    endY
} = [0, 0];

container.ondragstart = function (event) {
    // console.log("Drag Start", event);
    startX = event.x;
    startY = event.y;
}
container.ondragend = function (event) {
    // console.log("Drag End", event);
    endX = event.x;
    endY = event.y;
    makeDrag(getDragPoints());
}
container.draggable = true;

let makeDrag = (opt) => {
    let {x, y} = opt;
    let {
        w,
        h
    } = getWinWH();
    bgX = bgX + x;
    bgY = bgY + y;

    bgY = bgHeight<(h-bgY)?(h-bgHeight):bgY;
    bgY = bgY>0?0:bgY;

    bgX = bgWidth<(w-bgX)?(w-bgWidth):bgX;
    bgX = bgX>0?0:bgX;

    setDomBgPos(bgX, bgY);
}

let getDragPoints = () => {
    return {
        x: (endX-startX),
        y: (endY-startY)
    };
}

let getWinWH = () => {
    return {
        w: window.innerWidth,
        h: window.innerHeight
    };
}



let setDomBgPos = (x, y) => {
    let {
        w,
        h
    } = getWinWH();
    bgX = x%bgWidth>bgWidth?bgWidth:x;
    bgY = y%bgHeight>bgHeight?bgHeight:y;
    dom.style.left = x + "px";
    dom.style.top = y + "px";
}
// Set Target

let getPin = (opt) =>{
    // `<div onclick='hitTarget(this)' class="pin" style="top:${opt.x};left:${opt.y};background-color:#${new Date().getTime().toString(16).substr(2,7)}"></div>`;
    let div = document.createElement('div');
    div.onclick = (event)=>{hitTarget(event.target)};
    div.onmouseover = (event) => { playAudio({track:'load'});}
    div.classList = 'pin';
    div.style.top = opt.y + 'px';
    div.style.left = opt.x + 'px';
    // div.style.backgroundColor = `#${Math.floor((Math.random()*10000000)).toString(16)}`;
    div.style.backgroundImage = `url(images/${Math.floor((Math.random()*6))}.png)`;
    return div;
}

let getRandomPosition = () =>{
    let posX = Math.floor(Math.random() * bgWidth);
    let posY = Math.floor(Math.random() * bgHeight);
    return {
        x:posX,
        y:posY
    }
}
let setPin = () => {
    pinContainer.appendChild(getPin(getRandomPosition()));
    playAudio({track:'pin'});
}

let removePin = (pin) => {
    pin.parentNode.removeChild(pin);
}

let playAudio =(e) => {
    //let el = e.currentTarget
    let audio = new Audio();
    let src = "sound/" + e.track + ".mp3";
    audio.src = src;
    audio.play();
    return audio;
  }

//Load target 

let loadTargets = (tm) => {
    if(tm%5 === 0){
        setPin();
    }
}

let hitTarget = (target) => {
    if(isGameOn){
        removePin(target);
        playAudio({track:'hit'});
        totalTime += 3;
        hits++;
        totalScore += scoreWeight;
        updateScore();
    }
}

let updateScore = () => {
    let scoreEle = document.getElementsByClassName('score');
    let hitsEle = document.getElementsByClassName('hits');
    scoreEle[0].innerText = totalScore;
    hitsEle[0].innerText = hits;
}




// Game Data Updation

let updateTimer = (t) =>{
    let timeEle = document.getElementsByClassName('timer');
    let {min,sec} = t;
    timeEle[0].innerText = `${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`;
    if(totalTime<30){
        timeEle[0].style.color = '#f00';
    } else{
        timeEle[0].style = ''; 
    }
}

let startGameTimer = () =>{
    timerInterval = setInterval(()=>{
        if(totalTime){
            loadTargets(totalTime);
            totalTime--;
            timeValue.min = Math.floor(totalTime/60);
            timeValue.sec = Math.floor(totalTime%60);
            updateTimer(timeValue);
            
        } else{
            clearInterval(timerInterval);
            toggelHideContainer();
            resetAllScore();
        }
        // console.log('from timer', totalTime);
        

    },1000);
}

// Controls

let startGame = () =>{
    isGameOn = true;
    toggelHideContainer();
    startGameTimer();
}

let toggelHideContainer = () =>{
    let hideContainer = document.querySelector('.score-container .hide');
    //let _$$ = document.querySelector;
    let a = '.pre-play-container';
    let b = '.post-play-container';
    if(hideContainer.className.indexOf('post-play-container')>-1){
        document.querySelector(a).className =  document.querySelector(a).className + ' hide';
        document.querySelector(b).className =  'post-play-container';
    } else{
        document.querySelector(b).className =  document.querySelector(b).className + ' hide';
        document.querySelector(a).className =  'pre-play-container';
    }
}


// Let's Reset the all things

let resetAllScore = () => {
     timerInterval = null;
     totalScore = 0;
     scoreWeight = 10;
     hits = 0;
     timeValue = {min:3,sec:0};
     totalTime = 180;
     isGameOn = false;
}
let resetDom = () => {
    let {
        w,
        h
    } = getWinWH();
    bgX = -((bgWidth / 2) - (w / 2) + 1);
    bgY = -((bgHeight / 2) - (h / 2) + 1);
    dom.style.width = bgWidth + "px";;
    dom.style.height = bgHeight + "px";;

    dom.style.left = (bgX) + "px";
    dom.style.top = (bgY) + "px";
}

resetDom();