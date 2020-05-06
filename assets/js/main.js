/* Sticky menu */

var hh = $('.main-header').height();
var mh = $('.main-menu').height();
var nav = $('.main-menu');
var groups = $('.main-menu__groups');
var logo = $('.main-menu__logo');
var burgerMenu = $('.main-menu__burger')

console.log(groups);

if($(window).width() <= 780) {
    hh = '0';
    
}
$(window).scroll(function() {
	if($(this).scrollTop() >= hh) {
		nav.addClass('main-menu--sticky');
        // groups.css('padding-top', '70px');
        logo.css('width', '50px')
	}
	else{
		nav.removeClass('main-menu--sticky');
       // groups.css('padding-top', '0');
        logo.css('width', 'calc(18.333333333333336% - 135px)')
	}
});



$('.main-menu__burger').on("click", function(){
    console.log('click');


});


window.onload= function() {
        document.getElementById('main-menu__burger').onclick = function() {
            openbox('box', this);
            return false;
        };
    };
    function openbox(id, toggler) {
        var div = document.getElementById('main-menu__groups');
        if(div.style.opacity == '1') {
            div.style.opacity = '0';
            
        }
        else {
            div.style.opacity = '1';
            
        }
    }
    


//================================================================//
//*********** login.js
//*********** © Dariya Leleka - code
//*********** Описание поведения формы логина 
//*********** Проверка полей формы логина на валидность
//*********** ajax-запрос на авторизацию
//================================================================//

$(document).ready(function(){

    //---------------------------- фильтры для проверки полей на недопустимые символы
    //---------------------------- https://www.sitepoint.com/expressions-javascript/
    var filterUsername  = /^([a-zA-Z0-9_\-])+$/;
    var filterPassword = /^[a-zA-Z0-9!%&@#$\^*?_~+]+$/;

    $('#pass').on('keyup', function(e){
        //---------------------------- если пользователь нажал enter
        if (e.keyCode == 13){
            $('.b-login').click();
        }
    });

    //=========================== Кнопка войти ==========================//

    $('.b-login').on("click", function(){

        //---------------------------- параметры для авторизации
        var data = {};
        data.username = $('#username').val();
        data.password = $('#pass').val();

        if (data.username == ''){
            //-------------------- showError(text, top) функция для отображения ошибки
            //-------------------- text - текст сообщения
            //-------------------- top - отступ от верха страницы
            showError('Пожалуйста введите свое имя!', 80);
        } else if (data.password == ''){
            showError('Пожалуйста введите свой пароль!', 80);
        } else if (!filterUsername.test(data.username)){
            showError('Недопустимые символы в имени', 80);
        } else if(!filterPassword.test(data.password)) {
            showError('Недопустимые символы в пароле', 80);
        } else {

            //----------------------- ajax-запрос на авторизацию
            showSuccess('Авторизация', 50);
        }
    })
});


//================================================================//
//*********** error.js
//*********** © Dariya Leleka - code
//*********** Функционал окна с сообщением об ошибке (<div class="error-holder">)
//*********** Присутствует на всех страницах админ-панели
//=========== ВЫЗОВ
//*********** showError(text, top) - сообщеие об ошибке
//*********** showSuccess(text, top) - сообщеие об успешном завершении
//=========== ПАРАМЕТРЫ
//*********** text - сообщение в окне
//*********** top - отступ от верха страницы (px)
//================================================================//

//==============================================================//
//*********** hideError - скрыть сообщение об ошибке ***********//
//==============================================================//

var timer = null;

function hideError(){

    //------------ очищаем таймер
    if (timer != null){
        window.clearTimeout(timer);
    }

    //------------ таймаут на 5 секунд
    timer = window.setTimeout(function(){
        $('.error-holder').fadeOut();
    }, 5000);
}

//==============================================================//
//********** showError - показать сообщение об ошибке **********//
//==============================================================//
function showError(text, top){

    $('.error-holder').removeClass('error-holder-success');
    $('.error-holder').css({"top":"" + top + "px", "z-index":"999999"});
    $('.error-holder span').text(text);

    $('.error-holder').fadeIn(function(){
        hideError();
    });
}

//==============================================================//
//******* showSuccess - сообщение об успешном завершении *******//
//==============================================================//
function showSuccess(text, top){

    $('.error-holder').addClass('error-holder-success');
    $('.error-holder').css({"top":"" + top + "px", "z-index":"999999"});
    $('.error-holder span').text(text);

    $('.error-holder').fadeIn(function(){
        hideError();
    });
}

$(document).ready(function(){

    //=============== Скрыть сообщение по клику =================//
    $('.error-holder').on("click", function(){
        $(this).fadeOut();
    });

});