let menuOpen = 0;
$(".show_hide-menu").click(() => {
    if (menuOpen == 0) {
        menuOpen = 1;
        $(".show_hide-menu i").css("transform", "rotateY(180deg)");
        $(".menu").animate({
            left: 0
        }, 800);

    } else if (menuOpen == 1) {
        menuOpen = 0;
        $(".show_hide-menu i").css("transform", "none");
        $(".menu").animate({
            left: "-300"
        }, 800);
    }
});