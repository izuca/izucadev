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

// Habilidades
document.getElementById("skills").addEventListener("click",() => {
    document.getElementById("mySkills").scrollIntoView({behavior: "smooth"})
})

// Projetos
document.getElementById("projects").addEventListener("click",() => {
    document.getElementById("myProjects").scrollIntoView({behavior: "smooth"})
})

// Contato
document.getElementById("contact").addEventListener("click",() => {
    document.getElementById("myContact").scrollIntoView({behavior: "smooth"})
})
