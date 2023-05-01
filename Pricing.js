const slider = document.getElementById('slider');
const box = document.getElementById('slide-box');
const pricebasic = document.getElementById('price-basic');
const pricepro = document.getElementById('price-pro');
const pricebus = document.getElementById('price-business');
const semonth = document.getElementById('month');
const seyear = document.getElementById('year');
slider.style.backgroundColor = 'black';

function slide(){
    
    if(slider.style.backgroundColor == 'black'){
        
        slider.style.backgroundColor = '#ffffff';
        slider.style.transform = 'translateX(3.2rem)';
        slider.style.transition= '0.5s';
        box.style.backgroundColor = '#000000';
        box.style.transition = '1s';
        pricebasic.innerHTML = (pricebasic.innerHTML * 10).toFixed(2);
        pricepro.innerHTML = (pricepro.innerHTML * 10).toFixed(2);
        pricebus.innerHTML = (pricebus.innerHTML * 10).toFixed(2);
        semonth.style.mixBlendMode = 'normal';
        semonth.style.opacity = '0.5';
        seyear.style.opacity = 1;
        
        
    } else {
        
        slider.style.backgroundColor = 'black';
        slider.style.transform = 'translateX(0)';
        slider.style.transition= '0.5s';
        box.style.backgroundColor = '#DFDFDF';
        box.style.transition = '1s';
        pricebasic.innerHTML = (pricebasic.innerHTML / 10).toFixed(2);
        pricepro.innerHTML = (pricepro.innerHTML / 10).toFixed(2);
        pricebus.innerHTML = (pricebus.innerHTML / 10).toFixed(2);
        seyear.style.mixBlendMode = 'normal';
        seyear.style.opacity = '0.5';
        semonth.style.opacity = 1;
        
    }
}

slider.addEventListener('click', slide);

const basic = document.getElementsByClassName("price-card");
const vis = document.getElementsByClassName("visual");
const per1 = document.getElementById("per1");
const per2 = document.getElementById("per2");
const per3 = document.getElementById("per3");

 
function changecolor(a){
    var x = window.matchMedia("(min-width: 1440px)")
    if(a == 0){
        basic[a].style.backgroundColor = "black"; 
        basic[1].style.backgroundColor = "rgba(245, 245, 245, 1)";
        basic[2].style.backgroundColor = "rgba(245, 245, 245, 1)";    
        vis[a].style.visibility = "visible"
        vis[1].style.visibility = "hidden";
        vis[2].style.visibility = "hidden";
        basic[a].querySelectorAll("h5")[0].style.color = "white";
        basic[a].querySelectorAll("p")[0].style.color = "white";
        basic[a].querySelectorAll("h4")[0].style.color = "white";
        basic[a].querySelectorAll("button")[0].style.backgroundColor = "white";
        basic[a].querySelectorAll("button")[0].style.color = "black";
        basic[1].querySelectorAll("h5")[0].style.color = "black";
        basic[1].querySelectorAll("p")[0].style.color = "black";
        basic[1].querySelectorAll("h4")[0].style.color = "black";
        basic[1].querySelectorAll("button")[0].style.backgroundColor = "black";
        basic[1].querySelectorAll("button")[0].style.color = "white";
        basic[2].querySelectorAll("h5")[0].style.color = "black";
        basic[2].querySelectorAll("p")[0].style.color = "black";
        basic[2].querySelectorAll("h4")[0].style.color = "black";
        basic[2].querySelectorAll("button")[0].style.backgroundColor = "black";
        basic[2].querySelectorAll("button")[0].style.color = "white";
        per1.style.color = "white";
        per2.style.color = "black";
        per3.style.color = "black";
        if(x.matches){
            basic[a].style.height = "47rem";
            basic[1].style.height = "40.7rem";
            basic[2].style.height = "40.7rem";
        }

    } else if (a == 1){
        basic[a].style.backgroundColor = "black"; 
        basic[0].style.backgroundColor = "rgba(245, 245, 245, 1)";
        basic[2].style.backgroundColor = "rgba(245, 245, 245, 1)";    
        vis[a].style.visibility = "visible";
        vis[0].style.visibility = "hidden";
        vis[2].style.visibility = "hidden";
        basic[a].querySelectorAll("h5")[0].style.color = "white";
        basic[a].querySelectorAll("p")[0].style.color = "white";
        basic[a].querySelectorAll("h4")[0].style.color = "white";
        basic[a].querySelectorAll("button")[0].style.backgroundColor = "white";
        basic[a].querySelectorAll("button")[0].style.color = "black";
        basic[0].querySelectorAll("h5")[0].style.color = "black";
        basic[0].querySelectorAll("p")[0].style.color = "black";
        basic[0].querySelectorAll("h4")[0].style.color = "black";
        basic[0].querySelectorAll("button")[0].style.backgroundColor = "black";
        basic[0].querySelectorAll("button")[0].style.color = "white";
        basic[2].querySelectorAll("h5")[0].style.color = "black";
        basic[2].querySelectorAll("p")[0].style.color = "black";
        basic[2].querySelectorAll("h4")[0].style.color = "black";
        basic[2].querySelectorAll("button")[0].style.backgroundColor = "black";
        basic[2].querySelectorAll("button")[0].style.color = "white";
        per2.style.color = "white";
        per1.style.color = "black";
        per3.style.color = "black";
        if(x.matches){
            basic[a].style.height = "47rem";
            basic[0].style.height = "40.7rem";
            basic[2].style.height = "40.7rem";
        }
    } else if (a == 2){
        basic[a].style.backgroundColor = "black"; 
        basic[0].style.backgroundColor = "rgba(245, 245, 245, 1)";
        basic[1].style.backgroundColor = "rgba(245, 245, 245, 1)";    
        vis[a].style.visibility = "visible";
        vis[0].style.visibility = "hidden";
        vis[1].style.visibility = "hidden";
        basic[a].querySelectorAll("h5")[0].style.color = "white";
        basic[a].querySelectorAll("p")[0].style.color = "white";
        basic[a].querySelectorAll("h4")[0].style.color = "white";
        basic[a].querySelectorAll("button")[0].style.backgroundColor = "white";
        basic[a].querySelectorAll("button")[0].style.color = "black";
        basic[0].querySelectorAll("h5")[0].style.color = "black";
        basic[0].querySelectorAll("p")[0].style.color = "black";
        basic[0].querySelectorAll("h4")[0].style.color = "black";
        basic[0].querySelectorAll("button")[0].style.backgroundColor = "black";
        basic[0].querySelectorAll("button")[0].style.color = "white";
        basic[1].querySelectorAll("h5")[0].style.color = "black";
        basic[1].querySelectorAll("p")[0].style.color = "black";
        basic[1].querySelectorAll("h4")[0].style.color = "black";
        basic[1].querySelectorAll("button")[0].style.backgroundColor = "black";
        basic[1].querySelectorAll("button")[0].style.color = "white";
        per3.style.color = "white";
        per2.style.color = "black";
        per1.style.color = "black";
        if(x.matches){
            basic[2].style.height = "47rem";
            basic[1].style.height = "40.7rem";
            basic[0].style.height = "40.7rem";
        }
    }
    
   
}