let pokeArray = [document.getElementById("0"), document.getElementById("1"), document.getElementById("2"), document.getElementById("3")];
console.table(pokeArray);
let currentDisplay = 0;
for (let index = 0; index < pokeArray.length; index++) {
    if(index != currentDisplay){
        pokeArray[index].style.display = "none";
    }
}