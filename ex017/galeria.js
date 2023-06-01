function fotos() {
    var galeria =document.getElementById('galeria')

    galeria.innerHTML= '<p> isso aqui vc ja sabe fazer. <p>'
    galeria.innerHTML += '<img id="imagens" height="150" src="imagens/pexels-vie-studio-6167329.jpg">'

    var img = document.createElement('img')
    img.setAttribute('src', 'imagens/pexels-pixabay-263070.jpg')
    img.setAttribute('alt', 'Imagem de um lanche.')
    img.setAttribute('height', '150')

    galeria.appendChild(img)
}