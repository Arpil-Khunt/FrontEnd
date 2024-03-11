let btn = document.querySelector('button');

 
btn.onclick = function(){
    let randomColor = getRandomColor();
    let h4 = document.querySelector('h4');
    h4.innerText = randomColor;
    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
}

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}