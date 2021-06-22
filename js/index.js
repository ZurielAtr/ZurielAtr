const navtoggle = document.querySelector('.menu');
const navmenu = document.querySelector('.navegacion');

navtoggle.addEventListener("click", ()=>{
    navmenu.classList.toggle('nav-res');
})

const images = document.querySelectorAll('.img');
const contenedorimage = document.querySelector('.contenedor-img');
const imagecontenedor = document.querySelector('.img-show');
const closeModal = document.querySelector('.bx.bx-x');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addimage(image.getAttribute('src'));
    })
})

const addimage = (src)=> {
    contenedorimage.classList.toggle('move');
    imagecontenedor.classList.toggle('show');
    imagecontenedor.src = src;
}

closeModal.addEventListener('click', ()=>{
    contenedorimage.classList.toggle('move');
    imagecontenedor.classList.toggle('show');
})



