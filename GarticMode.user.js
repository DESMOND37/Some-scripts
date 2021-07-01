
var VERSION = "2.4.7.1";

if (getCookieDict().VERSION != VERSION){
    alert(`НОВАЯ ВЕРСИЯ ${VERSION}\n\nЧто нового?:\nБыл концептуально переработан весь код, и лагов должно стать горазд меньше. Также была изменена цензура - теперь видно имя скрытого игрока.`);
    document.cookie = `VERSION=${VERSION};`;
}

function Q(s){
    return document.getElementsByClassName(s);
}

//////////////////////////////////////////////////////style///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var cssAnimation = document.createElement('style');
cssAnimation.type = 'text/css';
var rules = document.createTextNode('@keyframes rainbow {'+
                                    '100%, 0% { color: rgb(255, 0, 0);}'+
                                    '8% { color: rgb(255, 127, 0);}'+
                                    '16% { color: rgb(255, 255, 0);}'+
                                    '25% { color: rgb(127, 255, 0);}'+
                                    '33% { color: rgb(0, 255, 0);}'+
                                    '41% { color: rgb(0, 255, 127);}'+
                                    '50% { color: rgb(0, 255, 255);}'+
                                    '58% { color: rgb(0, 127, 255);}'+
                                    '66% { color: rgb(0, 0, 255);}'+
                                    '75% { color: rgb(127, 0, 255);}'+
                                    '83% { color: rgb(255, 0, 255);}'+
                                    '91% { color: rgb(255, 0, 127);}'
                                    +'}');
cssAnimation.appendChild(rules);
document.getElementsByTagName("head")[0].appendChild(cssAnimation);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var font1 = document.createElement('style');
font1.classList.add("font1");
font1.type='text/css';
var rule = document.createTextNode(
    "@font-face {font-family: 'Majestic';" +
    "src: url(https://cdn.discordapp.com/attachments/833410401366573066/845238689352908800/Majestic_Regular.ttf);"+
    +"}"
                                  );
