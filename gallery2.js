let imgs = document.querySelectorAll('#container > img');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let current = 0;
prev.onclick = prevSlide;
next.onclick = nextSlide;
showS(current)
function showS(n){
    for(let i = 0;i<imgs.length;i++){
        imgs[i].classList.remove('active');
    }
    imgs[n].classList.add('active');
}

function prevSlide(){
    if(current > 0){
        current --;
    }else{
        current = imgs.length-1;
    }
    showS(current);
}
function nextSlide(){
    if(current < imgs.length-1){
        current ++;
    }else{
        current = 0;
    }showS(current)
}