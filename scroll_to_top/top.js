let button = document.querySelector("button");

window.addEventListener('scroll',function(){
    console.log(window.scrollY);
    if(this.window.scrollY > 200){
        button.classList.remove("btn");
    }else{
        button.classList.add("btn");
    }
});
button.addEventListener('click',function(){
    document.documentElement.scrollTo({
        top:0,
        behavior:"smooth",
    });
})