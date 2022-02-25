$(document).ready(function(){
    $('.btn-drop-down').click(function(){
       $(this).toggleClass('active')
       $(this).parent('li').children('ul').slideToggle(200)
       $(this).children('i').toggleClass('turn-down')
    })
})
