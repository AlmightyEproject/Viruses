$(document).ready(function(){
    var maxleftscroll = 1669
    $(".fa-caret-right").click(function(){

        $(".blog-row").animate(
            {
                scrollLeft : "+=212px"
            },500
        )
        
        
        
        
    })
    $(".fa-caret-left").click(function(){
        $(".blog-row").animate(
            {
                scrollLeft : "-=212px"
            },500
        )
        
    })
    



})

