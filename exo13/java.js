function cadastro() {
    var nome = prompt('qual e o seu nome?')
    var nota1 = Number.parseInt(prompt(`qual foi a primeira nota do aluno ${nome}`))
    var nota2 = Number.parseInt(prompt(`qual foi a segunda nota do aluno ${nome}`))

    var media =  (nota1 + nota2) / 2

    var situaçao  = media >= 7 ? 'Aprovado' :'Reprovado'



    resultado.innerHTML = `<p>calculando a media final do ${nome}</p>`

    resultado.innerHTML += `<p>as notas obitidas forao ${nota1} e ${nota2} </p>`

    resultado.innerHTML += `<p> a media final sera ${media}</p>`

    resultado.innerHTML += `<p> o aluno esta ${situaçao}</p>`

}

















