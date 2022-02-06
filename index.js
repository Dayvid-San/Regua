function sizeOfThings(){
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let screenWidth = screen.width;
    let screenHeight = screen.height;
    
    
    document.querySelector('.window-size').innerHTML = 'A largura da janela é '+ windowWidth + 'px e a altura é ' + windowHeight + 'px';
    document.querySelector('.screen-size').innerHTML = 'A largura da tela é ' + screenWidth + 'px e a altura é ' + screenHeight + 'px';

    // Ajeitar a largura em centimetros com a regua
    const windowWidth_cm = windowWidth/37.8
    // Função que adiciona um centímetro à regua de acordo com o espaço de tela
};


sizeOfThings();

    // Fica ouvido as alterações no tamanho da janela
window.addEventListener('resize', function(){
    sizeOfThings();
});