
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

    $('.btn').click(function(){
        $('.overlay-login').show()
        $('.box-form-login').animate({
            top: '120px',
            opacity : 1
        },1000)
    })

    $('.overlay-login').click(function(e){
        if( $(e.target).closest(".btn-close").hasClass('btn-close')){
            $(this).hide()
            $('.box-form-login').animate({
                top: '100px',
                opacity : 0
            },1000)
            return false
         }
        if( $(e.target).closest(".box-form-login").hasClass('box-form-login')){
           return false
        }
        $(this).hide()
        $('.box-form-login').animate({
            top: '100px',
            opacity : 0
        },1000)
    })


})
