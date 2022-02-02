const canvas = document.getElementById("jscanvas");
let painting = false;
const ctx = canvas.getContext("2d");
const color=document.getElementsByClassName("contorl_color");
const range=document.getElementById("jsRange");
const mode=document.getElementById("jsMode");
const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE =500;

ctx.lineWidth=2.5; // 선 굵기
ctx.strokeStyle=INITIAL_COLOR;
ctx.fillStyle= INITIAL_COLOR;


canvas.width=CANVAS_SIZE;
canvas.height=CANVAS_SIZE;

let filling=false;

function startPainting(event){
    painting=true;
}
function stopPainting(event){
    painting=false;
}
function changeColor(event){
    const color=event.target.style.backgroundColor;
    ctx.strokeStyle=color;
    ctx.fillStyle=color;
}
function onMousemove(event){
    const x=event.offsetX;
    const y=event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
        console.log(x,y);
    } else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
function onMousedown(event){
    painting = true;
}
function handlerange(event){
    const size = event.target.value;
    ctx.lineWidth=size;
}
function fillingclick(){
    if(filling===true){
        filling=false;
        mode.innerText="Fill"
    } else{
        filling=true;
        mode.innerText="paint"
        ctx.fillStyle=ctx.strokeStyle;
    }
}
function handlecanvasclick(){
    ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE)
}

if(canvas){
canvas.addEventListener("mousemove",onMousemove);
canvas.addEventListener("mousedown",onMousedown);
canvas.addEventListener("mouseup",stopPainting);
canvas.addEventListener("mouseleave",stopPainting);
canvas.addEventListener("clcik",handlecanvasclick);
}

Array.from(color).forEach(color=>color.addEventListener("click",changeColor));


if(range){
    range.addEventListener("input",handlerange);
}

if(mode){
    mode.addEventListener("click",fillingclick);
}



