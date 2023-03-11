function darkMode(){
    let minhaImagem = document.querySelector('img');
    var element = document.body;
    element.classList.toggle("dark-mode");
    let meuSrc= minhaImagem.getAttribute('src');
    if(meuSrc === 'https://cdn-icons-png.flaticon.com/512/5558/5558226.png'){
        minhaImagem.setAttribute ('src', 'https://cdn-icons-png.flaticon.com/512/5262/5262027.png');
    }else {
    
        minhaImagem.setAttribute ('src','https://cdn-icons-png.flaticon.com/512/5558/5558226.png');
    }
}