data = [{
    percent: "80"
}, {
    percent: "70"
}, {
    percent: "10"
}];

function setMarkers(data) {

    let buttons = $('.float-block');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.left = `calc(${data[i].percent}% - ${$(buttons[i]).width() / 2}px - 12px`;
        let int = parseInt(data[i].percent);
        if (int <= 15) {
            buttons[i].firstElementChild.style.color = "rgb(34, 177, 76)";
        } else if (int <= 39) {
            buttons[i].firstElementChild.style.color = 'rgb(172, 220, 22)';
        } else if (int <= 58) {
            buttons[i].firstElementChild.style.color = 'rgb(172, 220, 22)';
        } else if (int <= 75) {
            buttons[i].firstElementChild.style.color = 'rgb(253, 190, 63)';
        } else if (int <= 100) {
            buttons[i].firstElementChild.style.color = 'rgb(237, 28, 36)';
        }
    }
    for (let i = 1; i < buttons.length; i++) {
        buttons[i].classList.add('float-bottom');
        if (
            buttons[i + 1] !== undefined &&
            parseFloat(data[i + 1].percent) -
            parseFloat(data[i].percent) <= 32
        ) {
            buttons[i].classList.add('float-bottom-more');
            $('.bar')[0].style.marginBottom='65px';
        }
    }
}

setMarkers(data);