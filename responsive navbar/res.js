let burger = document.querySelector('.menu');
let menu2 = document.querySelector('.menu2');
let exit = document.querySelector('.exit');

burger.addEventListener('click',function(){
  menu2.classList.add('show');
});
exit.addEventListener('click',function(){
  menu2.classList.remove('show');
});
