// how many types colors array here now
const haxCode = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','F'];

// get button id

const btn = document.getElementById("btn");

const color = document.querySelector(".color");


// button event handling here

    btn.addEventListener("click", function(){
        let haxColor = "#";

        for( let i = 0; i< 6; i++){
            haxColor += haxCode[getRandomColor()];
        }

        color.textContent = haxColor;
        color.style.color = haxColor;
        document.body.style.backgroundColor  = haxColor;

    });


    function getRandomColor(){
        return Math.floor(Math.random() * haxCode.length);
    }