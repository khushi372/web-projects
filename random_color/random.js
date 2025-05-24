
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`; 
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.getElementById("changecolor").style.backgroundColor = randomColor;
    document.getElementById('colorCode').innerHTML = `${randomColor}`; 
}

document.getElementById('colorBtn').addEventListener('click', changeBackgroundColor);



