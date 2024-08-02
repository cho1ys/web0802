const gallery = document.getElementById('gallery')
const imgs = gallery.querySelectorAll('img')
let dragImg = null;
imgs.forEach(img => {
    img.addEventListener('dragstart',(e)=>{
        e.target.classList.add('dragging')
        dragImg = e.target
    })
    img.addEventListener('dragend',(e)=>{
        e.target.classList.remove('dragging')
    })
    img.addEventListener('dragover',(e)=>{
        console.log('드래그중')
        e.preventDefault()
      
    })
    img.addEventListener('drop',(e)=>{
        e.preventDefault()
        if(dragImg !== e.target){
            gallery.insertBefore(dragImg,e.target)
        }
    })
})
