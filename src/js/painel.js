const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', () => {
    if(imagemAtual === imagensPainel.length - 1){
        return
    }

    imagemAtual++;

    imagensPainel.forEach(imagens => {
        imagens.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
    
})

setaVoltar.addEventListener('click', ()=>{
    if(imagemAtual === 0){
        return
    }

    imagemAtual--;

    imagensPainel.forEach(imagens =>{
        imagens.classList.remove('mostrar');
    })

    imagensPainel[imagemAtual].classList.add('mostrar');
})

