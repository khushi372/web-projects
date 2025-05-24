let input = document.querySelector('form input[type="text"]');
let form = document.querySelector('form');

  form.addEventListener('submit',function(e){
    e.preventDefault();

    let container = document.createElement('div');
    container.setAttribute("style","display:flex; justify-content: space-evenly; padding-top: 10px;");
    form.append(container);

    let task = document.createElement("li");
    task.innerHTML = input.value.trim();
    task.setAttribute("style","list-style-type:none; align-self:flex-start; width:50px;")
    container.append(task);
    
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("style","accent-color:green;");
    task.insertAdjacentElement('beforebegin',checkbox);
    
    let button = document.createElement("button");
    button.innerHTML = "x";
    button.setAttribute("style","border:none;")
    task.insertAdjacentElement('afterend',button);

    checkbox.addEventListener('click',function(){
      task.classList.toggle("line");
    });

    button.addEventListener('click',function(){
      container.remove(button);
    });

    form.reset();
  });