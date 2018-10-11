var show = false;

$(".footer button").click(() => {
    if (!show) {
        $('.transparent').hide();
        $(".container > .row-wrap").css('height', 'auto');
        $('.footer button').text('  Click here to hide all reviews');
        show = true;
    } else {
        $('.transparent').show();
        $(".container > .row-wrap").css('height', '500px');
        $('.footer button').text(' Click here to read all reviews');
        show = false;
    }

    // $(".container > .row-wrap").css('animation', 'show .75s linear 0s forwards');
});