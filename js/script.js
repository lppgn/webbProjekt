//array
var gameBoardArray = new Array(10);
for (let index = 0; index < gameBoardArray.length; index++) {
    gameBoardArray[index] = new Array(10);
    
}
let allGridPositions = document.querySelectorAll(".gameBlock");
console.table(gameBoardArray);
for (let X = 0; X < gameBoardArray.length; X++) {
    for (let Y = 0; Y < gameBoardArray.length; Y++) {
        gameBoardArray[X][Y] = allGridPositions[(Y+1)*X]
        
    }    
}
console.table(gameBoardArray);
//location

//head movement

//tail movement

//äpplen