$(document).ready(function(){
    $('.btn-drop-down').click(function(){
       $(this).toggleClass('active')
       $(this).parent('li').children('ul').slideToggle(200)
       $(this).children('i').toggleClass('turn-down')
    })

    $("#btn-option-list").click(function(){
        $(".menu-left").slideToggle(250)
        $(this).children('span').children('svg').toggleClass('d-none')
    })

    $(".box1").hover(function(){
       $(this).find('i').toggleClass('fa-envelope fa-envelope-open')
    })

})