font1.appendChild(rule);
document.getElementsByTagName("head")[0].appendChild(font1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
var cssPlaceHolder = document.createElement('style');
cssAnimation.type = 'text/css';
var rules1 = document.createTextNode("input::placeholder { color: rgba(255, 255, 255, 0.8); opacity: 1;} ");
cssPlaceHolder.appendChild(rules1);
document.getElementsByTagName("head")[0].appendChild(cssPlaceHolder);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var styleInputRange2 = document.createElement('style');
styleInputRange2.type = 'text/css';
var rules2 = document.createTextNode('input[type="range"]{width: 100%;}');
styleInputRange2.appendChild(rules2);
//document.getElementsByTagName("head")[0].appendChild(styleInputRange2);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var styleInputRange3 = document.createElement('style');
styleInputRange3.type = 'text/css';
var rules3 = document.createTextNode('input[type=range]{-webkit-appearance: none;border-color: rgba(0,0,0,0);}');
styleInputRange3.appendChild(rules3);
document.getElementsByTagName("head")[0].appendChild(styleInputRange3);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var styleInputRange4 = document.createElement('style');
styleInputRange4.type = 'text/css';
var rules4 = document.createTextNode('input[type=range]::-webkit-slider-runnable-track {cursor: pointer; height: .65em; background: rgb(80, 22, 58); border: none; border-radius: 5px;border-color: rgba(0,0,0,0);}');
styleInputRange4.appendChild(rules4);
document.getElementsByTagName("head")[0].appendChild(styleInputRange4);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var styleInputRange5 = document.createElement('style');
styleInputRange5.type = 'text/css';
var rules5 = document.createTextNode('input[type=range]::-webkit-slider-thumb {cursor: pointer; appearance: none; -webkit-appearance: none; border: none; height: 1.4em; width: 1.4em; border-radius: 50px; background: rgba(225, 109, 143, 1); margin-top: -4px; outline: none; border-color: rgba(0,0,0,0);}');
styleInputRange5.appendChild(rules5);
document.getElementsByTagName("head")[0].appendChild(styleInputRange5);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var styleInputRange6 = document.createElement('style');
styleInputRange6.type = 'text/css';
var rules6 = document.createTextNode('input[type=range]:focus { outline: none; background: rgba(248, 168, 191, 1);border-color: rgba(0,0,0,0);}');
styleInputRange6.appendChild(rules6);
document.getElementsByTagName("head")[0].appendChild(styleInputRange6);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var styleInputRange7 = document.createElement('style');
styleInputRange7.type = 'text/css';
var rules7 = document.createTextNode('input[type="color"]::-webkit-color-swatch {border: none;}');
styleInputRange7.appendChild(rules7);
document.getElementsByTagName("head")[0].appendChild(styleInputRange7);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var styleInputRange8 = document.createElement('style');
styleInputRange8.type = 'text/css';
var rules8 = document.createTextNode(
    '.newtoolz {display: flex;'+
    'justify-content: center;'+
    'position: relative;'+
    'cursor: pointer;'+
    'width: 50px;'+
    'height: 54px;'+
    'border: 2px solid rgba(255, 142, 175, 0.6);'+
    'border-radius: 5px;'+
    'color: rgba(255, 142, 175, 0.6);'+
    'font-family: Black;'+
    'background-color: rgba(100, 100, 100, 0.1);}'
);
styleInputRange7.appendChild(rules8);
document.getElementsByTagName("head")[0].appendChild(styleInputRange8);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var styleInputRange9 = document.createElement('style');
styleInputRange9.type = 'text/css';
var rules9 = document.createTextNode('.newtoolz:hover {background-color: rgba(255, 255, 255, 0.1); color: rgba(255, 140, 175, 1);}');
styleInputRange9.appendChild(rules9);
document.getElementsByTagName("head")[0].appendChild(styleInputRange9);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var styleInputRange10 = document.createElement('style');
styleInputRange10.type = 'text/css';
var rules10 = document.createTextNode('.newtoolz:active {background-color: rgba(255, 255, 255, 0.4); color: rgba(255, 255, 255, 1);}');
styleInputRange10.appendChild(rules10);
document.getElementsByTagName("head")[0].appendChild(styleInputRange10);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var styleInputRange11 = document.createElement('style');
styleInputRange11.type = 'text/css';
var rules11 = document.createTextNode('.newtoolz.act {background-color: rgba(255, 255, 255, 0.4); color: rgba(255, 255, 255, 1);}');
styleInputRange11.appendChild(rules11);
document.getElementsByTagName("head")[0].appendChild(styleInputRange11);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Стиль лупы
var styleInputRange12 = document.createElement('style');
styleInputRange12.type = 'text/css';
var rules12 = document.createTextNode(".loopa.jsx-3659451671::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/830443858378096680/loopa_edit.svg'); background-size: 45px 45px; height: 45px; width: 45px;}");
styleInputRange12.appendChild(rules12);
document.getElementsByTagName("head")[0].appendChild(styleInputRange12);
//Активация лупы
var styleInputRange15 = document.createElement('style');
styleInputRange15.type = 'text/css';
var rules15 = document.createTextNode(".loopa.jsx-3659451671:active::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/830453942731014194/loopa_edit.svg'); background-size: 45px 45px; height: 45px; width: 45px;}");
styleInputRange15.appendChild(rules15);
document.getElementsByTagName("head")[0].appendChild(styleInputRange15);
//Активированная лупа
var styleInputRange015 = document.createElement('style');
styleInputRange015.type = 'text/css';
var rules015 = document.createTextNode(".loopa.jsx-3659451671.act1::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/830453942731014194/loopa_edit.svg'); background-size: 45px 45px; height: 45px; width: 45px;}");
styleInputRange015.appendChild(rules015);
document.getElementsByTagName("head")[0].appendChild(styleInputRange015);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Стиль пипетки
var styleInputRange16 = document.createElement('style');
styleInputRange16.type = 'text/css';
var rules16 = document.createTextNode(".pipet.jsx-3659451671::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/830469620694646784/pipet.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange16.appendChild(rules16);
document.getElementsByTagName("head")[0].appendChild(styleInputRange16);
//Активация пипетки
var styleInputRange17 = document.createElement('style');
styleInputRange17.type = 'text/css';
var rules17 = document.createTextNode(".pipet.jsx-3659451671:active::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/830476126261870652/pipet.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange17.appendChild(rules17);
document.getElementsByTagName("head")[0].appendChild(styleInputRange17);
//Активированная пипетка
var styleInputRange18 = document.createElement('style');
styleInputRange18.type = 'text/css';
var rules18 = document.createTextNode(".pipet.jsx-3659451671.act::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/830476126261870652/pipet.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange18.appendChild(rules18);
document.getElementsByTagName("head")[0].appendChild(styleInputRange18);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
var styleInputRange13 = document.createElement('style');
styleInputRange13.type = 'text/css';
styleInputRange13.classList.add("imgChange");
var rules13 = document.createTextNode(".newdiv::before {content: ''; position: absolute; width: 200%; height: 200%; top: -50%; left: -50%; z-index: -1; background: url() 0 0 no-repeat; -webkit-transform: rotate(30deg); -moz-transform: rotate(30deg); -ms-transform: rotate(30deg); -o-transform: rotate(30deg); transform: rotate(30deg); background-position: center; background-size: contain;}");
styleInputRange13.appendChild(rules13);
document.getElementsByTagName("head")[0].appendChild(styleInputRange13);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Стиль зеркала
var styleInputRange19 = document.createElement('style');
styleInputRange19.type = 'text/css';
var rules19 = document.createTextNode(".miror.jsx-3659451671::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/833347814704021564/miror.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange19.appendChild(rules19);
document.getElementsByTagName("head")[0].appendChild(styleInputRange19);
//Активация зеркала
var styleInputRange20 = document.createElement('style');
styleInputRange20.type = 'text/css';
var rules20 = document.createTextNode(".miror.jsx-3659451671:active::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/831638658050293827/miror.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange20.appendChild(rules20);
document.getElementsByTagName("head")[0].appendChild(styleInputRange20);
//Активированное зеркало
var styleInputRange21 = document.createElement('style');
styleInputRange21.type = 'text/css';
var rules21 = document.createTextNode(".miror.jsx-3659451671.act1::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/831638658050293827/miror.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange21.appendChild(rules21);
document.getElementsByTagName("head")[0].appendChild(styleInputRange21);
//Активный бэкграунд
var styleInputRange22 = document.createElement('style');
styleInputRange22.type = 'text/css';
var rules22 = document.createTextNode(".act1::before {content: ''; margin: 2px; flex: 1 1 0%; border-radius: 3px; align-self: stretch; animation: 2s linear 0s infinite normal none running pulsing}");
styleInputRange22.appendChild(rules22);
document.getElementsByTagName("head")[0].appendChild(styleInputRange22);

var cssAnimation1 = document.createElement('style');
cssAnimation.type = 'text/css';
var rules0 = document.createTextNode("@keyframes pulsing {100%, 0% { background-color: rgba(255,255,255, 0.8); } 50% { background-color: rgba(255,255,155, 0.1); }}");
cssAnimation.appendChild(rules0);
document.getElementsByTagName("head")[0].appendChild(cssAnimation1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Стиль сгдаживания
var styleInputRange019 = document.createElement('style');
styleInputRange019.type = 'text/css';
var rules019 = document.createTextNode(".smooth.jsx-3659451671::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/841308292033544222/gesture_black_24dp.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange019.appendChild(rules019);
document.getElementsByTagName("head")[0].appendChild(styleInputRange019);
//Активация сгдаживания
var styleInputRange020 = document.createElement('style');
styleInputRange020.type = 'text/css';
var rules020 = document.createTextNode(".smooth.jsx-3659451671:active::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/841310156754911282/gesture_black_24dp.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange020.appendChild(rules020);
document.getElementsByTagName("head")[0].appendChild(styleInputRange020);
//Активированное сгдаживание
var styleInputRange021 = document.createElement('style');
styleInputRange021.type = 'text/css';
var rules021 = document.createTextNode(".smooth.jsx-3659451671.act1::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/841310156754911282/gesture_black_24dp.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange021.appendChild(rules021);
document.getElementsByTagName("head")[0].appendChild(styleInputRange021);
//Активный бэкграунд сгдаживания
var styleInputRange022 = document.createElement('style');
styleInputRange022.type = 'text/css';
var rules022 = document.createTextNode(".act1::before {content: ''; margin: 2px; flex: 1 1 0%; border-radius: 3px; align-self: stretch; animation: 2s linear 0s infinite normal none running pulsing}");
styleInputRange022.appendChild(rules022);
document.getElementsByTagName("head")[0].appendChild(styleInputRange022);


//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Стиль закрывания
var styleInputRange1019 = document.createElement('style');
styleInputRange1019.type = 'text/css';
var rules1019 = document.createTextNode(".clear.jsx-3659451671::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/841313973290926163/close_black_24dp.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange1019.appendChild(rules1019);
document.getElementsByTagName("head")[0].appendChild(styleInputRange1019);
//Активация сгдаживания
var styleInputRange1020 = document.createElement('style');
styleInputRange1020.type = 'text/css';
var rules1020 = document.createTextNode(".clear.jsx-3659451671:active::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/841315545923190784/close_black_24dp.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange1020.appendChild(rules1020);
document.getElementsByTagName("head")[0].appendChild(styleInputRange1020);

//////////////////////////////////////////////////////////////////////////////////////////////////////////


var styleInputRange14 = document.createElement('style');
styleInputRange14.type = 'text/css';
styleInputRange14.classList.add("fonot___________");
var rules14 = document.createTextNode(".material-icons-new {display: inline-block;width: 24px;height: 24px;background-repeat: no-repeat;background-size: contain;}");
styleInputRange14.appendChild(rules14);
document.getElementsByTagName("head")[0].appendChild(styleInputRange14);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var styleInputRange23 = document.createElement('style');
styleInputRange23.type = 'text/css';
var rules23 = document.createTextNode(".book.jsx-1307288772::before {opacity: 0}");
//styleInputRange23.appendChild(rules23);
//document.getElementsByTagName("head")[0].appendChild(styleInputRange23);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var cssAnimation2 = document.createElement('style');
cssAnimation.type = 'text/css';
var rules00 = document.createTextNode("@keyframes here {100%, 0% { background-color: rgba(255, 255, 255, 0.13); } 50% { background-color: rgba(255, 255, 255, 1); }}");
cssAnimation.appendChild(rules00);
document.getElementsByTagName("head")[0].appendChild(cssAnimation2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Стиль рандома
var styleInputRange25 = document.createElement('style');
styleInputRange25.type = 'text/css';
var rules25 = document.createTextNode(".rand.jsx-3659451671::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/833071627020926976/rand.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange25.appendChild(rules25);
document.getElementsByTagName("head")[0].appendChild(styleInputRange25);
//Активация рандома
var styleInputRange26 = document.createElement('style');
styleInputRange26.type = 'text/css';
var rules26 = document.createTextNode(".rand.jsx-3659451671:active::after {display: block; content: ' '; background-image: url('https://cdn.discordapp.com/attachments/827569141782282272/833074439582122034/rand.svg'); background-size: 35px 35px; height: 35px; width: 35px;}");
styleInputRange26.appendChild(rules26);
document.getElementsByTagName("head")[0].appendChild(styleInputRange26);
//Активация рандома
var styleInputRange27 = document.createElement('style');
styleInputRange27.type = 'text/css';
//var rules27 = document.createTextNode(".rand.tool.jsx-3659451671:hover::before {content: '';  margin: 2px; flex: 1 1 0%; border-radius: 3px; align-self: stretch; animation: 5s linear 0s infinite normal none running rainbow2;}");
//styleInputRange27.appendChild(rules27);
document.getElementsByTagName("head")[0].appendChild(styleInputRange27);
//////////////////////////////////////////////////////////////////////////////////////////////////////////


var cssAnimation3 = document.createElement('style');
cssAnimation.type = 'text/css';
var rules000 = document.createTextNode('@keyframes rainbow2 {'+
                                    '100%, 0% { background-color: rgb(255, 0, 0);}'+
                                    '8% { background-color: rgb(255, 127, 0);}'+
                                    '16% { background-color: rgb(255, 255, 0);}'+
                                    '25% { background-color: rgb(127, 255, 0);}'+
                                    '33% { background-color: rgb(0, 255, 0);}'+
                                    '41% { background-color: rgb(0, 255, 127);}'+
                                    '50% { background-color: rgb(0, 255, 255);}'+
                                    '58% { background-color: rgb(0, 127, 255);}'+
                                    '66% { background-color: rgb(0, 0, 255);}'+
                                    '75% { background-color: rgb(127, 0, 255);}'+
                                    '83% { background-color: rgb(255, 0, 255);}'+
                                    '91% { background-color: rgb(255, 0, 127);}'
                                    +'}');
cssAnimation.appendChild(rules000);
document.getElementsByTagName("head")[0].appendChild(cssAnimation3);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Стиль радио
var styleInputRange28 = document.createElement('style');
styleInputRange28.type = 'text/css';
var rules28 = document.createTextNode(".fi.input[type='range' i] {background-color: initial; cursor: default; appearance: auto; box-sizing: border-box; margin: 3px 3px 0px 5px; padding: initial; border: initial;}");
styleInputRange28.appendChild(rules28);
document.getElementsByTagName("head")[0].appendChild(styleInputRange28);
//Выбрано
var styleInputRange29 = document.createElement('style');
styleInputRange29.type = 'text/css';
var rules29 = document.createTextNode("input.fi:checked + label {background-color: rgb(204, 191, 228); color: rgb(73, 40, 179);}");
styleInputRange29.appendChild(rules29);
document.getElementsByTagName("head")[0].appendChild(styleInputRange29);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var cssAnimation21 = document.createElement('style');
cssAnimation.type = 'text/css';
var rules001 = document.createTextNode("@keyframes viper {100%, 0% { color: #8a2be2; } 9% { color: #945cca; } 18% {color: #9781b1;} 27% {color: #92a297;} 36% {color: #83c17a;} 45% {color: #67e056;} 54% {color: #0eff0e;} 63% {color: #67e056;} 72% {color: #83c17a;} 81% {color: #92a297;} 90% {color: #9781b1;}}");
cssAnimation.appendChild(rules001);
document.getElementsByTagName("head")[0].appendChild(cssAnimation21);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var cssAnimation22 = document.createElement('style');
cssAnimation.type = 'text/css';
var rules002 = document.createTextNode("@keyframes plane {100%, 0% {background-position: 0px -40px;} 50% {background-position: 0px -60px;}}");
cssAnimation.appendChild(rules002);
document.getElementsByTagName("head")[0].appendChild(cssAnimation22);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Активация кнопки кастомного контекстного меню
var styleInputRange0201 = document.createElement('style');
styleInputRange0201.type = 'text/css';
var rules0201 = document.createTextNode(".ctxmbutton:hover {background-color: powderblue; cursor: pointer;}");
styleInputRange0201.appendChild(rules0201);
document.getElementsByTagName("head")[0].appendChild(styleInputRange0201);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var styleInputRange0202 = document.createElement('style');
styleInputRange0202.type = 'text/css';
var rules0202 = document.createTextNode(".reded:hover {background-color: rgba(255, 100, 100, 0.7);}");
styleInputRange0202.appendChild(rules0202);
document.getElementsByTagName("head")[0].appendChild(styleInputRange0202);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var cssAnimation222 = document.createElement('style');
cssAnimation.type = 'text/css';
var rules0022 = document.createTextNode("@keyframes decay {100%, 0% {box-shadow: 0px 0px 8px -2px red;} 50% {box-shadow: 0px 0px 10px 1px red;}}");
cssAnimation.appendChild(rules0022);
document.getElementsByTagName("head")[0].appendChild(cssAnimation222);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var cssAnimation2222 = document.createElement('style');
cssAnimation.type = 'text/css';
var rules00222 = document.createTextNode("@keyframes bit {100%, 0% {background-position: 20px -25px; background-size: 100%;} 50% {background-position: -30px -30px; background-size: 130%;}}");
cssAnimation.appendChild(rules00222);
document.getElementsByTagName("head")[0].appendChild(cssAnimation2222);

//////////////////////////////////////////////////////////////////////////////////////////////////////////



var styleInputRange02019 = document.createElement('style');
styleInputRange02019.type = 'text/css';
var rules02019 = document.createTextNode(".thikness-input {background-color: #00000000; border: none; width: 30px; font-family: 'Black'; color: rgb(67, 222, 153); font-Size: 17px; text-align: center;}");
styleInputRange02019.appendChild(rules02019);
document.getElementsByTagName("head")[0].appendChild(styleInputRange02019);

//////////////////////////////////////////////////////////////////////////////////////////////////////////


function createCanvas(height=800, width=800){
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = "400px";
    canvas.style.height = "400px";
    canvas.style.position = "absolute";
    canvas.style.borderRadius = "200px";
    canvas.style.border = "2px solid";
    canvas.style.zIndex=99999;
    canvas.style.boxShadow = "0px 5px 5px 0px rgb(0 0 0 / 50)";
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return canvas;
}

var canvas300;
var pos;
var left;
var top;
var width;
var height;

function clientMouseMove(x, y){
    var pointerCanvas = Q("jsx-150592943")[0];
    var event = new Event('mousemove', { bubbles: true, cancelable: true});
    event.clientX=x;
    event.clientY=y;
    pointerCanvas.dispatchEvent(event);
}

function clientMouseDown(x, y){
    var pointerCanvas = Q("jsx-150592943")[0];
    var event = new Event('mousedown', { bubbles: true, cancelable: true});
    event.clientX=x;
    event.clientY=y;
    pointerCanvas.dispatchEvent(event);
}

function clientMouseUp(x, y){
    var pointerCanvas = Q("jsx-150592943")[0];
    var event = new Event('mouseup', { bubbles: true, cancelable: true});
    event.clientX=x;
    event.clientY=y;
    pointerCanvas.dispatchEvent(event);
}


function mouseDown(x, y){
    var left = pos.x;
    var top = pos.y;
    var width = pos.width;
    var height = pos.height;
    var event = new Event('mousedown', { bubbles: true, cancelable: true} );
    event.clientX=left+(x*width/1516);
    event.clientY=top+(y*height/848);
    canvas300.dispatchEvent(event);
}


function mouseMove(x, y){
    var left = pos.x;
    var top = pos.y;
    var width = pos.width;
    var height = pos.height;
    let event = new Event('mousemove', { bubbles: true, cancelable: true});
    event.clientX=left+(x*width/1516);
    event.clientY=top+(y*height/848);
    canvas300.dispatchEvent(event);
}

function mouseUp(){
    var event = new Event('mouseup', { bubbles: true, cancelable: true} );
    canvas300.dispatchEvent(event);
}


function drawSolidLine(arr){
    if (arr.length > 1){
 //       canvas = Q("jsx-3193114933 ")[0];
 //       pos = canvas.getBoundingClientRect();
        left = pos.x;
        top = pos.y;
        width = pos.width;
        height = pos.height;
        mouseDown(arr[0][0], arr[0][1]);
        arr.forEach(function (point){mouseMove(point[0], point[1]);});
        mouseUp();
    }
}

function convert0Dto2D(arr){
    var arr2D = [];
    for (let i=0; i<arr.length; i++){
        if (i % (1516*4) == 0){
            arr2D.push([]);
        }
        if (i % 4 == 0){
            arr2D[arr2D.length-1].push([]);
        }
        arr2D[arr2D.length-1][arr2D[arr2D.length-1].length-1].push(arr[i]);
    }
    return arr2D;
}

function isArrayEqual(arr1, arr2){
    if (arr1.length == arr2.length){
        for (let i=0; i<arr1.length; i++){
            if (arr1[i]==arr2[i]){
                //ничего неделание
            } else {return false;}
        }
    } else {return false;}
    return true;
}

function isArrayEqual2(arr1, arr2){
    if (arr1.join(',') == arr2.join(',')){
        return true;
    }
    return false;
}

function getBorderOfNew(arr){
    var cordsArr=[];
    for (let y=0; y<arr.length; y++){
        for (let x=0; x<arr[0].length; x++){
            var key1=false;
            var key2=false;
            var key3=false;
            var key4=false;
            if (y != 0){if (arr[y-1][x] == 1){key1=true}} else if (arr[y][x] == 1){cordsArr.push([x, y])}
            if (x != 0){if (arr[y][x-1] == 1){key1=true}} else if (arr[y][x] == 1){cordsArr.push([x, y])}
            if (y != arr.length-1){if (arr[y+1][x] == 1){key1=true}} else if (arr[y][x] == 1){cordsArr.push([x, y])}
            if (x != arr[0].length-1){if (arr[y][x+1] == 1){key1=true}} else if (arr[y][x] == 1){cordsArr.push([x, y])}
            if (arr[y][x] == 0 && ( key1 || key2 || key3 || key4)){
                cordsArr.push([x, y]);
            }
        }
    }
    return cordsArr;
}

function arrInArr(arr, childArr){
    for (let i=0; i<arr.length; i++){
        if (childArr[0]==arr[i][0] && childArr[1]==arr[i][1]){
            return i;
        }
    }
    return -1;
}

function sortBorderArray(arr){
    var newArr=[arr[0]];
    arr.splice(0, 1);
    var index;
    var minS;
    var realLengthOfArray = arr.length;
    for (let i=0; i< realLengthOfArray; i++){
        var c = newArr[newArr.length-1]; // последняя точка
        var lastIndex;
        minS = 10000;
        for (let k=0; k<arr.length; k++){
            let x0 = c[0];
            let y0 = c[1];
            let x1 = arr[k][0];
            let y1 = arr[k][1];
            let curS = ((x0-x1)**2+(y0-y1)**2)**0.5;
            if (curS < minS){
                minS = curS;
                lastIndex = k;
            }
        }
        if (minS>2){

        }

        newArr.push(arr[lastIndex]);
        arr.splice(lastIndex, 1);
    }

    var newNewArr = [];
    for (let index=0; index<newArr.length; index++){
        if (index % 2 == 0){
            newNewArr.push(newArr[index]);
        }
    }

    return newNewArr;
}


function drawNsort(arr){
    canvas300 = Q("jsx-3193114933 ")[0];
    pos = canvas300.getBoundingClientRect();
    var lastPoint=arr[0];
    mouseDown(lastPoint[0], lastPoint[1]);
    arr.splice(0, 1);
    var index;
    var minS;
    var key = false;
    var realLengthOfArray = arr.length;
    for (let i=0; i<realLengthOfArray; i++){
           var lastIndex;
           minS = 1E38;
            for (let k=0; k<arr.length; k++){
                let x0 = lastPoint[0];
                let y0 = lastPoint[1];
                let x1 = arr[k][0];
                let y1 = arr[k][1];
                let curS = ((x0-x1)**2+(y0-y1)**2)**0.5;
                if (curS < minS){
                    minS = curS;
                    lastIndex = k;
                }
            }
           lastPoint = arr[lastIndex];
           arr.splice(lastIndex, 1);

            if (key){
                mouseDown(lastPoint[0], lastPoint[1]);
            }

            if (minS>2){
                mouseUp();
                key = true;
            } else {mouseMove(lastPoint[0], lastPoint[1]); key=false;}
        if (i==realLengthOfArray-1){
            mouseUp();
            curThicc.click();
            Q("jsx-3659451671 tool fil")[0].click();
        }
    }
}


function drawArray(arr){
    var canvas = Q("jsx-3193114933 ")[0];
    var pos = canvas.getBoundingClientRect();
    var left = pos.x;
    var top = pos.y;
    var width = pos.width;
    var height = pos.height;
    for (let i=0; i<arr.length; i++){
        let event = new Event('mousedown', { bubbles: true, cancelable: true} );
        event.clientX=left+(arr[i][0]*width/1516);
        event.clientY=top+(arr[i][1]*height/848);

        canvas.dispatchEvent(event);
        event = new Event('mouseup', { bubbles: true, cancelable: true} );
        canvas.dispatchEvent(event);
    }
}


function glass(point){
    var canvas = Q("jsx-150592943")[0];
    var rect = canvas.getBoundingClientRect();
    var x = rect.x;
    var y = rect.y;

    //Текущий размер холста
    var curWidth = rect.width;
    var curHeight = rect.height;

    //Реальный размер холста
    var realWidth = 1516;
    var realHeight = 848;

    //Реальное расположение точки
    var realPointX = Q("xmirror")[0].value;
    var realPointY = Q("ymirror")[0].value;
    //Угол
    var alpha = 180 - Q("degmirror")[0].value;

    //Коэффициент отличия
    var coefW = curWidth / realWidth;
    var coefH = curHeight / realHeight;

    //Конвертированные реальные точки
    var convPointX = realPointX * coefW;
    var convPointY = realPointY * coefH;

    //Получаемая точка
    var C = point;
    //Центарльная точка
    var A = [convPointX, convPointY];

    //Катеты основного треугольника
    var AN = (C[0] - A[0]);
    var CN = -(C[1] - A[1]);
    //Угол у центральной точки
    var beta = Math.atan(CN/AN)/(Math.PI/180);
    if (AN<0){alpha = 180 + (alpha-90)}
    //Угол BAN
    var BAN = (alpha - beta) + alpha;
    //Гипотенузы AC = AB
    var AC = Math.sqrt(AN ** 2 + CN ** 2);
    //Катет BM
    var BM = Math.sin(Math.PI/180 * BAN) * AC;
    //Катет AM
    var AM = Math.cos(Math.PI/180 * BAN) * AC;
    //Точка B
    var B = [A[0] + AM, A[1] - BM];

    /*var middleCanvas = Q("mirror-canvas")[0];
    var context = middleCanvas.getContext("2d");
    context.lineWidth = 20;
    context.beginPath();
    context.moveTo(point[0]/coefW, point[1]/coefH);
    context.lineTo(point[0]/coefW+5, point[1]/coefH+5);
    context.closePath();
    context.stroke();*/

    return B;
}


function sleep(millis) {
    var t = (new Date()).getTime();
    var i = 0;
    while (((new Date()).getTime() - t) < millis) {
        i++;
    }
}

var canvas0000 = document.createElement('canvas');

function getPix(x, y, canvas){
    let ctx = canvas0000.getContext('2d').getImageData(x, y, 1, 1).data;
    return ctx
}

function draw(x1, y1){
    canvas = Q("jsx-150592943")[0];
    var pos = canvas.getBoundingClientRect();
    let x = pos.x;
    let y = pos.y;
    let event = new Event('mousedown', { bubbles: true, cancelable: true} );
    event.clientY=y+y1;
    event.clientX=x+x1;
    canvas.dispatchEvent(event);
    event = new Event('mouseup', { bubbles: true, cancelable: true} );
    canvas.dispatchEvent(event);
}

var canvas;
function globalDraw(){
    canvas = Q("jsx-150592943")[0];
    alert("WRONG FUNC");
    var url = document.querySelector("#content > input[type=text]:nth-child(2)").value;

    var img = new Image();
    //const img = document.createElement('img');

    img.src = url;
    img.crossOrigin = "Anonymous";

    var context = canvas.getContext('2d');

    canvas.width=192;
    canvas.height=128;

    img.onload=function(){
        alert("Loaded");
        context.drawImage(img, 0, 0, 192, 128);

        let preArr = [];
        for (let y=0; y<canvas.height; y++){
            for (let x=0; x<canvas.width; x++){
                let curPix = getPix(x, y, canvas);

                if (curPix != preArr){
                    preArr=curPix;
                    let r = curPix[0];
                    let g = curPix[1];
                    let b = curPix[2];
                    setColor(rgb2hex(r, g, b));
                }
                draw(x*2, y*2);
            }
        }
        alert("END");
    };

    img.onerror=function(){
        alert('Error to load image');
    }
}

function rgb2hex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function setColor(color) {
  const input = document.querySelector('input[type=color]');
  const value = input.value;
  input.value = color;
  input._valueTracker.setValue(value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}


function setValue(input, value) {
  input.value = value;
  input._valueTracker.setValue();
  input.dispatchEvent(new Event('input', { bubbles: true }));
}


function setNess(n) {
  const input = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity > input.jsx-340028725");
  const value = input.value;
  input.value = n/100;
  input._valueTracker.setValue(value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}


window.addEventListener("pointerup", (e)=>{
    var item = Q("contextmenu")[0];
    if (item && !e.target.classList.contains("ctxmbutton")){item.parentNode.removeChild(item)};
});

window.onwheel = ()=>{
    var item = Q("contextmenu")[0];
    if (item){item.parentNode.removeChild(item)};
};



var MyVar1 = 0;
var MyVar2 = 128;
var MyVar3 = 255;
var Checker1= 0;
var Checker2= 0;
var Checker3= 0;
var Key1 = false;
var globalKey=false;

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function cencFunc(u){
    if(!u || !u.classList){return}

    var g = u.parentNode;
    if (g.firstChild.children[1]){
        if (g.firstChild.children[1].firstChild.innerText == "DOCTORDEATHDDRACULA "){
            g.firstChild.firstChild.firstChild.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/858404435432570920/doctor-removebg-preview.png)";
            g.firstChild.firstChild.firstChild.style.backgroundPosition="-4px 0px";
            g.firstChild.firstChild.firstChild.style.backgroundSize="120%";
            g.firstChild.children[1].firstChild.style.color="black";
            g.firstChild.children[1].firstChild.style.opacity=1;
            g.firstChild.firstChild.style.border="2px solid red";
            g.firstChild.firstChild.style.backgroundColor="black";
            g.firstChild.firstChild.style.transform="scale(-1, 1)";
        }
    }
    if (g.firstChild.firstChild && g.firstChild.firstChild.firstChild){
        if (g.firstChild.firstChild.firstChild.innerText == "DOCTORDEATHDDRACULA "){
            g.firstChild.children[1].firstChild.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/858404435432570920/doctor-removebg-preview.png)";
            g.firstChild.children[1].firstChild.style.backgroundPosition="-4px 0px";
            g.firstChild.children[1].firstChild.style.backgroundSize="120%";
            g.firstChild.children[1].style.border="2px solid red";
            g.firstChild.children[1].style.backgroundColor="black";
            g.firstChild.firstChild.firstChild.style.color="black";
        }
    }

    if(u.classList.contains("load")){u.addEventListener("DOMNodeInserted", (e)=>{
        e.path[3].classList.remove("load");
        cencFunc(e.path[3]);
    }); return;}
    if (u.classList.contains("answer")){
        if(blackArr.indexOf(u.firstChild.firstChild.innerText.toLowerCase()) != -1){
            u.k=!0;
            u.firstChild.children[1].style.backgroundColor="#000";
            u.firstChild.children[1].firstChild.style.opacity="0";
        } else {
            u.k=!1;
            u.firstChild.children[1].style.backgroundColor="";
            u.firstChild.children[1].firstChild.style.opacity="1";
        }
        u.parentNode.style.cursor="pointer";
        u.parentNode.onclick=()=>{
            if(u.k){
                u.k=!1;
                u.firstChild.children[1].style.backgroundColor="";
                u.firstChild.children[1].firstChild.style.opacity="1";
            }else{
                u.k=!0;
                u.firstChild.children[1].style.backgroundColor="#000";
                u.firstChild.children[1].firstChild.style.opacity="0";
            }
        }
    } else if (u.classList.contains("drawing")){
        if(blackArr.indexOf(u.children[1].firstChild.innerText.toLowerCase()) != -1){
            u.k=!0;
            u.children[1].children[1].style.backgroundColor="#000";
            u.children[1].children[1].firstChild.style.opacity="0";
        } else {
            u.k=!1;
            u.children[1].children[1].style.backgroundColor="";
            u.children[1].children[1].firstChild.style.opacity="1";
        }
        u.parentNode.style.cursor="pointer";
        u.parentNode.onclick=()=>{
            if(u.k){
                u.k=!1;
                u.children[1].children[1].style.backgroundColor="";
                u.children[1].children[1].firstChild.style.opacity="1";
            }else{
                u.k=!0;
                u.children[1].children[1].style.backgroundColor="#000";
                u.children[1].children[1].firstChild.style.opacity="0";
            }
        }
        var canv = u.children[1].children[1].firstChild;
        var nick = u.children[1].firstChild.innerText;
        canv.oncontextmenu=(e)=>{
            var contextmenu = document.createElement("div");
            contextmenu.classList.add("contextmenu");
            contextmenu.style.height="auto";
            contextmenu.style.width="auto";
            contextmenu.style.borderRadius="5px";
            contextmenu.style.border="2px solid black";
            contextmenu.style.backgroundColor="rgba(255, 255, 255, 0.8)";
            contextmenu.style.position="absolute";
            contextmenu.style.left=e.clientX+"px";
            contextmenu.style.top=e.clientY+"px";
            contextmenu.style.display="grid";
            contextmenu.style.padding="3px";
            contextmenu.style.transform=Q("jsx-2562723607 jsx-3822683434 screen fade-enter-done")[0].style.transform;

            var copy = document.createElement("a");
            copy.classList.add("ctxmbutton");
            copy.innerText = "КОПИРОВАТЬ";
            copy.style.fontFamily = "Black";
            //copy.style.color = "white";
            copy.style.height="auto";
            copy.style.width="auto";
            copy.style.borderRadius="3px";
            copy.style.margin="0px 0px 2px 0px";
            copy.style.textAlign="left";
            copy.onclick=()=>{canv.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})])); contextmenu.parentNode.removeChild(contextmenu);};
            contextmenu.appendChild(copy);
            var save = document.createElement("a");
            save.classList.add("ctxmbutton");
            save.innerText="CОХРАНИТЬ";
            save.style.fontFamily = "Black";
            //save.style.color = "white";
            save.style.height="auto";
            save.style.width="auto";
            save.style.borderRadius="3px";
            save.style.margin="0px 0px 2px 0px";
            save.style.textAlign="left";
            save.onclick=()=>{
                let link = document.createElement('a');
                link.download = `${nick}.png`;
                link.href = canv.toDataURL();
                link.click();
                contextmenu.parentNode.removeChild(contextmenu);
            };
            contextmenu.appendChild(save);
            document.querySelector("#content").appendChild(contextmenu);

            return false;
        }
    }
}


function censorListener(){
    Q("scrollElements")[1].addEventListener("DOMNodeInserted", (e)=>{
        var u = e.target.firstChild;
        cencFunc(u);
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function AddButton(){
    var btn = document.querySelector("#content > div > div > div.jsx-3071142060.colors > div > div:nth-child(4)");
    btn.onclick = function(){
        if (Key1){Key1=false;}else{Key1=true};
    }
}

function debugName(){
    var name = document.getElementsByTagName("h3")[0];
    if (name.innerText == ""){
        Q("jsx-1307288772 drawing")[0].style.margin="15px 0px 10px";
    }
}

var doctorwas = false;
var was0;
var blackArr = [];
var intId;

function VIPList(q){
    if (!q){return}
    if(q.parentNode.classList.contains("empty")){return;};
    if (q.innerText.toLowerCase() == "doctordeathddracula " && window.btoa(window.window.getComputedStyle(q.parentNode.firstChild.firstChild).backgroundImage.substring(43).split('.')[0]) == 'NA=='){
        was0=true;
        var u = q.parentNode.children[2];
        if (u){u.parentNode.removeChild(u);}
        var v = q.previousSibling.children[1]
        if (v){v.parentNode.removeChild(v);}
        q.innerText="DoctorDeathDDracula"
        //q.innerText="Doctor ";
        //q.parentNode.style.background="linear-gradient(to right, red, yellow, green, cyan, blue, violet)";
        //q.style.webkitTextFillColor="transparent";
        //q.style.webkitBackgroundClip="text";
        q.parentNode.title="Создатель модификации & Рисователь Гаечек";
        q.href="https://t.me/DoctorDeathDDracula";
        q.parentNode.style.cursor="pointer";
        q.style.color="black";
        q.parentNode.onmouseenter=()=>{
            console.log('Now playing: Sam Houghton & Joe Collinson "from bullet per minute"')
            var a = document.getElementsByTagName("audio")[0];
            if (!a){
                a = new Audio();
                a.src="https://cdn.discordapp.com/attachments/833410401366573066/858770595320037396/b1d79b4b02fb8b_mp3cut.net.mp3";
                a.currentTime="1";
                document.querySelector("body").appendChild(a);
            }
            if(a.ended){a.currentTime="1";}
            a.volume=0;
            a.play();
            clearInterval(intId);
            intId = setInterval(function(){
                if(a.volume >= 0.2){
                    clearInterval(intId);
                }
                a.volume+=0.002;
            },20);

        };
        q.parentNode.onmouseleave=()=>{
            clearInterval(intId);
            var a = document.getElementsByTagName("audio")[0];
            intId = setInterval(function(){
                if(a.volume <= 0.01){
                    a.pause();
                    clearInterval(intId);
                }
                try{
                a.volume-=0.002;
                } catch {a.volume = 0; a.pause(); clearInterval(intId)}
            },10);
        }

        q.parentNode.style.animation="2.8s cubic-bezier(0.18, -0.57, 1, 1) 0s infinite normal none running decay, 1.4s cubic-bezier(1, 0.03, 0.59, 1.74) 0s infinite normal none running bit";
        q.style.opacity=1;
        q.style.fontFamily="fantasy";
        q.parentNode.style.backgroundColor="rgb(0, 0, 0)";
        q.parentNode.firstChild.style.backgroundColor="black";
        q.parentNode.firstChild.style.borderColor="red";
        q.parentElement.style.border="2px solid black";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/858404435432570920/doctor-removebg-preview.png)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="130%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-6px -3px";
        q.parentNode.style.backgroundPosition="60px -70px";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/858402910110744616/unknown.png?width=1440&height=400)";
        q.parentNode.style.backgroundPosition="20px -40px";
        q.parentNode.style.backgroundSize="324px 100px";
        //q.parentNode.onmouseenter=()=>{q.parentNode.style.transform="matrix(1.05, 0, 0, 1.05, 0, 0)"}
        //q.parentNode.onmouseleave=()=>{q.parentNode.style.transform="matrix(1, 0, 0, 1, 0, 0)"}
        q.parentNode.style.transition="none";
        //q.parentNode.style.boxShadow="0px 10px 15px";

        if (!doctorwas){
            var music0 = document.createElement("audio");
            music0.src="https://cdn.discordapp.com/attachments/833410401366573066/858407902947704872/8307-obemnyi-stuk-v-dver.mp3";
            music0.autoplay=true;
            music0.volume=1;
            doctorwas = true;
        }
        doctorwas = true;
    }
    else if (q.innerText.toLowerCase() == "krevetka74"){
        //q.style.background="linear-gradient(to right, red, yellow, green, cyan, blue, violet)";
        //q.style.webkitTextFillColor="transparent";
        //q.style.webkitBackgroundClip="text";
        q.style.opacity=1;
        q.parentNode.title="Стример";
        q.parentNode.style.cursor="pointer";
        q.parentNode.onclick=()=>{ window.open("https://www.twitch.tv/krevetka74", '_blank'); };
        q.parentNode.style.backgroundColor="#f7c2c2";
        q.parentElement.style.border="2px rgb(255, 255, 255) solid";
        q.parentNode.getElementsByClassName("avatar")[0].style.borderColor="#ffffff";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://cdn.discordapp.com/attachments/833410401366573066/841475537499455498/-1.png)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-2px 4px";
        q.parentNode.style.transition="all 0.3s linear 0s";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/846132899258564658/giphy.gif)";
        q.parentNode.style.backgroundPosition="153% 15%";
        q.parentNode.style.backgroundSize="73%";

    }
    else if (q.innerText.toLowerCase() == "lepishov2007"){
        q.parentNode.title="Стример";
        q.parentNode.style.cursor="pointer";
        q.parentNode.onclick=()=>{ window.open("https://www.twitch.tv/lepishov2007", '_blank'); };
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/847413107005718548/wallpaper.png)";
        q.style.color="white";
        q.style.fontFamily="fantasy";
        q.style.fontStyle="oblique";
        q.style.fontSize="xx-large";
        q.parentNode.style.border="none";
        q.style.overflow="unset";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/847414409957343232/dd86851c-cf1a-4211-884b-4b1d369d3c37-profile_image-300x300.png)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="160%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px -10px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
    }
    else if (q.innerText.toLowerCase() == "xviperx"){
        q.parentNode.title="Стример";
        q.style.animation = "viper 2s linear";
        q.style.opacity=1;
        q.parentNode.style.backgroundColor="chartreuse";
        q.parentNode.style.borderColor="darkmagenta";
        q.parentNode.style.borderLeft="dashed 4px";
        q.style.animationIterationCount="infinite";
        q.style.fontFamily="fantasy";
        q.style.fontSize="large";
        q.parentNode.style.cursor="pointer";
        q.parentNode.onclick=()=>{ window.open("https://www.twitch.tv/xviperx_maks", '_blank'); };
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/827569141782282272/844594975546277929/-1.png?width=676&height=676)";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        q.previousElementSibling.style.backgroundColor="black";
        q.parentNode.style.transition="all 0.3s linear 0s";
    }
    else if (q.innerText.toLowerCase() == "bobtyan"){
        q.parentNode.title="Стример";
        q.parentNode.style.backgroundColor="lightblue";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://cdn.discordapp.com/attachments/833410401366573066/844929630329896990/8c9367ad-edac-4808-ad31-965923a180cd-profile_image-70x70.png)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-2px -3px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        q.parentNode.getElementsByClassName("avatar")[0].style.borderColor="yellow";
        q.parentNode.style.border="3px solid yellow";
        q.parentNode.style.cursor="pointer";
        q.parentNode.onclick=()=>{ window.open("https://www.twitch.tv/bobtyan", '_blank'); };
        q.parentNode.style.transition="all 0.3s linear 0s";
    }
    else if (q.innerText.toLowerCase() == "беатмахоне"){
        q.parentNode.title="Стример";
        q.parentNode.style.backgroundColor="red";
        q.parentNode.getElementsByClassName("avatar")[0].style.border="3px solid black";
        q.parentNode.style.border="3px solid black";
        q.style.color="white";
        q.style.fontFamily="cursive";
        q.parentNode.style.transition="all 0.3s linear 0s";
        q.parentNode.style.cursor="pointer";
        q.parentNode.onclick=()=>{ window.open("https://www.twitch.tv/beatmaxone", '_blank'); };
        q.style.fontWeight="bolder";

        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/844986185788162048/6f9d8ae1-7e01-4876-99cb-6386e13a5550-profile_image-70x70.png)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-2px -3px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
    }
    else if (q.innerText.toLowerCase() == "peps_nn"){
        q.parentNode.title="Стример";
        q.parentNode.style.backgroundColor="darkorange";
        q.parentNode.getElementsByClassName("avatar")[0].style.border="3px solid brown";
        q.parentNode.style.border="3px solid brown";
        q.style.color="yellow";
        q.parentNode.style.transition="all 0.3s linear 0s";
        q.parentNode.style.cursor="pointer";
        q.parentNode.onclick=()=>{ window.open("https://www.twitch.tv/peps_nn", '_blank'); };
        //q.style.textShadow="2px 2px 3px black";

        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://cdn.discordapp.com/attachments/833410401366573066/845064787028475924/unknown.png)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-3px -3px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
    }
    else if (q.innerText.toLowerCase() == "груша "){
        q.parentNode.title="Художник";
        q.parentNode.style.backgroundColor="rgb(247 232 208)";
        q.parentNode.getElementsByClassName("avatar")[0].style.border="0px solid brown";
        q.parentNode.style.border="3px solid #c7945a";
        q.style.color="#824700";
        q.style.fontSize="x-large";
        q.style.fontFamily='Bold';
        q.style.fontStyle="italic";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/845257788443590686/unknown.png)";
        q.parentNode.style.backgroundSize="130%";
        q.parentNode.style.backgroundPosition="-35px -40px";
        q.parentNode.style.backgroundRepeat="no-repeat";
        q.parentNode.style.transition="none";

        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/845264187927298068/unknown.png)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="160%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px -10px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
    }
    else if (q.innerText.toLowerCase() == "мэл "){
        q.parentNode.title="Друг Баракуды & Художник";
        q.parentNode.style.border="3px solid darkblue";
        q.parentNode.style.backgroundColor="#f9f9f9";
        q.parentNode.style.backgroundImage="url(https://cdn.discordapp.com/attachments/833410401366573066/848315223973691412/b5176b6979ba46da196d35b515fc5110.gif)";
        q.parentNode.style.backgroundSize="250px";
        q.parentNode.style.backgroundPosition="center";
        q.parentNode.style.backgroundRepeat="no-repeat";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="120%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-5px -2px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/848315900771696640/IMG_20201122_201910.jpg?width=765&height=676)";
    }
    else if (q.innerText.toLowerCase() == "владыко "){
        q.parentNode.title="Художник";
        q.parentNode.style.backgroundColor="rgb(224 18 18)";
        q.style.color="rgb(31 31 31)";
        q.parentNode.firstChild.style.border="none";
        q.parentNode.firstChild.style.backgroundColor="rgb(31 31 31)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/845797316471291924/111.png?width=478&height=676)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="2px 2px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="90%";
    }
    else if (q.innerText.toLowerCase() == "бpaйc"){
        q.parentNode.title="Художник";
        q.style.opacity=1;
        q.style.webkitTextStrokeWidth="1px";
        q.style.webkitTextStrokeColor="#000";
        q.style.letterSpacing="3px";
        q.style.fontSize="20px";
        q.style.animation="rainbow 5s linear";
        q.style.animationIterationCount="infinite";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/851498681952632933/unknown.png)";
        q.parentNode.style.backgroundSize="110%";
        q.parentNode.style.backgroundPosition="-10px";
        q.parentNode.style.transition="all 0s linear 0s";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="20px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/846082563919052870/1fb87dd02579e688.png?width=901&height=676)";
    }
    else if (q.innerText.toLowerCase() == "Jen Menots".toLowerCase()){
        q.parentNode.title="Стример & Художник";
        q.style.color="white";
        q.parentNode.style.cursor="pointer";
        q.parentNode.onclick=()=>{ window.open("https://www.twitch.tv/jen_menots", '_blank'); };
        q.parentNode.style.backgroundColor="black";
        q.parentNode.style.border="2px solid white";
        q.parentNode.style.backgroundSize="150%";
        q.parentNode.style.backgroundPosition="-10px";
        q.parentNode.style.transition="all 0s linear 0s";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="120%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-5px -2px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/849760932505845810/unknown.png)";
        q.parentElement.getElementsByTagName("span")[0].parentNode.style.border="2px solid white";

    }
    else if (q.innerText.toLowerCase() == "alexkimoor(кутулуху)"){
        q.parentNode.title="Фанат & Художник";
        q.parentNode.style.backgroundImage="url(https://coverfiles.alphacoders.com/116/116776.jpg)";
        q.parentNode.style.backgroundPosition="center";
        q.parentNode.style.backgroundSize="100%";
        q.parentNode.style.border="none";
        q.style.color="white";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/849408701344383027/bk7fK7xy_J8.png)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="160%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-15px -10px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
    }
    else if (q.innerText.toLowerCase() == "unchechan"){
        q.parentNode.title="Художник";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/852638910257037333/852680550824017930/4.png?width=1440&height=480)";
        q.parentNode.style.backgroundPosition="-30px -43px";
        q.parentNode.style.backgroundSize="127%";
        q.parentNode.style.border="none";
        q.parentNode.style.cursor="pointer";
        q.parentNode.style.backgroundColor="black";
        q.parentNode.firstChild.style.backgroundColor="black";
        q.parentNode.firstChild.style.border="none";
        q.parentNode.style.transition="0s";
        q.style.color="#7b2121";
        q.style.fontSize="15px";
        q.style.fontWeight="900";
        q.style.fontFamily="sans-serif";
        q.style.letterSpacing="-1px";
        q.parentNode.style.cursor="pointer";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/852638910257037333/852680536761827348/1.png)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="5px -2px";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="90%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundColor="black";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        var o=q.parentNode.firstChild.children[1];
        if(o){o.parentNode.removeChild(o);}
    }
    else if (q.innerText.toLowerCase() == "IV547".toLowerCase()){
        q.parentNode.title="Донатер";
        q.parentNode.style.backgroundImage="url(https://cdn.discordapp.com/attachments/833410401366573066/850471589543936000/blog-post-01-1.gif)";
        q.parentNode.style.backgroundPosition="180px -10px";
        q.parentNode.style.backgroundSize="70%";
        q.parentNode.style.border="none";
        q.style.color="white";
        q.parentNode.style.cursor="pointer";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/850469025221443624/unknown.png?width=728&height=676)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="130%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-5px -5px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
    }
    else if (q.innerText.toLowerCase() == "sеbаdavinсh "){
        q.parentNode.title="Стример";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/850676778766958602/unknown.png)";
        q.parentNode.style.backgroundPosition="0px -40px";
        q.parentNode.style.backgroundSize="100%";
        q.parentNode.style.border="none";
        q.parentNode.style.animation="plane 5s linear";
        q.parentNode.style.animationIterationCount="infinite";
        q.parentNode.style.сursor="pointer";
        q.style.color="red";
        q.style.fontFamily="fantasy";
        q.parentNode.onclick=()=>{ window.open("https://www.twitch.tv/sebadavinch", '_blank'); };
        q.parentNode.style.transition="all 1s cubic-bezier(0.62, 0.66, 0.15, 1.5) 0.3s";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/851021557958836224/671841e8-c785-424b-b637-32e00e3a77fb-profile_image-300x300.png)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="center";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
    }
    else if (window.getComputedStyle(q.parentNode.firstChild.firstChild).backgroundImage.substring(43).split(".")[0] == "013"){
        q.parentNode.title="Начинающий художник & Стример";
        q.parentNode.style.backgroundImage="url(https://cdn.discordapp.com/attachments/833410401366573066/852612344470044713/giphy_22.gif)";
        q.parentNode.style.border="none";
        q.parentNode.style.cursor="pointer";
        q.parentNode.onclick=()=>{ window.open("https://twitch.tv/skatertioo_dorozhka", '_blank'); };
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/851907193610436639/852614521779912724/xFQ5F6Ar3PM.jpg)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="center 0px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
    }
    else if (window.getComputedStyle(q.parentNode.firstChild.firstChild).backgroundImage.substring(43).split(".")[0] == "228"){
        q.innerText="";
        q.parentNode.title="Xудожник & Аниматор";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/851530974880595988/854001745797316638/0dadaa53c1657664.gif)";
        q.parentNode.style.backgroundPosition="-30px 190px";
        q.parentNode.style.backgroundSize="400px";
        q.parentNode.style.border="2px solid black";
        q.parentNode.style.cursor="pointer";
        q.parentNode.style.transition="0s";
        q.parentNode.firstChild.style.backgroundColor="white";
        q.parentNode.firstChild.style.borderColor="black";
        //q.parentNode.onclick=()=>{ window.open("https://twitch.tv/skatertioo_dorozhka", '_blank'); };
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/851530974880595988/853984885411545098/7aeaf655964b606b.png?width=646&height=676)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="center 0px";
        q.parentElement.getElementsByTagName("span")[0].style.width="110%";
        q.parentElement.getElementsByTagName("span")[0].style.height="110%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        o=q.parentNode.firstChild.children[1];
        if(o){o.parentNode.removeChild(o);}
    }
    else if (q.innerText.toLowerCase() == "dоublеfrееzе"){
        q.parentNode.title="Ноунейм";
        q.parentNode.style.backgroundColor="rgb(0 0 0)";
        q.parentNode.getElementsByClassName("avatar")[0].style.border="0px solid brown";
        q.parentNode.style.border="3px solid #000000";
        q.style.color="#ffffff";
        q.style.fontSize="x-large";
        q.style.fontFamily='Bold';
        q.style.fontStyle="italic";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/785888608497696778/854033065247637524/c48f5846b55f5819.png)";
        q.parentNode.style.backgroundSize="100%";
        q.parentNode.style.backgroundPosition="0px -20px";
        q.parentNode.style.backgroundRepeat="no-repeat";
        q.parentNode.style.transition="none";

        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/785888608497696778/854033634654552134/d0617d2ac69625cb.png)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="100%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="0px 0px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
    }
    else if (q.innerText.toLowerCase() == "mamoru"){
        q.innerText="Mаmоru";
        q.parentNode.title="Меценат";
        q.parentNode.style.backgroundColor="rgb(0 0 0)";
        q.parentNode.getElementsByClassName("avatar")[0].style.border="0px solid brown";
        q.parentNode.style.border="3px solid rgb(115 28 28)";
        q.style.color="#ffffff";
        //q.style.fontSize="x-large";
        //q.style.fontFamily='Bold';
        //q.style.fontStyle="italic";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/855033465615286272/unknown.png?width=1440&height=666)";
        q.parentNode.style.backgroundSize="100%";
        q.parentNode.style.backgroundPosition="0px -20px";
        q.parentNode.style.backgroundRepeat="no-repeat";
        q.parentNode.style.transition="none";

        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/855033335223287828/unknown.png?width=676&height=676)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="200%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-20px -20px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        q.parentElement.getElementsByTagName("span")[0].style.border="1px solid";
    }
    else if (q.innerText.toLowerCase() == "niko"){
        q.innerText="NIKО";
        q.parentNode.title="Начинающий художник";
        q.parentNode.style.backgroundColor="rgb(0 0 0)";
        q.parentNode.getElementsByClassName("avatar")[0].style.border="0px solid brown";
        q.parentNode.style.border="none";
        q.style.color="#ffffff";
        q.style.fontFamily='Regular';
        //q.style.fontSize="x-large";
        //q.style.fontFamily='Bold';
        //q.style.fontStyle="italic";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/856881216048726036/103554.jpg?width=1202&height=676)";
        q.parentNode.style.backgroundSize="100%";
        q.parentNode.style.backgroundPosition="0px -40px";
        q.parentNode.style.backgroundRepeat="no-repeat";
        q.parentNode.style.transition="none";

        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/856880987982921758/99e1598da4d3c75c25eeda0cd5e79773.jpg)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="200%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-20px -20px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        q.parentElement.getElementsByTagName("span")[0].style.border="1px solid";
    }
    else if (q.innerText.toLowerCase() == "marshy"){
        q.parentNode.title="EU MEMBER";
        q.parentNode.style.backgroundColor="rgb(0 0 0)";
        q.parentNode.getElementsByClassName("avatar")[0].style.border="0px solid brown";
        q.parentNode.style.border="none";
        q.style.color="#ffffff";
        q.style.fontFamily='Regular';
        //q.style.fontSize="x-large";
        //q.style.fontFamily='Bold';
        //q.style.fontStyle="italic";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/858136215307681833/858144088809668618/tumblr_1fba8fa4272a845e6fb7381a3c52bda5_884d3cc7_500.gif)";
        q.parentNode.style.backgroundSize="100%";
        q.parentNode.style.backgroundPosition="0px -40px";
        q.parentNode.style.backgroundRepeat="no-repeat";
        q.parentNode.style.transition="none";

        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/858136215307681833/858143680878477342/6a91d21f339b8e236223cd0ec1a7ec29.png?width=676&height=676)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="120%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-7px -5px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        q.parentElement.getElementsByTagName("span")[0].style.border="1px solid";
    }
    else if (q.innerText.toLowerCase() == "шпилька"){
        q.parentNode.title="этот клоун меня обидел";
        q.parentNode.style.backgroundColor="rgb(0 0 0)";
        q.parentNode.getElementsByClassName("avatar")[0].style.border="0px solid brown";
        q.parentNode.style.border="none";
        q.style.color="#ffffff";
        //q.style.fontSize="x-large";
        //q.style.fontFamily='Bold';
        //q.style.fontStyle="italic";
        q.parentNode.style.backgroundImage="url(https://www.culture.ru/storage/images/e6aba7c47c2d76ec25933d9d69df5c98/32500952e797730ca4779a160b56dbc2.jpeg/c_fill,g_center,w_400,h_292/3921e00947ff971782713787f4442096.jpeg)";
        q.parentNode.style.backgroundSize="100%";
        q.parentNode.style.backgroundPosition="0px -40px";
        q.parentNode.style.backgroundRepeat="no-repeat";
        q.parentNode.style.transition="none";

        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1b/1b1059abad5787e0fb1f1544fb41c7ddee4f9a5b_full.jpg)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="120%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-7px -5px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        q.parentElement.getElementsByTagName("span")[0].style.border="1px solid";
    }
    else if (q.innerText.toLowerCase() == "ТРУБОЧКА".toLowerCase()){
        q.parentNode.title="стример";
        q.parentNode.style.backgroundColor="rgb(0 0 0)";
        //q.parentNode.getElementsByClassName("avatar")[0].style.border="0px solid brown";
        q.parentNode.style.border="none";
        q.style.color="#ffffff";
        q.parentNode.style.background="linear-gradient(to right, rgb(19 196 231), rgb(255 0 200))";
        q.parentNode.firstChild.style.backgroundColor="black";
        q.style.fontFamily="cursive";
        q.parentNode.style.cursor="pointer";

        q.parentNode.onclick=()=>{ window.open("https://www.twitch.tv/turb4ik", '_blank'); };
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/858473457896259638/57076064-91e6-4bb7-8a54-7b0e4ea62bdf-profile_image-300x300.png)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="120%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-4px -6px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        //q.parentElement.getElementsByTagName("span")[0].style.border="1px solid";
    }
    else if (q.innerText.toLowerCase().indexOf("линыч")!=-1){
        o=q.previousSibling.children[1];
        if(o){o.parentNode.removeChild(o);};
        q.parentNode.title="Художник";
        q.parentNode.style.backgroundColor="rgb(0 0 0)";
        //q.parentNode.getElementsByClassName("avatar")[0].style.border="0px solid brown";
        q.parentNode.style.border="2px solid white";
        q.style.color="#ffffff";
        q.parentNode.style.cursor="pointer";
        q.parentNode.style.backgroundPosition="center";
        q.parentNode.style.backgroundSize="330px";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/858290694288310314/859732181404745728/7b0e89d14bcc8b51f17a28711724351a.png?width=1369&height=676)";
        q.parentNode.firstChild.style.border="2px solid white";
        q.parentNode.style.transition="none";

        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/859729864022294528/imgonline-com-ua-Resize-jlRubIMY5z2mxLus-removebg-preview.png)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="120%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-4px -4px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="110%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        //q.parentElement.getElementsByTagName("span")[0].style.border="1px solid";
    }
    else if (q.innerText.toLowerCase() == "ArZer0".toLowerCase()){
        q.parentNode.title="Меценат, филантроп, плэйбой, анимешник...";
        q.parentNode.style.cursor="pointer";
        q.style.color="rgb(69,145,129)";
        q.parentNode.onmouseenter=()=>{
            console.log('Now playing: y2mate.com_-_Orochimarus_Full_Theme.mp3')
            var a = Q("audio-for-zero")[0];
            if (!a){
                a = new Audio();
                a.classList.add("audio-for-zero");
                a.src="https://cdn.discordapp.com/attachments/858056014889091142/859139360163102772/y2mate.com_-_Orochimarus_Full_Theme.mp3";
                a.currentTime="1";
                document.querySelector("body").appendChild(a);
            }
            if(a.ended){a.currentTime="1";}
            a.volume=0;
            a.play();
            clearInterval(intId);
            intId = setInterval(function(){
                a.volume+=0.002;
                if(a.volume >= 0.2){
                    clearInterval(intId);
                }
            },20);

        };
        q.parentNode.onmouseleave=()=>{
            clearInterval(intId);
            var a = Q("audio-for-zero")[0];
            intId = setInterval(function(){
                a.volume-=0.002;
                if(a.volume <= 0.01){
                    a.pause();
                    clearInterval(intId);
                }
            },10);
        }
        q.style.opacity=1;
        q.style.fontFamily="fantasy";
        q.parentNode.style.backgroundColor="rgb(0, 0, 0)";
        q.parentNode.firstChild.style.backgroundColor="black";
        q.parentNode.firstChild.style.borderColor="rgb(69,145,129)";
        q.parentElement.style.border="2px solid black";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/859142286071169084/hqdefault-removebg-preview.png)";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="180%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-23px -0px";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="30px";
        q.parentNode.style.backgroundPosition="60px -70px";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/858056014889091142/859139729123180554/QQzsrBH.gif)";
        q.parentNode.style.backgroundPosition="20px -100px";
        q.parentNode.style.backgroundSize="324px 200px";
        q.parentNode.style.transition="none";
    }
    else if (q.innerText.toLowerCase() == "2".toLowerCase()){
        o=q.previousSibling.children[1];
        if(o){o.parentNode.removeChild(o);};
        q.parentNode.title="стример";
        q.parentNode.style.backgroundColor="#f5f5dc";
        //q.parentNode.getElementsByClassName("avatar")[0].style.border="0px solid brown";
        q.parentNode.style.border="none";
        q.style.color="#000";
        q.parentNode.style.cursor="pointer";
        q.parentNode.style.backgroundImage="url(https://sunveter.ru/uploads/posts/2017-05/1493843158_fox9.gif)";
        q.parentNode.style.backgroundPosition="center";
        q.parentNode.style.backgroundRepeat="no-repeat";
        q.parentNode.style.backgroundSize="30%";

        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/859175678103650324/image0-removebg-preview.png)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="30px 0px 30px 30px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="130%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-8px -6px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        q.parentNode.style.transition="none";
        //q.parentElement.getElementsByTagName("span")[0].style.border="1px solid";

    }
    else if (q.innerText.toLowerCase() == "✧ Макс ✧".toLowerCase()){
        o=q.previousSibling.children[1];
        if(o){o.parentNode.removeChild(o);};
        q.parentNode.title="Фурри художник :3";
        q.parentNode.style.border="none";
        q.style.color="#FFF";
        q.parentNode.style.cursor="pointer";
        q.parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/853936724609728512/860099118789820436/unknown.png)";
        q.parentNode.style.backgroundPosition="center";
        q.parentNode.style.backgroundRepeat="no-repeat";
        q.parentNode.style.backgroundSize="100%";

        q.parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/860146784617365524/chachoo-removebg-preview.png)";
        q.parentElement.getElementsByTagName("span")[0].style.borderRadius="30px 0px 30px 30px";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundSize="130%";
        q.parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-8px -6px";
        q.parentElement.getElementsByTagName("span")[0].style.width="100%";
        q.parentElement.getElementsByTagName("span")[0].style.height="100%";
        q.parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
        q.parentElement.getElementsByTagName("span")[0].style.margin="0px";
        q.parentNode.style.transition="none";
    }
    else if (q.innerText.indexOf("#") != -1){
        q.title="Игрок";
        var text1 = q.innerText
        var index = text1.lastIndexOf("#");
        q.parentNode.style.backgroundColor=text1.substring(index, text1.length);
        q.innerText=text1.substring(0, index);
    }
    else if (document.URL.indexOf("book") != -1 && q.innerText.toLowerCase() != "doctordeathddracula" && !q.parentNode.classList.contains("waiting")){
        q.parentNode.onmouseenter=()=>{if (q.banned != true){ q.parentNode.style.boxShadow="0px 0px 10px red"} };
        q.parentNode.onmouseleave=()=>{if (q.banned != true){ q.parentNode.style.boxShadow=""} };
        q.parentNode.style.cursor="pointer";
        q.parentNode.onclick=()=>{
            var ne = Q("scrollElements")[1].children;
            if (q.banned){
                let popa = blackArr.indexOf(q.innerText.toLowerCase())
                q.banned=false;
                q.parentNode.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
                blackArr.splice(popa, 1);
                for (let i=0; i<ne.length; i++){cencFunc(ne[i].firstChild);}
            } else {
                q.banned=true;
                blackArr.push(q.innerText.toLowerCase());
                for (let i=0; i<ne.length; i++){cencFunc(ne[i].firstChild);}
                q.parentNode.style.backgroundColor = "red";
            };
        };
    }
}

