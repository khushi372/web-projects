let img = document.querySelector(".fa-sun");
let body = document.querySelector("body");

img.addEventListener('click',function(){
    if(img.classList.contains("fa-sun")){
        img.classList.remove("fa-sun");
        img.classList.add("fa-moon");
        body.classList.add("bgcolor");
    }else{
        img.classList.remove("fa-moon");
        img.classList.add("fa-sun");
        body.classList.remove("bgcolor");
    }
});