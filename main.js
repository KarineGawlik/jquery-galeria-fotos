//$(document).ready(function() { //
    //alert("Olá, JQuery!"); //
//})

/*
O JQuery funciona através do sifao e dos parenteses
Essa funcao quer dizer que quando o document estiver ponto, já carregou o js e jquery ele deve executar o alert
*/

/* Para selecionar o botao de nova imagem
Pelo query selector seria a forma normal de selecionar o botao de nova imagem (pelo JS)
$('header button'); //dessa forma seleciona o botao atraves do JQuery, código fica mais enxuto
Ao selecionarmos um botao tem que adicionar um evento de clique, no Java Script, utilizamos addEventeListenerç

Ex. JS: 
document.querySelector("header button").addEventListener('click', function ()) {

Ex. JQuery: 
$('header button').click((function(){
    alert("Expandir; formulário")
})

Ex2. JQuery: ç
$('form').on('submit', function(e) {
    console.log("submit"); 
    e.preventDefault(); 
})
*/

$(document).ready(function() { 
    $('header button').click(function() {
        $('form').slideDown(); 
    })
    
$('#botao-cancelar').click(function() {
    $('form').slideUp(); 
})


$('form').on('submit', function(e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); /*val = value no Js normal, no JQuery é uma funçao. Recupera o endereço que foi colocado no campo */
    const novoItem = $('<li style="display:none"></li>'); /*criar o html que vai ser inserido no final da lista, $ elemento JQuery, <li> vai criar uma lista */
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); /*appendTo pega o elemento "enderecoDaNovaImagem e coloca na lista li" */
    $(`
        <div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real"> 
            Ver a imagem em tamanho real
        </a> 
        </div>
        `).appendTo(novoItem); /*target="blank: faz com que o link da imagem abra em outra aba*/
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); /*efeito de animação, está em milisegundos*/
        $('#endereco-imagem-nova').val(''); /*Limpa o formulário*/
    })
})

