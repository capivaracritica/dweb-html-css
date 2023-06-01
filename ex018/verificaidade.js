function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var anousuario = Number(document.getElementById('input_ano').value)
    resultado =document.getElementById('resultado')
    var idade = anoatual - anousuario

    resultado.innerHTML = `<p>voçe esta com ${idade} quanto anos.</p>`


    var imput_radio = document.getElementsByName('radsex')
    var genero =''
    
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if(input_radio[0].checked) {
        genero = 'homem'

       if (idade >= 0 && idade < 12){
        img.setAttribute('src', 'imagen/pexels.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', 'imagen/pexels-spencer-slover-775358')
      } else if (idade < 50) {
        img.setAttribute('src', '')
      } else {
        img.setAttribute('src','imagen/pexels-yakup-polat-16532850.jpg')
    }

    } else{
        genero = 'mulher'

        if (idade >= 0 && idade < 12){
            img.setAttribute('src', '')
      } else if (idade < 21) {
        img.setAttribute('src', '')
      } else if (idade < 50) {
        img.setAttribute('src', '')
      } else {
        img.setAttribute('src', 'pexals-andrea-piacquadio-788567')
     }
    }
 
}
    