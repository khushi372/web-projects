const mrp = 100; // MRP of the item
let quantity = 0;

function increaseQuantity() {
    quantity++;
    updateUI();
}

function decreaseQuantity() {
    if (quantity > 0) {
        quantity--;
        updateUI();
    }
    if(quantity == 0){
        document.getElementById('quantity').classList.remove("green");
        document.querySelector('span').classList.remove("red");
    }

}

function updateUI() {
    document.getElementById('quantity').classList.add("green");
    document.querySelector('span').classList.add("red");
    document.getElementById('quantity').innerHTML = quantity;
    document.querySelector('span').textContent = `${quantity * mrp}`;
}

