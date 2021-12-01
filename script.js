const randomNums = document.getElementById("randomNums");
const button = document.getElementById("button");
const userValue = document.getElementById("value");
const result = document.getElementById("result");

let arrayofNums = [];
let random ="";
let counter = 0;

button.addEventListener("click", (e) => {
    randomNums.innerHTML = "";
    
    if(parseInt(userValue.value) > 0 && parseInt(userValue.value) <=10){
    }else{
        alert("you must put in int between 1-10");
        location.reload();
    }

    for(i = 0; i < 5; i++){
        random =  Math.floor(Math.random() * 10) + 1;
        arrayofNums.push(random);
        randomNums.innerHTML += " " +random
    }

    for(i = 0; i <arrayofNums.length; i++ ){
        if(arrayofNums[i] ==  parseInt(userValue.value)){
            counter++;
        }
    }

    result.innerHTML = userValue.value +" is in the array: " + counter 
    arrayofNums = [];
    counter = 0;

})

