let btn =document.getElementById('btn');
let bg = document.getElementById('bg');



function change(){
    let x= Math.floor(Math.random() * 256);
    let y= Math.floor(Math.random() * 256);
    let z= Math.floor(Math.random() * 256);
    return "rgb("+x +"," +y + ","+z +")"
}

btn.onclick = function re(){
    bg.style.backgroundColor = change()
}

 