function addListenerToBlock(block, func){
    block.addEventListener("DOMNodeInserted", (e)=>{
        VIPList(e.target.children[1]);
    })
}

function extendTextInput() {
    var textInput = Q("jsx-856742297")[0];
    if (textInput){
        textInput.maxLength=70;
        textInput.style.webkitTextSecurity="none";
    }
    else{
        textInput = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-3203140451.center > form > input");
        textInput.maxLength=70;
        textInput.style.webkitTextSecurity="none";
    }
}

var num = 1
var Key = false
var minusActive = false;
var pipetKey = false;


function addMultEventsListener(events, func, element){
    for (let i=0; i<events.length; i++){
        let event = events[i];
        element.addEventListener(event, func)
    }
}

function clearActiveelements(){
    var mirorButton = Q("jsx-3659451671 tool miror")[0];
    mirorButton.classList.remove("sel");
    clearMidCanvas();
    mirorButton.classList.remove("act1");
    Q("rightpanel")[0].style.right="-220px";
    var smoothButton = Q("jsx-3659451671 tool  smooth")[0];
    var degRangeBorder = Q("deg-range-border")[0];
    smoothButton.classList.remove("act1");
    degRangeBorder.style.display="none";
    //sLevel = 1;
    if (prevElem){
        prevElem.classList.add("sel");
        var pipetButton = Q("jsx-3659451671 tool pipet")[0];
        pipetButton.classList.remove("act");
        pipetButton.classList.remove("sel");
    }
    var loopaButton = Q("jsx-3659451671 tool loopa")[0];
    var zoomC = Q("zoomC")[0];
    loopaButton.classList.remove("act1");
    loopaButton.classList.remove("sel");
    zoomCHidden = true;
    zoomC.hidden = true;
    Q("color-gradient")[0].style.display="none";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////DRAW FUNCS/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Добавление на страницу холста зума
var zoomOffsetY = 400;
var zoomCHidden = true;
var memmoryC;
var currentC;
function addZoom(){
    function zoomUpdate(e){
        try{
        var topC = Q("jsx-150592943")[0];
        var zoomC = Q("zoomC")[0];
        var rect = topC.getBoundingClientRect();
        var dx = e.clientX - rect.x;
        var dy = e.clientY - rect.y;
        var coefX = 1516 / rect.width;
        var coefY = 848 / rect.height;

        zoomC.style.left = e.clientX + 'px';
        zoomC.style.top = e.clientY - zoomOffsetY + 'px';
        var ctx = zoomC.getContext("2d");
        ctx.fillRect(0, 0, zoomC.width, zoomC.height);
        ctx.drawImage(memmoryC, dx * coefX - 70+3, dy * coefY - 70+3, 200, 200, 0, 0, 300, 300);
        ctx.drawImage(currentC, dx * coefX - 70+3, dy * coefY - 70+3, 200, 200, 0, 0, 300, 300);

        const centerX = zoomC.width / 2;
        const centerY = zoomC.height / 2;

        ctx.beginPath();
        ctx.arc(centerX, centerY, 2, 0, 2 * Math.PI, false);
        //ctx.fillStyle = 'red';
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#000000';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(centerX, centerY, 1, 0, 2 * Math.PI, false);
        //ctx.fillStyle = 'red';
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
        } catch {};
    }


    if (!Q("zoomC").length && document.URL.indexOf("draw") != -1 && !Q("jsx-1307288772 book dark").length){
        var zoomC = createCanvas(200, 200);
        zoomC.classList.add("zoomC");
        zoomC.hidden = true;

        document.querySelector("#__next").addEventListener("pointermove", (e)=>{
            if (Q("jsx-3659451671 tool loopa act1 sel")[0]){
                zoomUpdate(e);
            }
        });

        document.querySelector("#__next").addEventListener("pointerdown", (e)=>{
            setTimeout(()=>{
                zoomUpdate(e);
            }, 10);
        });

        memmoryC = Q("jsx-3193114933 ")[0];
        currentC = Q("jsx-3193114933 ")[1];

        document.querySelector("#__next").appendChild(zoomC);
    }
}

//Функция изменения дизайна
function drawStyleChange(){
    //Смещение инструментов ниже
    Q("jsx-3071142060")[0].style.margin="0px 0px -70px 0px";
    //Растяжение палитры
    var palitra = Q("jsx-3071142060")[1];
    palitra.style.height="auto";
    //var book = Q("jsx-1307288772 book")[0];
    //book.style.padding="0px 0px 20px 0px";
    //Изменеине в иснтрументах
    var undo = Q("jsx-3659451671 tool undo")[0];
    var redo = Q("jsx-3659451671 tool redo")[0];
    undo.style.margin="0px 0px 7px 0px";
    redo.style.margin="0px 0px 7px 0px";
    //Очистка задней картинки
    var underDrawContainer = Q("jsx-1307288772 core")[0];
    underDrawContainer.style.backgroundImage="url()";
    underDrawContainer.style.boxShadow="none";
    var toolBar = Q("jsx-3659451671 tools")[0].firstChild;
    toolBar.style.height="auto";

    //Изменения расположения тайтлов
    //Q("jsx-1307288772 drawing")[0].style.margin="15px 0px 10px";
    //Изменение местоположение тайтлов
    //document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.header > h4").style.margin="20px 0px 10px";
    //Убираем лишнее с хослта
    //var hos = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core");
    //hos.style.boxShadow="none";
    //hos.style.margin="0px 6px 6px";
    //Book edit
    //book.style.height="538px";
    //book.style.borderRadius="10px";
    //Слой книги
    //var bookLayer = document.querySelector("#content > div > div > div.jsx-1562482592.center");
    //bookLayer.style.padding="50px 0px 0px";
    //Надхолсьтье
    var canvasLayer = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core");
    canvasLayer.style.borderRadius="0px 0px 0px 0px";
    //document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.header").style.borderRadius="0px"
    //Нижняя планка
    //var but = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom");
    //but.style.height="110px";
    //Удаление лого
    //var logo = Q("jsx-1307288772 logo")[0];
    //if (logo != undefined){
    //    logo.parentNode.removeChild(logo);
    //}
    //Изменение цвета рамки
    //var book1 = Q("jsx-1307288772 book")[0];
    //book1.style.backgroundColor="rgb(0 0 0)";
    //book1.style.boxShadow="rgb(0 0 0) 0px -3px 0px 0px, rgb(1 25 70) 0px 2px 0px 0px, rgb(0 0 0 / 50%) 0px 8px 4px 0px";
    //var header1 = Q("jsx-1307288772 header")[0];
    //header1.style.backgroundColor="rgb(0 0 0)";
    //header1.style.boxShadow="rgb(0 0 0) 0px -2px 0px 0px inset";
    //header1.style.borderBottom="6px solid rgb(0 0 0)";
    var newDiv = document.createElement("div");
    newDiv.classList.add("newdiv");
    newDiv.style.width="758px";
    newDiv.style.height="424px";
    newDiv.style.position="absolute";
    newDiv.style.zIndex="0";
    newDiv.style.overflow="hidden";
    try{
        Q("jsx-3193114933")[0].insertAdjacentElement('beforeBegin', newDiv);
    }catch{}
}

var curElementOverCursor;
//Функция изменения функционала первого уровня
function firstLevelFunctions(){
    //Дизактивация текстбокса толщины
    var t = document.getElementsByClassName("thikness-input")[0];
    t.parentNode.onmouseenter=()=>{t.disabled=!1;}
    t.parentNode.onmouseleave=()=>{t.disabled=!0}
    //Определение изначальной прозрачности
    Q("thikness-input")[0].value=4;
    //Q("jsx-340028725 thickness")[0].click();
    //Невозможность открыть контекстное меню на холсте
    Q("jsx-150592943")[0].oncontextmenu=function(){return false;};
    //Цензура текста
    var taskParent = document.getElementsByTagName("h3")[0];
    if (taskParent){
        var originalTaskName = taskParent.innerText;
        taskParent.onclick=()=>{
            if (taskParent.innerText == originalTaskName){
                taskParent.innerText = "CENSORED";
                taskParent.style.color = "red";
                blackList.push(originalTaskName); //<-Добавление в черный список
            } else {
                taskParent.innerText = originalTaskName;
                taskParent.style.color = "white";
                blackList.splice(blackList.indexOf(originalTaskName), 1)
            }
        }
    }else {console.log("task is undefined");}

    //Кнопка скачивания
    var upper = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.header");
    var downloadButton = document.createElement("button");
    downloadButton.style.position="absolute";
    downloadButton.style.right="714px";
    downloadButton.style.top="0px";
    downloadButton.style.width="48px";
    downloadButton.style.height="48px";
    downloadButton.style.backgroundSize="auto";
    downloadButton.style.borderWidth="initial";
    downloadButton.style.borderStyle="none";
    downloadButton.style.borderColor="initial";
    downloadButton.style.borderImage="initial";
    downloadButton.style.background="url(https://cdn.discordapp.com/attachments/827569141782282272/833098501167906846/file_download_white_48dp.svg) 0% 0% / contain no-repeat";
    downloadButton.style.cursor="pointer";
    downloadButton.onclick=function(){
        var link = document.createElement('a');
        link.download = 'filename.png';
        link.href = Q("jsx-3193114933 ")[0].toDataURL();
        link.click();
    };
    upper.appendChild(downloadButton);

    //Обновление элемента над которым находится курсор
    window.addEventListener("pointerover", (e)=>{curElementOverCursor=e.path[0]})

    //Доктор Стрендж
    var toolsBox100 = Q("jsx-3659451671")[1];
    var undoButton = Q("tool undo")[0];
    var redoButton = Q("tool redo")[0];
    toolsBox100.onwheel=(e)=>{
        if (e.deltaY>0){undoButton.click();} else {redoButton.click();}
    }

    var readyButton = Q("jsx-4289504161 small")[0];
    if (readyButton && Q("jsx-3659451671 tool clear")[0] == undefined){
        readyButton.addEventListener("click", ()=>{
            clearActiveelements();
            setTimeout(()=>{
                if (Q("jsx-1553483530 pencil")[0] == undefined){
                    mainDrawFunc();
                }
            }, 300);
        })
    }
}

//Изменение палитры
function palitEdit(){
    var palitra = Q("jsx-3071142060")[1];
    var nColor = Q("jsx-3071142060 color")[0].cloneNode(true);
    var allColors = Q("jsx-3071142060 color");

    //Удаление предыдущих цветов
    while (palitra.firstChild.tagName != "INPUT") {
        palitra.removeChild(palitra.firstChild);
    }

    if (Q("jsx-3071142060 color").length != 36){
        var target = Q("jsx-3071142060")[0].getElementsByTagName("input")[0];
        var colorList = [[0, 0, 0], [34, 177, 76], [47, 253, 57], [51, 51, 51], [0, 81, 36], [74, 255, 169], [125, 125, 125], [255, 255, 125], [0, 9, 168], [175, 175, 175], [255, 242, 0], [0, 0, 255], [255, 255, 255], [255, 201, 14], [79, 83, 255], [90, 7, 12], [191, 191, 0],[87, 129, 215], [171, 14, 21], [119, 92, 0], [73, 189, 218], [255, 0, 0], [255, 210, 166], [153, 217, 234], [239, 71, 80], [254, 135, 48], [180, 3, 175], [245, 80, 127], [224, 96, 1], [163, 73, 164], [244, 128, 134], [80, 43, 18], [251, 30, 245], [249, 185, 188], [54, 29, 12], [253, 162, 251]];
        if (Q("jsx-1307288772 book dark")[0] != undefined){colorList[12]==[0,0,0];}
        for (let i=0; i<colorList.length; i++){
            let newColor = nColor.cloneNode(true);
            let color = colorList[i];
            newColor.style.backgroundColor=`rgb(${color[0]},${color[1]},${color[2]})`;
            newColor.onclick=()=>{setColor(rgb2hex(color[0], color[1], color[2]));};
            target.insertAdjacentElement('beforebegin', newColor);
        }
    }
}

//Эвенты клавиатуры
function drawKeys (evt){
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt && document.URL.indexOf("draw") != -1) {
        if (evt.key === "Escape" || evt.key === "Esc" || evt.keyCode === 27) {
            if (Q("act").length != 0 || Q("act1").length != 0){
                clearActiveelements();
            } else { moveCanvases()}
        }

        if (evt.key === "L" || evt.key === "l" || evt.keyCode === 76 || evt.code === "KeyL") {
            var loopaButton = Q("loopa")[0];
            loopaButton.click();
        }

        if (evt.key === "F2" || evt.key === "f2" || evt.keyCode === 113 || evt.code === "F2") {

        }

        if ((evt.key === "0" || evt.keyCode === 48) && evt.ctrlKey){
            var url = document.querySelector("#content > div.rightpanel > div:nth-child(1) > input.urlbg").value;

            var img = new Image();
            //const img = document.createElement('img');

            img.src = url;
            img.crossOrigin = "Anonymous";

            //var canvas = document.createElement('canvas');
            var context = canvas0000.getContext('2d');
            //
            canvas0000.width=192;
            canvas0000.height=110;

            img.onload=function(){
                alert("Loaded");
                //
                context.drawImage(img, 0, 0, 192, 110);
                globalKey=true;
            }

            img.onerror=function(){
                //img.src = url;
                alert("Данную картинку нельзя загрузить");
            }
        }
    };
}

//Обработка колесика
function onDrawWheel(e){
    var zoomC = Q("zoomC")[0];
    //его тут нет, а если есть то:
    if (zoomC.hidden){
        moveCanvases();
    } else {
        var newCSize = Number(zoomC.style.width.slice(0, -2));
        zoomC.style.borderColor = 'black';
        if (e.deltaY < 0 && newCSize < 800){
            zoomC.style.width = newCSize + 20 + 'px';
            zoomC.style.height = newCSize + 20 + 'px';
            zoomC.style.borderRadius = (newCSize + 20) / 2 + 'px';
            zoomOffsetY += 20;
        }
        if (e.deltaY > 0 && newCSize > 100){
            zoomC.style.width = newCSize - 20 + 'px';
            zoomC.style.height = newCSize - 20 + 'px';
            zoomC.style.borderRadius = (newCSize - 20) / 2 + 'px';
            zoomOffsetY -= 20;
        }
        var nextCSize = Number(zoomC.style.width.slice(0, -2));
        if (nextCSize == 800 || nextCSize == 100){zoomC.style.borderColor = 'red';}

        zoomC.style.top = e.clientY - zoomOffsetY + 'px';
    }
}

//Добавление пипетки по правой кнопки мыши
function drawRMBPipet(){
    var pointerCanvas = Q("jsx-150592943")[0];
    if (pointerCanvas){
        //ПКМ ПИПЕТКА
        var canada = Q("jsx-3193114933 ")[0];
        var mexico = pointerCanvas;
        mexico.addEventListener('pointerdown', (e)=>{

            if (e.which == 3 || (e.which == 1 && e.altKey)){
                var rgba = canada.getContext('2d').getImageData(e.offsetX*2, e.offsetY*2, 1, 1).data;
                let r = rgba[0];
                let g = rgba[1];
                let b = rgba[2];
                let a = rgba[3];
                if (a == 0){r=255; g=255; b=255; a=255;}
                setColor(rgb2hex(r, g, b));
                setNess(100/255*a);

                setTimeout(()=>{
                    var event = new Event ('mouseup', { bubbles: true, cancelable: true});
                    pointerCanvas.dispatchEvent(event);

                    Q("jsx-3659451671 tool undo")[0].click();
                }, 50)
            }
        })
    } else {alert(">pointerCanvas is undefined<");}
}

//Добавление заливки по средней кнопке мыши
function drawMiddleBucket(){
    //Заливка
    var pointerCanvas = Q("jsx-150592943")[0];
    if (pointerCanvas){
        pointerCanvas.addEventListener("pointerdown", function(e) {
            if (e.which === 2) {
                var curButt = Q("tool sel")[0];
                var undoButt = Q("jsx-3659451671 tool undo")[0];
                Q("jsx-3659451671 tool fil")[0].click();

                setTimeout(()=>{
                    undoButt.click();

                    let event = new Event('mousedown', { bubbles: true, cancelable: true} );
                    event.clientX = e.clientX;
                    event.clientY = e.clientY;
                    pointerCanvas.dispatchEvent(event);

                    event = new Event('mouseup', { bubbles: true, cancelable: true} );
                    event.clientX = e.clientX;
                    event.clientY = e.clientY;
                    pointerCanvas.dispatchEvent(event);

                    curButt.click();
                }, 10);

            }
        });
    } else {alert(">pointerCanvas is undefined<");}
}

//Изменение настроек прозрачности
function nessEdit(){
    //трекбар прозрачности
    if (!Q("ness-text").length){
        var widthinput = Q("jsx-340028725 bxopacity")[0];
        var ness = (()=>{var items = Q("jsx-340028725"); for (let i=0; i<items.length; i++){if (items[i].tagName=="INPUT"){return items[i]}}})()
        ness.step="0.01";
        ness.min="0";
        ness.style.height="150%";
        ness.style.backgroundColor="rgba(0,0,0,0)";
        ness.style.cursor = "pointer";
        var nesstext = document.createElement("input");
        nesstext.classList.add("ness-text");
        nesstext.type="text";
        nesstext.style.fontFamily='Black';
        nesstext.style.color="rgb(67, 222, 153)";
        nesstext.value="100";
        nesstext.style.width="30px";
        nesstext.style.border="thick";
        nesstext.style.maxLength=3;
        nesstext.style.textAlign="center";
        nesstext.style.fontSize="17px"
        nesstext.style.backgroundColor="rgba(100, 100, 100, 0)";
        widthinput.appendChild(nesstext);

        //Ограничение инпута прозрачности
        nesstext.oninput = function(){
            if (this.value>100){this.value=100;}
            if (this.value=="00" || this.value=="000"){this.value=0;}
            this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
        };

        ness.addEventListener("input", function(event) {
            nesstext.value =`${Math.round(ness.value*100)}`;
        })

        nesstext.addEventListener("input", function(event) {
            if (nesstext.value==""){ness.value=0}else{
                setNess(nesstext.value);
            }
        })


        //Изменение прозрачности колесиком
        var trackBarBox = Q("jsx-340028725 bxopacity")[0];
        trackBarBox.onwheel=(e)=>{
            if (Number(nesstext.value)-e.deltaY/100>100){
            } else if (Number(nesstext.value)-e.deltaY/100<0) {
            } else {
                setNess(Number(nesstext.value)+(-e.deltaY/100));
            }
        }
    }

    document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity").style.padding="0px 10px";
    document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity > span:nth-child(1)").style.margin = "5px";
    document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity > span:nth-child(3)").style.margin = "5px";
}

//Инструменты//////////////////////////////////
function addTools(){
    var toolBar = Q("jsx-3659451671 tools")[0].firstChild;
    var pointerCanvas = Q("jsx-150592943")[0];

    var prevElem;

    //Добавление кнопки зеркала
    addMirrorButton();

    //Добавление пипетки
    addPipetButton();

    //Добавление инструмента сглаживания
    addSmoothingTool();

    //Добавление кнопки лупы
    addLoopaButton();

    //Добавление кнопки рандома
    randomColorButton();

    //Добавление кнопки очистки
    addClearButton();

}

///////////////////////////////////tools////////////////////////////////////////

//Функционал луппы
function addLoopaButton(){
    var pointerCanvas = Q("jsx-150592943")[0];
    var zoomC = Q("zoomC")[0];
    var toolBar = Q("jsx-3659451671 tools")[0].firstChild;
    if (!Q("loopa").length){
        var loopaButton = document.createElement("div");
        loopaButton.classList.add("jsx-3659451671");
        loopaButton.classList.add("tool");
        loopaButton.classList.add("loopa");
        loopaButton.style.margin="0px";
        //loopaButton.style.position="relative";
        //loopaButton.style.left="56px";
        //loopaButton.style.top="-54px";
        loopaButton.onclick = function(){
            if (Q("jsx-1307288772 core")[0].getElementsByClassName("jsx-1562482592 drawingContainer").length && !Q("jsx-1553483530 pencil").length){
                if (!loopaButton.classList.contains("act1")){
                    loopaButton.classList.add("act1");
                    loopaButton.classList.add("sel");
                    zoomCHidden = false;
                    zoomC.hidden = false;
                } else {
                    loopaButton.classList.remove("act1");
                    loopaButton.classList.remove("sel");
                    zoomCHidden = true;
                    zoomC.hidden = true;
                }
            }
        }
        toolBar.appendChild(loopaButton);
    }
}

//Функционал иструмент сглаживания
var startPoint, endPoint;
var onWorkingKey = false;
var sLevel = localStorage.getItem("sLevel");
if (!sLevel){sLevel=1;}
var firstTimeAddWindowSmooth = true;
var mapArray = [];
function addSmoothingTool(){
    mapArray = [];
        if (!Q("jsx-3659451671 tool smooth").length){
            var toolBar = Q("jsx-3659451671 tools")[0].firstChild;

            var smoothBorder = document.createElement("div");
            smoothBorder.width = 300;
            smoothBorder.height = 100;
            smoothBorder.style.position = "relative";
            smoothBorder.style.top = "200px;";
            smoothBorder.style.display = "flex";
            smoothBorder.style.width = "auto";
            smoothBorder.style.height = "auto";
            smoothBorder.style.right="0px"; //->210px
            toolBar.appendChild(smoothBorder);

            var degRangeBorder = document.createElement("div");
            degRangeBorder.classList.add("jsx-3659451671");
            degRangeBorder.classList.add("deg-range-border");
            degRangeBorder.style.width="230px";
            degRangeBorder.style.height="auto";
            degRangeBorder.style.border="2px solid black";
            degRangeBorder.style.borderRadius="5px";
            degRangeBorder.style.margin="0px 5px 0px 0px";
            degRangeBorder.style.backgroundColor = "rgba(94, 25, 51, 0.5)";
            degRangeBorder.style.zIndex = "10";
            degRangeBorder.style.position = "absolute";
            degRangeBorder.style.right="53px";
            degRangeBorder.style.display="none";


            degRangeBorder.onmouseleave=()=>{
                setTimeout(()=>{if ([
                    smoothButton,
                    sCounter,
                    degRange1,
                    degRangeBorder,
                ].indexOf(curElementOverCursor) != -1){
                } else {
                    degRangeBorder.style.display="none";
                }
                               }, 1000)
            }

            var degRange1 = document.createElement('input');
            degRange1.classList.add("here-degrange");
            degRange1.type = "range";
            degRange1.min = 1;
            degRange1.max = 10;
            degRange1.step = 1;
            degRange1.value=String(sLevel);
            degRange1.style.margin="23px 5px";
            degRange1.style.width="190px";
            degRange1.style.height="4px";
            degRange1.style.borderRadius="10px";
            degRange1.oninput=()=>{
                sCounter.innerText = degRange1.value
                sLevel = Number(degRange1.value);
                localStorage.setItem("sLevel", sLevel);
            };

            var sCounter = document.createElement("div");
            sCounter.innerText = String(sLevel);
            sCounter.style.fontFamily="Black";
            sCounter.style.color="rgb(67, 222, 153)";
            sCounter.style.width="30px";
            sCounter.style.border="thick";
            sCounter.style.textAlign="center";
            sCounter.style.fontSize="17px";
            sCounter.style.backgroundColor="rgba(100, 100, 100, 0)";
            sCounter.style.position="absolute";
            sCounter.style.right="5px";
            sCounter.style.margin="15px 0px 0px 0px";

            degRangeBorder.appendChild(sCounter);
            degRangeBorder.appendChild(degRange1);
            smoothBorder.appendChild(degRangeBorder);

            var smoothButton = document.createElement("div");
            smoothButton.classList.add("jsx-3659451671");
            smoothButton.classList.add("tool");
            smoothButton.classList.add("smooth");
            smoothButton.style.backgroundColor="#ff000030";
            smoothButton.style.margin="0px";

            sLevel = Number(degRange1.value);

            smoothButton.onmouseenter=()=>{
                degRangeBorder.style.display="";
                Q("color-gradient")[0].style.display="none";
            }

            smoothButton.onmouseleave=()=>{
                setTimeout(()=>{if ([
                    smoothButton,
                    sCounter,
                    degRange1,
                    degRangeBorder,
                ].indexOf(curElementOverCursor) != -1){
                } else {
                    degRangeBorder.style.display="none";
                }
                               }, 1000)
            }

            smoothBorder.appendChild(smoothButton);

            if (firstTimeAddWindowSmooth){
            window.addEventListener('pointerup', (e)=>{
                if (onWorkingKey){
                    onWorkingKey=false;
                    endPoint = [e.clientX, e.clientY];
                    clientMouseDown(startPoint[0], startPoint[1]);
                    clientMouseMove(startPoint[0], startPoint[1]);
                    for (let i=0; i<mapArray.length; i+=sLevel) {
                        let point = mapArray[i];
                        clientMouseMove(point[0], point[1]);
                    }
                    clientMouseMove(endPoint[0], endPoint[1]);
                    clientMouseUp(endPoint[0], endPoint[1]);
                    mapArray=[];
                }
            })

            window.addEventListener('pointermove', (e)=>{
                if (onWorkingKey){
                    mapArray.push([e.clientX, e.clientY]);
                }})
            }
            firstTimeAddWindowSmooth = false;
        }

        degRange1 = Q("here-degrange")[0];

        var pointerCanvas = Q("jsx-150592943")[0];
        pointerCanvas.addEventListener('pointerdown', (e)=>{
            var pipetTool = Q("jsx-3659451671 tool pipet act sel")[0];
            var bucketTool = Q("jsx-3659451671 tool fil sel")[0];
            if (Number(degRange1.value)!=1 && !bucketTool && e.which != 2 && !onWorking && e.which != 3 && !pipetTool){
                onWorkingKey = true;
                startPoint = [e.clientX, e.clientY];
            }
        })

        pointerCanvas.addEventListener('pointerup', (e)=>{
            if (onWorkingKey){
                onWorkingKey=false;
                endPoint = [e.clientX, e.clientY];
                clientMouseDown(startPoint[0], startPoint[1]);
                clientMouseMove(startPoint[0], startPoint[1]);
                for (let i=0; i<mapArray.length; i+=sLevel) {
                    let point = mapArray[i];
                    clientMouseMove(point[0], point[1]);
                }
                clientMouseMove(endPoint[0], endPoint[1]);
                clientMouseUp(endPoint[0], endPoint[1]);
                mapArray=[];
            }
        })

    }

//Функционал пипеточного элемента
function addTitle(){
    if (Q("pipet-title")[0]){return 0};
    var pointerCanvas = Q("jsx-150592943")[0];
    var canada = Q("jsx-3193114933")[0];
    var curc = document.createElement("div");
    curc.style.height="10px";
    curc.style.width="10px";
    curc.style.border="1px solid black";
    var title = document.createElement("div");
    title.classList.add("pipet-title");
    title.style.fontFamily="Black";
    title.style.width="auto";
    title.style.height="auto";
    title.style.border="1px solid black";
    title.style.position="absolute";
    title.style.backgroundColor="rgb(255, 239, 181)";
    title.style.padding="1px 5px";
    title.hidden=true;
    pointerCanvas.addEventListener("pointermove", (e)=>{
        if (!title.hidden){
            var rgba = canada.getContext('2d').getImageData(e.offsetX*2, e.offsetY*2, 1, 1).data;
            title.innerText = ` ${rgba} `;
            title.style.left=e.clientX+20 + "px";
            title.style.top=e.clientY+20 + "px";
        }
    })
    pointerCanvas.addEventListener("pointerleave", (e)=>{
        title.hidden=true;
    })
    pointerCanvas.addEventListener("pointerenter", (e)=>{
        title.hidden=false;
    })
    title.appendChild(curc);
    document.querySelector("#__next").appendChild(title);
}

//Функционал пипетки
var prevElem;
function addPipetButton(){
    var toolBar = Q("jsx-3659451671 tools")[0].firstChild;
    var pointerCanvas = Q("jsx-150592943")[0];
    var canada = Q("jsx-3193114933")[0];

    if (Q("pipet")[0] == undefined && pointerCanvas){
        var pipetButton = document.createElement("div");
        pipetButton.classList.add("jsx-3659451671");
        pipetButton.classList.add("tool");
        pipetButton.classList.add("pipet");
        pipetButton.style.margin="0px";

        toolBar.appendChild(pipetButton);

        pipetButton.onclick = function(){
            if (!Q("jsx-1553483530 pencil").length){
                addTitle();
                prevElem = Q("tool sel")[0];
                prevElem.classList.remove("sel");
                pipetButton.classList.add("act");
                pipetButton.classList.add("sel");
            }
        };


        toolBar.addEventListener('click', (e)=>{
            if (e.target != pipetButton && Q("act").length != 0 && !e.target.classList.contains("undo")){
                document.querySelector("#__next").removeChild(Q("pipet-title")[0]);
                prevElem.classList.add("sel");
                pipetButton.classList.remove("act");
                pipetButton.classList.remove("sel");
            }
        });


    } else { console.log("PIP-button already exists or pointerCanvas is undefined") }

    pointerCanvas.addEventListener('pointerdown', (e)=>{
        if (Q("act").length != 0 && e.which == 1){
            var rgba = canada.getContext('2d').getImageData(e.offsetX*2, e.offsetY*2, 1, 1).data;
            let r = rgba[0];
            let g = rgba[1];
            let b = rgba[2];
            let a = rgba[3];
            if (a == 0){r=255; g=255; b=255; a=255;}
            setColor(rgb2hex(r, g, b));
            setNess(100/255*a);
            setTimeout(()=>{
                var event = new Event ('mouseup', { bubbles: true, cancelable: true});
                pointerCanvas.dispatchEvent(event);

                Q("jsx-3659451671 tool undo")[0].click();
            }, 50)
        }
    })

}

