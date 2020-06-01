
/*
$(".sub_menu").hide();  //Esconde o submenu

// Função (.hover) que permite fazer algo ao passar o mouse sobre a classe .menu
$(".menu_nav").hover(function(){
  $(".sub_menu").show();  // Revela o submenu
function(){  // Ao tirar o mouse do elemento
  $(".sub_menu").hide()  // Esconde novamente o menu
})

*/

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 2,
  percentPosition: true
});