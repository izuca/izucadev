
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
    console.log(document.URL)
})
if(document.URL !== "http://localhost:8080/"){
    document.getElementById("aboutMe").addEventListener("click",() =>{
        window.location = "http://localhost:8080/#about"
    })
} 

// Habilidades
document.getElementById("skills").addEventListener("click",() => {
    document.getElementById("mySkills").scrollIntoView({behavior: "smooth"})
    console.log(document.URL)
})
if(document.URL !== "http://localhost:8080/"){
    document.getElementById("skills").addEventListener("click",() =>{
        window.location = "http://localhost:8080/#mySkills"
    })
}

// Projetos
document.getElementById("projects").addEventListener("click",() => {
    document.getElementById("myProjects").scrollIntoView({behavior: "smooth"})
})
if(document.URL !== "http://localhost:8080/"){
    document.getElementById("projects").addEventListener("click",() =>{
        window.location = "http://localhost:8080/#myProjects"
    })
}

// Contato
document.getElementById("contact").addEventListener("click",() => {
    document.getElementById("myContact").scrollIntoView({behavior: "smooth"})
})
if(document.URL !== "http://localhost:8080/"){
    document.getElementById("contact").addEventListener("click",() =>{
        window.location = "http://localhost:8080/#myContact"
    })
}