//Кноака рандомного цвета
var colorInput1;
var colorInput2;
var defaultButton;
var uKey = false;
function randomColorButton(){
    var toolBar = Q("jsx-3659451671 tools")[0].firstChild;
    if (!Q("rand").length){
        var gradientButton = document.createElement("div");
        gradientButton.classList.add("jsx-3659451671");
        gradientButton.classList.add("tool");
        gradientButton.classList.add("rand");
        gradientButton.style.margin="7px 0px 0px 0px";
        toolBar.appendChild(gradientButton);

        var smoothBorder = document.createElement("div");
        smoothBorder.width = 300;
        smoothBorder.height = 100;
        smoothBorder.style.position = "relative";
        smoothBorder.style.top = "200px;";
        smoothBorder.style.display = "flex";
        smoothBorder.style.width = "auto";
        smoothBorder.style.height = "auto";
        smoothBorder.style.right="0px"; //->210px
        toolBar.appendChild(smoothBorder);

        var degRangeBorder = document.createElement("div");
        degRangeBorder.classList.add("jsx-3659451671");
        degRangeBorder.classList.add("color-gradient");
        degRangeBorder.style.width="200px";
        degRangeBorder.style.height="auto";
        degRangeBorder.style.border="2px solid black";
        degRangeBorder.style.borderRadius="5px";
        degRangeBorder.style.margin="0px 5px 0px 0px";
        degRangeBorder.style.backgroundColor = "rgba(94, 25, 51, 0.5)";
        degRangeBorder.style.zIndex = "10";
        degRangeBorder.style.position = "absolute";
        degRangeBorder.style.right="58px";
        degRangeBorder.style.display="none";
        degRangeBorder.style.top="7px";

        colorInput1 = document.createElement('input');
        colorInput1.classList.add("color-input1");
        colorInput1.type="color";
        colorInput1.value="#000000";
        colorInput1.style.border="2px solid rgba(255, 255, 255, 0.8)";
        colorInput1.style.borderRadius="5px";
        colorInput1.style.width="82px";
        colorInput1.style.height="32px";
        colorInput1.style.cursor="pointer";
        colorInput1.style.appearance="none";
        colorInput1.style.background="none";
        colorInput1.style.margin="5px";
        colorInput1.style.backgroundColor="#000000";
        colorInput1.oninput=()=>{colorInput1.style.backgroundColor=colorInput1.value;};
        degRangeBorder.appendChild(colorInput1);

        colorInput2 = document.createElement('input');
        colorInput2.classList.add("color-input1");
        colorInput2.type="color";
        colorInput2.value="#FFFFFF";
        colorInput2.style.border="2px solid rgba(255, 255, 255, 0.8)";
        colorInput2.style.borderRadius="5px";
        colorInput2.style.width="82px";
        colorInput2.style.height="32px";
        colorInput2.style.cursor="pointer";
        colorInput2.style.appearance="none";
        colorInput2.style.background="none";
        colorInput2.style.margin="5px";
        colorInput2.style.backgroundColor="#FFFFFF";
        colorInput2.oninput=()=>{colorInput2.style.backgroundColor=colorInput2.value;};
        degRangeBorder.appendChild(colorInput2);

        defaultButton = document.createElement('button');
        defaultButton.style.fontFamily="Black";
        defaultButton.style.width="190px";
        defaultButton.style.height="";
        defaultButton.innerText="print";
        defaultButton.style.fontSize="18px";
        defaultButton.style.margin="5px 5px 10px 5px";
        defaultButton.style.borderRadius="5px";
        defaultButton.style.height="40px";
        defaultButton.style.color="#301A6B";
        defaultButton.style.borderColor="rgba(0, 0, 0, 0)";
        defaultButton.style.boxShadow="0px 6px 0px 0px #301a6b";
        degRangeBorder.appendChild(defaultButton);

        defaultButton.onmouseenter=function(){
            defaultButton.style.backgroundColor="#cbb6e9";
        };
        defaultButton.onmouseleave=function(){
            defaultButton.style.backgroundColor="#ffffff";
            defaultButton.style.boxShadow="0px 6px 0px 0px";
            defaultButton.style.margin="5px 5px 10px 5px";
        };
        defaultButton.onmousedown=function(){
            defaultButton.style.boxShadow="0px 2px 0px 0px";
            defaultButton.style.margin="10px 5px 5px 5px";
        };
        defaultButton.onmouseup=function(){
            defaultButton.style.boxShadow="0px 6px 0px 0px";
            defaultButton.style.margin="5px 5px 10px 5px";
        };


        degRangeBorder.onmouseleave=()=>{
            setTimeout(()=>{if ([
                gradientButton,
                degRangeBorder,
                colorInput1,
                colorInput2,
                defaultButton
            ].indexOf(curElementOverCursor) != -1){
            } else {
                degRangeBorder.style.display="none";
            }
                           }, 1000)
        }

        smoothBorder.appendChild(degRangeBorder);

        gradientButton.onmouseenter=()=>{
            if(Q("jsx-1553483530 pencil").length){return;}
            degRangeBorder.style.display="";
            Q("deg-range-border")[0].style.display="none";
            if (!Q("jsx-4289504161 small")[0].disabled){
                defaultButton.style.cursor="no-drop";
                defaultButton.title="Нельзя использовать если что-то уже нарисовано";
                defaultButton.style.opacity=0.5;
                uKey=true;
            } else {
                defaultButton.style.cursor="";
                defaultButton.title="";
                defaultButton.style.opacity=1;
                uKey=false;
            }
        }

        gradientButton.onmouseleave=()=>{
            setTimeout(()=>{if ([
                gradientButton,
                degRangeBorder,
                colorInput1,
                colorInput2,
                defaultButton
            ].indexOf(curElementOverCursor) != -1){
            } else {
                degRangeBorder.style.display="none";
            }
                           }, 1000)

        }


    }

    var hc = document.createElement("canvas");
    hc.width=1;
    hc.height=424;
    function changeColor2(i, c1, c2){
        var ctx=hc.getContext("2d");
        var my_gradient=ctx.createLinearGradient(0,0,1,424);
        my_gradient.addColorStop(0,c1);
        my_gradient.addColorStop(1,c2);
        ctx.fillStyle=my_gradient;
        ctx.fillRect(0,0,1,424);
        var context = hc.getContext("2d");
        var c = context.getImageData(0, i, 1, 1).data;
        setColor(rgbToHex(c[0], c[1], c[2]));
    }
    var canvas = Q("jsx-150592943")[0];
    var rect = canvas.getBoundingClientRect();
    var x0 = rect.x;
    var x1 = rect.x+rect.width;
    var y0 = rect.y;
    var coef = rect.height/424;

    defaultButton.onclick=()=>{
        if (uKey){return;}
        Q("jsx-3659451671 tool pen")[0].click();
        for (let i=0;i<424;i++){
            setTimeout(()=>{
                changeColor2(i, colorInput1.value, colorInput2.value)
                mouseDown(x0, y0+i*coef);
                mouseMove(x0, y0+i*coef);
                mouseMove(x1, y0+i*coef);
                mouseUp();
            }, 0);
        }
    }

    function mouseDown(x, y){
        let event = new Event('mousedown', { bubbles: true, cancelable: true} );
        event.clientX=x;
        event.clientY=y;
        canvas.dispatchEvent(event);
    }

    function mouseMove(x, y){
        let event = new Event('mousemove', { bubbles: true, cancelable: true} );
        event.clientX=x;
        event.clientY=y;
        canvas.dispatchEvent(event);
    }

    function mouseUp(){
        var event = new Event('mouseup', { bubbles: true, cancelable: true} );
        canvas.dispatchEvent(event);
    }
}

/////////////////////////////////

//Функционал кнопки зеркала
function addMirrorButton(){
    var toolBar = Q("jsx-3659451671 tools")[0].firstChild;
    if (!Q("miror").length){
        var mirorButton = document.createElement("div");
        mirorButton.classList.add("jsx-3659451671");
        mirorButton.classList.add("tool");
        mirorButton.classList.add("miror");

        mirorButton.onclick=()=>{
            if (!Q("jsx-1553483530 pencil").length){
                if (Q("miror sel").length == 0){
                    mirorButton.classList.add("sel");
                    mirorButton.classList.add("act1");
                    updateMirrorLine();
                    document.querySelector("#content > div.rightpanel > div:nth-child(2)").style.opacity = 1;
                    Q("rightpanel")[0].style.right="0px";
                    document.querySelector("#content > div.rightpanel > div:nth-child(2)").style.animation="1s linear 0s normal none running here";
                } else {
                    mirorButton.classList.remove("sel");
                    clearMidCanvas();
                    mirorButton.classList.remove("act1");
                    Q("rightpanel")[0].style.right="-220px";
                    document.querySelector("#content > div.rightpanel > div:nth-child(2)").style.opacity = 0.5;
                    document.querySelector("#content > div.rightpanel > div:nth-child(2)").style.animation="";
                }
            }
        }

        toolBar.appendChild(mirorButton);
    }
}

//Функции зеркала
var onWorking = false;
function addMirrorBase(){
    var pointerCanvas = Q("jsx-150592943")[0];
    var mirrorCanvas = Q("jsx-3193114933")[0].cloneNode();
    mirrorCanvas.classList.remove("jsx-3193114933");
    mirrorCanvas.classList.add("mirror-canvas");
    var ctx = mirrorCanvas.getContext("2d");
    ctx.fillStyle = "rgba(255, 0, 0, 0.9)";
    mirrorCanvas.style.width="758px";
    mirrorCanvas.style.height="424px";
    mirrorCanvas.style.position="fixed";
    pointerCanvas.insertAdjacentElement('beforeBegin', mirrorCanvas);

    var evttCanvas = pointerCanvas;
    function mouseDown(x, y){
        let event = new Event('mousedown', { bubbles: true, cancelable: true} );
        event.clientX=x;
        event.clientY=y;
        evttCanvas.dispatchEvent(event);
    }

    function mouseMove(x, y){
        let event = new Event('mousemove', { bubbles: true, cancelable: true} );
        event.clientX=x;
        event.clientY=y;
        evttCanvas.dispatchEvent(event);
    }

    function mouseUp(){
        var event = new Event('mouseup', { bubbles: true, cancelable: true} );
        evttCanvas.dispatchEvent(event);
    }


    function drawHow(){
        var pX = rect.x;
        var pY = rect.y;
        mouseDown(pX+arr[0][0], pY+arr[0][1]);
        arr.forEach(function (point){
            mouseMove(pX+point[0], pY+point[1]);
        })
        mouseUp();
    }

    var key = false;
    var arr = [];
    var centerL;
    var okey;
    var rect;
    var againCanvas = Q("mirror-canvas")[0];
    var kotik = againCanvas.getContext("2d");

    evttCanvas.addEventListener('pointerdown', (e)=>{
        var smoothingTool = Q("jsx-3659451671 tool smooth act1")[0];
        if (!onWorking && Q("miror sel").length != 0 && !Q("jsx-3659451671 tool pipet act sel").length && e.which == 1){
            rect = evttCanvas.getBoundingClientRect();
            let relX = e.clientX - rect.x;
            let relY = e.clientY - rect.y;
            arr.splice(0, 0, glass([relX, relY])); // Запись точек относительно холста
            key = true;
        }
    })

    Q("screen")[0].addEventListener('pointermove', (e)=>{
        if (key){
            let relX = e.clientX - rect.x;
            let relY = e.clientY - rect.y;
            arr.splice(0, 0, glass([relX, relY]));
        }
    })


    window.addEventListener('pointerup', (e)=>{
        setTimeout(()=>{
            if (key && Q("miror sel").length != 0){
                if (sLevel != 1){
                    var p1 = arr[0];
                    var p2 = arr[arr.length - 1];
                    var newArray = [p1];
                    for (let i=0; i<arr.length; i+=sLevel){
                        newArray.push(arr[i]);
                    }
                    newArray.push(p2);
                    arr=newArray;
                };
                onWorking=true;
                key = false;
                drawHow();
                ///mouseMove();
                arr = [];
                onWorking=false;
                clientMouseMove(e.clientX, e.clientY);
            }
        }, 10);
    })
}

////////////////////////////////

//Функционал кнопки очистки
    var clearButton;
function addClearButton(){
    var toolBar = Q("jsx-3659451671 tools")[0].firstChild;
    if (!Q("clear").length){
        clearButton = document.createElement("div");
        clearButton.classList.add("jsx-3659451671");
        clearButton.classList.add("tool");
        clearButton.classList.add("clear");
        clearButton.style.margin="7px 0px 0px";
        toolBar.appendChild(clearButton);
    }
    clearButton.onclick=()=>{
        var pointerCanvas = Q("jsx-150592943")[0];
        var rect = pointerCanvas.getBoundingClientRect();
        var x0 = rect.x;
        var y0 = rect.y;
        var x1 = rect.x + rect.width;
        var y1 = rect.y + rect.height;
        var beforeColor = (()=>{var items = Q("jsx-3071142060"); for (let i=0; i<items.length; i++){if (items[i].tagName=="INPUT"){return items[i]}}})().value;
        var beforeElement = Q("tool sel")[0];
        var rectButton = Q("jsx-3659451671 tool rec")[0];
        rectButton.click();
        setColor("#ffffff");
        clientMouseDown(x0, y0);
        clientMouseMove(x1, y1);
        clientMouseUp(x1, y1);
        setColor(beforeColor);
        beforeElement.click();
    };
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var blackList = [];
var alreadyKey = false;
var loopaKey = false;


function mainDrawFunc(){
    console.log("draw func");
    //Дебаг
    if (document.URL.indexOf("book") != -1){return};

    //Добавление боковой панели
    createSizePull();

    //Добавление зума
    addZoom(); //Вызывается через unhide элемента класса zoomC

    //Изменение дизайна
    drawStyleChange();

    //Изменение функционала первого уровня
    firstLevelFunctions();

    //Изменение палитры
    palitEdit();

    //Блок зума
    //var scale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
    //globalScale=Number(scale.split("(")[1].slice(0, -1));
    //let supScale;
    //let curScale;
    ///////////////////VIPER/////////////////////
    //Q("jsx-340028725 thickness")[0].click();
    /////////////////////////////////////////////

    //Обработка клавиатуры
    document.onkeydown = drawKeys;

    //Вилинговое увеличение экрана
    var pointerCanvas = Q("jsx-150592943")[0];// <- самый верхний холст
    pointerCanvas.onwheel=onDrawWheel;
    //Изменение настроек прозрачности
    nessEdit();

    //ПКМ Пипетка
    drawRMBPipet();

    //СКМ Заливка
    drawMiddleBucket();

    //Добавление инструментов;
    addTools();
    //Добавление блоков функционала инструментов
    //Блок функционала зеркала
    addMirrorBase();
    //Активация сглаживания
    debugName();
}

function waitVideo(){
    document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1671937317.center > p").innerText="ЖДЕМ ОКОНЧАНИЯ ИГРЫ, А ПОКА ЧТО МОЖЕТЕ НАСЛАДИТЬСЯ ПРИЯТНОЙ МУЗЫКОЙ";

    var del = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1671937317.center > div");

    var video = document.createElement("iframe");
    video.width="634";
    video.height="358";

    Q("jsx-1671937317 lottie")[0].parentNode.removeChild(Q("jsx-1671937317 lottie")[0]);

    var videoLink = "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1";

    video.src=videoLink;

    video.title="YouTube video player";
    video.frameborder="0";
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

    document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1671937317.center > h3").insertAdjacentElement('beforeBegin', video);

    video.style.border="20px";
    video.style.borderRadius="10px";
    video.style.boxShadow="inset 0px 10px 0px 0px rgb(0 0 0 / 50%), 0px 20px 20px 0px rgb(0 0 0 / 55%)";
}

var globalX=0;
var globalY=0;


function asyncDraw(){
    if (globalY < 128 && globalKey){
        if (globalX < 192){
            globalX++;
            let curPix = getPix(globalX, globalY, canvas0000);
            let r = curPix[0];
            let g = curPix[1];
            let b = curPix[2];
            setColor(rgb2hex(r, g, b));
            draw(globalX*5, globalY*5)
        }else{globalY++; globalX=0;}
    }else{globalX=0; globalY=0; globalKey=false;}
}

function getCookieDict(){
    var dict = {};
    var c = document.cookie;
    var arr = c.split(';');

    for ( let item=0; item<arr.length; item++ ) {
        let newArr = arr[item].split('=');
        dict[newArr[0].replace(' ','')]=newArr[1];
    }
    return dict
}

function debagDrawinfContainerOnExit(){
    try{
    Q("jsx-1562482592 drawingContainer")[0].parentNode.removeChild(Q("jsx-1562482592 drawingContainer")[0]);
    Q("class100")[0].parentNode.removeChild(Q("class100")[0]);
    } catch{};
}

function moveCanvases(){
    var nWindow = document.querySelector("#content");
    var nnWindow = Q("jsx-1307288772 core")[0];
    var drawContainer = Q("jsx-1562482592 drawingContainer")[0];
    var contCanvases = drawContainer.children;
    if (Q("jsx-1307288772 core")[0].getElementsByClassName("jsx-1562482592 drawingContainer").length > 0){
        drawContainer.parentNode.removeChild(drawContainer);
        drawContainer.style.position="absolute";
        drawContainer.style.left="0px";
        for (let i=0; i<contCanvases.length; i++){
            contCanvases[i].style.width=`${window.innerWidth}px`;
            contCanvases[i].style.height=`${window.innerHeight}px`;
            contCanvases[i].style.zIndex=2;
        }
        var whiteZone=document.createElement("div");
        whiteZone.classList.add("class100");
        whiteZone.style.backgroundColor="white";
        whiteZone.style.width=`${window.innerWidth}px`;
        whiteZone.style.height=`${window.innerHeight}px`;
        whiteZone.style.position="absolute";
        whiteZone.style.zIndex=1;
        whiteZone.style.backgroundImage=Q("jsx-1307288772 core")[0].style.backgroundImage;
        nWindow.appendChild(whiteZone);
        nWindow.appendChild(drawContainer);
    } else {
        drawContainer.style.left="";
        for (let i=0; i<contCanvases.length; i++){
            contCanvases[i].style.width=`758px`;
            contCanvases[i].style.height=`424px`;
            contCanvases[i].style.zIndex="";
        }
        Q("class100")[0].parentNode.removeChild(Q("class100")[0]);
        nWindow.removeChild(drawContainer);
        nnWindow.appendChild(drawContainer);
    }
}

//window.oncontextmenu=()=>{
//    moveCanvases();
//}

//Я и так знаю что делает эта функция, а значит это читает кто-то другой
window.addEventListener('resize', function(event){
    var drawContainer = Q("jsx-1562482592 drawingContainer")[0];
    if (drawContainer){
        var anCanvases = drawContainer.children;
        var newArray = [].slice.call(anCanvases);
        newArray.push(Q("class100")[0]);

        if (Q("jsx-1307288772 core")[0].getElementsByClassName("jsx-1562482592 drawingContainer").length == 0){
            for (let i=0; i<newArray.length; i++){
                newArray[i].style.width=`${window.innerWidth}px`;
                newArray[i].style.height=`${window.innerHeight}px`;
            }
        }
    }

})


function deletBanner(){
    var banner = document.querySelector("#__next > div.jsx-4127328682.banner");
    if (banner != null){banner.parentNode.removeChild(banner)};
}

function dialogWindow(title, text, funcYes, funcNo=()=>{}){
    var d=document.createElement('div');
    d.style.position="absolute";
    d.style.display="flex";
    d.style.inset="0px";
    d.style.backgroundColor="rgba(0, 0, 0, .8)";
    d.style.justifyContent="center";
    d.style.alignItems="center";
    document.querySelector("body").appendChild(d);

    var al=document.createElement('div');
    al.style.position="relative";
    al.style.display="flex";
    al.style.flexDirection="column";
    al.style.alignItems="center";
    al.style.webkitBoxAlign="center";
    al.style.backgroundColor="rgb(255, 255, 255)";
    al.style.padding="25px 30px";
    al.style.borderRadius="12px";
    d.appendChild(al);

    var titleEl = document.createElement('div');
    titleEl.style.fontFamily="Black";
    titleEl.style.fontSize="24px";
    titleEl.style.color="rgb(48, 26, 107)";
    titleEl.style.textAlign="center";
    titleEl.style.lineHeight="29px";
    titleEl.style.textTransform="uppercase";
    titleEl.innerText=title;
    al.appendChild(titleEl);

    var warnigIcon = document.createElement('figure');
    warnigIcon.style.width="111px";
    warnigIcon.style.height="105px";
    warnigIcon.style.margin="20px 0px";
    warnigIcon.style.backgroundImage='url("/images/ic_alert.svg")';
    warnigIcon.style.backgroundPosition="center center";
    al.appendChild(warnigIcon);

    var nText = document.createElement('p');
    nText.style.width="260px";
    nText.style.fontFamily="Bold";
    nText.style.fontSize="17px";
    nText.style.color="rgb(68, 68, 68)";
    nText.style.letterSpacing="1px";
    nText.style.textAlign="center";
    nText.style.lineHeight="16px";
    nText.innerText=text;
    al.appendChild(nText);

    var buttonBox = document.createElement('span');
    buttonBox.style.margin="20px 0px 0px";
    al.appendChild(buttonBox);

    var yesButton = document.createElement('button');
    yesButton.style.margin="0px 8px";
    yesButton.style.cursor="pointer";
    yesButton.style.border="none";
    yesButton.style.backgroundColor="rgb(86, 53, 220)";
    yesButton.style.borderRadius="7px";
    yesButton.style.width="160px";
    yesButton.style.height="42px";
    yesButton.style.fontFamily="Black";
    yesButton.style.fontSize="17px";
    yesButton.style.color="rgb(255, 255, 255)";
    yesButton.style.textAlign="center";
    yesButton.style.textTransform="uppercase";
    yesButton.innerText="Yes";
    yesButton.onmouseenter=function(){yesButton.style.backgroundColor="rgb(64, 49, 194)";};
    yesButton.onmouseleave=function(){yesButton.style.backgroundColor="rgb(86, 53, 220)";};
    yesButton.onclick=function(){
        d.parentNode.removeChild(d);
        funcYes();
    };
    buttonBox.appendChild(yesButton);

    var noButton = document.createElement('button');
    noButton.style.margin="0px 8px";
    noButton.style.cursor="pointer";
    noButton.style.border="none";
    noButton.style.backgroundColor="rgb(86, 53, 220)";
    noButton.style.borderRadius="7px";
    noButton.style.width="160px";
    noButton.style.height="42px";
    noButton.style.fontFamily="Black";
    noButton.style.fontSize="17px";
    noButton.style.color="rgb(255, 255, 255)";
    noButton.style.textAlign="center";
    noButton.style.textTransform="uppercase";
    noButton.innerText="No";
    noButton.onmouseenter=function(){noButton.style.backgroundColor="rgb(64, 49, 194)";};
    noButton.onmouseleave=function(){noButton.style.backgroundColor="rgb(86, 53, 220)";};
    noButton.onclick=function(){
        d.parentNode.removeChild(d);
        funcNo();
    };
    buttonBox.appendChild(noButton);
}

function decToHex(n){return Number(n).toString(16);}



function mainMenuTitle(){
    if (!Q("top-menu").length){
        var topMenu = document.createElement("div");
        topMenu.classList.add("top-menu");
        topMenu.style.width="auto";
        topMenu.style.height="fit-content";
        topMenu.style.display="inline-flex";
        topMenu.style.blockSize="max-content";
        topMenu.style.transformOrigin="top";
        topMenu.style.transform=Q("screen")[0].style.transform;
        window.addEventListener("resize", ()=>{
            topMenu.style.transform=Q("screen")[0].style.transform;
        })
        document.querySelector("#content").appendChild(topMenu);
        document.querySelector("#content").style.justifyContent="center";

        var settingTitle = document.createElement("div");
        settingTitle.classList.add("title");
        settingTitle.innerText=`Settings`;
        settingTitle.style.backgroundColor="rgba(0,0,0, 0.5)";
        settingTitle.style.borderRadius="0px 0px 5px 5px";
        settingTitle.style.color="white";
        settingTitle.style.right="0px";
        settingTitle.style.fontSize="100%";
        settingTitle.style.height="15px";
        settingTitle.style.width="auto";
        settingTitle.style.fontFamily="Black";
        settingTitle.style.padding="5px 10px 3px";
        settingTitle.onclick=()=>{alert("Секция в разработке");};
        settingTitle.style.cursor="pointer";
        settingTitle.style.opacity=0.3;

        topMenu.appendChild(settingTitle);

        var telegramTitle = document.createElement("div");
        telegramTitle.classList.add("title");
        telegramTitle.title="свяжитесь со мной!"
        telegramTitle.innerText=`Telegram`;
        telegramTitle.style.backgroundColor="#17bde2";
        telegramTitle.style.borderRadius="0px 0px 5px 5px";
        telegramTitle.style.color="white";
        telegramTitle.style.right="0px";
        telegramTitle.style.fontSize="100%";
        telegramTitle.style.height="14px";
        telegramTitle.style.width="auto";
        telegramTitle.style.fontFamily="Black";
        telegramTitle.style.padding="5px 10px 3px";
        telegramTitle.onclick=()=>{ window.open("https://t.me/DoctorDeathDDracula", '_blank'); };
        telegramTitle.style.cursor="pointer";
        telegramTitle.style.margin="0px 0px 0px 7px";

        topMenu.appendChild(telegramTitle);

        var title = document.createElement("div");
        title.classList.add("title");
        title.title="Инструкция";
        title.innerText=`GarticMode By Doctor Death D. Drac v${VERSION}`;
        title.style.backgroundColor="rgba(0,0,0, 0.5)";
        title.style.borderRadius="0px 0px 5px 5px";
        title.style.color="white";
        title.style.right="0px";
        title.style.fontSize="100%";
        title.style.height="15px";
        title.style.width="auto";
        title.style.fontFamily="Black";
        title.style.padding="5px 10px 3px";
        title.style.margin="0px 7px";
        title.onclick=()=>{ window.open("https://telegra.ph/GarticMod---Mod-dlya-igry-garticphonecom-05-18", '_blank'); };
        title.style.cursor="pointer";

        topMenu.appendChild(title);

        var discordTitle = document.createElement("div");
        discordTitle.classList.add("title");
        discordTitle.title="Присоединяйтесь к русскому сообществу в дискорде!"
        discordTitle.innerText=`Discord`;
        discordTitle.style.backgroundColor="#9163ff";
        discordTitle.style.borderRadius="0px 0px 5px 5px";
        discordTitle.style.color="white";
        discordTitle.style.right="0px";
        discordTitle.style.fontSize="100%";
        discordTitle.style.height="15px";
        discordTitle.style.width="auto";
        discordTitle.style.fontFamily="Black";
        discordTitle.style.padding="5px 10px 3px";
        discordTitle.onclick=()=>{ window.open("https://bit.ly/3uZqiG7", '_blank'); };
        discordTitle.style.cursor="pointer";
        discordTitle.style.margin="0px 7px 0px 0px";

        topMenu.appendChild(discordTitle);

        var donateTitle = document.createElement("div");
        donateTitle.classList.add("title");
        donateTitle.innerText=`Donate`;
        donateTitle.title="Поддержите мой проект";
        donateTitle.style.backgroundColor="skyblue";
        donateTitle.style.borderRadius="0px 0px 5px 5px";
        donateTitle.style.color="white";
        donateTitle.style.right="0px";
        donateTitle.style.fontSize="100%";
        donateTitle.style.height="15px";
        donateTitle.style.width="auto";
        donateTitle.style.fontFamily="Black";
        donateTitle.style.padding="5px 10px 3px";
        donateTitle.onclick=()=>{ window.open("http://bit.ly/DoctorDonation", '_blank'); };
        donateTitle.style.cursor="pointer";
        donateTitle.style.transformOrigin="top";
        donateTitle.style.transition=0.5+"s";
        donateTitle.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/851193266706710538/dfd_1.gif?width=1202&height=676)";
        donateTitle.style.backgroundSize="150%";
        donateTitle.style.backgroundPositionY="-5px";

        topMenu.appendChild(donateTitle);
    }
}

var globalScale;

document.querySelector("body").style.overflow="hidden";

function backgroundUpdate(){
    let inputLink = Q("urlbg")[0];
    let degInput = Q("deginput")[0];
    let sizeInput = Q("sizeinput")[0];
    let xInput = Q("xinput")[0];
    let yInput = Q("yinput")[0];;
    let curBgStyle = Q("imgChange")[0];
    curBgStyle.innerText = `.newdiv::before {content: ''; position: absolute; width: 200%; height: 200%; top: ${yInput.value}%; left: ${xInput.value}%; z-index: -1; background: url(${inputLink.value}) 0 0 no-repeat; -webkit-transform: rotate(${degInput.value}deg); -moz-transform: rotate(${degInput.value}deg); -ms-transform: rotate(${degInput.value}deg); -o-transform: rotate(${degInput.value}deg); transform: rotate(${degInput.value}deg); background-position: center; background-size: ${sizeInput.value}%;}`;
}

function updateMirrorLine(){
    var xInput = Q("xmirror")[0];
    var yInput = Q("ymirror")[0];
    var degInput = Q("degmirror")[0];
    var middleCanvas = Q("mirror-canvas")[0];
    var context = middleCanvas.getContext("2d");

    var x0 = Number(xInput.value);
    var y0 = Number(yInput.value);
    var alpha = Number(degInput.value);

    var a = Math.cos(Math.PI/180*alpha)*2000;
    var b = Math.sin(Math.PI/180*alpha)*2000;

    var x1 = x0 + a;
    var y1 = y0 + b;
    var x2 = x0 - a;
    var y2 = y0 - b;

    context.strokeStyle = 'green';
    context.lineWidth = 2;
    context.setLineDash([30, 0]);
    context.beginPath();
    context.moveTo(x0-2000, y0);
    context.lineTo(x0+2000, y0);
    context.stroke();

    context.strokeStyle = 'red';
    context.lineWidth = 4;
    context.setLineDash([30, 10]);
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function clearMidCanvas(){
    var middleCanvas = Q("mirror-canvas")[0];
    var context = middleCanvas.getContext("2d");
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, middleCanvas.width, middleCanvas.height);
    context.restore();
}

function lobbyEdit(){
    var s = Q("jsx-2855609897 game")[0];
    s.classList.add("reded");
    Q("jsx-2855609897")[4].innerText += "\nДоктор не рекомендует"
}

