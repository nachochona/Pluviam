const navBar = document.querySelector('.navBar');
const abrirMenú = document.getElementById('abrirMenu');
const cerrarMenú = document.getElementById('cerrarMenu');
const listMenu= document.getElementById('listMenu');

abrirMenú.addEventListener('click', ()=>{
    navBar.classList.add('visible');
    abrirMenú.classList.add('quitar')
});

cerrarMenú.addEventListener('click', ()=>{
    navBar.classList.remove('visible');
    abrirMenú.classList.remove('quitar');
});

listMenu.childNodes.forEach((element)=>{
    element.addEventListener('click', ()=>{
        navBar.classList.remove('visible');
    abrirMenú.classList.remove('quitar');
    })
})






// window.addEventListener("scroll", function(){
//     let header = document.querySelector("header");
//     header.classList.toogle('scroll',window.scrollY>0);
// })

const header = document.querySelector("header");

window.onscroll = function(){
    if(window.pageYOffset >=10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
}
