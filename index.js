function sizeOfThings(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    
    document.querySelector('.window-size').innerHTML = 'A largura da janela é '+ windowWidth + ' e a altura é ' + windowHeight;
    document.querySelector('.screen-size').innerHTML = 'A largura da tela é ' + screenWidth + ' e a altura é ' + screenHeight;

    };

    sizeOfThings();

    window.addEventListener('resize', function(){
        sizeOfThings();
});