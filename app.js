var counter = 0;

const counterValue = document.getElementById("count");

function myCountUp() {
    counter++;
    counterValue.innerHTML = counter;
}

function myCountDown() {
    counter--;
    if(counter < 0){
        counter = 0;
    }
    counterValue.innerHTML = counter;
}

function myReset() {
    counter = 0;
    counterValue.innerHTML = counter;
}