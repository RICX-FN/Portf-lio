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
    let btn_exibir = document.getElementById('btn-show_more')

    if (mostrar.style.display === "none") {
        mostrar.style.display = "grid"
        btn_exibir.innerHTML = "Mostrar menos"
    } else {
        mostrar.style.display = "none"
        btn_exibir.innerHTML = "Mostrar mais"
    }
}