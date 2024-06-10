function zoomin() {
    var currentWidth=document.getElementById("im").clientWidth;
    
    if(currentWidth===500){
        document.getElementById("visible").textContent="Maximum zoom-in level reached";
        document.getElementById("wid").textContent=500+"px";
        document.getElementById("visible").style.visibility="visible";
    }
    else{
        document.getElementById("im").style.width = (currentWidth + 10) + "px";
        document.getElementById("wid").textContent=(currentWidth + 10) + "px";
        document.getElementById("visible").style.visibility="hidden";
    }
}
function zoomout(){
    var currentWidth=document.getElementById("im").clientWidth;
    if(currentWidth===100){
        document.getElementById("visible").textContent="Minimum zoom-out level reached.";
        document.getElementById("wid").textContent=100+"px";
        document.getElementById("visible").style.visibility="visible";
    }
    else{
        document.getElementById("im").style.width = (currentWidth - 10) + "px";
        document.getElementById("wid").textContent=(currentWidth - 10) + "px";
        document.getElementById("visible").style.visibility="hidden";
    }
}
