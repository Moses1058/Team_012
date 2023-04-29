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
        slider.style.transition= '0.7s';
        box.style.backgroundColor = '#000000';
        box.style.transition = '1.5s';
        pricebasic.innerHTML = (pricebasic.innerHTML * 10).toFixed(2);
        pricepro.innerHTML = (pricepro.innerHTML * 10).toFixed(2);
        pricebus.innerHTML = (pricebus.innerHTML * 10).toFixed(2);
        semonth.style.mixBlendMode = 'normal';
        semonth.style.opacity = '0.5';
        seyear.style.opacity = 1;
        
    } else {
        
        slider.style.backgroundColor = 'black';
        slider.style.transform = 'translateX(0)';
        slider.style.transition= '0.7s';
        box.style.backgroundColor = '#DFDFDF';
        box.style.transition = '1.5s';
        pricebasic.innerHTML = (pricebasic.innerHTML / 10).toFixed(2);
        pricepro.innerHTML = (pricepro.innerHTML / 10).toFixed(2);
        pricebus.innerHTML = (pricebus.innerHTML / 10).toFixed(2);
        seyear.style.mixBlendMode = 'normal';
        seyear.style.opacity = '0.5';
        semonth.style.opacity = 1;
        
    }
}

slider.addEventListener('click', slide);