function createSizePull(){
    var backgroundMenuKey = false;

    var rightPannel=document.createElement('div');
    rightPannel.classList.add("rightpanel");
    rightPannel.style.width='270px';
    rightPannel.style.height='auto';
    rightPannel.style.position="absolute";
    rightPannel.style.right="-220px";
    //leftPannel.style.opacity=0;
    rightPannel.style.top="50%";
    rightPannel.style.transform="translate(0px, -50%)";
    rightPannel.style.transition="all 0.5s ease-in-out 0s";
    document.querySelector("#content").appendChild(rightPannel);

    rightPannel.onmouseenter=function(){
        backgroundMenuKey=true;
        linkInput.disabled=false;
        rightPannel.style.right="0px";
    }

    rightPannel.onmouseleave=function(){
        backgroundMenuKey=false;
        setTimeout(()=>{
            if (!backgroundMenuKey && Q("miror sel").length == 0){
                linkInput.disabled=true;
                rightPannel.style.right="-220px";
            }
        }, 2000);
    }

    var mainBackImage = document.createElement('div');
    mainBackImage.style.width='200px';
    mainBackImage.style.height='auto';
    mainBackImage.style.background='rgba(255, 255, 255, 0.13)';
    mainBackImage.style.borderRadius="10px";
    //textWindow.style.position="absolute";
    //textWindow2.style.transform="translateY(-134%)";
    //textWindow.style.position="fixed";
    mainBackImage.style.border="3px rgba(255,255,255, 0.5) solid";
    mainBackImage.style.color="#ffffff";
    mainBackImage.style.fontFamily="Black";
    mainBackImage.style.textAlign="center";
    mainBackImage.style.margin="0px 10px 10px 50px";
    mainBackImage.style.letterSpacing="1px";
    mainBackImage.style.size="18px";
    mainBackImage.style.lineHeight="15px";
    rightPannel.appendChild(mainBackImage);

    var linkTitleTextInput = document.createElement('div');
    linkTitleTextInput.innerText="Фон холста";
    linkTitleTextInput.style.fontFamily='Black';
    linkTitleTextInput.style.color="rgb(255, 255, 255)";
    linkTitleTextInput.style.fontSize="15px";
    linkTitleTextInput.style.margin="5px";
    linkTitleTextInput.style.textAlign="left";
    mainBackImage.appendChild(linkTitleTextInput);

    var linkInput = document.createElement('input');
    linkInput.classList.add("urlbg");
    linkInput.type="text";
    linkInput.value='';
    linkInput.placeholder="URL";
    linkInput.style.color="white";
    linkInput.style.fontSize="20px";
    linkInput.style.backgroundColor="rgba(255, 255, 255, 0.3)";
    linkInput.style.borderRadius="5px";
    linkInput.style.border="2px solid rgba(255, 255, 255, 0.8)";
    linkInput.style.width="166px";
    linkInput.style.height="30px";
    linkInput.style.margin="5px";
    linkInput.style.fontFamily='Black';
    linkInput.style.padding="0px 10px";
    linkInput.disabled=true;
    linkInput.oninput=()=>{backgroundUpdate();};
    mainBackImage.appendChild(linkInput);

    var degInputTitle = document.createElement('div');
    degInputTitle.innerText="Угол поворота";
    degInputTitle.style.fontFamily='Black';
    degInputTitle.style.color="rgb(255, 255, 255)";
    degInputTitle.style.fontSize="15px";
    degInputTitle.style.margin="5px";
    degInputTitle.style.textAlign="left";
    mainBackImage.appendChild(degInputTitle);

    var degRange1 = document.createElement('input');
    degRange1.classList.add("deginput");
    degRange1.type = "range";
    degRange1.min = 0;
    degRange1.max = 360;
    degRange1.step = 1;
    //degRange1.value = 200;
    degRange1.value="0";
    degRange1.style.margin="10px 5px";
    degRange1.style.width="190px";
    degRange1.style.height="4px";
    //degRange1.style.heigt="15px";
    degRange1.style.borderRadius="10px";
    degRange1.oninput=()=>{backgroundUpdate();};
    mainBackImage.appendChild(degRange1);

    var sizeInputTitle = document.createElement('div');
    sizeInputTitle.innerText="Размер фона";
    sizeInputTitle.style.fontFamily='Black';
    sizeInputTitle.style.color="rgb(255, 255, 255)";
    sizeInputTitle.style.fontSize="15px";
    sizeInputTitle.style.margin="5px";
    sizeInputTitle.style.textAlign="left";
    mainBackImage.appendChild(sizeInputTitle);

    var sizeRange = document.createElement('input');
    sizeRange.classList.add("sizeinput");
    sizeRange.type = "range";
    sizeRange.min = 0;
    sizeRange.max = 200;
    sizeRange.step = 1;
    sizeRange.value = 100;
    sizeRange.style.margin="10px 5px";
    sizeRange.style.width="190px";
    sizeRange.style.height="4px";
    //degRange1.style.heigt="15px";
    sizeRange.style.borderRadius="10px";
    sizeRange.oninput=()=>{backgroundUpdate();};
    mainBackImage.appendChild(sizeRange);

    var XposInputTitle = document.createElement('div');
    XposInputTitle.innerText="Смещение по X";
    XposInputTitle.style.fontFamily='Black';
    XposInputTitle.style.color="rgb(255, 255, 255)";
    XposInputTitle.style.fontSize="15px";
    XposInputTitle.style.margin="5px";
    XposInputTitle.style.textAlign="left";
    mainBackImage.appendChild(XposInputTitle);

    var posXRange = document.createElement('input');
    posXRange.classList.add("xinput");
    posXRange.type = "range";
    posXRange.min = -150;
    posXRange.max = 50;
    posXRange.step = 1;
    posXRange.value = -50;
    posXRange.style.margin="10px 5px";
    posXRange.style.width="190px";
    posXRange.style.height="4px";
    //degRange1.style.heigt="15px";
    posXRange.style.borderRadius="10px";
    posXRange.oninput=()=>{backgroundUpdate();};
    mainBackImage.appendChild(posXRange);

    var YposInputTitle = document.createElement('div');
    YposInputTitle.innerText="Смещение по Y";
    YposInputTitle.style.fontFamily='Black';
    YposInputTitle.style.color="rgb(255, 255, 255)";
    YposInputTitle.style.fontSize="15px";
    YposInputTitle.style.margin="5px";
    YposInputTitle.style.textAlign="left";
    mainBackImage.appendChild(YposInputTitle);

    var posYRange = document.createElement('input');
    posYRange.classList.add("yinput");
    posYRange.type = "range";
    posYRange.min = -150;
    posYRange.max = 50;
    posYRange.step = 1;
    posYRange.value = -50;
    posYRange.style.margin="10px 10px 20px 5px";
    posYRange.style.width="190px";
    posYRange.style.height="4px";
    //degRange1.style.heigt="15px";
    posYRange.style.borderRadius="10px";
    posYRange.oninput=()=>{backgroundUpdate();};
    mainBackImage.appendChild(posYRange);

    var printButton = document.createElement('button');
    printButton.style.fontFamily="Black";
    printButton.style.width="190px";
    printButton.style.height="";
    printButton.innerText="print";
    printButton.style.fontSize="18px";
    printButton.style.cursor="not-allowed";
    printButton.style.margin="5px 5px 10px 5px";
    printButton.style.borderRadius="5px";
    printButton.style.height="40px";
    printButton.style.color="rgb(48 26 107 / 50%)";
    printButton.style.borderColor="rgba(0, 0, 0, 0)";
    printButton.style.boxShadow="rgb(48 26 107 / 50%) 0px 6px 0px 0px";
    printButton.style.backgroundColor="rgb(255, 255, 255)";
    mainBackImage.appendChild(printButton);

    var mirrorWindow = document.createElement('div');
    mirrorWindow.style.width='200px';
    mirrorWindow.style.height='auto';
    mirrorWindow.style.border="3px solid rgba(255, 255, 255, 0.5)";
    mirrorWindow.style.color="white";
    mirrorWindow.style.fontFamily="Black";
    mirrorWindow.style.textAlign="center";
    mirrorWindow.style.margin="10px 10px 10px 50px";
    mirrorWindow.style.letterSpacing="1px";
    mirrorWindow.style.size="18px";
    mirrorWindow.style.lineHeight="15px";
    mirrorWindow.style.padding="0px 0px";
    mirrorWindow.style.backgroundColor='rgba(255, 255, 255, 0.13)';
    mirrorWindow.style.borderRadius="10px";
    mirrorWindow.style.opacity=0.5;
    mirrorWindow.style.transition="all 0.5s ease 0s";

    mirrorWindow.onclick=()=>{
        if (Q("miror sel act1").length == 0){
            Q("miror")[0].click();
        }
    }

    rightPannel.appendChild(mirrorWindow);

    var mirrorTitle = document.createElement('div');
    mirrorTitle.innerText="Настрока зеркала";
    mirrorTitle.style.fontFamily='Black';
    mirrorTitle.style.color="rgb(255, 255, 255)";
    mirrorTitle.style.fontSize="15px";
    mirrorTitle.style.margin="5px 5px 15px 5px";
    mirrorTitle.style.textAlign="left";
    mirrorWindow.appendChild(mirrorTitle);

    var xTitle = document.createElement('div');
    xTitle.innerText="Смещение по X";
    xTitle.style.fontFamily='Black';
    xTitle.style.color="rgb(255, 255, 255)";
    xTitle.style.fontSize="15px";
    xTitle.style.margin="5px";
    xTitle.style.textAlign="left";
    mirrorWindow.appendChild(xTitle);

    var xInput = document.createElement('input');
    xInput.classList.add("xmirror");
    xInput.type = "range";
    xInput.min = 0;
    xInput.max = 1516;
    xInput.step = 1;
    xInput.value = 758;
    xInput.style.margin="10px 10px 20px 5px";
    xInput.style.width="190px";
    xInput.style.height="4px";
    xInput.style.borderRadius="10px";
    xInput.oninput=()=>{
        clearMidCanvas();
        updateMirrorLine();
    };
    mirrorWindow.appendChild(xInput);

    var yTitle = document.createElement('div');
    yTitle.innerText="Смещение по Y";
    yTitle.style.fontFamily='Black';
    yTitle.style.color="rgb(255, 255, 255)";
    yTitle.style.fontSize="15px";
    yTitle.style.margin="5px";
    yTitle.style.textAlign="left";
    mirrorWindow.appendChild(yTitle);

    var yInput = document.createElement('input');
    yInput.classList.add("ymirror");
    yInput.type = "range";
    yInput.min = 0;
    yInput.max = 848;
    yInput.step = 1;
    yInput.value = 424;
    yInput.style.margin="10px 10px 20px 5px";
    yInput.style.width="190px";
    yInput.style.height="4px";
    yInput.style.borderRadius="10px";
    yInput.oninput=()=>{
        clearMidCanvas();
        updateMirrorLine();
    };
    mirrorWindow.appendChild(yInput);

    var degTitle = document.createElement('div');
    degTitle.innerText="Наклон";
    degTitle.style.fontFamily='Black';
    degTitle.style.color="rgb(255, 255, 255)";
    degTitle.style.fontSize="15px";
    degTitle.style.margin="5px";
    degTitle.style.textAlign="left";
    mirrorWindow.appendChild(degTitle);

    var degInput = document.createElement('input');
    degInput.classList.add("degmirror");
    degInput.type = "range";
    degInput.min = 0;
    degInput.max = 180;
    degInput.step = 1;
    degInput.value = 90;
    degInput.style.margin="10px 10px 20px 5px";
    degInput.style.width="190px";
    degInput.style.height="4px";
    degInput.style.borderRadius="10px";
    degInput.oninput=()=>{
        clearMidCanvas();
        updateMirrorLine();
    };
    mirrorWindow.appendChild(degInput);

    var defaultButton = document.createElement('button');
    defaultButton.style.fontFamily="Black";
    defaultButton.style.width="190px";
    defaultButton.style.height="";
    defaultButton.innerText="default";
    defaultButton.style.fontSize="18px";
    defaultButton.style.margin="5px 5px 10px 5px";
    defaultButton.style.borderRadius="5px";
    defaultButton.style.height="40px";
    defaultButton.style.color="#301A6B";
    defaultButton.style.borderColor="rgba(0, 0, 0, 0)";
    defaultButton.style.boxShadow="0px 6px 0px 0px #301a6b";
    defaultButton.onmouseenter=function(){
        defaultButton.style.backgroundColor="#cbb6e9";
    };
    defaultButton.onmouseleave=function(){
        defaultButton.style.backgroundColor="#ffffff";
        defaultButton.style.boxShadow="0px 6px 0px 0px";
        defaultButton.style.margin="5px 5px 10px 5px";
    };
    defaultButton.onmousedown=function(){
        defaultButton.style.boxShadow="0px 2px 0px 0px";
        defaultButton.style.margin="10px 5px 5px 5px";
    };
    defaultButton.onmouseup=function(){
        defaultButton.style.boxShadow="0px 6px 0px 0px";
        defaultButton.style.margin="5px 5px 10px 5px";
    };

    defaultButton.onclick=function(){
        degInput.value=90;
        xInput.value=758;
        yInput.value=424;
        clearMidCanvas();
        updateMirrorLine();
    };

    mirrorWindow.appendChild(defaultButton);

}

function createColorPull(){
    if (Q("leftpanel")[0] == undefined && document.isTrusted){

        var cookieDict = getCookieDict();

        if (document.querySelectorAll("#content").length>1){
            var parent = document.querySelectorAll("#content")[1];
        } else {parent = document.querySelectorAll("#content")[0];}

        var leftPannel=document.createElement('div');
        leftPannel.classList.add("leftpanel");
        leftPannel.style.width='270px';
        leftPannel.style.position="absolute";
        leftPannel.style.left="-220px";
        //leftPannel.style.opacity=0;
        leftPannel.style.top="50%";
        leftPannel.style.transform = "translate(0px, -50%)";
        leftPannel.style.transition = "all 0.5s ease-in-out 0s";

        var styleMenuKey=false;

        parent.appendChild(leftPannel);

        leftPannel.onmouseenter=function(){
            linkInput2.disabled=false;
            linkInput1.disabled=false;
            styleMenuKey=true;
            leftPannel.style.left="0px";
        }

        leftPannel.onmouseleave=function(){
            styleMenuKey=false;
            setTimeout(()=>{
                if (!styleMenuKey){
                    linkInput1.disabled=true;
                    linkInput2.disabled=true;
                    leftPannel.style.left="-220px";
                }
            }, 2000);
        }

        var minimaseButton = document.createElement('button');
        minimaseButton.innerText="_";
        minimaseButton.hidden=true;
        leftPannel.appendChild(minimaseButton);

        var textWindow2 = document.createElement('div');
        textWindow2.style.width='200px';
        textWindow2.style.height="fit-content";
        textWindow2.style.padding="5px 0px 19px";
        textWindow2.style.background='rgba(255, 255, 255, 0.13)';
        textWindow2.style.borderRadius="10px";
        //textWindow.style.position="absolute";
        //textWindow2.style.transform="translateY(-134%)";
        //textWindow.style.position="fixed";
        textWindow2.style.border="3px rgba(255,255,255, 0.5) solid";
        textWindow2.style.color="#ffffff";
        textWindow2.style.fontFamily="Black";
        textWindow2.style.textAlign="center";
        textWindow2.innerText="Можете и мой дискорд глянуть!)\n\n";
        textWindow2.style.margin="0px 10px 10px 10px";
        textWindow2.style.letterSpacing="1px";
        textWindow2.style.size="18px";
        textWindow2.style.lineHeight="18px";
        leftPannel.appendChild(textWindow2);

        var dsLink = document.createElement('a');
        dsLink.innerText="Doctor's Server";
        dsLink.href="https://discord.gg/eSZyC9JeAF";
        dsLink.style.opacity=1;
        dsLink.style.fontSize="20px"
        dsLink.style.textDecoration="none";
        dsLink.onclick=()=>{ window.open("https://discord.gg/eSZyC9JeAF", '_blank'); }
        dsLink.style.border="2px solid";
        dsLink.style.padding="6px 6px";
        dsLink.style.borderRadius="5px";
        dsLink.style.backgroundColor="rgb(138, 155, 213)";
        dsLink.style.color="white";
        textWindow2.appendChild(dsLink);

        var d=document.createElement('div');
        d.style.width='200px';
        //d.style.height='245px';
        d.style.height='auto';
        d.style.background='rgba(255, 255, 255, 0.13)';
        //d.style.top="40%";
        d.style.borderRadius="10px";
        //d.style.position="absolute";
        //d.style.transform="translateY(-50%)";
        //d.style.position="fixed";
        d.style.border="3px rgba(255,255,255, 0.5) solid";
        d.style.opacity=1;
        d.style.margin="10px";
        leftPannel.appendChild(d);

//         var textWindow = document.createElement('div');
//         textWindow.style.width='200px';
//         textWindow.style.height='auto';
//         textWindow.style.background='rgba(255, 255, 255, 0.13)';
//         textWindow.style.borderRadius="10px";
//         //textWindow.style.position="absolute";
//         //textWindow.style.transform="translateY(170%)";
//         //textWindow.style.position="fixed";
//         textWindow.style.border="3px rgba(255,255,255, 0.5) solid";
//         textWindow.style.color="#ffffff";
//         textWindow.style.fontFamily="Black";
//         textWindow.style.textAlign="center";
//         textWindow.innerText="По всем вопросам и предложениям обращайтесь ко мне:\n";
//         textWindow.style.margin="10px";
//         textWindow.style.letterSpacing="1px";
//         textWindow.style.size="18px";
//         textWindow.style.lineHeight="18px";
//         textWindow.style.padding="5px 0px 0px 0px";
//         leftPannel.appendChild(textWindow);

//         var tgLink = document.createElement('div');
//         tgLink.innerText="TELEGRAM";
//         tgLink.href="https://t.me/DoctorDeathDDracula";
//         tgLink.style.opacity=1;
//         tgLink.style.fontSize="20px"
//         tgLink.style.textDecoration="none";
//         tgLink.onclick=()=>{ window.open("https://t.me/DoctorDeathDDracula", '_blank'); }
//         tgLink.style.border="2px solid";
//         tgLink.style.padding="9px 0px 9px 0px";
//         tgLink.style.borderRadius="5px";
//         tgLink.style.backgroundColor="rgb(43, 162, 223)";
//         tgLink.style.color="white";
//         tgLink.style.margin="5px";
//         tgLink.style.cursor="pointer";
//         textWindow.appendChild(tgLink);

//         var myDsLink = document.createElement('div');
//         myDsLink.innerText="DISCORD";
//         myDsLink.href="https://discord.gg/eSZyC9JeAF";
//         myDsLink.style.opacity=1;
//         myDsLink.style.fontSize="20px"
//         myDsLink.style.textDecoration="none";
//         myDsLink.onclick=()=>{ window.open("https://discord.gg/eSZyC9JeAF", '_blank'); }
//         myDsLink.style.border="2px solid";
//         myDsLink.style.padding="9px 0px 9px 0px";
//         myDsLink.style.borderRadius="5px";
//         myDsLink.style.backgroundColor="rgb(138, 155, 213)";
//         myDsLink.style.color="white";
//         myDsLink.style.margin="10px 5px 6px 5px";
//         myDsLink.style.cursor="pointer";
//         textWindow.appendChild(myDsLink);

        var title1 = document.createElement('div');
        title1.innerText="Настрока градиента";
        title1.style.fontFamily='Black';
        title1.style.color="rgb(255, 255, 255)";
        title1.style.fontSize="15px";
        title1.style.margin="5px";
        d.appendChild(title1);

        var colorInput1 = document.createElement('input');
        colorInput1.classList.add("color-input1");
        colorInput1.type="color";
        colorInput1.style.border="2px solid rgba(255, 255, 255, 0.8)";
        colorInput1.style.borderRadius="5px";
        colorInput1.style.width="82px";
        colorInput1.style.height="32px";
        colorInput1.style.cursor="pointer";
        colorInput1.style.appearance="none";
        colorInput1.style.background="none";
        colorInput1.style.margin="5px";
        //colorInput1.value="#5c1ea6";
        if(!localStorage.getItem("gc1")){localStorage.setItem("gc1", "#5c1ea6")}
        colorInput1.value=localStorage.getItem("gc1");
        colorInput1.style.backgroundColor=localStorage.getItem("gc1");
        colorInput1.oninput=function(){
            localStorage.setItem("gc1", colorInput1.value);
            colorInput1.style.backgroundColor=colorInput1.value;
            document.querySelector("body").style.backgroundImage=`linear-gradient(${localStorage.getItem("gd")}deg, ${localStorage.getItem("gc1")} ${localStorage.getItem("pc1")}%, ${localStorage.getItem("gc2")} ${localStorage.getItem("pc2")}%)`;}
        d.appendChild(colorInput1);

        var colorInput2 = document.createElement('input');
        colorInput2.classList.add("color-input2");
        colorInput2.type="color";
        colorInput2.style.border="2px solid rgba(255, 255, 255, 0.8)";
        colorInput2.style.borderRadius="5px";
        colorInput2.style.width="82px";
        colorInput2.style.height="32px";
        colorInput2.style.cursor="pointer";
        colorInput2.style.appearance="none";
        colorInput2.style.background="none";
        colorInput2.style.margin="5px";
        //colorInput2.value="#c8435e";
        if(!localStorage.getItem("gc2")){localStorage.setItem("gc2", "#c8435e")}
        colorInput2.style.backgroundColor=localStorage.getItem("gc2");
        colorInput2.value=localStorage.getItem("gc2");
        colorInput2.oninput=function(){
            localStorage.setItem("gc2", colorInput2.value);
            colorInput2.style.backgroundColor=colorInput2.value;
            document.querySelector("body").style.backgroundImage=`linear-gradient(${localStorage.getItem("gd")}deg, ${localStorage.getItem("gc1")} ${localStorage.getItem("pc1")}%, ${localStorage.getItem("gc2")} ${localStorage.getItem("pc2")}%)`;}
        d.appendChild(colorInput2);

        var degRange1 = document.createElement('input');
        degRange1.classList.add("deg-input");
        degRange1.type = "range";
        degRange1.min = 0;
        degRange1.max = 360;
        degRange1.step = 1;
        //degRange1.value = 200;
        degRange1.style.margin="10px 5px";
        degRange1.style.width="190px";
        degRange1.style.height="4px";
        //degRange1.style.heigt="15px";
        degRange1.style.borderRadius="10px";
        if(!localStorage.getItem("gd")){localStorage.setItem("gd", "200")}
        degRange1.style.backgroundColor=localStorage.getItem("gd");
        degRange1.value=localStorage.getItem("gd");
        degRange1.oninput=function(){
            localStorage.setItem("gd", degRange1.value);
            document.querySelector("body").style.backgroundImage=`linear-gradient(${localStorage.getItem("gd")}deg, ${localStorage.getItem("gc1")} ${localStorage.getItem("pc1")}%, ${localStorage.getItem("gc2")} ${localStorage.getItem("pc2")}%)`;}
        d.appendChild(degRange1);

        var percentRange = document.createElement('input');
        percentRange.classList.add("prec-input1");
        percentRange.type = "range";
        percentRange.min = 0;
        percentRange.max = 100;
        percentRange.step = 1;
        //percentRange.value = 0;
        percentRange.style.width="190px";
        //percentRange.style.heigt="15px";
        percentRange.style.borderRadius="10px";
        percentRange.style.margin="10px 5px";
        percentRange.style.height="4px";
        if(!localStorage.getItem("pc1")){localStorage.setItem("pc1", "0")}
        percentRange.style.backgroundColor=localStorage.getItem("pc1");
        percentRange.value=localStorage.getItem("pc1");
        percentRange.oninput=function(){
            localStorage.setItem("pc1", percentRange.value);
            document.querySelector("body").style.backgroundImage=`linear-gradient(${localStorage.getItem("gd")}deg, ${localStorage.getItem("gc1")} ${localStorage.getItem("pc1")}%, ${localStorage.getItem("gc2")} ${localStorage.getItem("pc2")}%)`;}
        d.appendChild(percentRange);

        var percentRange1 = document.createElement('input');
        percentRange1.classList.add("prec-input2");
        percentRange1.type = "range";
        percentRange1.min = 0;
        percentRange1.max = 100;
        percentRange1.step = 1;
        //percentRange1.value = 85;
        percentRange1.style.margin="10px 5px";
        percentRange1.style.width="190px";
        //percentRange1.style.heigt="15px";
        percentRange1.style.borderRadius="10px";
        percentRange1.style.height="4px";
        if(!localStorage.getItem("pc2")){localStorage.setItem("pc2", "85")}
        percentRange1.style.backgroundColor=localStorage.getItem("pc2");
        percentRange1.value=localStorage.getItem("pc2");
        percentRange1.oninput=function(){
            localStorage.setItem("pc2", percentRange1.value);
            document.querySelector("body").style.backgroundImage=`linear-gradient(${localStorage.getItem("gd")}deg, ${localStorage.getItem("gc1")} ${localStorage.getItem("pc1")}%, ${localStorage.getItem("gc2")} ${localStorage.getItem("pc2")}%)`;
        }
        d.appendChild(percentRange1);

        var title2 = document.createElement('div');
        title2.innerText="Цвета блоков";
        title2.style.fontFamily='Black';
        title2.style.color="rgb(255, 255, 255)";
        title2.style.fontSize="15px";
        title2.style.margin="5px";
        d.appendChild(title2);

        var colorInput3 = document.createElement('input');
        colorInput3.classList.add("color-input3");
        colorInput3.type="color";
        colorInput3.style.border="2px solid rgba(255, 255, 255, 0.8)";
        colorInput3.style.borderRadius="5px";
        colorInput3.style.width="182px";
        colorInput3.style.height="32px";
        colorInput3.style.cursor="pointer";
        colorInput3.style.appearance="none";
        colorInput3.style.background="none";
        colorInput3.style.margin="5px";
        //colorInput2.value="#c8435e";
        if(!localStorage.getItem("sc3")){
            localStorage.setItem("sc3", "#000000");
            localStorage.setItem("sc3o", "00");
        }
        colorInput3.style.backgroundColor=localStorage.getItem("sc3");
        colorInput3.value=localStorage.getItem("sc3");
        colorInput3.oninput=function(){
            localStorage.setItem("sc3", colorInput3.value);
            colorInput3.style.backgroundColor=colorInput3.value;
            document.querySelector("#content").style.backgroundColor=colorInput3.value + localStorage.getItem("sc3o");
        }
        d.appendChild(colorInput3);

        var opacity1 = document.createElement('input');
        opacity1.classList.add("opacity1");
        opacity1.type = "range";
        opacity1.min = 0;
        opacity1.max = 255;
        opacity1.step = 1;
        //percentRange1.value = 85;
        opacity1.style.margin="10px 5px";
        opacity1.style.width="190px";
        //percentRange1.style.heigt="15px";
        opacity1.style.borderRadius="10px";
        opacity1.style.height="4px";
        opacity1.value=parseInt(localStorage.getItem("sc3o"), 16);
        document.querySelector("#content").style.backgroundColor=localStorage.getItem("sc3") + localStorage.getItem("sc3o");
        opacity1.oninput=()=>{
            var v = Number(opacity1.value).toString(16);
            if (v.length==1){v="0"+v};
            localStorage.setItem("sc3o", v);
            document.querySelector("#content").style.backgroundColor=localStorage.getItem("sc3") + localStorage.getItem("sc3o");
        };
        d.appendChild(opacity1);

        var colorInput4 = document.createElement('input');
        colorInput4.classList.add("color-input4");
        colorInput4.type="color";
        colorInput4.style.border="2px solid rgba(255, 255, 255, 0.8)";
        colorInput4.style.borderRadius="5px";
        colorInput4.style.width="182px";
        colorInput4.style.height="32px";
        colorInput4.style.cursor="pointer";
        colorInput4.style.appearance="none";
        colorInput4.style.background="none";
        colorInput4.style.margin="5px";
        Q("jsx-2562723607")[1].style.backgroundBlendMode="color-burn";
        if(!localStorage.getItem("sc4")){
            localStorage.setItem("sc4", "#000000");
            localStorage.setItem("sc4o", "00");
        }
        colorInput4.style.backgroundColor=localStorage.getItem("sc4");
        colorInput4.value=localStorage.getItem("sc4");
        colorInput4.oninput=function(){
            localStorage.setItem("sc4", colorInput4.value);
            colorInput4.style.backgroundColor=colorInput4.value;
            Q("jsx-2562723607")[1].style.backgroundColor=colorInput4.value + localStorage.getItem("sc4o");
        }
        d.appendChild(colorInput4);

        var opacity2 = document.createElement('input');
        opacity2.classList.add("opacity2");
        opacity2.type = "range";
        opacity2.min = 0;
        opacity2.max = 255;
        opacity2.step = 1;
        opacity2.value = `${cookieDict.opacity2}`;
        opacity2.style.margin="10px 5px";
        opacity2.style.width="190px";
        //percentRange1.style.heigt="15px";
        opacity2.style.borderRadius="10px";
        opacity2.style.height="4px";
        opacity2.value=parseInt(localStorage.getItem("sc4o"), 16);
        Q("jsx-2562723607")[1].style.backgroundColor=localStorage.getItem("sc4") + localStorage.getItem("sc4o");
        opacity2.oninput=()=>{
            var v = Number(opacity2.value).toString(16);
            if (v.length==1){v="0"+v};
            localStorage.setItem("sc4o", v);
            Q("jsx-2562723607")[1].style.backgroundColor=localStorage.getItem("sc4") + localStorage.getItem("sc4o");
        };
        d.appendChild(opacity2);

        var linkTitle = document.createElement('div');
        linkTitle.innerText="Задний фон";
        linkTitle.style.fontFamily='Black';
        linkTitle.style.color="rgb(255, 255, 255)";
        linkTitle.style.fontSize="15px";
        linkTitle.style.margin="5px";

        var linkInput1 = document.createElement('input');
        linkInput1.classList.add("link-input");
        linkInput1.type="text";
        if(!localStorage.getItem("sl1")){localStorage.setItem("sl1", "")}
        linkInput1.value=localStorage.getItem("sl1");
        if (linkInput1.value != ""){
            document.querySelector("#__next").style.backgroundImage=`url(${linkInput1.value})`;
        } else {
            document.querySelector("#__next").style.backgroundImage=`url(https://garticphone.com/images/textura.png)`;
        }
        linkInput1.placeholder="URL";
        linkInput1.style.color="white";
        linkInput1.style.fontSize="20px";
        linkInput1.style.backgroundColor="rgba(255, 255, 255, 0.3)";
        linkInput1.style.borderRadius="5px";
        linkInput1.style.border="2px solid rgba(255, 255, 255, 0.8)";
        linkInput1.style.width="166px";
        linkInput1.style.height="30px";
        linkInput1.style.margin="5px";
        linkInput1.style.fontFamily='Black';
        linkInput1.style.padding="0px 10px";
        linkInput1.oninput=()=>{
            localStorage.setItem("sl1", linkInput1.value);
            if (linkInput1.value != ""){
                document.querySelector("#__next").style.backgroundImage=`url(${linkInput1.value})`;
            } else {
                document.querySelector("#__next").style.backgroundImage=`url(https://garticphone.com/images/textura.png)`;
            }
        };
        linkInput1.disabled=true;

        var linkTitle2 = document.createElement('div');
        linkTitle2.innerText="Задний фон блока";
        linkTitle2.style.fontFamily='Black';
        linkTitle2.style.color="rgb(255, 255, 255)";
        linkTitle2.style.fontSize="15px";
        linkTitle2.style.margin="5px";

        var linkInput2 = document.createElement('input');
        linkInput2.classList.add("link-input-2");
        linkInput2.type="text";
        if(!localStorage.getItem("sl2")){localStorage.setItem("sl2", "")}
        linkInput2.value=localStorage.getItem("sl2");
        if (linkInput2.value != ""){
            Q("jsx-2562723607")[1].style.backgroundImage=`url(${linkInput2.value})`;
        }
        linkInput2.placeholder="URL";
        linkInput2.style.color="white";
        linkInput2.style.fontSize="20px";
        linkInput2.style.backgroundColor="rgba(255, 255, 255, 0.3)";
        linkInput2.style.borderRadius="5px";
        linkInput2.style.border="2px solid rgba(255, 255, 255, 0.8)";
        linkInput2.style.width="166px";
        linkInput2.style.height="30px";
        linkInput2.style.margin="5px";
        linkInput2.style.fontFamily='Black';
        linkInput2.style.padding="0px 10px";
        linkInput2.oninput=()=>{
                console.log("1");
                localStorage.setItem("sl2", linkInput2.value);
                if (linkInput2.value != ""){
                    Q("jsx-2562723607")[1].style.backgroundImage=`url(${linkInput2.value})`;
                } else {
                    Q("jsx-2562723607")[1].style.backgroundImage=`none`;
                }
        };
        linkInput2.disabled=true;
        Q("jsx-2562723607")[1].style.backgroundSize="cover";
        Q("jsx-2562723607")[1].style.backgroundPosition="center";
        Q("jsx-2562723607")[1].style.backgroundRepeat="no-repeat";


        d.appendChild(linkTitle);
        d.appendChild(linkInput1);
        d.appendChild(linkTitle2);
        d.appendChild(linkInput2);

        var gradientButton = document.createElement('button');
        gradientButton.style.fontFamily="Black";
        gradientButton.style.width="190px";
        gradientButton.style.height="";
        gradientButton.innerText="random";
        gradientButton.style.fontSize="18px";
        gradientButton.style.margin="5px 5px 10px 5px";
        gradientButton.style.borderRadius="5px";
        gradientButton.style.height="40px";
        gradientButton.style.color="#301A6B";
        gradientButton.style.borderColor="rgba(0, 0, 0, 0)";
        gradientButton.style.boxShadow="0px 6px 0px 0px #301a6b";
        gradientButton.onmouseenter=function(){
            gradientButton.style.backgroundColor="#cbb6e9";
        };
        gradientButton.onmouseleave=function(){
            gradientButton.style.backgroundColor="#ffffff";
            gradientButton.style.boxShadow="0px 6px 0px 0px";
            gradientButton.style.margin="5px 5px 10px 5px";
        };
        gradientButton.onmousedown=function(){
            gradientButton.style.boxShadow="0px 2px 0px 0px";
            gradientButton.style.margin="10px 5px 5px 5px";
        };
        gradientButton.onmouseup=function(){
            gradientButton.style.boxShadow="0px 6px 0px 0px";
            gradientButton.style.margin="5px 5px 10px 5px";
        };

        gradientButton.onclick=()=>{
            colorInput1.value=rgb2hex(getRandomInt(255), getRandomInt(255), getRandomInt(255));
            colorInput1.style.backgroundColor=colorInput1.value;
            colorInput2.value=rgb2hex(getRandomInt(255), getRandomInt(255), getRandomInt(255));
            colorInput2.style.backgroundColor=colorInput2.value;
            degRange1.value=getRandomInt(360);
            percentRange.value=getRandomInt(100);
            percentRange1.value=getRandomInt(100);
            localStorage.setItem("gc1", colorInput1.value);
            localStorage.setItem("gc2", colorInput2.value);
            localStorage.setItem("gd", degRange1.value);
            localStorage.setItem("pc1", percentRange.value);
            localStorage.setItem("pc2", percentRange1.value);
            document.querySelector("body").style.backgroundImage=`linear-gradient(${localStorage.getItem("gd")}deg, ${localStorage.getItem("gc1")} ${localStorage.getItem("pc1")}%, ${localStorage.getItem("gc2")} ${localStorage.getItem("pc2")}%)`;
        }

        d.appendChild(gradientButton);


        var defaultButton = document.createElement('button');
        defaultButton.style.fontFamily="Black";
        defaultButton.style.width="190px";
        defaultButton.style.height="";
        defaultButton.innerText="default";
        defaultButton.style.fontSize="18px";
        defaultButton.style.margin="5px 5px 10px 5px";
        defaultButton.style.borderRadius="5px";
        defaultButton.style.height="40px";
        defaultButton.style.color="#301A6B";
        defaultButton.style.borderColor="rgba(0, 0, 0, 0)";
        defaultButton.style.boxShadow="0px 6px 0px 0px #301a6b";
        defaultButton.onmouseenter=function(){
            defaultButton.style.backgroundColor="#cbb6e9";
        };
        defaultButton.onmouseleave=function(){
            defaultButton.style.backgroundColor="#ffffff";
            defaultButton.style.boxShadow="0px 6px 0px 0px";
            defaultButton.style.margin="5px 5px 10px 5px";
        };
        defaultButton.onmousedown=function(){
            defaultButton.style.boxShadow="0px 2px 0px 0px";
            defaultButton.style.margin="10px 5px 5px 5px";
        };
        defaultButton.onmouseup=function(){
            defaultButton.style.boxShadow="0px 6px 0px 0px";
            defaultButton.style.margin="5px 5px 5px 5px";
        };
        defaultButton.onclick=function(){
            linkInput1.disabled=true;
            linkInput2.disabled=true;
            leftPannel.style.left="-220px";
            dialogWindow('reset all style settings?', 'All style settings will be reset to the default settings without the possibility of recovery', ()=>{
                let colorInput1 = Q("color-input1")[0];
                let colorInput2 = Q("color-input2")[0];
                let colorInput3 = Q("color-input3")[0];
                let colorInput4 = Q("color-input4")[0];
                let degRange1 = Q("deg-input")[0];
                let percentRange1 = Q("prec-input1")[0];
                let percentRange2 = Q("prec-input2")[0];
                let linkInput1 = Q("link-input")[0];
                let linkInput2 = Q("link-input-2")[0];
                let opacity1 = Q("opacity1")[0];
                let opacity2 = Q("opacity2")[0];

                colorInput1.value="#7213e7";
                colorInput2.value="#c8435e";
                colorInput3.value="#000000";
                colorInput4.value="#000000";
                degRange1.value=200;
                percentRange1.value=0;
                percentRange2.value=100;
                linkInput1.value="";
                linkInput2.value="";
                opacity1.value=0;
                opacity2.value=0;

                localStorage.setItem("gc1", colorInput1.value);
                colorInput1.style.backgroundColor=colorInput1.value;
                localStorage.setItem("gc2", colorInput2.value);
                colorInput2.style.backgroundColor=colorInput2.value;
                localStorage.setItem("gd", degRange1.value);
                localStorage.setItem("pc1", percentRange1.value);
                localStorage.setItem("pc2", percentRange2.value);
                localStorage.setItem("sl1", linkInput1.value);
                localStorage.setItem("sl2", linkInput2.value);
                localStorage.setItem("sc3", colorInput3.value);
                localStorage.setItem("sc3o", "00");
                colorInput3.style.backgroundColor=colorInput3.value;
                localStorage.setItem("sc4", colorInput4.value);
                localStorage.setItem("sc4o", "00");
                colorInput4.style.backgroundColor=colorInput4.value;

                Q("jsx-2562723607")[1].style.backgroundColor="#00000000";
                document.querySelector("#content").style.backgroundColor="#00000000";
                document.querySelector("body").style.backgroundImage=`linear-gradient(${localStorage.getItem("gd")}deg, ${localStorage.getItem("gc1")} ${localStorage.getItem("pc1")}%, ${localStorage.getItem("gc2")} ${localStorage.getItem("pc2")}%)`;
                document.querySelector("#__next").style.backgroundImage="";
            }, ()=>{
                linkInput1.disabled=false;
                linkInput2.disabled=false;
                leftPannel.style.left="0px";
            })
            };

        d.appendChild(defaultButton);
        styleUpdate();
    }
}

    function styleUpdate(){
        console.log("double")
        Q("jsx-2562723607")[1].style.backgroundBlendMode="color-dodge";
        Q("jsx-2562723607")[1].style.backgroundSize="cover";
        Q("jsx-2562723607")[1].style.backgroundPosition="center";
        Q("jsx-2562723607")[1].style.backgroundRepeat="no-repeat";
        Q("jsx-2562723607")[1].style.backgroundColor=localStorage.getItem("sc4") + localStorage.getItem("sc4o");
        document.querySelector("#content").style.backgroundColor=localStorage.getItem("sc3") + localStorage.getItem("sc3o");
        if(localStorage.getItem("sl1") != ""){document.querySelector("#__next").style.backgroundImage=`url(${localStorage.getItem("sl1")})`;}
        Q("jsx-2562723607")[1].style.backgroundImage=`url(${localStorage.getItem("sl2")})`;
        document.querySelector("body").style.backgroundImage=`linear-gradient(${localStorage.getItem("gd")}deg, ${localStorage.getItem("gc1")} ${localStorage.getItem("pc1")}%, ${localStorage.getItem("gc2")} ${localStorage.getItem("pc2")}%)`;
    }


