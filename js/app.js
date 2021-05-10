var btnMenuState = false;
document.getElementById('btnMenu').addEventListener('click',function(){
    if(btnMenuState){
        ocultarNav();
        btnMenuState = false;
    }else{
        mostrarNav();
        btnMenuState = true;
    }
});

function mostrarNav(){
    var nav = document.getElementsByTagName('nav');
    var header = document.getElementsByTagName('header');
    nav[0].style.display = 'block';
    header[0].style.height = '25em';
}
function ocultarNav(){
    var nav = document.getElementsByTagName('nav');
    var header = document.getElementsByTagName('header');
    nav[0].style.display = 'none';
    header[0].style.height = '3.5em';
}
function restaurarNav(){
    var nav = document.getElementsByTagName('nav');
    var header = document.getElementsByTagName('header');
    nav[0].style.display = 'block';
    header[0].style.height = '3.5em';
}
function io(val){
    console.log(val);
}

window.addEventListener('resize',function(){
    if(window.screen.width > 480){
        restaurarNav();
    }else{
        ocultarNav();
    }
});