//Elements of the page
const us = document.getElementById(`us`)
const contact = document.getElementById(`contact`)
//content of container
const imgMobile = document.getElementById(`img-mobile`)
const principal = document.getElementById(`principal`)
const content = document.getElementById(`content`)
const aboutUsImg = document.getElementById(`about-us-img`)
const contenido = document.getElementById(`contenido`)
const titleContent = document.getElementById(`title-content`)
const navMenu = document.getElementById(`nav-menu`)
let hideRow = document.getElementById(`row`).getElementsByTagName(`ul`)[4]
let hideRow1 = document.getElementById(`row`).getElementsByTagName(`ul`)[3]
let hideRow2 = document.getElementById(`row`).getElementsByTagName(`ul`)[2]
let hideRow3 = document.getElementById(`row`).getElementsByTagName(`ul`)[1]
let hideRow4 = document.getElementById(`row`).getElementsByTagName(`ul`)[0]

// funciones para que aparezca el container con contenido
    function changeDisplay(){
    content.style.display = "inline-block"; // cambio el display para que el div se vea
    principal.style.display = "none" // cambio el display para que el div del logo no se vea
    imgMobile.style.display = "none"
    hideRow.style.display = "none"
    hideRow1.style.display = "none"
    hideRow2.style.display = "none"
    hideRow3.style.display = "none"
    hideRow4.style.display = "none"
};

    function openContent(rowSelection){
    if(rowSelection==contact){
        rowSelection.addEventListener("click",function(){
            content.style.display = "none"
            titleContent.textContent = "Contactanos"
            contenido.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            aboutUsImg.src ="assets/contacto-img.png";
            setTimeout(changeDisplay,300)
            })
    }
    if(rowSelection == us){
        rowSelection.addEventListener("click",function(){
            content.style.display = "none"
            titleContent.textContent = "Sobre nosotros"
            contenido.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            aboutUsImg.src ="assets/sobre-nosotros.png";
            setTimeout(changeDisplay,300)
            })
    }
}

openContent(us)
openContent(contact)
    
        
function openMenu(){
    navMenu.addEventListener("click",function(){
    hideRow.style.display = "block"
    hideRow1.style.display = "block"
    hideRow2.style.display = "block"
    hideRow3.style.display = "block"
    hideRow4.style.display = "block"
    })
    console.log(hideRow)
}
    
openMenu();




//se ejecutan las funcionciones para que vayan cambiando los contenidos



