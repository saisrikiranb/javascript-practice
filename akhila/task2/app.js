function major() {
    let x = display();

    document.getElementById("i").innerHTML = x;
}

setTimeout(display, 5000);

function display() {
    let y = Math.random();
    return y;
}