if (document.isTrusted){
    exec();
}

var lobbyKey = false;
var menuKey = false;
var menuLinkKey = false;
var drawKey = false;
var bookKey = false;
var startKey = false;
var writeKey = false;
var memoryKey = false;
var waitingKey = false;

    window.onkeydown=(e)=>{
        if (e.key === "Enter" || e.key === "Ent" || e.keyCode === 13) {
            Q("jsx-4289504161 big")[0].click();
        }
        var input = Q("jsx-856742297 ")[0];
        if ((e.code == "Delete" || e.key == "Delete" || e.keyCode == 46) && e.ctrlKey){
            var p = prompt("Введите команду:", "100") ;
            if (p == "0"){
                document.cookie="badguy=0";
                setValue(input, "");
                alert("ВЫ БОЛЬШЕ НЕ КЛОУН");
            } else if (p == "1"){
                document.cookie="badguy=1;";
                setValue(input, "vinegative");
                alert("ПОЗДРАВЛЯЮ, ВЫ КЛОУН!");
            } else if (p == "123"){
                setValue(input, "DoctorDeathDDracula ");
            } else if (p == "100"){
                var r = localStorage.getItem("room");
                if (!r){alert("Ошибка"); return;}
                localStorage.setItem("uuid", "" + Math.random());
                document.location.replace(r);
            } else {alert("Такой команды не существует");}
        }
        if ((e.key=="=" || e.code=="Equal" || e.keyCode=="187") && e.altKey){
            localStorage.setItem("uuid", "" + Math.random());
            window.open(localStorage.getItem("room"), '_blank');
        }
    }


function flagsOff(){

    if (drawKey && Q("jsx-1553483530 pencil")[0]){
        Q("jsx-1553483530 pencil")[0].parentNode.removeChild(Q("jsx-1553483530 pencil")[0]);
    }

    if (Q("bm")[0]){
        Q("bm")[0].pause();
        Q("bm")[0].currentTime = 0;
    }

    lobbyKey = false;
    menuKey = false;
    menuLinkKey = false;
    drawKey = false;
    bookKey = false;
    startKey = false;
    writeKey = false;
    memoryKey = false;
    waitingKey = false;
}

function memoryFunc(){
    if (document.URL.indexOf("draw") != -1){return}
    var smth = Q("jsx-1307288772 core")[0];
    var mCanvas = Q("jsx-3193114933 ")[0];
    smth.style.backgroundImage="url()";
    smth.style.cursor="pointer";
    smth.onclick = ()=>{
        if (mCanvas.style.opacity == "" || mCanvas.style.opacity == "1"){
            mCanvas.style.opacity = 0;
            //smth.style.backgroundImage="url(https://images-ext-1.discordapp.net/external/4j6MAS7dlRdJgi1KciurS5q6zKYnF3KbhUzq9YP1xFs/https/static-prod.weplay.tv/2018-12-19/f2e481db44650925f3f5bb8a840181ab_large_cover.jpeg?width=1202&height=676)";
            smth.style.backgroundColor="black";
            smth.style.backgroundSize="100%";
            smth.style.border="4px solid red";
            smth.style.zIndex=10;
        } else {
            mCanvas.style.opacity = 1;
            //smth.style.backgroundImage="url()";
            smth.style.backgroundColor="";
            smth.style.border="";
        }
    }

}

function offBgMenu(){
        var panel = Q("rightpanel");
        if (panel.length != 0){
            panel[0].parentNode.removeChild(panel[0]);
        }
    }

function clown(){
        if (getCookieDict().badguy=="1"){
            var input = Q("jsx-856742297 ")[0];
            setValue(input, "vinegative");
            Q("jsx-4289504161 big")[0].addEventListener('click', ()=>{
                if (getCookieDict().badguy=="1"){
                    setValue(input, "vinegative");
                }
            })
        }
    }



function main(){
    if (document.URL.indexOf("book") == -1){delete blackArr};
    if ((document.URL.indexOf("https://garticphone.com/") != -1 && document.URL.length == 26) && !menuKey){

        if (!(localStorage.getItem("clown")=="false")){
            if (Q("jsx-856742297 ")[0].value.toLowerCase()=="шпилька" || Q("jsx-856742297 ")[0].placeholder.toLowerCase()=="шпилька"){
                localStorage.setItem("clown", "true");
            };
            if (localStorage.getItem("clown")=="true"){
                Q("jsx-4289504161 big")[0].addEventListener("click", ()=>{
                    setValue(Q("jsx-856742297 ")[0], "Шпилька");
                })
            }
        }
        //Блок главного меню
        //alert("menuKey");
        window.onload=()=>{
        //    deletBanner();
            createColorPull();
        }
        setTimeout(styleUpdate, 10);
        //setTimeout(blackListFunc, 10);
        setTimeout(deletBanner, 10);
        setTimeout(createColorPull, 10);
        setTimeout(mainMenuTitle, 10);
        //setTimeout(console.clear, 2000);
        flagsOff();
        menuKey=true;
    }
    else if (document.URL.indexOf("?c=") != -1 && !menuLinkKey){

        if (!(localStorage.getItem("clown")=="false")){
            if (Q("jsx-856742297 ")[0].value.toLowerCase()=="шпилька" || Q("jsx-856742297 ")[0].placeholder.toLowerCase()=="шпилька"){
                localStorage.setItem("clown", "true");
            };
            if (localStorage.getItem("clown")=="true"){
                Q("jsx-4289504161 big")[0].addEventListener("click", ()=>{
                    setValue(Q("jsx-856742297 ")[0], "Шпилька");
                })
            }
        }
        localStorage.setItem("room", document.URL);
        //Блок главного меню при входе по ссылке
        //alert("menuLinkKey");
        //window.onload=()=>{
            //deletBanner();
            //createColorPull();
            //styleUpdate();
        //}
        //setTimeout(blackListFunc, 10);
        setTimeout(deletBanner, 10);
        setTimeout(createColorPull, 10);
        setTimeout(styleUpdate, 10);
        setTimeout(mainMenuTitle, 10);
        //setTimeout(console.clear, 2000);
        flagsOff();
        menuLinkKey=true;
    }
    else if (document.URL.indexOf("draw") != -1 && !drawKey){
        setTimeout(styleUpdate, 10);
        setTimeout(mainDrawFunc, 500);
        flagsOff();
        drawKey=true;
    }
    else if (document.URL.indexOf("lobby") != -1 && !lobbyKey){
        var v = Q("jsx-4216852870 jsx-2842824398 nick");
        for (let i=0; i<v.length; i++){VIPList(v[i]);}
        addListenerToBlock(Q("jsx-1927447174 scrollElements")[0]);
        setTimeout(lobbyEdit, 300);
        setTimeout(styleUpdate, 10);
        flagsOff();
        lobbyKey=true;
    }
    else if (document.URL.indexOf("book") != -1 && !bookKey){
        var w = Q("scrollElements")[1];
        if (!w){
            Q("jsx-2790456822 timeline")[0].addEventListener("DOMNodeInserted", (e)=>{
                if (e.target.classList.contains("scroll")){
                    console.log("WARNING");
                    var w = Q("scrollElements")[1].children;
                    censorListener();
                    for(var k=0; k<w.length; k++){cencFunc(w[k].firstChild)}
                }
            });
        } else {
            setTimeout(()=>{
                w = Q("scrollElements")[1].children;
                censorListener();
                for(var k=0; k<w.length; k++){cencFunc(w[k].firstChild)}
            }, 100);
        }

        debagDrawinfContainerOnExit();

        if (Q("zoomC").length){
            Q("zoomC")[0].parentNode.removeChild(Q("zoomC")[0]);
        }

        v = Q("jsx-4216852870 jsx-2842824398 nick");
        for (let i=0; i<v.length; i++){VIPList(v[i]);}
        addListenerToBlock(Q("jsx-3158565948 scrollElements")[0]);
        setTimeout(styleUpdate, 10);
        offBgMenu();
        flagsOff();
        bookKey=true;
    }
    else if (document.URL.indexOf("start") != -1 && !startKey){
        setTimeout(styleUpdate, 10);
        setTimeout(extendTextInput , 500);
        flagsOff();
        startKey=true;
    }
    else if (document.URL.indexOf("write") != -1 && !writeKey){
        debagDrawinfContainerOnExit();
        //Блок названия картинки
        offBgMenu();
        setTimeout(extendTextInput, 200);
        if (Q("zoomC").length){
            Q("zoomC")[0].parentNode.removeChild(Q("zoomC")[0]);
        }
        setTimeout(styleUpdate, 10);
        flagsOff();
        writeKey=true;
        setTimeout(memoryFunc, 500);
    }
    else if (document.URL.indexOf("memory") != -1 && !memoryKey){
        //Блок перерисовки картинки
        debagDrawinfContainerOnExit();
        offBgMenu();
        setTimeout(styleUpdate, 10);
        if (Q("zoomC").length){
            Q("zoomC")[0].parentNode.removeChild(Q("zoomC")[0]);
        }
        flagsOff();
        memoryKey=true;
    }
    else if (document.URL.indexOf("waiting") != -1 && !waitingKey){
        //alert("IN");

        //window.onload=()=>{
        //    styleUpdate();
        //    waitVideo();
        //}

        setTimeout(styleUpdate, 10);
        //waitVideo();

        //setTimeout(styleUpdate, 500);
        //setTimeout(console.clear, 2000);
        setTimeout(waitVideo, 500);
        flagsOff();
        waitingKey=true;
    }
    else{
        //Непромодулированная комната
        //flagsOff();
    }
}


function exec() {
    document.querySelector("#content").addEventListener("DOMNodeInserted", main);
}









































