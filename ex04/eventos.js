var area = document.getElementById('item-1')

function clique() {
    area.innerHTML = 'você clicou aqui'
    area.style.backgroundColor ='red'
}

function entrar() {
    area.innerHTML = 'você està com o mouse sobre o div.'
}

function sair() {
    area.innerHTML='você tirou o mouse de dentro da div.'
}