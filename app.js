// how many types colors array here now
const colors = ['green','red','skyblue','#2e1065','#f97316','#22c55e','#f43f5e'];

// get button event here
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


// here event handling

btn.addEventListener("click",function (){

    // get random numbers 0-3 here
    const randomNumbers = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumbers];
    color.textContent = colors[randomNumbers];

    console.log(colors[randomNumbers]);
});


// get random number create here 
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}