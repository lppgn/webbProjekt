let pokeArray = [document.getElementById("0"), document.getElementById("1"), document.getElementById("2"), document.getElementById("3")];
let currentDisplay = 0;
for (let index = 0; index < pokeArray.length; index++) {
    if(index != currentDisplay){
        pokeArray[index].style.display = "none";
    }
}

let buttonArray = [document.getElementById("previous"), document.getElementById("next")];
if(currentDisplay==0){
buttonArray[currentDisplay].disabled = true;
}
else{
    buttonArray[0].disabled = false;
}
if(currentDisplay == pokeArray.length){
    buttonArray[1].disabled = true;
}
else{
    buttonArray[1].disabled = false;
}
const pageChange = document.querySelectorAll(".changePage");
for (let index = 0; index < pageChange.length; index++) {
    pageChange[index].addEventListener("click", changePage);
}
const backgroundChange = document.querySelectorAll(".filler");
function changePage (){
    if(this.value == -1){
        currentDisplay -= 1;
    }
    else if(this.value == 1){
        currentDisplay += 1;
    }
    console.log(currentDisplay);
    for (let index = 0; index < pokeArray.length; index++) {
        if(index != currentDisplay){
            pokeArray[index].style.display = "none";
        }
    }
    pokeArray[currentDisplay].style.display = "grid";
    if(currentDisplay==0){
        buttonArray[currentDisplay].disabled = true;
    }
    else{
            buttonArray[0].disabled = false;
    }
    if(currentDisplay == 3){
        buttonArray[1].disabled = true;
        for (let index = 0; index < backgroundChange.length; index++) {
            backgroundChange[index].style.backgroundImage = "url('../img/Fire.png')";
        }   
    }
    else{
            buttonArray[1].disabled = false;
            for (let index = 0; index < backgroundChange.length; index++) {
                backgroundChange[index].style.backgroundImage = "url('../img/Grass.png')";
            }
    }
}