(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[18], {
		"20a2": function(e, t, o) {
			e.exports = o("nOHt")
		},
		"6VPp": function(e, t, o) {
			"use strict";
			var n = o("nKUr"),
				i = o("MX0m"),
				r = o.n(i),
				s = o("q1tI"),
				a = o("Ya7B"),
				c = o("kOrG"),
				x = o("YSmr"),
				l = "#FFF";
			t.a = Object(a.c)((function(e) {
				var t = Object(s.useRef)();
				return Object(s.useEffect)((function() {
					var o = t.current.getContext("2d");
					o.strokeStyle = l, o.lineWidth = 8;
					var n = 60;
					if (e.timeStarted) {
						var i, r, s = performance.now() - e.elapsedTime,
							a = 0;
						if (e.speed != x.kb) r = e.speed == x.ib ? .5 * e.value : e.speed == x.lb ? 2 * e.value : e.value, e.reduced && (r /= 4);
						else {
							var p = .2 * e.value,
								d = 2 * e.value - p,
								b = Math.pow(d / 100, 1 / e.turnMax);
							r = p + 100 * Math.pow(b, e.turnMax - e.turnNum)
						}
						var u = !1;
						return e.reduced ? c.a.play("timeout", !1, .9) : s / r < .8 && (u = setTimeout((function() {
								c.a.play("timeout", !1, .9)
							}), .8 * r - s)), i = requestAnimationFrame((function t(s) {
								var c = (s - e.elapsedTime) / r,
									x = c >= 1;
								if ((c - a > .001 || x) && (a = c, o.clearRect(0, 0, 120, 120), o.beginPath(), o.arc(n, n, 56, 0, 2 * Math.PI), o.stroke(), !x)) {
									o.fillStyle = c <= .8 && !e.reduced ? l : "#F7B500", o.beginPath(), o.moveTo(n, n), o.arc(n, n, 44, 1.5 * Math.PI, 1.5 * Math.PI + 2 * Math.PI * c, !0), o.lineTo(n, n), o.fill()
								}
								x || (i = requestAnimationFrame(t))
							})),
							function() {
								c.a.pause("timeout"), u && clearTimeout(u), cancelAnimationFrame(i)
							}
					}
					o.beginPath(), o.arc(n, n, 56, 0, 2 * Math.PI), o.stroke()
				}), [e.timeStarted]), Object(n.jsxs)(n.Fragment, {
					children: [Object(n.jsx)("canvas", {
						ref: t,
						width: 120,
						height: 120,
						className: "jsx-241293408 time"
					}), Object(n.jsx)(r.a, {
						id: "2409927210",
						children: ["canvas.jsx-241293408{position:absolute;width:60px;height:60px;top:20px;right:20px;font-family:Ubuntu;font-weight:500;font-size:36px;color:rgba(255,255,255,.69);}", "@media (max-width:640px){canvas.jsx-241293408{z-index:5;width:40px;height:40px;top:12px;right:10px;}}"]
					}), Object(n.jsx)(r.a, {
						id: "2667873027",
						children: [".ar .time{left:20px;right:initial;}", "@media (max-width:640px){.ar .time{left:10px;}}"]
					})]
				})
			}), (function(e) {
				return {
					reduced: e.data.configs.speed == x.hb,
					speed: e.data.configs.speed,
					elapsedTime: e.data.elapsedTime,
					timeStarted: e.data.timeStarted,
					turnNum: e.data.turnNum,
					turnMax: e.data.turnMax
				}
			}))
		},
		HF4s: function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "__N_SSG", (function() {
				return me
			}));
			var n = o("nKUr"),
				i = o("jT3O"),
				r = o("z7pX"),
				s = o("MX0m"),
				a = o.n(s),
				c = o("CBA4"),
				x = o("q1tI"),
				l = o.n(x),
				p = o("20a2"),
				d = "undefined" !== typeof navigator && navigator.userAgent.toLowerCase().indexOf("firefox") > 0;

			function b(e, t, o) {
				e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent && e.attachEvent("on".concat(t), (function() {
					o(window.event)
				}))
			}

			function u(e, t) {
				for (var o = t.slice(0, t.length - 1), n = 0; n < o.length; n++) o[n] = e[o[n].toLowerCase()];
				return o
			}

			function f(e) {
				"string" !== typeof e && (e = "");
				for (var t = (e = e.replace(/\s/g, "")).split(","), o = t.lastIndexOf(""); o >= 0;) t[o - 1] += ",", t.splice(o, 1), o = t.lastIndexOf("");
				return t
			}
			for (var h = {
					backspace: 8,
					tab: 9,
					clear: 12,
					enter: 13,
					return: 13,
					esc: 27,
					escape: 27,
					space: 32,
					left: 37,
					up: 38,
					right: 39,
					down: 40,
					del: 46,
					delete: 46,
					ins: 45,
					insert: 45,
					home: 36,
					end: 35,
					pageup: 33,
					pagedown: 34,
					capslock: 20,
					"\u21ea": 20,
					",": 188,
					".": 190,
					"/": 191,
					"`": 192,
					"-": d ? 173 : 189,
					"=": d ? 61 : 187,
					";": d ? 59 : 186,
					"'": 222,
					"[": 219,
					"]": 221,
					"\\": 220
				}, m = {
					"\u21e7": 16,
					shift: 16,
					"\u2325": 18,
					alt: 18,
					option: 18,
					"\u2303": 17,
					ctrl: 17,
					control: 17,
					"\u2318": 91,
					cmd: 91,
					command: 91
				}, g = {
					16: "shiftKey",
					18: "altKey",
					17: "ctrlKey",
					91: "metaKey",
					shiftKey: 16,
					ctrlKey: 17,
					altKey: 18,
					metaKey: 91
				}, j = {
					16: !1,
					18: !1,
					17: !1,
					91: !1
				}, w = {}, y = 1; y < 20; y++) h["f".concat(y)] = 111 + y;
			var k = [],
				v = "all",
				_ = [],
				O = function(e) {
					return h[e.toLowerCase()] || m[e.toLowerCase()] || e.toUpperCase().charCodeAt(0)
				};

			function F(e) {
				v = e || "all"
			}

			function C() {
				return v || "all"
			}
			var E = function(e) {
				var t = e.key,
					o = e.scope,
					n = e.method,
					i = e.splitKey,
					r = void 0 === i ? "+" : i;
				f(t).forEach((function(e) {
					var t = e.split(r),
						i = t.length,
						s = t[i - 1],
						a = "*" === s ? "*" : O(s);
					if (w[a]) {
						o || (o = C());
						var c = i > 1 ? u(m, t) : [];
						w[a] = w[a].map((function(e) {
							return (!n || e.method === n) && e.scope === o && function(e, t) {
								for (var o = e.length >= t.length ? e : t, n = e.length >= t.length ? t : e, i = !0, r = 0; r < o.length; r++) - 1 === n.indexOf(o[r]) && (i = !1);
								return i
							}(e.mods, c) ? {} : e
						}))
					}
				}))
			};

			function z(e, t, o) {
				var n;
				if (t.scope === o || "all" === t.scope) {
					for (var i in n = t.mods.length > 0, j) Object.prototype.hasOwnProperty.call(j, i) && (!j[i] && t.mods.indexOf(+i) > -1 || j[i] && -1 === t.mods.indexOf(+i)) && (n = !1);
					(0 !== t.mods.length || j[16] || j[18] || j[17] || j[91]) && !n && "*" !== t.shortcut || !1 === t.method(e, t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0))
				}
			}

			function T(e) {
				var t = w["*"],
					o = e.keyCode || e.which || e.charCode;
				if (N.filter.call(this, e)) {
					if (93 !== o && 224 !== o || (o = 91), -1 === k.indexOf(o) && 229 !== o && k.push(o), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach((function(t) {
							var o = g[t];
							e[t] && -1 === k.indexOf(o) ? k.push(o) : !e[t] && k.indexOf(o) > -1 ? k.splice(k.indexOf(o), 1) : "metaKey" === t && e[t] && 3 === k.length && (e.ctrlKey || e.shiftKey || e.altKey || (k = k.slice(k.indexOf(o))))
						})), o in j) {
						for (var n in j[o] = !0, m) m[n] === o && (N[n] = !0);
						if (!t) return
					}
					for (var i in j) Object.prototype.hasOwnProperty.call(j, i) && (j[i] = e[g[i]]);
					e.getModifierState && (!e.altKey || e.ctrlKey) && e.getModifierState("AltGraph") && (-1 === k.indexOf(17) && k.push(17), -1 === k.indexOf(18) && k.push(18), j[17] = !0, j[18] = !0);
					var r = C();
					if (t)
						for (var s = 0; s < t.length; s++) t[s].scope === r && ("keydown" === e.type && t[s].keydown || "keyup" === e.type && t[s].keyup) && z(e, t[s], r);
					if (o in w)
						for (var a = 0; a < w[o].length; a++)
							if (("keydown" === e.type && w[o][a].keydown || "keyup" === e.type && w[o][a].keyup) && w[o][a].key) {
								for (var c = w[o][a], x = c.splitKey, l = c.key.split(x), p = [], d = 0; d < l.length; d++) p.push(O(l[d]));
								p.sort().join("") === k.sort().join("") && z(e, c, r)
							}
				}
			}

			function N(e, t, o) {
				k = [];
				var n = f(e),
					i = [],
					r = "all",
					s = document,
					a = 0,
					c = !1,
					x = !0,
					l = "+";
				for (void 0 === o && "function" === typeof t && (o = t), "[object Object]" === Object.prototype.toString.call(t) && (t.scope && (r = t.scope), t.element && (s = t.element), t.keyup && (c = t.keyup), void 0 !== t.keydown && (x = t.keydown), "string" === typeof t.splitKey && (l = t.splitKey)), "string" === typeof t && (r = t); a < n.length; a++) i = [], (e = n[a].split(l)).length > 1 && (i = u(m, e)), (e = "*" === (e = e[e.length - 1]) ? "*" : O(e)) in w || (w[e] = []), w[e].push({
					keyup: c,
					keydown: x,
					scope: r,
					mods: i,
					shortcut: n[a],
					method: o,
					key: n[a],
					splitKey: l
				});
				"undefined" !== typeof s && ! function(e) {
					return _.indexOf(e) > -1
				}(s) && window && (_.push(s), b(s, "keydown", (function(e) {
					T(e)
				})), b(window, "focus", (function() {
					k = []
				})), b(s, "keyup", (function(e) {
					T(e),
						function(e) {
							var t = e.keyCode || e.which || e.charCode,
								o = k.indexOf(t);
							if (o >= 0 && k.splice(o, 1), e.key && "meta" === e.key.toLowerCase() && k.splice(0, k.length), 93 !== t && 224 !== t || (t = 91), t in j)
								for (var n in j[t] = !1, m) m[n] === t && (N[n] = !1)
						}(e)
				})))
			}
			var L = {
				setScope: F,
				getScope: C,
				deleteScope: function(e, t) {
					var o, n;
					for (var i in e || (e = C()), w)
						if (Object.prototype.hasOwnProperty.call(w, i))
							for (o = w[i], n = 0; n < o.length;) o[n].scope === e ? o.splice(n, 1) : n++;
					C() === e && F(t || "all")
				},
				getPressedKeyCodes: function() {
					return k.slice(0)
				},
				isPressed: function(e) {
					return "string" === typeof e && (e = O(e)), -1 !== k.indexOf(e)
				},
				filter: function(e) {
					var t = e.target || e.srcElement,
						o = t.tagName,
						n = !0;
					return !t.isContentEditable && ("INPUT" !== o && "TEXTAREA" !== o && "SELECT" !== o || t.readOnly) || (n = !1), n
				},
				unbind: function(e) {
					if (e) {
						if (Array.isArray(e)) e.forEach((function(e) {
							e.key && E(e)
						}));
						else if ("object" === typeof e) e.key && E(e);
						else if ("string" === typeof e) {
							for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) o[n - 1] = arguments[n];
							var i = o[0],
								r = o[1];
							"function" === typeof i && (r = i, i = ""), E({
								key: e,
								scope: i,
								method: r,
								splitKey: "+"
							})
						}
					} else Object.keys(w).forEach((function(e) {
						return delete w[e]
					}))
				}
			};
			for (var S in L) Object.prototype.hasOwnProperty.call(L, S) && (N[S] = L[S]);
			if ("undefined" !== typeof window) {
				var B = window.hotkeys;
				N.noConflict = function(e) {
					return e && window.hotkeys === N && (window.hotkeys = B), N
				}, window.hotkeys = N
			}
			var A = N;

			function P(e, t, o, n) {
				o instanceof Array && (n = o, o = void 0);
				var i = o || {},
					r = i.enableOnTags,
					s = i.filter,
					a = Object(x.useRef)(null),
					c = Object(x.useCallback)((function(e, o) {
						return (null === a.current || document.activeElement === a.current) && (t(e, o), !0)
					}), n ? [a].concat(n) : [a]);
				return Object(x.useEffect)((function() {
					return o && o.enableOnTags && (A.filter = function(e) {
							var t = e.target,
								o = e.srcElement,
								n = t && t.tagName || o && o.tagName;
							return Boolean(n && r && r.includes(n))
						}), s && (A.filter = s), A(e, o || {}, c),
						function() {
							return A.unbind(e, c)
						}
				}), [c, o, r, s, e]), a
			}
			var M = o("Ya7B");

			function K(e, t, o) {
				var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
					i = t.getBoundingClientRect(),
					r = e.touches ? [e.touches[0].clientX, e.touches[0].clientY] : [e.clientX, e.clientY];
				return [Math.round((r[0] - i.left + n) / o), Math.round((r[1] - i.top) / o)]
			}

			function D(e, t, o, n, i, s) {
				var a = function(e, t, o) {
						var n = t,
							i = o;
						if (p(t, o, e)) {
							for (; p(n + 1, i, e);) n++;
							var r = n;
							do {
								for (n = t - 1, i++; p(n + 1, i, e) && n + 1 <= r;) n++
							} while (n == r);
							return {
								x: t,
								y: o,
								w: r - t,
								h: --i - o
							}
						}
						return {
							w: -1,
							h: -1
						}
					},
					c = function(e, t, o) {
						var n = t,
							i = o;
						if (p(t, o, e)) {
							for (; p(n - 1, i, e);) n--;
							var r = n;
							do {
								for (n = t + 1, i--; p(n - 1, i, e) && n - 1 >= r;) n--
							} while (n == r);
							return {
								x: r,
								y: ++i,
								w: t - r,
								h: o - i
							}
						}
						return {
							w: -1,
							h: -1
						}
					},
					x = function(e, t, o) {
						var n = t,
							i = o;
						if (p(t, o, e)) {
							for (; p(n, i + 1, e);) i++;
							var r = i;
							do {
								for (i = o - 1, n--; p(n, i + 1, e) && i + 1 <= r;) i++
							} while (i == r);
							return {
								x: ++n,
								y: o,
								w: t - n,
								h: r - o
							}
						}
						return {
							w: -1,
							h: -1
						}
					},
					l = function(e, t, o) {
						var n = t,
							i = o;
						if (p(t, o, e)) {
							for (; p(n, i - 1, e);) i--;
							var r = i;
							do {
								for (i = o + 1, n++; p(n, i - 1, e) && i - 1 >= r;) i--
							} while (i == r);
							return {
								x: t,
								y: r,
								w: --n - t,
								h: o - r
							}
						}
						return {
							w: -1,
							h: -1
						}
					},
					p = function(e, t, o) {
						if (b[e][t]) return !1;
						var n = 4 * (e + t * i),
							r = g.slice(n, n + 4),
							s = Math.abs(o[0] - r[0]),
							a = Math.abs(o[1] - r[1]),
							c = Math.abs(o[2] - r[2]),
							x = Math.abs(o[3] - r[3]);
						return s < 20 && a < 20 && c < 20 && x < 20 || 0 == r[3] && 255 == o[0] && 255 == o[1] && 255 == o[2] || 0 == o[3] && 255 == r[0] && 255 == r[1] && 255 == r[2]
					},
					d = function(e) {
						for (var t = e[0], o = e[1], n = t + e[2], i = o + e[3], r = t; r < n; r++)
							for (var s = o; s < i; s++) b[r][s] = !0;
                        e[0]-=2;
                        e[1]-=2;
                        e[2]+=2;
                        e[3]+=2;
						return e
					};
				t = Math.round(t), o = Math.round(o);
				var b, u = parseInt(n.replace("#", "0x")),
					f = u % 256,
					h = (u = Math.floor(u / 256)) % 256,
					m = u = Math.floor(u / 256);
				! function() {
					b = [];
					for (var e = -1; e <= i; e++) b[e] = [];
					b[-1] = [], b[i] = [];
					for (var t = -1; t <= s; t++) b[-1][t] = 1, b[i][t] = 1;
					for (var o = 0; o < i; o++) b[o][-1] = 1, b[o][s] = 1
				}();
				for (var g = e.getImageData(0, 0, i, s).data, j = 4 * (t + o * i), w = [g[j], g[j + 1], g[j + 2], g[j + 3]], y = [], k = 0; k <= i; k++) y[k] = [];
				if (p(t, o, [m, h, f, 255])) return [];
				for (; p(t - 1, o, w);) t--;
				for (; p(t, o - 1, w);) o--;
				var v, _, O = a(w, t, o),
					F = {
						x: t,
						y: o,
						w: O.w,
						h: O.h,
						ref: 0,
						andada: 0
					},
					C = O.w,
					E = d([O.x, O.y, O.w + 1, O.h + 1]);
				do {
					for (v = 0, 2 == F.ref && (v += F.andada); v <= F.h;) - 1 != (_ = (O = l(w, F.x + F.w + 1, F.y + F.h - v)).h) ? (y[_].push({
						x: O.x,
						y: O.y,
						w: O.w,
						h: O.h,
						ref: 1,
						andada: F.h + 1 - v
					}), E.push.apply(E, Object(r.a)(d([O.x, O.y, O.w + 1, O.h + 1]))), _ > C && (C = _), v += _) : v++;
					for (v = 0, 1 == F.ref && (v += F.andada); v <= F.h;) - 1 != (_ = (O = x(w, F.x - 1, F.y + v)).h) ? (y[_].push({
						x: O.x,
						y: O.y,
						w: O.w,
						h: O.h,
						ref: 2,
						andada: F.h + 1 - v
					}), E.push.apply(E, Object(r.a)(d([O.x, O.y, O.w + 1, O.h + 1]))), _ > C && (C = _), v += _) : v++;
					for (v = 0, 4 == F.ref && (v += F.andada); v <= F.w;) - 1 != (_ = (O = a(w, F.x + v, F.y + F.h + 1)).w) ? (y[_].push({
						x: O.x,
						y: O.y,
						w: O.w,
						h: O.h,
						ref: 3,
						andada: F.w + 1 - v
					}), E.push.apply(E, Object(r.a)(d([O.x, O.y, O.w + 1, O.h + 1]))), _ > C && (C = _), v += _) : v++;
					for (v = 0, 3 == F.ref && (v += F.andada); v <= F.w;) - 1 != (_ = (O = c(w, F.x + F.w - v, F.y - 1)).w) ? (y[_].push({
						x: O.x,
						y: O.y,
						w: O.w,
						h: O.h,
						ref: 4,
						andada: F.w + 1 - v
					}), E.push.apply(E, Object(r.a)(d([O.x, O.y, O.w + 1, O.h + 1]))), _ > C && (C = _), v += _) : v++;
					for (F = y[C].pop(); null == F && C > 0;) F = y[--C].pop()
				} while (null != F);
				return E
			}
			var G = o("YSmr"),
				R = o("kOrG"),
				Y = o("QW0y");
			var I = Object(M.c)((function(e) {
					var t = Object(x.useRef)(),
						o = Object(x.useRef)();

					function i(n, i) {
						var s = K(i, o.current, e.scale / e.density),
							a = e.thickness * e.density;
						n.clearRect(0, 0, e.width * e.density, e.height * e.density), n.fillStyle = "#FFF", n.strokeStyle = "#FFF", n.lineWidth = 2 * e.density, n.beginPath(), n.arc.apply(n, Object(r.a)(s).concat([a / 2 + 1, 0, 2 * Math.PI])), t.current ? n.fill() : n.stroke(), n.beginPath(), n.moveTo(s[0], s[1] - a / 2 - 2.5 * e.density), n.lineTo(s[0], s[1] - a / 2 - 10.5 * e.density), n.stroke(), n.beginPath(), n.moveTo(s[0], s[1] + a / 2 + 2.5 * e.density), n.lineTo(s[0], s[1] + a / 2 + 10.5 * e.density), n.stroke(), n.beginPath(), n.moveTo(s[0] - a / 2 - 2.5 * e.density, s[1]), n.lineTo(s[0] - a / 2 - 10.5 * e.density, s[1]), n.stroke(), n.beginPath(), n.moveTo(s[0] + a / 2 + 2.5 * e.density, s[1]), n.lineTo(s[0] + a / 2 + 10.5 * e.density, s[1]), n.stroke(), n.strokeStyle = "#000", n.lineWidth = 1 * e.density, n.beginPath(), n.arc.apply(n, Object(r.a)(s).concat([a / 2, 0, 2 * Math.PI])), n.stroke(), n.beginPath(), n.moveTo(s[0], s[1] - a / 2 - 3 * e.density), n.lineTo(s[0], s[1] - a / 2 - 10 * e.density), n.stroke(), n.beginPath(), n.moveTo(s[0], s[1] + a / 2 + 3 * e.density), n.lineTo(s[0], s[1] + a / 2 + 10 * e.density), n.stroke(), n.beginPath(), n.moveTo(s[0] - a / 2 - 3 * e.density, s[1]), n.lineTo(s[0] - a / 2 - 10 * e.density, s[1]), n.stroke(), n.beginPath(), n.moveTo(s[0] + a / 2 + 3 * e.density, s[1]), n.lineTo(s[0] + a / 2 + 10 * e.density, s[1]), n.stroke()
					}
					return Object(x.useEffect)((function() {
						t.current = !1;
						var n = o.current.getContext("2d");

						function r(e) {
							t.current = !0, i(n, e)
						}

						function s(e) {
							t.current = !1, i(n, e)
						}

						function a(e) {
							i(n, e)
						}
						return document.addEventListener("mousemove", a, !1), document.addEventListener("touchmove", a, !1), e.hidden && (o.current.addEventListener("mousedown", r, !1), o.current.addEventListener("touchstart", r, !1), document.addEventListener("mouseup", s, !1), document.addEventListener("mousecancel", s, !1), document.addEventListener("touchend", s, !1), document.addEventListener("touchcancel", s, !1)),
							function() {
								document.removeEventListener("mousemove", a, !1), document.removeEventListener("touchmove", a, !1), e.hidden && (document.removeEventListener("mouseup", s, !1), document.removeEventListener("mousecancel", s, !1), document.removeEventListener("touchend", s, !1), document.removeEventListener("touchcancel", s, !1))
							}
					}), [e.thickness, e.scale]), Object(n.jsxs)(n.Fragment, {
						children: [Object(n.jsx)("canvas", {
							ref: o,
							width: e.width * e.density,
							height: e.height * e.density,
							className: a.a.dynamic([
								["3457905390", [e.width, e.height]]
							])
						}), Object(n.jsx)(a.a, {
							id: "3457905390",
							dynamic: [e.width, e.height],
							children: ["canvas.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;cursor:none;width:".concat(e.width, "px;height:").concat(e.height, "px;}")]
						})]
					})
				}), (function(e) {
					return {
						scale: e.scale
					}
				})),
				X = o("xvhg"),
				q = o("H+61"),
				U = o("UlJF");

			function W(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function H(e, t) {
				return (H = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function V(e) {
				return (V = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function Z(e, t) {
				return !t || "object" !== V(t) && "function" !== typeof t ? W(e) : t
			}

			function Q(e) {
				return (Q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}
			var J = o("cpVT");

			function $(e) {
				var t = function() {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var o, n = Q(e);
					if (t) {
						var i = Q(this).constructor;
						o = Reflect.construct(n, arguments, i)
					} else o = n.apply(this, arguments);
					return Z(this, o)
				}
			}
			var ee = function(e) {
				! function(e, t) {
					if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && H(e, t)
				}(o, e);
				var t = $(o);

				function o(e) {
					var n;
					return Object(q.a)(this, o), n = t.call(this, e), Object(J.a)(W(n), "_unblock", (function(e) {
						n._blocked = !1;
						var t = K(e, n._ref.current, n.props.scale / n._zoom),
							o = Object(X.a)(t, 2),
							i = o[0],
							r = o[1];
						n._coord = {
							x: i * n.props.density,
							y: r * n.props.density,
							new: !0
						}, [G.ub, G.vb, G.yb, G.Ab, G.Bb].includes(n.props.tool) && n._pathsGeo.push({
							nivel: 6,
							tool: n.props.tool
						})
					})), Object(J.a)(W(n), "_block", (function(e) {
						if (n._blocked = !0, n._pathsGeo.length) {
							var t = n._pathsGeo.length - 1;
							n._pathsGeo[t].pos ? 6 == n._pathsGeo[t].nivel && (n._pathsGeo[t].nivel = 5) : n._pathsGeo.splice(t, 1)
						}
					})), Object(J.a)(W(n), "_move", (function(e) {
						if (n._active && !n._blocked) {
							var t = K(e, n._ref.current, n.props.scale / n._zoom),
								o = Object(X.a)(t, 2),
								i = o[0],
								r = o[1];
							i *= n.props.density, r *= n.props.density, n._coord && ([G.zb, G.wb].includes(n.props.tool) ? (n._paths.push({
								pos: [n._coord.x, n._coord.y, i, r],
								nivel: 5,
								new: n._coord.new
							}), n._coord = {
								x: i,
								y: r
							}) : n._pathsGeo.length > 0 && [G.ub, G.vb, G.yb, G.Ab, G.Bb].includes(n.props.tool) && (n._pathsGeo[n._pathsGeo.length - 1].pos = [n._coord.x, n._coord.y, i, r]))
						}
					})), Object(J.a)(W(n), "_animate", (function() {
						if (n._active) {
							var e, t, o, i, r = Date.now(),
								s = -1;
							n._ctx.clearRect(0, 0, n.props.width * n.props.density, n.props.height * n.props.density), n._ctx.lineWidth = n.props.thickness * n.props.density;
							for (var a = 0; a < n._paths.length; a++) {
								if (s != (o = n._paths[a]).nivel || o.new) {
									if (-1 != s && (n._ctx.lineTo(t.pos[2], t.pos[3]), n._ctx.stroke()), o.new) {
										s = -1;
										continue
									}
									n._ctx.beginPath(), n._ctx.moveTo(o.pos[0], o.pos[1]), i = n._opacities - 500 * (5 - o.nivel)
								}
								if (t = o, e = r - i, 4 == (i = Math.ceil((2500 - e) / 2500 * 1e3) + "").length) n._ctx.strokeStyle = "rgb(".concat(n._color, ")");
								else {
									for (var c = 0; c < 3 - i.length; c++) i = "0" + i;
									n._ctx.strokeStyle = "rgba(".concat(n._color + ",." + i, ")")
								}
								n._ctx.quadraticCurveTo(t.pos[0], t.pos[1], t.pos[0] + (t.pos[2] - t.pos[0]) / 2, t.pos[1] + (t.pos[3] - t.pos[1]) / 2), s = t.nivel
							} - 1 != s && (n._ctx.lineTo(t.pos[2], t.pos[3]), n._ctx.stroke());
							for (var x = 0; x < n._pathsGeo.length; x++)
								if ((o = n._pathsGeo[x]).pos) {
									if (6 == o.nivel) n._ctx.strokeStyle = "rgb(".concat(n._color, ")");
									else if (e = r - (i = n._opacities - 500 * (5 - o.nivel)), 4 == (i = Math.ceil((2500 - e) / 2500 * 1e3) + "").length) n._ctx.strokeStyle = "rgb(".concat(n._color, ")");
									else {
										for (var l = 0; l < 3 - i.length; l++) i = "0" + i;
										n._ctx.strokeStyle = "rgba(".concat(n._color + ",." + i, ")")
									}
									switch (n._ctx.fillStyle = n._ctx.strokeStyle, o.tool) {
										case G.yb:
											n._ctx.beginPath(), n._ctx.moveTo(o.pos[0], o.pos[1]), n._ctx.lineTo(o.pos[2], o.pos[3]), n._ctx.stroke();
											break;
										case G.Bb:
											n._ctx.beginPath(), n._ctx.rect(o.pos[0], o.pos[1], o.pos[2] - o.pos[0], o.pos[3] - o.pos[1]), n._ctx.stroke();
											break;
										case G.Ab:
											n._ctx.beginPath(), n._ctx.rect(o.pos[0], o.pos[1], o.pos[2] - o.pos[0], o.pos[3] - o.pos[1]), n._ctx.fill();
											break;
										case G.vb:
											var p = (o.pos[2] - o.pos[0]) / 2,
												d = (o.pos[3] - o.pos[1]) / 2,
												b = Math.round(o.pos[0] + p),
												u = Math.round(o.pos[1] + d),
												f = (Math.sqrt(2) - 1) / 3 * 4;
											n._ctx.beginPath(), n._ctx.moveTo(b, u - d), n._ctx.bezierCurveTo(b + f * p, u - d, b + p, u - f * d, b + p, u), n._ctx.bezierCurveTo(b + p, u + f * d, b + f * p, u + d, b, u + d), n._ctx.bezierCurveTo(b - f * p, u + d, b - p, u + f * d, b - p, u), n._ctx.bezierCurveTo(b - p, u - f * d, b - f * p, u - d, b, u - d), n._ctx.stroke();
											break;
										case G.ub:
											var h = (o.pos[2] - o.pos[0]) / 2,
												m = (o.pos[3] - o.pos[1]) / 2,
												g = Math.round(o.pos[0] + h),
												j = Math.round(o.pos[1] + m),
												w = (Math.sqrt(2) - 1) / 3 * 4;
											n._ctx.beginPath(), n._ctx.moveTo(g, j - m), n._ctx.bezierCurveTo(g + w * h, j - m, g + h, j - w * m, g + h, j), n._ctx.bezierCurveTo(g + h, j + w * m, g + w * h, j + m, g, j + m), n._ctx.bezierCurveTo(g - w * h, j + m, g - h, j + w * m, g - h, j), n._ctx.bezierCurveTo(g - h, j - w * m, g - w * h, j - m, g, j - m), n._ctx.fill()
									}
								}
							window.requestAnimationFrame(n._animate)
						}
					})), n._ctx = null, n._paths = [], n._pathsGeo = [], n._coord = null, n._opacities = Date.now(), n._ref = l.a.createRef(), n._timer = !1, n._active = !1, n._color = "50,50,50", n._blocked = !0, n._widthChange = 0, n._zoom = 1, n
				}
				return Object(U.a)(o, [{
					key: "componentDidMount",
					value: function() {
						this.start(), this.props.mobile && (this._zoom = G.b / this._ref.current.offsetHeight, this._widthChange = (G.c / this._zoom - window.innerWidth) / 2), document.addEventListener("mousedown", this._unblock, !1), document.addEventListener("mouseup", this._block, !1), document.addEventListener("mousecancel", this._block, !1), document.addEventListener("touchstart", this._unblock, !1), document.addEventListener("touchend", this._block, !1), document.addEventListener("touchcancel", this._block, !1)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.stop(), document.removeEventListener("mousedown", this._unblock, !1), document.removeEventListener("mouseup", this._block, !1), document.removeEventListener("mousecancel", this._block, !1), document.removeEventListener("touchstart", this._unblock, !1), document.removeEventListener("touchend", this._block, !1), document.removeEventListener("touchcancel", this._block, !1)
					}
				}, {
					key: "start",
					value: function() {
						var e = this;
						if (!this._active) {
							var t = this._ref.current;
							this._paths = [], this._coord = null, this._opacities = Date.now(), this._ctx = t.getContext("2d"), this._ctx.strokeStyle = "rgb(".concat(this._color, ")"), this._ctx.lineCap = "round", window.requestAnimationFrame(this._animate), document.addEventListener("mousemove", this._move, !0), document.addEventListener("touchmove", this._move, !0), this._timer = setInterval((function() {
								for (var t, o = 0; o < e._paths.length; o++)(t = e._paths[o]).nivel--, 0 === t.nivel && e._paths.splice(o--, 1);
								for (var n = 0; n < e._pathsGeo.length; n++) 6 != (t = e._pathsGeo[n]).nivel && (t.nivel--, 0 === t.nivel && e._pathsGeo.splice(n--, 1));
								e._opacities = Date.now()
							}), 500), this._active = !0
						}
					}
				}, {
					key: "stop",
					value: function() {
						this._active && (this._active = !1, document.removeEventListener("mousemove", this._move, !0), document.removeEventListener("touchmove", this._move, !0), this._timer && clearInterval(this._timer))
					}
				}, {
					key: "render",
					value: function() {
						return Object(n.jsxs)(n.Fragment, {
							children: [Object(n.jsx)("canvas", {
								ref: this._ref,
								width: this.props.width * this.props.density,
								height: this.props.height * this.props.density,
								className: a.a.dynamic([
									["3798211712", [this.props.width, this.props.height]]
								])
							}), Object(n.jsx)(a.a, {
								id: "3798211712",
								dynamic: [this.props.width, this.props.height],
								children: ["canvas.__jsx-style-dynamic-selector{position:absolute;cursor:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:".concat(this.props.width, "px;height:").concat(this.props.height, "px;}")]
							})]
						})
					}
				}]), o
			}(l.a.Component);
			var te = Object(M.c)(ee, (function(e) {
					return {
						scale: e.scale,
						mobile: e.mobile
					}
				})),
				oe = o("TSYQ"),
				ne = o.n(oe),
				ie = [
					[G.zb, "pen"],
					[G.wb, "ers"],
					[G.Bb, "reb"],
					[G.vb, "ellb"],
					[G.Ab, "rec"],
					[G.ub, "ell"],
					[G.yb, "lin"],
					[G.xb, "fil"]
				];
			var re = function(e) {
					return Object(n.jsxs)("div", {
						className: "jsx-3659451671 " + (ne()("tools", {
							disabled: e.disabled,
							submenu: e.submenu
						}) || ""),
						children: [Object(n.jsxs)("div", {
							className: "jsx-3659451671",
							children: [ie.map((function(t) {
								var o = Object(X.a)(t, 2),
									i = o[0],
									r = o[1];
								return Object(n.jsx)("div", {
									onClick: e.disabled ? null : function() {
										return e.onChange(i)
									},
									className: "jsx-3659451671 " + (ne()("tool", r, {
										sel: i == e.value
									}) || "")
								}, i)
							})), Object(n.jsx)("div", {
								onClick: function() {
									return e.onUndo()
								},
								className: "jsx-3659451671 tool undo"
							}), Object(n.jsx)("div", {
								onClick: function() {
									return e.onRedo()
								},
								className: "jsx-3659451671 tool redo"
							})]
						}), Object(n.jsx)(a.a, {
							id: "3396782148",
							children: [".tools.jsx-3659451671{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".tools.jsx-3659451671>div.jsx-3659451671{padding:8px;width:106px;height:298px;border-radius:9px;border:2px rgba(255,142,175,.0) solid;background-color:rgba(94,25,51,.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;}", ".tool.jsx-3659451671{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;cursor:pointer;width:46px;height:50px;border:2px rgba(255,142,175,0.6) solid;border-radius:5px;margin:0 0 7px;}", ".tool.jsx-3659451671:hover{border-color:rgba(255,142,175,1);}", ".tool.jsx-3659451671:hover.jsx-3659451671:after{color:rgba(255,142,175,1);}", ".tool.jsx-3659451671:hover.jsx-3659451671:before{background-color:rgba(216,216,216,.15);}", ".tool.jsx-3659451671:before{content:'';margin:2px;-webkit-flex:1;-ms-flex:1;flex:1;border-radius:3px;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;}", ".tool.sel.jsx-3659451671,.tool.jsx-3659451671:active{border-color:#FFF;}", ".sel.jsx-3659451671:before,.sel.jsx-3659451671:hover.jsx-3659451671:before,.tool.jsx-3659451671:active.jsx-3659451671:before{background-color:rgba(216,216,216,.5);}", ".tool.sel.jsx-3659451671:after,.tool.sel.jsx-3659451671:hover.jsx-3659451671:after,.tool.jsx-3659451671:active.jsx-3659451671:after{color:#FFF;}", ".tool.jsx-3659451671:after{position:absolute;font-family:ico;font-size:25px;color:rgba(255,142,175,0.6);}", ".undo.jsx-3659451671,.redo.jsx-3659451671{margin:0;}", ".pen.jsx-3659451671:after{font-size:29px;content:'\\e905';}", ".ers.jsx-3659451671:after{font-size:30px;content:'\\e903';}", ".lin.jsx-3659451671:after{font-size:30px;content:'\\e902';}", ".reb.jsx-3659451671:after{content:'\\e90a';}", ".ellb.jsx-3659451671:after{content:'\\e90c';}", ".rec.jsx-3659451671:after{content:'\\e909';}", ".ell.jsx-3659451671:after{content:'\\e90b';}", ".fil.jsx-3659451671:after{font-size:29px;content:'\\e904';}", ".undo.jsx-3659451671:after{content:'\\e901';}", ".redo.jsx-3659451671:after{content:'\\e900';}", ".disabled.jsx-3659451671>div.jsx-3659451671{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}", ".disabled.jsx-3659451671 .tool.jsx-3659451671,.disabled.jsx-3659451671 .tool.jsx-3659451671:hover{border-color:rgba(255,142,175,.3);background-color:rgba(255,142,175,.1) !important;cursor:initial;}", ".disabled.jsx-3659451671 .tool.jsx-3659451671:after,.disabled.jsx-3659451671 .tool.jsx-3659451671:hover.jsx-3659451671:after{color:rgba(255,142,175,.3);}", ".disabled.jsx-3659451671 .tool.sel.jsx-3659451671:before,.disabled.jsx-3659451671 .tool.jsx-3659451671:active.jsx-3659451671:before,.disabled.jsx-3659451671 .tool.jsx-3659451671:hover.jsx-3659451671:before{display:none;}", "@media (max-width:640px){.tools.jsx-3659451671{position:absolute;bottom:85px;left:0;display:none;}.tools.submenu.jsx-3659451671{display:inherit;}.tools.jsx-3659451671>div.jsx-3659451671{padding:5px;width:96px;height:254px;border-width:0;background:transparent;}.tool.jsx-3659451671{width:42px;height:44px;border:2px #9C81CB solid;border-radius:4px;margin:0 0 3px;}.tool.jsx-3659451671:before{margin:1px;background-color:rgba(255,255,255,.75);}.tool.jsx-3659451671:after{color:#9C81CB;}.tool.jsx-3659451671:hover{border-color:#9C81CB;}.tool.jsx-3659451671:hover.jsx-3659451671:after{color:#FFF;}.tool.jsx-3659451671:hover.jsx-3659451671:before{background-color:rgba(156,129,203,.8);}.tool.sel.jsx-3659451671,.tool.jsx-3659451671:active{border-color:#9C81CB;}.sel.jsx-3659451671:before,.sel.jsx-3659451671:hover.jsx-3659451671:before,.tool.jsx-3659451671:active.jsx-3659451671:before{background-color:rgba(156,129,203,.8);}.tool.sel.jsx-3659451671:after,.tool.sel.jsx-3659451671:hover.jsx-3659451671:after,.tool.jsx-3659451671:active.jsx-3659451671:after{color:#FFF;}}"]
						}), Object(n.jsx)(a.a, {
							id: "3185328314",
							children: ["@media (max-width:640px){.ar .tools{left:initial;right:0;}}"]
						})]
					})
				},
				se = ["#000000", "#666666", "#0050CD", "#FFFFFF", "#AAAAAA", "#26C9FF", "#017420", "#691506", "#964112", "#11B03C", "#FF0013", "#FF7829", "#B0701C", "#99004E", "#CB5A57", "#FFC126", "#FF008F", "#FEAFA8"];
			var ae = function(e) {
					var t = e.value,
						o = e.disabled,
						i = e.onChange;
					return Object(n.jsxs)("div", {
						className: "jsx-3071142060 " + (ne()("colors", {
							disabled: o
						}) || ""),
						children: [Object(n.jsxs)("div", {
							className: "jsx-3071142060",
							children: [se.map((function(e) {
								return Object(n.jsx)("div", {
									style: {
										backgroundColor: e
									},
									onClick: o ? null : function() {
										return i(e)
									},
									className: "jsx-3071142060 " + (ne()("color", {
										sel: e == t
									}) || "")
								}, e)
							})), Object(n.jsx)("input", {
								disabled: o,
								type: "color",
								value: o ? "#AF3B4E" : t,
								onChange: function(e) {
									return i(e.target.value)
								},
								className: "jsx-3071142060"
							})]
						}), Object(n.jsx)(a.a, {
							id: "3071142060",
							children: [".colors.jsx-3071142060{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".colors.jsx-3071142060>div.jsx-3071142060{padding:10px 8px;width:106px;height:296px;border-radius:9px;background-color:rgba(94,25,51,.5);border:2px rgba(94,25,51,0) solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;}", ".color.jsx-3071142060{border:2px solid #4F163A;width:28px;height:29px;border-radius:4px;cursor:pointer;margin:0 0 7px;}", "input.jsx-3071142060{border:2px solid #4F163A;border-radius:5px;width:102px;height:52px;padding:0;-webkit-appearance:none;cursor:pointer;background:none;}", 'input[type="color"].jsx-3071142060::-webkit-color-swatch-wrapper{padding:0;border-radius:4px;}', 'input[type="color"].jsx-3071142060::-webkit-color-swatch{border:none;border-radius:4px;}', ".disabled.jsx-3071142060>div.jsx-3071142060{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}", ".disabled.jsx-3071142060 .color.jsx-3071142060{border-color:rgba(255,142,175,.3);background-color:rgba(255,142,175,.1) !important;cursor:initial;}", "input.jsx-3071142060:disabled{cursor:initial;border-color:rgba(255,142,175,.3);}", "@media (max-width:640px){input.jsx-3071142060{display:none;}.colors.jsx-3071142060{overflow:scroll;margin:0 5px;width:124px;height:52px;border-radius:4px;background-color:rgba(94,25,51,.5);border:2px rgba(94,25,51,0) solid;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.disabled.jsx-3071142060{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}.disabled.jsx-3071142060>div.jsx-3071142060{background-color:transparent;border-color:transparent;}.colors.jsx-3071142060>div.jsx-3071142060{width:217px;height:auto;background-color:transparent;padding:0;border-radius:0;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.color.jsx-3071142060{border:1px solid #4F163A;width:18px;height:18px;border-radius:2px;margin:2px;}.sel.jsx-3071142060{box-shadow:0 0 0 1px rgba(255,255,255,.6);}.disabled.jsx-3071142060>div.jsx-3071142060 .sel.jsx-3071142060{box-shadow:none;}}"]
						})]
					})
				},
				ce = [2, 6, 10, 14, 18];
			var xe = function(e) {
					return Object(n.jsxs)("div", {
						className: "jsx-340028725 " + (ne()("options", {
							disabled: e.disabled,
							submenu: e.submenu
						}) || ""),
						children: [Object(n.jsx)("div", {
							className: "jsx-340028725",
							children: [ce.map((function(t) {
								return Object(n.jsx)("div", {
									onClick: e.disabled ? null : function() {
                                        document.getElementsByClassName("thikness-input")[0].value=t;
										return e.onChangeThickness(t)
									},
									className: "jsx-340028725 " + (ne()("thickness", {
										sel: e.thickness == t
									}) || "")
								}, t)
							})), [Object(n.jsx)("span", {
								//className: "jsx-340028725"
							}), Object(n.jsx)("input", {
								//disabled: e.disabled,
                                maxLength: 3,
								type: "text",
								onChange: function(t) {
                                    if (t.target.value>500){t.target.value=500;}
                                    if (t.target.value=="00" || t.target.value=="000"){t.target.value=0;}
                                    t.target.value = t.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
                                    return e.onChangeThickness(t.target.value);
								},
								className: "thikness-input"
							}), Object(n.jsx)("span", {
								//className: "jsx-340028725"
							})]]
						}), Object(n.jsxs)("div", {
							className: "jsx-340028725 bxopacity",
							children: [Object(n.jsx)("span", {
								className: "jsx-340028725"
							}), Object(n.jsx)("input", {
								disabled: e.disabled,
								type: "range",
								value: e.opacity,
								min: "0.1",
								max: "1",
								step: "0.1",
								onChange: function(t) {
									return e.onChangeOpacity(t.target.value)
								},
								className: "jsx-340028725"
							}), Object(n.jsx)("span", {
								className: "jsx-340028725"
							})]
						}), Object(n.jsx)(a.a, {
							id: "2464861888",
							children: [".options.jsx-340028725{width:560px;height:54px;padding:3px;border-radius:9px;background-color:rgba(94,25,51,.5);border:2px rgba(94,25,51,0) solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".options.jsx-340028725>div.jsx-340028725{padding:0 15px;-webkit-flex:1;-ms-flex:1;flex:1;border:2px rgba(255,142,175,.6) solid;border-radius:9px;margin:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".thickness.jsx-340028725{cursor:pointer;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px rgba(255,142,175,0.6) solid;width:28px;height:28px;border-radius:100%;}", ".thickness.jsx-340028725:hover{border-color:rgba(255,142,175,1);}", ".thickness.jsx-340028725:hover.jsx-340028725:before{background-color:rgba(255,142,175,1);}", ".thickness.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(216,216,216,.15);}", ".thickness.jsx-340028725:before{position:absolute;content:'';background-color:rgba(255,142,175,0.6);border-radius:100%;}", ".thickness.jsx-340028725:after{content:'';margin:2px;-webkit-flex:1;-ms-flex:1;flex:1;border-radius:3px;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;border-radius:50%;}", ".thickness.sel.jsx-340028725,.thickness.sel.jsx-340028725:hover{border-color:#FFF;}", ".thickness.sel.jsx-340028725:before,.thickness.sel.jsx-340028725:hover.jsx-340028725:before{background-color:#FFF;}", ".thickness.sel.jsx-340028725:after,.thickness.sel.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(216,216,216,.5);}", ".thickness.jsx-340028725:nth-child(1):before{width:2px;height:2px;}", ".thickness.jsx-340028725:nth-child(2):before{width:6px;height:6px;}", ".thickness.jsx-340028725:nth-child(3):before{width:10px;height:10px;}", ".thickness.jsx-340028725:nth-child(4):before{width:14px;height:14px;}", ".thickness.jsx-340028725:nth-child(5):before{width:18px;height:18px;}", ".bxopacity.jsx-340028725 span.jsx-340028725{width:18px;height:18px;border:2px #FFF solid;border-radius:50%;}", ".bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(1){background-color:rgba(255,255,255,.34);}", ".bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(2){background-color:#FFF;}", "input[type=range].jsx-340028725{background:none;-webkit-appearance:none;width:170px;}", "input[type=range].jsx-340028725:focus{outline:none;}", "input[type=range].jsx-340028725::-webkit-slider-runnable-track{width:100%;height:5px;cursor:pointer;-webkit-animate:0.2s-jsx-340028725;animate:0.2s-jsx-340028725;box-shadow:0px 0px 0px #000000;background:#4F163A;border-radius:5px;border:0px solid #000000;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-webkit-slider-runnable-track{background:rgba(255,142,175,.3);}", "input[type=range].jsx-340028725::-webkit-slider-thumb{border:none;height:20px;width:20px;border-radius:50px;background:#E16D8F;cursor:pointer;-webkit-appearance:none;margin-top:-8px;}", "input[type=range].jsx-340028725:hover.jsx-340028725::-webkit-slider-thumb{background:#F8A8BF;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-webkit-slider-thumb{display:none;}", "input[type=range].jsx-340028725:focus.jsx-340028725::-webkit-slider-runnable-track{background:#4F163A;}", "input[type=range].jsx-340028725::-moz-range-track{width:100%;height:5px;cursor:pointer;-webkit-animate:0.2s-jsx-340028725;animate:0.2s-jsx-340028725;box-shadow:0px 0px 0px #000000;background:#4F163A;border-radius:5px;border:0px solid #000000;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-moz-range-track{background:rgba(255,142,175,.3);}", "input[type=range].jsx-340028725::-moz-range-thumb{border:none;height:20px;width:20px;border-radius:50px;background:#E16D8F;cursor:pointer;}", "input[type=range].jsx-340028725:hover.jsx-340028725::-moz-range-thumb{background:#F8A8BF;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-moz-range-thumb{display:none;}", "input[type=range].jsx-340028725::-ms-track{width:100%;height:5px;cursor:pointer;-webkit-animate:0.2s-jsx-340028725;animate:0.2s-jsx-340028725;background:transparent;border-color:transparent;color:transparent;}", "input[type=range].jsx-340028725::-ms-fill-lower{background:#4F163A;border:0px solid #000000;border-radius:10px;box-shadow:0px 0px 0px #000000;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-ms-fill-lower{background:rgba(255,142,175,.3);}", "input[type=range].jsx-340028725::-ms-fill-upper{background:#4F163A;border:0px solid #000000;border-radius:10px;box-shadow:0px 0px 0px #000000;}", "input[type=range].jsx-340028725::-ms-thumb{border:none;height:20px;width:20px;border-radius:50px;background:#E16D8F;cursor:pointer;}", "input[type=range].jsx-340028725:hover.jsx-340028725::-ms-thumb{background:#F8A8BF;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-ms-thumb{display:none;}", "input[type=range].jsx-340028725:focus.jsx-340028725::-ms-fill-lower{background:#4F163A;}", "input[type=range].jsx-340028725:focus.jsx-340028725::-ms-fill-upper{background:#4F163A;}", ".disabled.jsx-340028725{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725>div.jsx-340028725,.disabled.jsx-340028725 .thickness.jsx-340028725,.disabled.jsx-340028725 .thickness.jsx-340028725:hover{cursor:initial;border-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725 .thickness.sel.jsx-340028725:after,.disabled.jsx-340028725 .thickness.sel.jsx-340028725:hover.jsx-340028725:after,.disabled.jsx-340028725 .thickness.jsx-340028725:hover.jsx-340028725:after{display:none;}", ".disabled.jsx-340028725 .thickness.jsx-340028725:before,.disabled.jsx-340028725 .thickness.jsx-340028725:hover.jsx-340028725:before{background-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725 .bxopacity.jsx-340028725 span.jsx-340028725{border-color:rgba(255,142,175,0);background-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725 .bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(1){border-color:rgba(255,142,175,.3);background-color:rgba(255,142,175,0);}", "@media (max-width:640px){.options.jsx-340028725{width:90px;height:197px;border-radius:0;border-width:0;background:transparent;display:none;}.options.submenu.jsx-340028725{display:inherit;}.options.jsx-340028725>div.jsx-340028725{background-color:rgba(255,255,255,.75);padding:5px;border-color:#9C81CB;border-radius:5px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:calc(100% - 10px);margin:0 4px;}.thickness.jsx-340028725{border-color:#9C81CB;width:26px;height:26px;}.thickness.jsx-340028725:before{background-color:#9C81CB;}.thickness.jsx-340028725:hover{border-color:#9C81CB;}.thickness.jsx-340028725:hover.jsx-340028725:before{background-color:#9C81CB;}.thickness.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(156,129,203,.7);}.thickness.sel.jsx-340028725,.thickness.sel.jsx-340028725:hover{border-color:#9C81CB;}.thickness.sel.jsx-340028725:before,.thickness.sel.jsx-340028725:hover.jsx-340028725:before{background-color:#9C81CB;}.thickness.sel.jsx-340028725:after,.thickness.sel.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(156,129,203,.7);}.bxopacity.jsx-340028725{width:30px;}.bxopacity.jsx-340028725 span.jsx-340028725{border-color:#9C81CB;}.bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(1){background-color:#9C81CB;}.bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(2){background-color:transparent;}input[type=range].jsx-340028725{width:120px;-webkit-transform:rotateZ(-90deg);-ms-transform:rotateZ(-90deg);transform:rotateZ(-90deg);}input[type=range].jsx-340028725::-webkit-slider-runnable-track{background:#9C81CB;}input[type=range].jsx-340028725::-webkit-slider-thumb{border:2px #9C81CB solid;background:#FFF;}input[type=range].jsx-340028725:hover.jsx-340028725::-webkit-slider-thumb{background:#9C81CB;}}"]
						}), Object(n.jsx)(a.a, {
							id: "4060568284",
							children: ["@media (max-width:640px){.ar .options .bxopacity span:nth-of-type(1){background-color:transparent;}.ar .options .bxopacity span:nth-of-type(2){background-color:#9C81CB;}}"]
						})]
					})
				},
				le = o("cXB8"),
				pe = o("6VPp"),
				de = o("umcP"),
				be = o("WZCv");
			var ue = function(e) {
				return Object(n.jsxs)("div", {
					className: "jsx-1759433088 toolsmobile",
					children: [Object(n.jsx)("button", {
						onClick: function() {
							return e.onChange(G.ob)
						},
						disabled: e.disabled,
						className: "jsx-1759433088 " + ("tool " + ["pen", "ers", "lin", "reb", "ellb", "rec", "ell", "fil"][e.value - 1] || !1)
					}), Object(n.jsx)("button", {
						onClick: function() {
							return e.onChange(G.nb)
						},
						disabled: e.disabled,
						className: "jsx-1759433088 opacity"
					}), e.children, Object(n.jsx)(a.a, {
						id: "241478012",
						children: [".toolsmobile.jsx-1759433088{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;padding:10px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}", "button.jsx-1759433088{margin:0 0 0 5px;width:50px;height:52px;border-radius:3px;background:#FFFFFF;border:none;box-shadow:0 3px 0 #CBC6D8;color:#481D92;}", "button.jsx-1759433088:active{-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);background-color:#C2AEE3;box-shadow:0 1px 0 #CBC6D8;}", "button.jsx-1759433088:disabled{opacity:.47;cursor:none;}", "button.jsx-1759433088:nth-of-type(1){margin:0;}", ".toolsmobile.jsx-1759433088>.small{width:50px;height:52px;border-radius:3px;background:#FFFFFF;border:none;box-shadow:0 3px 0 #CBC6D8;padding:0;}", ".toolsmobile.jsx-1759433088>.small:active{margin:0;-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);background-color:#C2AEE3;box-shadow:0 1px 0 #CBC6D8;}", ".toolsmobile.jsx-1759433088>.small strong{display:none;}", ".toolsmobile.jsx-1759433088>.small .pencil{width:27px;height:28px;background-image:url(/images/edit_m.svg);}", ".toolsmobile.jsx-1759433088>.small .ready{width:27px;height:22px;background-image:url(/images/check_m.svg);}", ".opacity.jsx-1759433088:before{content:'\\e913';font-family:ico;font-size:30px;}", ".tool.jsx-1759433088:after{font-family:ico;font-size:25px;}", ".pen.jsx-1759433088:after{font-size:29px;content:'\\e905';}", ".ers.jsx-1759433088:after{font-size:30px;content:'\\e903';}", ".lin.jsx-1759433088:after{font-size:30px;content:'\\e902';}", ".reb.jsx-1759433088:after{content:'\\e90a';}", ".ellb.jsx-1759433088:after{content:'\\e90c';}", ".rec.jsx-1759433088:after{content:'\\e909';}", ".ell.jsx-1759433088:after{content:'\\e90b';}", ".fil.jsx-1759433088:after{font-size:29px;content:'\\e904';}"]
					}), Object(n.jsx)(a.a, {
						id: "3760199605",
						children: [".ar .toolsmobile button{margin:0;}", ".ar .toolsmobile button:nth-of-type(2){margin-right:5px;}"]
					})]
				})
			};

			function fe() {
				var e = Object(i.a)(["drawtxt2"]);
				return fe = function() {
					return e
				}, e
			}

			function he() {
				var e = Object(i.a)(["drawtxt1"]);
				return he = function() {
					return e
				}, e
			}
			var me = !0;
			t.default = Object(M.c)((function(e) {
				var t = Object(c.d)(),
					o = Object(p.useRouter)(),
					i = Object(x.useState)(e.turnNum)[0],
					s = Object(x.useState)(e.previous)[0],
					l = Object(x.useState)([]),
					d = l[0],
					b = l[1],
					u = Object(x.useState)([]),
					f = u[0],
					h = u[1],
					m = Object(x.useState)(1),
					g = m[0],
					j = m[1],
					w = Object(x.useState)("#000000"),
					y = w[0],
					k = w[1],
					v = Object(x.useState)(1),
					_ = v[0],
					O = v[1],
					F = Object(x.useState)(6),
					C = F[0],
					E = F[1],
					z = Object(x.useState)(!1),
					T = z[0],
					N = z[1],
					L = Object(x.useState)(G.mb),
					S = L[0],
					B = L[1],
					A = Object(x.useRef)(),
					M = Object(x.useRef)(),
					X = Object(x.useRef)();

				function q(e) {
					k(e), B(G.mb)
				}

				function U() {
					T || (b((function(e) {
						var t = e.slice();
						return t.length && A.current.push(t.pop()), t
					})), B(G.mb), V(!1))
				}

				function W() {
					if (!T && A.current.length) {
						var e = A.current.pop();
						b((function(t) {
							return [].concat(Object(r.a)(t), [e])
						})), B(G.mb), V(e)
					}
				}

				function H(e) {
					N(e), B(G.mb)
				}

				function V(t) {
					i == e.turnNum && e.emit(G.F, {
						t: i,
						v: t
					})
				}
				Object(x.useEffect)((function() {
					document.body.style.backgroundImage = "linear-gradient(215deg, rgba(153,16,80,1) 0%, rgba(231,77,78,1) 85%)", e.socket ? (o.prefetch("/write"), o.prefetch("/memory"), o.prefetch("/book"), A.current = [], e.previous && e.previous.type == G.Fb || R.a.play("yourTurn", !1, .7)) : o.replace("/")
				}), []), Object(x.useEffect)((function() {
					if (!T) {
						var t = [],
							o = M.current;
						o.addEventListener("mousedown", a, !1), o.addEventListener("touchstart", a, !1);
						var n = 1,
							i = 0;
						e.mobile && (n = G.b / o.offsetHeight, i = (G.c / n - window.innerWidth) / 2);
						var s = e.scale / n;
						return function() {
							o.removeEventListener("mousedown", a, !1), o.removeEventListener("touchstart", a, !1)
						}
					}

					function a(e) {
                        //if(e.which!=1){return;}
						e.preventDefault(), B(G.mb), g == G.xb ? (V(t = [g, [y, _]].concat(Object(r.a)(D.apply(void 0, [X.current.getContext("2d")].concat(Object(r.a)(K(e, o, s / G.d, i)), [y, G.c * G.d, G.b * G.d])).map((function(e) {
							return Math.round(e / G.d)
						}))))), b((function(e) {
							return [].concat(Object(r.a)(e), [t])
						}))) : (t = g != G.wb ? [g, [y, C, _], K(e, o, s, i)] : [g, 2 * C, K(e, o, s, i)], document.addEventListener("mousemove", c, !1), document.addEventListener("touchmove", c, !1), document.addEventListener("mouseup", x, !1), document.addEventListener("mousecancel", x, !1), document.addEventListener("touchend", x, !1), document.addEventListener("touchcancel", x, !1), h([t])), A.current.splice(0)
					}

					function c(e) {
						e.stopPropagation(), g == G.zb || g == G.wb ? t.push(K(e, o, s, i)) : t[3] = K(e, o, s, i), h([t])
					}

					function x() {
						V(t), document.removeEventListener("mousemove", c, !1), document.removeEventListener("touchmove", c, !1), document.removeEventListener("mouseup", x, !1), document.removeEventListener("mousecancel", x, !1), document.removeEventListener("touchend", x, !1), document.removeEventListener("touchcancel", x, !1), b((function(e) {
							return [].concat(Object(r.a)(e), [t])
						})), h([])
					}
				}), [e.scale, y, C, _, d, g, T, e.mobile]), P("ctrl+z, command+z", U, [T]), P("ctrl+shift+z, command+shift+z", W, [T]);
				var Z = s && s.type == G.Gb;
				return Object(n.jsxs)("div", {
					className: "jsx-1562482592 draw",
					children: [Object(n.jsx)(le.a, {
						color: e.mobile ? "#481D92" : "#C02F4E"
					}), Object(n.jsx)(pe.a, {
						value: G.rb
					}), !e.mobile && Object(n.jsx)(ae, {
						disabled: T,
						onChange: q,
						value: y
					}), Object(n.jsxs)("div", {
						className: "jsx-1562482592 center",
						children: [Object(n.jsx)(be.a, {
							draw: !Z,
							subtitle: t(Z ? he() : fe()),
							title: Z ? s.data : "",
							dark: e.hidden,
							children: Object(n.jsxs)("div", {
								ref: M,
								className: "jsx-1562482592 drawingContainer",
								children: [Object(n.jsx)(Y.a, {
									ref: X,
									data: d,
									width: G.c,
									height: G.b,
									density: G.d,
									hidden: e.hidden
								}), !e.hidden && Object(n.jsx)(Y.a, {
									data: f,
									width: G.c,
									height: G.b,
									density: G.d
								}), e.hidden && Object(n.jsx)(te, {
									width: G.c,
									height: G.b,
									density: G.d,
									tool: g,
									thickness: C
								}), !T && !e.mobile && Object(n.jsx)(I, {
									width: G.c,
									height: G.b,
									thickness: [G.xb, G.Ab, G.ub].includes(g) ? 2 : g != G.wb ? C : 2 * C,
									density: G.d,
									hidden: e.hidden
								})]
							})
						}), Object(n.jsxs)("div", {
							className: "jsx-1562482592 bottom",
							children: [Object(n.jsx)(xe, {
								disabled: T,
								onChangeThickness: function(e) {
									E(e), B(G.mb)
								},
								onChangeOpacity: function(e) {
									return O(e)
								},
								thickness: C,
								opacity: _,
								submenu: S == G.nb
							}), !e.mobile && Object(n.jsx)(de.a, {
								disabled: !d.length,
								onChange: H
							})]
						})]
					}), e.mobile && Object(n.jsxs)(ue, {
						disabled: T,
						value: g,
						onChange: function(e) {
							T || B((function(t) {
								return t == e ? G.mb : e
							}))
						},
						children: [Object(n.jsx)(ae, {
							disabled: T,
							onChange: q,
							value: y
						}), Object(n.jsx)(de.a, {
							disabled: !d.length,
							onChange: H
						})]
					}), Object(n.jsx)(re, {
						disabled: T,
						onChange: function(e) {
							j(e), B(G.mb)
						},
						value: g,
						onUndo: U,
						onRedo: W,
						submenu: S == G.ob
					}), Object(n.jsx)(a.a, {
						id: "2448119299",
						children: [".draw.jsx-1562482592{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".center.jsx-1562482592{padding:35px 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".drawingContainer.jsx-1562482592{position:relative;}", ".bottom.jsx-1562482592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:60px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "@media (max-width:640px){.draw.jsx-1562482592{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.center.jsx-1562482592{-webkit-flex:1;-ms-flex:1;flex:1;padding:0;}.draw.jsx-1562482592>.step,.draw.jsx-1562482592>.time{top:10px;}.draw.jsx-1562482592 .center.jsx-1562482592>.book{border-radius:0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;width:auto;height:auto;-webkit-flex:1;-ms-flex:1;flex:1;box-shadow:0px -2px 0px 0px #6E46D5,0px 2px 0px 0px #011946,0 4px 2px 0 rgba(0,0,0,0.50);}.draw.jsx-1562482592 .center.jsx-1562482592>.book:before{display:none;}.draw.jsx-1562482592 .center.jsx-1562482592>.book .header{height:65px;}.draw.jsx-1562482592 .center.jsx-1562482592>.book .header h3{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px;padding:0 68px;}.draw.jsx-1562482592 .center.jsx-1562482592>.book .core{margin:0 0 10px;border-radius:0;box-shadow:0px 1px 0px 0px #C4C4C4,0px 2px 0px 0px #FFF,0px 3px 0px 0px #C4C4C4,0px 4px 0px 0px #FFF,0px 5px 0px 0px #C4C4C4,0px 6px 0px 0px #FFF;}.draw.jsx-1562482592 .center.jsx-1562482592>.dark .core{margin:0 0 10px;border-radius:0;box-shadow:0px 1px 0px 0px #343434,0px 2px 0px 0px #000000,0px 3px 0px 0px #343434,0px 4px 0px 0px #000000,0px 5px 0px 0px #343434,0px 6px 0px 0px #000000;}.bottom.jsx-1562482592{position:absolute;left:0;bottom:93px;height:auto;width:auto;}.drawingContainer.jsx-1562482592{-webkit-flex:1;-ms-flex:1;flex:1;}.drawingContainer.jsx-1562482592 canvas{height:100% !important;width:auto;left:50%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}}"]
					}), Object(n.jsx)(a.a, {
						id: "273907530",
						children: [".ar .draw .book .core{direction:initial;}", "@media (max-width:640px){.ar .draw .bottom{left:initial;right:0px;}}"]
					})]
				})
			}), (function(e) {
				return {
					socket: e.socket,
					previous: e.data.previous,
					emit: e.emit,
					mobile: e.mobile,
					scale: e.scale,
					hidden: e.data.configs.visible == G.Hb,
					turnNum: e.data.turnNum
				}
			}))
		},
		TSYQ: function(e, t, o) {
			var n;
			! function() {
				"use strict";
				var o = {}.hasOwnProperty;

				function i() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						if (n) {
							var r = typeof n;
							if ("string" === r || "number" === r) e.push(n);
							else if (Array.isArray(n) && n.length) {
								var s = i.apply(null, n);
								s && e.push(s)
							} else if ("object" === r)
								for (var a in n) o.call(n, a) && n[a] && e.push(a)
						}
					}
					return e.join(" ")
				}
				e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
					return i
				}.apply(t, [])) || (e.exports = n)
			}()
		},
		WZCv: function(e, t, o) {
			"use strict";
			var n = o("nKUr"),
				i = o("MX0m"),
				r = o.n(i),
				s = o("Ya7B"),
				a = o("TSYQ"),
				c = o.n(a),
				x = o("f5HD");
			t.a = Object(s.c)((function(e) {
				var t = e.draw,
					o = e.subtitle,
					i = e.title,
					s = e.children,
					a = e.dark;
				return Object(n.jsxs)("div", {
					className: "jsx-1307288772 " + (c()("book", {
						dark: a
					}) || ""),
					children: [Object(n.jsxs)("div", {
						className: "jsx-1307288772 header",
						children: [Object(n.jsx)(x.a, {}), Object(n.jsx)("div", {
							className: "jsx-1307288772 logo",
							children: Object(n.jsx)("figure", {
								className: "jsx-1307288772"
							})
						}), Object(n.jsx)("h4", {
							className: "jsx-1307288772 " + (t ? "drawing" : ""),
							children: o
						}), Object(n.jsx)("h3", {
							className: "jsx-1307288772",
							children: i
						})]
					}), Object(n.jsx)("div", {
						className: "jsx-1307288772 core",
						children: s
					}), Object(n.jsx)(r.a, {
						id: "436413053",
						children: [".book.jsx-1307288772{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:770px;height:562px;background-color:#301A6B;border-radius:9px;box-shadow:0px -3px 0px 0px #6E46D5,0px 2px 0px 0px #011946,0 8px 4px 0 rgba(0,0,0,0.50);}", ".book.jsx-1307288772:before{content:'';width:518px;height:59px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:-20px;position:absolute;background-image:url(/images/argolas.png);background-repeat:no-repeat;z-index:4;}", ".header.jsx-1307288772{background-color:#481D92;height:102px;border-radius:9px 9px 0 0;box-shadow:inset 0px -2px 0px 0px #6E46D5;border-bottom:6px #160839 solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;z-index:2;}", ".logo.jsx-1307288772{margin:-3px 0 6px;width:178px;height:44px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-image:url(/images/bx_logo.png);}", ".logo.jsx-1307288772 figure.jsx-1307288772{width:72px;height:20px;background-size:cover;background-image:url(/images/logo.svg);background-repeat:no-repeat;}", 'h4.jsx-1307288772{font-family:"Black";font-size:16px;color:#43DE99;-webkit-letter-spacing:1.6px;-moz-letter-spacing:1.6px;-ms-letter-spacing:1.6px;letter-spacing:1.6px;text-align:center;margin:0 0 2px;}', ".tooltip.jsx-1307288772{width:50px;height:40px;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:10px;left:10px;background-repeat:no-repeat;background-position:center;cursor:pointer;}", ".tooltip.jsx-1307288772:hover>.tooltip{display:block;}", ".tooltip.jsx-1307288772 section.jsx-1307288772>.tooltip{width:160px;}", ".ic_freestyle.jsx-1307288772{background-image:url('/images/freestyle.svg');}", ".ic_details.jsx-1307288772{background-image:url('/images/details.svg');}", ".ic_mistery.jsx-1307288772{background-image:url('/images/mistery.svg');}", ".drawing.jsx-1307288772{font-size:22px;margin:14px 0 0 0;}", 'h3.jsx-1307288772{font-family:"Black";font-size:27px;color:#FFFFFF;text-align:center;line-height:29px;text-transform:uppercase;text-shadow:rgb(23,5,87) 4px 0px 0px,rgb(23,5,87) 3.87565px 0.989616px 0px,rgb(23,5,87) 3.51033px 1.9177px 0px,rgb(23,5,87) 2.92676px 2.72656px 0px,rgb(23,5,87) 2.16121px 3.36588px 0px,rgb(23,5,87) 1.26129px 3.79594px 0px,rgb(23,5,87) 0.282949px 3.98998px 0px,rgb(23,5,87) -0.712984px 3.93594px 0px,rgb(23,5,87) -1.66459px 3.63719px 0px,rgb(23,5,87) -2.51269px 3.11229px 0px,rgb(23,5,87) -3.20457px 2.39389px 0px,rgb(23,5,87) -3.69721px 1.52664px 0px,rgb(23,5,87) -3.95997px 0.56448px 0px,rgb(23,5,87) -3.97652px -0.432781px 0px,rgb(23,5,87) -3.74583px -1.40313px 0px,rgb(23,5,87) -3.28224px -2.28625px 0px,rgb(23,5,87) -2.61457px -3.02721px 0px,rgb(23,5,87) -1.78435px -3.57996px 0px,rgb(23,5,87) -0.843183px -3.91012px 0px,rgb(23,5,87) 0.150409px -3.99717px 0px,rgb(23,5,87) 1.13465px -3.8357px 0px,rgb(23,5,87) 2.04834px -3.43574px 0px,rgb(23,5,87) 2.83468px -2.82216px 0px,rgb(23,5,87) 3.44477px -2.03312px 0px,rgb(23,5,87) 3.84068px -1.11766px 0px,rgb(23,5,87) 3.9978px -0.132717px 0px;}', ".core.jsx-1307288772{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;margin:0 6px 30px;background-color:#FFF;background-image:url(/images/bgcanvas.svg);background-repeat:no-repeat;background-position:center;border-radius:0 0 9px 9px;box-shadow:0px 2px 0px 0px #C4C4C4,0px 4px 0px 0px #FFF,0px 6px 0px 0px #C4C4C4,0px 8px 0px 0px #FFF,0px 10px 0px 0px #C4C4C4,0px 12px 0px 0px #FFF,0px 14px 0px 0px #C4C4C4,0px 16px 0px 0px #FFF,0px 18px 0px 0px #160C30;overflow:hidden;}", ".dark.jsx-1307288772 .core.jsx-1307288772{background-color:#000000;background-image:url(/images/bgcanvas_dark.svg);box-shadow:0px 2px 0px 0px #343434,0px 4px 0px 0px #000000,0px 6px 0px 0px #343434,0px 8px 0px 0px #000000,0px 10px 0px 0px #343434,0px 12px 0px 0px #000000,0px 14px 0px 0px #343434,0px 16px 0px 0px #000000,0px 18px 0px 0px #160C30;}", "@media (max-width:640px){.book.jsx-1307288772{width:312px;height:240px;border-radius:5px;box-shadow:0px -2px 0px 0px #6E46D5,0px 2px 0px 0px #011946,0 8px 4px 0 rgba(0,0,0,0.50);}.book.jsx-1307288772:before{content:'';width:219px;height:25px;top:-10px;background-size:cover;}.header.jsx-1307288772{height:45px;border-radius:6px 6px 0 0;box-shadow:inset 0px -1px 0px 0px #6E46D5;border-bottom:2px #160839 solid;}.header.jsx-1307288772>.sound{display:none;}.logo.jsx-1307288772{display:none;}h4.jsx-1307288772{margin:8px 0 5px;font-size:10px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.drawing.jsx-1307288772{font-size:13px;margin:20px 70px 0;}h3.jsx-1307288772{font-size:14px;line-height:14px;text-shadow:rgb(23,5,87) 2px 0px 0px,rgb(23,5,87) 1.75517px 0.958851px 0px,rgb(23,5,87) 1.0806px 1.68294px 0px,rgb(23,5,87) 0.141474px 1.99499px 0px,rgb(23,5,87) -0.832294px 1.81859px 0px,rgb(23,5,87) -1.60229px 1.19694px 0px,rgb(23,5,87) -1.97998px 0.28224px 0px,rgb(23,5,87) -1.87291px -0.701566px 0px,rgb(23,5,87) -1.30729px -1.5136px 0px,rgb(23,5,87) -0.421592px -1.95506px 0px,rgb(23,5,87) 0.567324px -1.91785px 0px,rgb(23,5,87) 1.41734px -1.41108px 0px,rgb(23,5,87) 1.92034px -0.558831px 0px;}.core.jsx-1307288772{margin:0 6px 25px;background-color:#FFF;background-image:url(/images/bgcanvas_mobile.svg);background-size:500px 900px;border-radius:0 0 5px 5px;}.dark.jsx-1307288772 .core.jsx-1307288772{background-image:url(/images/bgcanvas_mobile_dark.svg);}}"]
					}), Object(n.jsx)(r.a, {
						id: "3765270832",
						children: [".ar .book div.tooltip{left:initial;right:10px;}"]
					})]
				})
			}), (function(e) {
				return {
					mobile: e.mobile
				}
			}))
		},
		cXB8: function(e, t, o) {
			"use strict";
			var n = o("nKUr"),
				i = o("MX0m"),
				r = o.n(i),
				s = o("q1tI"),
				a = o("Ya7B"),
				c = o("CBA4");
			var x = Object(a.c)((function(e) {
				var t = e.count,
					o = e.players,
					i = e.color,
					s = e.reverse;
				return 0 == t ? null : Object(n.jsxs)("div", {
					className: r.a.dynamic([
						["1819235521", [i, i]]
					]) + " check",
					children: [Object(n.jsx)("i", {
						className: r.a.dynamic([
							["1819235521", [i, i]]
						])
					}), Object(n.jsx)("p", {
						className: r.a.dynamic([
							["1819235521", [i, i]]
						]),
						children: s ? o + "/" + t : t + "/" + o
					}), Object(n.jsx)(r.a, {
						id: "1819235521",
						dynamic: [i, i],
						children: [".check.__jsx-style-dynamic-selector{margin:10px 0 0;width:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:#FFF;padding:3px;border-radius:20px;line-height:1;overflow:hidden;-webkit-animation-name:width-__jsx-style-dynamic-selector;animation-name:width-__jsx-style-dynamic-selector;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}", "i.__jsx-style-dynamic-selector{width:18px;min-width:18px;height:18px;border-radius:50%;background-color:".concat(i, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"), "i.__jsx-style-dynamic-selector:before{margin:1px 0 0;content:'\\e910';font-family:ico;color:#FFF;font-size:8px;line-height:10px;}", 'p.__jsx-style-dynamic-selector{margin:1px 5px 0;-webkit-flex:1;-ms-flex:1;flex:1;font-family:"Black";font-size:16px;color:'.concat(i, ";-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;text-align:center;}"), "@-webkit-keyframes width-__jsx-style-dynamic-selector{from{width:18px;opacity:0;}to{width:80px;opacity:1;}}", "@keyframes width-__jsx-style-dynamic-selector{from{width:18px;opacity:0;}to{width:80px;opacity:1;}}", "@-webkit-keyframes widthMobile-__jsx-style-dynamic-selector{from{width:18px;opacity:0;}to{width:45px;opacity:1;}}", "@keyframes widthMobile-__jsx-style-dynamic-selector{from{width:18px;opacity:0;}to{width:45px;opacity:1;}}", "@media (max-width:640px){.check.__jsx-style-dynamic-selector{margin:5px 0 0;width:13px;padding:2px;border-radius:20px;-webkit-animation-name:widthMobile-__jsx-style-dynamic-selector;animation-name:widthMobile-__jsx-style-dynamic-selector;}i.__jsx-style-dynamic-selector{width:13px;min-width:13px;height:13px;}i.__jsx-style-dynamic-selector:before{font-size:6px;line-height:8px;}p.__jsx-style-dynamic-selector{margin:2px 3px 0;font-size:9px;}}"]
					})]
				})
			}), (function(e) {
				var t = e.data.users.filter((function(e) {
					return !e.viewer && !e.away
				}));
				return {
					players: t.length,
					count: t.filter((function(e) {
						return e.ready
					})).length
				}
			}));
			t.a = Object(a.c)((function(e) {
				var t = Object(s.useState)(e.turnNum)[0],
					o = Object(s.useState)(e.turnMax)[0],
					i = Object(s.useState)(e.color)[0],
					a = Object(c.a)();
				return Object(n.jsxs)("div", {
					className: "jsx-2120888168 step",
					children: [a ? o + "/" + (t + 1) : t + 1 + "/" + o, Object(n.jsx)(x, {
						color: i,
						reverse: a
					}), Object(n.jsx)(r.a, {
						id: "646283104",
						children: ['div.jsx-2120888168{min-width:86px;position:absolute;top:20px;left:20px;font-family:"Black";font-size:41px;line-height:41px;color:#FFFFFF;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', "@media (max-width:640px){div.jsx-2120888168{min-height:45px;min-width:49px;top:10px;left:10px;font-size:23px;line-height:23px;z-index:5;}}"]
					}), Object(n.jsx)(r.a, {
						id: "2555919105",
						children: [".ar .step{left:initial;right:20px;}", "@media (max-width:640px){.ar .step{left:initial;right:10px;}}"]
					})]
				})
			}), (function(e) {
				return {
					turnNum: e.data.turnNum,
					turnMax: e.data.turnMax
				}
			}))
		},
		s8YG: function(e, t, o) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/draw", function() {
				return o("HF4s")
			}])
		},
		umcP: function(e, t, o) {
			"use strict";
			var n = o("nKUr"),
				i = o("jT3O"),
				r = o("CBA4"),
				s = o("q1tI"),
				a = o("Ya7B"),
				c = o("YSmr"),
				x = o("4qaV"),
				l = o("atwx");

			function p() {
				var e = Object(i.a)(["edit"]);
				return p = function() {
					return e
				}, e
			}

			function d() {
				var e = Object(i.a)(["ready"]);
				return d = function() {
					return e
				}, e
			}
			t.a = Object(a.c)((function(e) {
				var t = e.disabled,
					o = e.onChange,
					i = e.emit,
					a = Object(r.d)(),
					b = Object(s.useState)(!1),
					u = b[0],
					f = b[1];
				return Object(n.jsx)(x.a, {
					type: "small",
					disabled: t && !u,
					selected: u,
					onClick: function() {
						f((function(e) {
							var t = !e;
							return i(c.O, t), o && o(t), t
						}))
					},
					children: u ? Object(n.jsxs)(n.Fragment, {
						children: [Object(n.jsx)(l.a, {
							icon: "pencil"
						}), Object(n.jsx)("strong", {
							children: a(p())
						})]
					}) : Object(n.jsxs)(n.Fragment, {
						children: [Object(n.jsx)(l.a, {
							icon: "ready"
						}), Object(n.jsx)("strong", {
							children: a(d())
						})]
					})
				})
			}), (function(e) {
				return {
					emit: e.emit
				}
			}))
		}
	},
	[
		["s8YG", 0, 1, 2, 4, 3, 5, 9]
	]
]);
