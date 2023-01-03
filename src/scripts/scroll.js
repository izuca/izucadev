const myUrl = 'https://www.izuca.dev/'

//Criando animação
let slideUp = {
    distance: '10%',
    origin: 'bottom',
    opacity: 0
};

//Animando os Elementos
ScrollReveal().reveal('#hero', slideUp)
ScrollReveal().reveal('#sobreMim', slideUp)
ScrollReveal().reveal('#habilidades', slideUp)
ScrollReveal().reveal('#projetos', slideUp)
ScrollReveal().reveal('#contatos', slideUp)

//Usando o scroll in to view
// Sobre mim
document.getElementById("aboutMe").addEventListener("click",() => {
    document.getElementById("about").scrollIntoView({behavior: "smooth"})
})
if(document.URL !== myUrl){
    document.getElementById("aboutMe").addEventListener("click",() =>{
        window.location = `${myUrl}#about`
    })
} 

// Habilidades
document.getElementById("skills").addEventListener("click",() => {
    document.getElementById("mySkills").scrollIntoView({behavior: "smooth"})
})
if(document.URL !== myUrl){
    document.getElementById("skills").addEventListener("click",() =>{
        window.location = `${myUrl}#mySkills`
    })
}

// Projetos
document.getElementById("projects").addEventListener("click",() => {
    document.getElementById("myProjects").scrollIntoView({behavior: "smooth"})
})
if(document.URL !== myUrl){
    document.getElementById("projects").addEventListener("click",() =>{
        window.location = `${myUrl}#myProjects`
    })
}

// Contato
document.getElementById("contact").addEventListener("click",() => {
    document.getElementById("myContact").scrollIntoView({behavior: "smooth"})
})
if(document.URL !== myUrl){
    document.getElementById("contact").addEventListener("click",() =>{
        window.location = `${myUrl}#myContact`
    })
}

