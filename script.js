$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    var typed1 = new Typed(".typing", {
        strings: ["Software Developer","Java Full Stck Developer", "Front-End Developer", "Back-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-1", {
        strings: ["JAVA DEVELOPMENT", "WEB DEVELOPMENT"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
