const changeShape = document.getElementById('changeShape');
const changeColor = document.getElementById('changeColor');
const box = document.getElementById('box');
const shape = document.getElementById('circle');

const arr= ["circle","triangle","ched","parallal","diamond","sqare","arrow","rightPoint","leftPoint","frame","cross","star"]
function randomColorGen(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`
}

changeColor.addEventListener('click',()=>{
    console.log(randomColorGen());
    
    box.style.backgroundColor =randomColorGen();
})

changeShape.addEventListener('click',()=>{
    let idx = Math.floor(Math.random()* arr.length);
    let id = arr[idx];
    console.log(shape)
    shape.id = id;
})