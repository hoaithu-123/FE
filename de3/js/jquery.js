$(document).ready(function(){
    console.log("oh");
    $(".header-navbar__icon").click(function(){
        console.log("ok");
       $(".header-navbar__menu").toggle();
       $(this).toggleClass("header--click");
    })
    // $(".header").click(function(){
    //     console.log("ok");
    //     $(".header-navbar__menu").toggle();
    // })
    $("header__top--cart").hover(function(){
        console.log("ok");
    })
    $('.header__top-logo').click(function(){
        console.log("ok");
    })
    /***********Slick Item-Internal********/
    $('.row1-item__info').slick();
    $('.row1-item__slick').hover(function(){
        
    })
})