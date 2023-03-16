// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botão selecionado anterior      
        desativarBotaoSelecionado();
        // passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrosel(botao);

        // passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

const setaDireita = document.querySelector('.seta-direita');
const setaEsquerda = document.querySelector('.seta-esquerda');

// adiciono evento de click na seta direita

setaDireita.addEventListener('click', () => {
    // pego todos meus botoes com a classe .botao em forma de array
    const buttons = document.querySelectorAll('.botao');
    // crio uma variavel let que pode ser modificada, para armazenar o index do botao selecionado atual a seguir
    let currentIndex = 0;

    // faco um foreach com um if, verificando dentro deste loop, qual botao ira conter a classe selecionado, quando entrar noo if, e porque cheguei no botao selecionado, sendo assim, passo o index dele, para minha variavel acima
    buttons.forEach((element, index) => {
        if (element.className.includes('selecionado')) {
            currentIndex = index
        }
    })

    // agora que tenho o index atual do botao que esta selecionado, utilizo ele no meu array de botoes, para remover a classe selecionado do meu index atual
    buttons[currentIndex].classList.remove('selecionado');

    // aqui neste if, eu verifico se o meu index atual + 1, é maior que a quantidade de botoes, -1 porque, os indexes comecam com 0, ja o length que mede a quantidade de items no array, comeca com 1, para a conta bater e transformar em index, eu tenho que comparar com length - 1
    // caso for maior, eu aplico as modificacoes, no index 0, porque quero resetar o slide do inicio, porque se for maior, quer dizer que cheguei ao fim e nao tenho mais items
    // caso contrario, ai sim, eu removo a classe dos itens atuais, e atribuo a classe para os proximos items, aplicando currentIndex + 1
    if (currentIndex + 1 > buttons.length - 1) {
        buttons[0].classList.add('selecionado');
        esconderImagemAtiva();
        imagens[0].classList.add('ativa');
    } else {
        buttons[currentIndex + 1].classList.add('selecionado');
        esconderImagemAtiva();
        imagens[currentIndex + 1].classList.add('ativa');
    }
})

setaEsquerda.addEventListener('click', () => {
    const buttons = document.querySelectorAll('.botao');
    let currentIndex = 0;

    buttons.forEach((element, index) => {
        if (element.className.includes('selecionado')) {
            currentIndex = index
        }
    })

    buttons[currentIndex].classList.remove('selecionado');

    if (currentIndex == 0) {
        buttons[buttons.length - 1].classList.add('selecionado');
        esconderImagemAtiva();
        imagens[buttons.length - 1].classList.add('ativa');
    } else {
        buttons[currentIndex - 1].classList.add('selecionado');
        esconderImagemAtiva();
        imagens[currentIndex - 1].classList.add('ativa');
    }
})

setInterval(() => {
    const buttons = document.querySelectorAll('.botao');
    let currentIndex = 0;

    buttons.forEach((element, index) => {
        if (element.className.includes('selecionado')) {
            currentIndex = index
        }
    })

    buttons[currentIndex].classList.remove('selecionado');

    if (currentIndex + 1 > buttons.length - 1) {
        buttons[0].classList.add('selecionado');
        esconderImagemAtiva();
        imagens[0].classList.add('ativa');
    } else {
        buttons[currentIndex + 1].classList.add('selecionado');
        esconderImagemAtiva();
        imagens[currentIndex + 1].classList.add('ativa');
    }
}, 5000);