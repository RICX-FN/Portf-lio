function enviarMensagem(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '244929355954';

    const texto = `Olá, meu nome é ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(url);

    window.open(url, '_blank');
}

function MostrarOcultar() {
    let mostrar = document.getElementById('more-card')

    if (mostrar.style.display === "none") {
        mostrar.style.display = "block"
    } else {
        mostrar.style.display = "none"
    }
}