const myUrl = 'https://izuca.dev/'

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


