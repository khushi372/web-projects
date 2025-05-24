let slideIndex = 1;
let buttons = document.querySelectorAll(".btn");
let display = document.querySelector(".img");

buttons[1].onclick = function(){
    if(slideIndex == 6){
        slideIndex = 1;
    }else{
        slideIndex++;
    }
    display.setAttribute('src',`${slideIndex}.png`);
}

buttons[0].onclick = function(){
    if(slideIndex == 1){
        slideIndex = 6;
    }else{
        slideIndex--;
    }
    display.setAttribute('src',`${slideIndex}.png`);
}