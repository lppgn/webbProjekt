//array
var gameBoardArray = new Array(10);
for (let index = 0; index < gameBoardArray.length; index++) {
    gameBoardArray[index] = new Array(10);
}

let allGridPositions = document.querySelectorAll(".gameBlock");
console.table(gameBoardArray);
for (let X = 0; X < gameBoardArray.length; X++) {
    for (let Y = 0; Y < gameBoardArray.length; Y++) {
        gameBoardArray[X][Y] = allGridPositions[(Y*10)+X]
    }    
}
console.table(gameBoardArray);

//location
let currentX = 4;
let currentY = 4;

//movement
let xMovement = 0;
let yMovement = 0;
moveFunction();
let headlocation = gameBoardArray[currentX][currentY];
headlocation.style.background = "green";
function clickFunction() { 
    if(event.keyCode == 37 && xMovement != 1) {
        xMovement = -1;
        yMovement = 0;
    }
    else if(event.keyCode == 39 && xMovement != -1) {
        xMovement = 1;
        yMovement = 0;
    }
    else if(event.keyCode == 38 && yMovement != 1) {
        yMovement = -1;
        xMovement = 0;
    }
    else if(event.keyCode == 40 && yMovement != -1) {
        yMovement = 1;
        xMovement = 0;
    }
}
function moveFunction(progress) {
    // Update the state of the world for the elapsed time since last render
    progress = 1.67;
        //head movement
        let headlocation = gameBoardArray[currentX][currentY];
        headlocation.style.background = "green";
        document.addEventListener('keydown', clickFunction);
        currentX = currentX + (xMovement);
        currentY = currentY + (yMovement);
  }
  
  function draw() {
    // Draw the state of the world
  }
  
  function loop(timestamp) {
    var progress = timestamp - lastRender;
  
    moveFunction(progress);
    draw();
  
    lastRender = timestamp;
    window.requestAnimationFrame(loop);
  }
  var lastRender = 0;
  window.requestAnimationFrame(loop);


//tail movement

//äpplen