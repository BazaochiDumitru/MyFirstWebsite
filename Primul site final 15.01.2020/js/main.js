$(document).ready(function (){
    buttonTopFunction();
})

function buttonTopFunction(){
    $('.buttonUp').click(function(){
        window.scrollTo(0,0);
    })
}

$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
})