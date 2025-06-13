let btn = document.getElementById('btn')
let img = document.getElementById('imgon')

btn.addEventListener("click",change)
function change(){
if(btn.textContent.includes("on")){
  
img.src = "https://cdn.pixabay.com/photo/2017/05/05/17/21/bulb-2287759_1280.jpg"
      btn.textContent = "Turn off";
}else{
      
      img.src = "https://media.istockphoto.com/id/853695816/photo/light-bulb.jpg?s=612x612&w=0&k=20&c=GH5px2LN6PvNRbN3bYowW1YxZBEM9LcMCKX4OnuHWwM=" 
       btn.textContent = "Turn on";
  }
}