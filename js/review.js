let show=false;
function showFunc(){
    if(!show){
        show=true;
        $('.content-integrity').removeClass('hideKey');
        $('.content-integrity').addClass('showKey');
    }else{
        show=false;
        $('.content-integrity').removeClass('showKey');
        $('.content-integrity').addClass('hideKey');
    }
}