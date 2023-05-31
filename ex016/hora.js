function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById(imagem)

    var data = new Date ()
    var hora = data.getHours()
    var minutos =data.getMinutes()

    if (hora >= 5 && hora < 12) {
        msg.innerHTML =`Bom dia <br> Agora sao $ {hora}:${minuter}`
        img.src= 'pexels-eberhar-grossgasteiger-4406340.jpg'
    } else if (hora >= 12 && hora < 16) {
        msg.innerHTML =`Boa tarde <br> Agora sao $ {hora}:${minuter}`
        img.src= 'imagens/pexels-griffin-wooldridge-'
    }
    if (hora >= 16 && hora < 6) {
        msg.innerHTML =`Boa noite <br> Agora sao $ {hora}:${minuter}`
    }
}