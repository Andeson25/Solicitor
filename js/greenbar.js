data = [{
    percent: "20"
}, {
    percent: "40"
}, {
    percent: "60"
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
    buttons.sort((x, y) => {
        return parseFloat(x.style.left.split('%')[0].split('(')[2]) > parseFloat(y.style.left.split('%')[0].split('(')[2]);
    });
    for (let i = 0; i < buttons.length; i++) {
        if (
            buttons[i - 1] !== undefined &&
            parseFloat(buttons[i].style.left.split('%')[0].split('(')[2]) -
            parseFloat(buttons[i - 1].style.left.split('%')[0].split('(')[2]) <= 20
            ||
            buttons[i + 1] !== undefined &&
            parseFloat(buttons[i + 1].style.left.split('%')[0].split('(')[2]) -
            parseFloat(buttons[i].style.left.split('%')[0].split('(')[2]) <= 20
        ) {
            if (buttons[i - 1] !== undefined && buttons[i - 1].classList.contains('float-bottom')) {

            } else {
                buttons[i].classList.add('float-bottom');
            }
        }
    }
}

setMarkers(data);