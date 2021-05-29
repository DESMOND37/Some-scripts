
var VERSION = "2.2.0.5";

if (getCookieDict().VERSION != VERSION){
    alert(`НОВАЯ ВЕРСИЯ! ${VERSION} Появились новые способы цензуры, проверте раздел "Для стримеров", для этого нажмите на версию в углу экрана!`);
    document.cookie = `VERSION=${VERSION};`;
}

console.log(getCookieDict());


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
var rules0 = document.createTextNode("@keyframes pulsing {100%, 0% { background-color: rgba(255,255,255, 0.8); } 50% { background-color: rgba(255,255,155, 0.1); }}")
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
styleInputRange23.appendChild(rules23);
document.getElementsByTagName("head")[0].appendChild(styleInputRange23);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var cssAnimation2 = document.createElement('style');
cssAnimation.type = 'text/css';
var rules00 = document.createTextNode("@keyframes here {100%, 0% { background-color: rgba(255, 255, 255, 0.13); } 50% { background-color: rgba(255, 255, 255, 1); }}")
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
var rules001 = document.createTextNode("@keyframes viper {100%, 0% { color: #8a2be2; } 9% { color: #945cca; } 18% {color: #9781b1;} 27% {color: #92a297;} 36% {color: #83c17a;} 45% {color: #67e056;} 54% {color: #0eff0e;} 63% {color: #67e056;} 72% {color: #83c17a;} 81% {color: #92a297;} 90% {color: #9781b1;}}")
cssAnimation.appendChild(rules001);
document.getElementsByTagName("head")[0].appendChild(cssAnimation21);

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
    canvas.style.zIndex=99999
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
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    var event = new Event('mousemove', { bubbles: true, cancelable: true})
    event.clientX=x;
    event.clientY=y;
    pointerCanvas.dispatchEvent(event);
}

function clientMouseDown(x, y){
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    var event = new Event('mousedown', { bubbles: true, cancelable: true})
    event.clientX=x;
    event.clientY=y;
    pointerCanvas.dispatchEvent(event);
}

function clientMouseUp(x, y){
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    var event = new Event('mouseup', { bubbles: true, cancelable: true})
    event.clientX=x;
    event.clientY=y;
    pointerCanvas.dispatchEvent(event);
}


function mouseDown(x, y){
    var left = pos.x;
    var top = pos.y;
    var width = pos.width;
    var height = pos.height;
    var event = new Event('mousedown', { bubbles: true, cancelable: true} )
    event.clientX=left+(x*width/1516);
    event.clientY=top+(y*height/848);
    canvas300.dispatchEvent(event);
}


function mouseMove(x, y){
    console.log(top);
    var left = pos.x;
    var top = pos.y;
    var width = pos.width;
    var height = pos.height;
    let event = new Event('mousemove', { bubbles: true, cancelable: true})
    event.clientX=left+(x*width/1516);
    event.clientY=top+(y*height/848);
    canvas300.dispatchEvent(event);
}

function mouseUp(){
    var event = new Event('mouseup', { bubbles: true, cancelable: true} )
    canvas300.dispatchEvent(event);
}


function drawSolidLine(arr){
    if (arr.length > 1){
 //       canvas = document.getElementsByClassName("jsx-3193114933 ")[0];
 //       pos = canvas.getBoundingClientRect();
        left = pos.x;
        top = pos.y;
        width = pos.width;
        height = pos.height;
        mouseDown(arr[0][0], arr[0][1]);
        arr.forEach(function (point){mouseMove(point[0], point[1]);})
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
    var realLengthOfArray = arr.length
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
    console.log(arr);
    canvas300 = document.getElementsByClassName("jsx-3193114933 ")[0];
    pos = canvas300.getBoundingClientRect();
    var lastPoint=arr[0];
    mouseDown(lastPoint[0], lastPoint[1]);
    arr.splice(0, 1);
    var index;
    var minS;
    var key = false;
    var realLengthOfArray = arr.length
    for (let i=0; i<realLengthOfArray; i++){
        var lastIndex;
        minS = 10000;
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
    }
    mouseUp();
}


function drawArray(arr){
    var canvas = document.getElementsByClassName("jsx-3193114933 ")[0];
    var pos = canvas.getBoundingClientRect();
    var left = pos.x;
    var top = pos.y;
    var width = pos.width;
    var height = pos.height;
    for (let i=0; i<arr.length; i++){
        let event = new Event('mousedown', { bubbles: true, cancelable: true} )
        event.clientX=left+(arr[i][0]*width/1516);
        event.clientY=top+(arr[i][1]*height/848);

        canvas.dispatchEvent(event);
        event = new Event('mouseup', { bubbles: true, cancelable: true} )
        canvas.dispatchEvent(event);
    }
}


function glass(point){
    var canvas = document.getElementsByClassName("jsx-150592943")[0];
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
    var realPointX = document.getElementsByClassName("xmirror")[0].value;
    var realPointY = document.getElementsByClassName("ymirror")[0].value;
    //Угол
    var alpha = 180 - document.getElementsByClassName("degmirror")[0].value;

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
    //Гипотенузв AC = AB
    var AC = Math.sqrt(AN ** 2 + CN ** 2);
    //Катет BM
    var BM = Math.sin(Math.PI/180 * BAN) * AC;
    //Катет AM
    var AM = Math.cos(Math.PI/180 * BAN) * AC;
    //Точка B
    var B = [A[0] + AM, A[1] - BM];

    /*var middleCanvas = document.getElementsByClassName("mirror-canvas")[0];
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
    canvas = document.getElementsByClassName("jsx-150592943")[0];
    var pos = canvas.getBoundingClientRect()
    let x = pos.x;
    let y = pos.y;
    let event = new Event('mousedown', { bubbles: true, cancelable: true} )
    event.clientY=y+y1;
    event.clientX=x+x1;
    canvas.dispatchEvent(event);
    event = new Event('mouseup', { bubbles: true, cancelable: true} )
    canvas.dispatchEvent(event);
}

var canvas;
function globalDraw(){
    canvas = document.getElementsByClassName("jsx-150592943")[0];
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
        //console.log(canvas.getContext('2d').getImageData(0, 0, img.width, img.height).data);
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
    }

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

function setNess(n) {
  const input = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity > input.jsx-340028725");
  const value = input.value;
  input.value = n/100;
  input._valueTracker.setValue(value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

function kok() {
    if (document.URL.indexOf("book") == -1){return};

    var checkList = document.getElementsByTagName("span");
    for (let u=0; u<checkList.length; u++){
        if (checkList[u].classList.contains("jsx-4032599855") || checkList[u].classList.contains("jsx-1858843370")) {
            if ((blackArr.indexOf(checkList[u].innerText) != -1) || checkList[u].parentNode.parentNode.parentNode.parentNode.banned || checkList[u].parentNode.parentNode.parentNode.banned){
                checkList[u].parentNode.parentNode.style.opacity = 0;
                checkList[u].parentNode.parentNode.parentNode.style.borderRadius="20px";
                checkList[u].parentNode.parentNode.parentNode.style.backgroundColor = "black";
            } else {
                checkList[u].parentNode.parentNode.style.opacity = 1;
                checkList[u].parentNode.parentNode.parentNode.style.backgroundColor = "";
            };
            console.log(checkList[u].parentNode.parentNode.parentNode.parentNode.banned);
        }
    }

    if (!document.getElementsByClassName("jsx-3158565948 scrollElements")[1]){return}
    var items = document.getElementsByClassName("jsx-3158565948 scrollElements")[1].children;

    for (let i=0; i<items.length; i++){
        if (items[i].classList.contains("jsx-2790456822 ")){continue;};

        /*items[i].style.transition="all 0.5s ease 0s";
        items[i].style.borderRadius="10px";

        items[i].onmouseenter=()=>{
            items[i].style.backgroundColor="rgba(0,0,0,0.5)";
        }
        items[i].onmouseleave=()=>{
            items[i].style.backgroundColor="rgba(0,0,0,0)";
        }*/

        items[i].oncontextmenu=()=>{}
        items[i].onclick=()=>{
            console.log("okey");
            if (items[i].banned){
                items[i].banned = false;
            } else {items[i].banned = true}

        };

        items[i].style.cursor="pointer";
        if (items[i].banned == undefined){items[i].banned=false;}

        //items[i].removeEventListener('mouseup', censss);

        let canv = items[i].getElementsByTagName("canvas")[0];

        if (canv != undefined){
            let nick = items[i].getElementsByClassName("jsx-4032599855 nick")[0].innerText;
            canv.style.cursor="pointer";
            canv.oncontextmenu=()=>{
                let link = document.createElement('a');
                link.download = `${nick}.png`;
                link.href = canv.toDataURL();
                link.click();
                return false;
            }

        }

        if (items[i].firstChild.children[1]){
            if (items[i].firstChild.children[1].firstChild.innerText == "DOCTORDEATHDDRACULA "){
                items[i].firstChild.firstChild.firstChild.style.backgroundImage="url(https://media.discordapp.net/attachments/827569141782282272/827569190072221746/9b4e9015e90d22c7.png)";
                items[i].firstChild.firstChild.firstChild.style.backgroundPosition="-2px 0px";
                items[i].firstChild.children[1].firstChild.style.animation="rainbow 5s linear";
                items[i].firstChild.children[1].firstChild.style.animationIterationCount="infinite";
                items[i].firstChild.children[1].firstChild.style.opacity=1;
            }
        }
        if (items[i].firstChild.firstChild.firstChild.innerText == "DOCTORDEATHDDRACULA "){
            items[i].firstChild.children[1].firstChild.style.backgroundImage="url(https://media.discordapp.net/attachments/827569141782282272/827569190072221746/9b4e9015e90d22c7.png)";
            items[i].firstChild.children[1].firstChild.style.backgroundPosition="-2px 0px";
            items[i].firstChild.firstChild.firstChild.style.animation="rainbow 5s linear";
            items[i].firstChild.firstChild.firstChild.style.animationIterationCount="infinite";
        }
    }
}

var MyVar1 = 0;
var MyVar2 = 128;
var MyVar3 = 255;
var Checker1= 0;
var Checker2= 0;
var Checker3= 0;
var Key1 = false;
var globalKey=false;

function asyncSlowSpace(){
    VIP();
    kok();
    var ele = document.getElementsByClassName("jsx-2562723607 jsx-3822683434 ");
    if (ele.length == 4){
        ele[0].parentNode.removeChild(ele[0]);
    }
}


function f1() {
    if (MyVar1== 255){Checker1=1};
    if (Checker1 == 0){MyVar1++};
    if (MyVar1== 0){Checker1=0};
    if (Checker1 == 1){MyVar1--};

    if (MyVar2== 255){Checker2=1};
    if (Checker2 == 0){MyVar2++};
    if (MyVar2== 0){Checker2=0};
    if (Checker2 == 1){MyVar2--};

    if (MyVar3== 255){Checker3=1};
    if (Checker3 == 0){MyVar3++};
    if (MyVar3== 0){Checker3=0};
    if (Checker3 == 1){MyVar3--};

    var i = 100/255 * MyVar1

};

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
        document.getElementsByClassName("jsx-1307288772 drawing")[0].style.margin="55px 0px 10px";
    }
}


var doctorwas = false;
var was0;
var blackArr = [];
function VIP(){
    var arr = document.getElementsByClassName("jsx-4216852870 jsx-2842824398 nick");
    was0 = false;
    for (let i=0; i<arr.length; i++){
        if (arr[i].innerText.toLowerCase() == "doctordeathddracula " || arr[i].innerText.toLowerCase() == "Doctor "){
            was0=true;
            //arr[i].innerText="Doctor ";
            //arr[i].style.background="linear-gradient(to right, red, yellow, green, cyan, blue, violet)";
            //arr[i].style.webkitTextFillColor="transparent";
            //arr[i].style.webkitBackgroundClip="text";
            arr[i].parentNode.title="Создатель модификации";
            arr[i].href="https://t.me/DoctorDeathDDracula";
            arr[i].parentNode.style.cursor="pointer";
            arr[i].parentNode.onclick=()=>{ window.open("https://t.me/DoctorDeathDDracula", '_blank'); };
            arr[i].style.animation="rainbow 5s linear";
            arr[i].style.animationIterationCount="infinite";
            arr[i].style.opacity=1;
            arr[i].parentNode.style.backgroundColor="rgb(0, 0, 0)";
            arr[i].parentElement.style.border="2px rgb(255, 0, 0) solid";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/827569141782282272/827569190072221746/9b4e9015e90d22c7.png)";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-1px 2px";
            arr[i].parentNode.style.backgroundPosition="60px -70px";
            arr[i].parentNode.style.backgroundImage="url(https://i.makeagif.com/media/6-22-2015/CqH5tw.gif)";
            arr[i].parentNode.style.backgroundPosition="-3px -70px";
            arr[i].parentNode.style.backgroundSize="400px 400%";
            //arr[i].parentNode.onmouseenter=()=>{arr[i].parentNode.style.transform="matrix(1.05, 0, 0, 1.05, 0, 0)"}
            //arr[i].parentNode.onmouseleave=()=>{arr[i].parentNode.style.transform="matrix(1, 0, 0, 1, 0, 0)"}
            arr[i].parentNode.style.transition="";
            //arr[i].parentNode.style.boxShadow="0px 10px 15px";

            if (!doctorwas){
                var music0 = document.createElement("audio");
                music0.src="https://cdn.discordapp.com/attachments/833410401366573066/846834550847963236/roundstart_main.mp3";
                music0.autoplay=true;
                music0.volume=0.3;
                doctorwas = true;

                var plast = document.createElement("div");
                plast.style.backgroundColor = "rgb(214 70 70 / 80%)";
                plast.width=500;
                plast.height = 1000;
                plast.style.width = "700px";
                plast.style.height = "200px";
                plast.style.margin = "60px auto";
                plast.style.zIndex="2";
                plast.style.borderRadius="20px";
                plast.style.transition="1s";
                plast.style.transform="scale(0)";

                var text = document.createElement("p");
                text.innerText = "Doctor в игре!";
                text.style.color="#6f0000;"
                text.style.fontSize="65px"
                text.style.fontFamily="'Black'"
                text.style.margin="60px 120px";
                text.style.textShadow="4px 5px 4px #f90000";
                plast.style.border="5px solid red";
                plast.appendChild(text);

                document.querySelector("#content").appendChild(plast);
                setTimeout(()=>{plast.style.transform="scale(1)";}, 100);
                setTimeout(()=>{plast.style.transform="scale(0)"}, 3000);
                setTimeout(()=>{document.querySelector("#content").removeChild(plast);}, 4000);

            }
            doctorwas = true;
        }
        else if (arr[i].innerText.toLowerCase() == "krevetka74"){
            //arr[i].style.background="linear-gradient(to right, red, yellow, green, cyan, blue, violet)";
            //arr[i].style.webkitTextFillColor="transparent";
            //arr[i].style.webkitBackgroundClip="text";
            arr[i].style.opacity=1;
            arr[i].parentNode.title="Стример";
            arr[i].parentNode.style.cursor="pointer";
            arr[i].parentNode.onclick=()=>{ window.open("https://www.twitch.tv/krevetka74", '_blank'); };
            arr[i].parentNode.style.backgroundColor="#f7c2c2";
            arr[i].parentElement.style.border="2px rgb(255, 255, 255) solid";
            arr[i].parentNode.getElementsByClassName("avatar")[0].style.borderColor="#ffffff";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://cdn.discordapp.com/attachments/833410401366573066/841475537499455498/-1.png)";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-2px 4px";
            arr[i].parentNode.style.transition="all 0.3s linear 0s";
            arr[i].parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/846132899258564658/giphy.gif)";
            arr[i].parentNode.style.backgroundPosition="153% 15%";
            arr[i].parentNode.style.backgroundSize="73%";

        }
        else if (arr[i].innerText.toLowerCase() == "lepishov2007"){
            arr[i].parentNode.title="Стример";
            arr[i].parentNode.style.cursor="pointer";
            arr[i].parentNode.onclick=()=>{ window.open("https://www.twitch.tv/lepishov2007", '_blank'); };
            arr[i].parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/847413107005718548/wallpaper.png)";
            arr[i].style.color="white";
            arr[i].style.fontFamily="fantasy";
            arr[i].style.fontStyle="oblique";
            arr[i].style.fontSize="xx-large";
            arr[i].parentNode.style.border="none";
            arr[i].style.overflow="unset";
            arr[i].parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/847414409957343232/dd86851c-cf1a-4211-884b-4b1d369d3c37-profile_image-300x300.png)";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundSize="160%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px -10px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.width="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.height="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
            arr[i].parentElement.getElementsByTagName("span")[0].style.margin="0px";
        }
        else if (arr[i].innerText.toLowerCase() == "xviperx"){
            arr[i].parentNode.title="Стример";
            arr[i].style.animation = "viper 2s linear";
            arr[i].style.opacity=1;
            arr[i].parentNode.style.backgroundColor="chartreuse";
            arr[i].parentNode.style.borderColor="darkmagenta";
            arr[i].parentNode.style.borderLeft="dashed 4px";
            arr[i].style.animationIterationCount="infinite";
            arr[i].style.fontFamily="fantasy";
            arr[i].style.fontSize="large";
            arr[i].parentNode.style.cursor="pointer";
            arr[i].parentNode.onclick=()=>{ window.open("https://www.twitch.tv/xviperx_maks", '_blank'); };
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/827569141782282272/844594975546277929/-1.png?width=676&height=676)";
            arr[i].parentElement.getElementsByTagName("span")[0].style.width="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.height="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
            arr[i].parentElement.getElementsByTagName("span")[0].style.margin="0px";
            arr[i].previousElementSibling.style.backgroundColor="black";
            arr[i].parentNode.style.transition="all 0.3s linear 0s";
        }
        //console.log(arr[i].innerText.toLowerCase());
        else if (arr[i].innerText.toLowerCase() == "bobtyan"){
            arr[i].parentNode.title="Стример";
            arr[i].parentNode.style.backgroundColor="lightblue";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://cdn.discordapp.com/attachments/833410401366573066/844929630329896990/8c9367ad-edac-4808-ad31-965923a180cd-profile_image-70x70.png)";
            arr[i].parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-2px -3px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.width="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.height="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
            arr[i].parentElement.getElementsByTagName("span")[0].style.margin="0px";
            arr[i].parentNode.getElementsByClassName("avatar")[0].style.borderColor="yellow";
            arr[i].parentNode.style.border="3px solid yellow";
            arr[i].parentNode.style.cursor="pointer";
            arr[i].parentNode.onclick=()=>{ window.open("https://www.twitch.tv/bobtyan", '_blank'); };
            arr[i].parentNode.style.transition="all 0.3s linear 0s";
        }
        else if (arr[i].innerText.toLowerCase() == "беатмахоне"){
            arr[i].parentNode.title="Стример";
            arr[i].parentNode.style.backgroundColor="red";
            arr[i].parentNode.getElementsByClassName("avatar")[0].style.border="3px solid black";
            arr[i].parentNode.style.border="3px solid black";
            arr[i].style.color="white";
            arr[i].style.fontFamily="cursive";
            arr[i].parentNode.style.transition="all 0.3s linear 0s";
            arr[i].parentNode.style.cursor="pointer";
            arr[i].parentNode.onclick=()=>{ window.open("https://www.twitch.tv/beatmaxone", '_blank'); };
            arr[i].style.fontWeight="bolder";

            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/844986185788162048/6f9d8ae1-7e01-4876-99cb-6386e13a5550-profile_image-70x70.png)";
            arr[i].parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-2px -3px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.width="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.height="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
            arr[i].parentElement.getElementsByTagName("span")[0].style.margin="0px";
        }
        else if (arr[i].innerText.toLowerCase() == "peps_nn"){
            arr[i].parentNode.title="Стример";
            arr[i].parentNode.style.backgroundColor="darkorange";
            arr[i].parentNode.getElementsByClassName("avatar")[0].style.border="3px solid brown";
            arr[i].parentNode.style.border="3px solid brown";
            arr[i].style.color="yellow";
            arr[i].parentNode.style.transition="all 0.3s linear 0s";
            arr[i].parentNode.style.cursor="pointer";
            arr[i].parentNode.onclick=()=>{ window.open("https://www.twitch.tv/peps_nn", '_blank'); };
            //arr[i].style.textShadow="2px 2px 3px black";

            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://cdn.discordapp.com/attachments/833410401366573066/845064787028475924/unknown.png)";
            arr[i].parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-3px -3px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.width="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.height="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
            arr[i].parentElement.getElementsByTagName("span")[0].style.margin="0px";
        }
        else if (arr[i].innerText.toLowerCase() == "груша "){
            arr[i].parentNode.title="Художник";
            arr[i].parentNode.style.backgroundColor="rgb(247 232 208)";
            arr[i].parentNode.getElementsByClassName("avatar")[0].style.border="0px solid brown";
            arr[i].parentNode.style.border="3px solid #c7945a";
            arr[i].style.color="#824700";
            arr[i].style.fontSize="x-large";
            arr[i].style.fontFamily='Bold';
            arr[i].style.fontStyle="italic";
            arr[i].parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/845257788443590686/unknown.png)";
            arr[i].parentNode.style.backgroundSize="130%";
            arr[i].parentNode.style.backgroundPosition="-35px -40px";
            arr[i].parentNode.style.backgroundRepeat="no-repeat";
            arr[i].parentNode.style.transition="none";

            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/845264187927298068/unknown.png)";
            arr[i].parentElement.getElementsByTagName("span")[0].style.borderRadius="35px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundSize="160%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px -10px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.width="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.height="100%";
            arr[i].parentElement.getElementsByTagName("span")[0].style.minHeight="auto";
            arr[i].parentElement.getElementsByTagName("span")[0].style.margin="0px";
        }
        else if (arr[i].innerText.toLowerCase() == "мэл "){
            arr[i].parentNode.title="Друг Баракуды";
            arr[i].parentNode.style.border="3px solid darkblue";
            arr[i].parentNode.style.backgroundColor="#f9f9f9";
            arr[i].parentNode.style.backgroundImage="url(https://cdn.discordapp.com/attachments/833410401366573066/848315223973691412/b5176b6979ba46da196d35b515fc5110.gif)";
            arr[i].parentNode.style.backgroundSize="250px";
            arr[i].parentNode.style.backgroundPosition="center";
            arr[i].parentNode.style.backgroundRepeat="no-repeat";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.borderRadius="20px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/848315900771696640/IMG_20201122_201910.jpg?width=765&height=676)";
        }
        else if (arr[i].innerText.toLowerCase() == "владыко "){
            arr[i].parentNode.title="Художник";
            arr[i].parentNode.style.backgroundColor="rgb(224 18 18)";
            arr[i].style.color="rgb(31 31 31)";
            arr[i].parentNode.firstChild.style.border="none";
            arr[i].parentNode.firstChild.style.backgroundColor="rgb(31 31 31)";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/845797316471291924/111.png?width=478&height=676)";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundPosition="2px 2px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundSize="90%";
        }
        else if (arr[i].innerText.toLowerCase() == "бpaйc"){
            arr[i].parentNode.title="Художник";
            arr[i].innerText="";
            arr[i].parentNode.style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/846076813830520902/unknown.png)";
            arr[i].parentNode.style.backgroundSize="150%";
            arr[i].parentNode.style.backgroundPosition="-10px";
            arr[i].parentNode.style.transition="all 0s linear 0s";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundPosition="-10px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.borderRadius="20px";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://media.discordapp.net/attachments/833410401366573066/846082563919052870/1fb87dd02579e688.png?width=901&height=676)";
        }
        else if (arr[i].innerText.indexOf("#") != -1){
            console.log(arr[i].innerText);
            var text1 = arr[i].innerText
            var index = text1.lastIndexOf("#");
            arr[i].parentNode.style.backgroundColor=text1.substring(index, text1.length);
            arr[i].innerText=text1.substring(0, index);
        }
        else if (document.URL.indexOf("book") != -1){
            arr[i].parentNode.onmouseenter=()=>{if (arr[i].banned != true){ arr[i].parentNode.style.boxShadow="0px 0px 10px red"} };
            arr[i].parentNode.onmouseleave=()=>{if (arr[i].banned != true){ arr[i].parentNode.style.boxShadow=""} };
            arr[i].parentNode.style.cursor="pointer";
            arr[i].parentNode.onclick=()=>{
                if (arr[i].banned){
                    let popa = blackArr.indexOf(arr[i].innerText)
                    arr[i].banned=false;
                    arr[i].parentNode.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
                    blackArr.splice(popa, 1);
                } else {
                    arr[i].banned=true;
                    blackArr.push(arr[i].innerText);
                    arr[i].parentNode.style.backgroundColor = "red";
                };
            };
        }
    }
    //if (!was0){
    //    doctorwas = false;
    //}
}

function extendTextInput() {
    var textInput = document.getElementsByClassName("jsx-856742297 ")[0];
    if (textInput != undefined){
        textInput.maxLength=70;
        console.log(textInput);
        textInput.style.webkitTextSecurity="none";
    }
    else{
        textInput = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-3203140451.center > form > input");
        textInput.maxLength=70;
        console.log(textInput);
        textInput.style.webkitTextSecurity="none";
    }
}

var num = 1
var Key = false
var minusActive = false;
var pipetKey = false;

function mainMenuEdits(){
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            if (evt.key === "Enter" || evt.key === "Ent" || evt.keyCode === 13) {
                document.getElementsByClassName("jsx-4289504161 big")[0].click();
            }
        }
    }
}

function addMultEventsListener(events, func, element){
    for (let i=0; i<events.length; i++){
        let event = events[i];
        element.addEventListener(event, func)
    }
}

function clearActiveelements(){
    var mirorButton = document.getElementsByClassName("jsx-3659451671 tool miror")[0];
    mirorButton.classList.remove("sel");
    clearMidCanvas();
    mirorButton.classList.remove("act1");
    document.getElementsByClassName("rightpanel")[0].style.right="-220px";
    document.querySelector("#content > div.rightpanel > div:nth-child(3)").style.opacity = 0.5;
    document.querySelector("#content > div.rightpanel > div:nth-child(3)").style.animation="";
    var smoothButton = document.getElementsByClassName("jsx-3659451671 tool  smooth")[0];
    var degRangeBorder = document.getElementsByClassName("deg-range-border")[0];
    smoothButton.classList.remove("act1");
    degRangeBorder.style.display="none";
    sLevel = 1;
    if (prevElem){
        prevElem.classList.add("sel");
        var pipetButton = document.getElementsByClassName("jsx-3659451671 tool pipet")[0];
        pipetButton.classList.remove("act");
        pipetButton.classList.remove("sel");
    }
    var loopaButton = document.getElementsByClassName("jsx-3659451671 tool loopa")[0];
    var zoomC = document.getElementsByClassName("zoomC")[0];
    loopaButton.classList.remove("act1");
    loopaButton.classList.remove("sel");
    zoomCHidden = true;
    zoomC.hidden = true;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////DRAW FUNCS/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Добавление на страницу холста зума
var zoomOffsetY = 400;
var zoomCHidden = true;
function addZoom(){
    if (!document.getElementsByClassName("zoomC").length && document.URL.indexOf("draw") != -1 && !document.getElementsByClassName("jsx-1307288772 book dark").length){
        var zoomC = createCanvas(200, 200);
        zoomC.classList.add("zoomC");
        zoomC.hidden = true;
        var topC = document.getElementsByClassName("jsx-150592943")[0];
        var memmoryC = document.getElementsByClassName("jsx-3193114933 ")[0];
        var currentC = document.getElementsByClassName("jsx-3193114933 ")[1];

        function zoomUpdate(e){
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
        }

        document.querySelector("#__next").addEventListener("pointermove", (e)=>{
            if (document.getElementsByClassName("jsx-3659451671 tool loopa act1 sel")[0]){
                zoomUpdate(e);
            }
        });

        document.querySelector("#__next").addEventListener("pointerdown", (e)=>{
            setTimeout(()=>{
                zoomUpdate(e);
            }, 10);
        });

        document.querySelector("#__next").appendChild(zoomC);
    }
}

//Функция изменения дизайна
function drawStyleChange(){
    //Смещение инструментов ниже
    document.getElementsByClassName("jsx-3071142060")[0].style.margin="0px 0px -70px 0px";
    //Растяжение палитры
    var palitra = document.getElementsByClassName("jsx-3071142060")[1];
    palitra.style.height="auto";
    var book = document.getElementsByClassName("jsx-1307288772 book")[0];
    book.style.padding="0px 0px 20px 0px";
    //Изменеине в иснтрументах
    var undo = document.getElementsByClassName("jsx-3659451671 tool undo")[0];
    var redo = document.getElementsByClassName("jsx-3659451671 tool redo")[0];
    undo.style.margin="0px 0px 7px 0px";
    redo.style.margin="0px 0px 7px 0px";
    //Очистка задней картинки
    var underDrawContainer = document.getElementsByClassName("jsx-1307288772 core")[0];
    underDrawContainer.style.backgroundImage="url()";
    var toolBar = document.getElementsByClassName("jsx-3659451671 tools")[0].firstChild;
    toolBar.style.height="auto";
        //Изменение местоположение тайтлов
    document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.header > h4").style.margin="20px 0px 10px";
    //Убираем лишнее с хослта
    var hos = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core");
    hos.style.boxShadow="none";
    hos.style.margin="0px 6px 6px";
    //Book edit
    book.style.height="538px";
    book.style.borderRadius="10px";
    //Слой книги
    var bookLayer = document.querySelector("#content > div > div > div.jsx-1562482592.center");
    bookLayer.style.padding="50px 0px 0px";
    //Надхолсьтье
    var canvasLayer = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core");
    canvasLayer.style.borderRadius="0px 0px 0px 0px";
    //document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.header").style.borderRadius="0px"
    //Нижняя планка
    var but = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom");
    but.style.height="110px";
    //Удаление лого
    var logo = document.getElementsByClassName("jsx-1307288772 logo")[0];
    if (logo != undefined){
        logo.parentNode.removeChild(logo);
    }
    //Изменение цвета рамки
    var book1 = document.getElementsByClassName("jsx-1307288772 book")[0];
    book1.style.backgroundColor="rgb(0 0 0)";
    book1.style.boxShadow="rgb(0 0 0) 0px -3px 0px 0px, rgb(1 25 70) 0px 2px 0px 0px, rgb(0 0 0 / 50%) 0px 8px 4px 0px";
    var header1 = document.getElementsByClassName("jsx-1307288772 header")[0];
    header1.style.backgroundColor="rgb(0 0 0)";
    header1.style.boxShadow="rgb(0 0 0) 0px -2px 0px 0px inset";
    header1.style.borderBottom="6px solid rgb(0 0 0)";
    var newDiv = document.createElement("div");
    newDiv.classList.add("newdiv");
    newDiv.style.width="758px";
    newDiv.style.height="424px";
    newDiv.style.position="absolute";
    newDiv.style.zIndex="0";
    newDiv.style.overflow="hidden";
    try{
        document.getElementsByClassName("jsx-3193114933")[0].insertAdjacentElement('beforeBegin', newDiv);
    }catch{}
}

var curElementOverCursor;
//Функция изменения функционала первого уровня
function firstLevelFunctions(){
    //document.getElementsByClassName("jsx-340028725 thickness")[0].click();
    //Невозможность открыть контекстное меню на холсте
    document.getElementsByClassName("jsx-150592943")[0].oncontextmenu=function(){return false;};
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
        link.href = document.getElementsByClassName("jsx-3193114933 ")[0].toDataURL();
        link.click();
    };
    upper.appendChild(downloadButton);

    //Обновление элемента над которым находится курсор
    window.addEventListener("pointerover", (e)=>{curElementOverCursor=e.path[0]})

    //Доктор Стрендж
    var toolsBox100 = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-3659451671.tools > div");
    var undoButton = document.getElementsByClassName("tool undo")[0];
    var redoButton = document.getElementsByClassName("tool redo")[0];
    toolsBox100.onwheel=(e)=>{
        if (e.deltaY>0){undoButton.click();} else {redoButton.click();}
    }

    var readyButton = document.getElementsByClassName("jsx-4289504161 small")[0];
    if (readyButton){
        readyButton.addEventListener("click", ()=>{
            clearActiveelements();
        })
    }
}

//Изменение палитры
function palitEdit(){
    var palitra = document.getElementsByClassName("jsx-3071142060")[1];
    var nColor = document.getElementsByClassName("jsx-3071142060 color")[0].cloneNode(true);
    var allColors = document.getElementsByClassName("jsx-3071142060 color");

    //Удаление предыдущих цветов
    while (palitra.firstChild.tagName != "INPUT") {
        palitra.removeChild(palitra.firstChild);
    }

    if (document.getElementsByClassName("jsx-3071142060 color").length != 36){
        var target = document.getElementsByClassName("jsx-3071142060")[0].getElementsByTagName("input")[0];
        var colorList = [[0, 0, 0], [34, 177, 76], [47, 253, 57], [51, 51, 51], [0, 81, 36], [74, 255, 169], [125, 125, 125], [255, 255, 125], [0, 9, 168], [175, 175, 175], [255, 242, 0], [0, 0, 255], [255, 255, 255], [255, 201, 14], [79, 83, 255], [90, 7, 12], [191, 191, 0],[87, 129, 215], [171, 14, 21], [119, 92, 0], [73, 189, 218], [255, 0, 0], [255, 210, 166], [153, 217, 234], [239, 71, 80], [254, 135, 48], [180, 3, 175], [245, 80, 127], [224, 96, 1], [163, 73, 164], [244, 128, 134], [80, 43, 18], [251, 30, 245], [249, 185, 188], [54, 29, 12], [253, 162, 251]];
        if (document.getElementsByClassName("jsx-1307288772 book dark")[0] != undefined){colorList[12]==[0,0,0];}
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
    console.log(evt);
    var isEscape = false;
    if ("key" in evt) {
        if (evt.key === "Escape" || evt.key === "Esc" || evt.keyCode === 27) {
            if (document.getElementsByClassName("act").length != 0 || document.getElementsByClassName("act1").length != 0){
                clearActiveelements();
            } else { moveCanvases()}
        }

        if (evt.key === "L" || evt.key === "l" || evt.keyCode === 76 || evt.code === "KeyL") {
            var loopaButton = document.getElementsByClassName("loopa")[0];
            loopaButton.click();
        }

        if (evt.key === "F2" || evt.key === "f2" || evt.keyCode === 113 || evt.code === "F2") {

        }

        if (evt.key === "0" || evt.keyCode === 48){
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
                //console.log("OK");
            }
        }
    };
}

//Обработка колесика
function onDrawWheel(e){
    var zoomC = document.getElementsByClassName("zoomC")[0];
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
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    if (pointerCanvas){
        //ПКМ ПИПЕТКА
        var canada = document.getElementsByClassName("jsx-3193114933 ")[0];
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

                    document.getElementsByClassName("jsx-3659451671 tool undo")[0].click();
                }, 50)
            }
        })
    } else {alert(">pointerCanvas is undefined<");}
}

//Добавление заливки по средней кнопке мыши
function drawMiddleBucket(){
    //Заливка
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    if (pointerCanvas){
        pointerCanvas.addEventListener("pointerdown", function(e) {
            if (e.which === 2) {
                var curButt = document.getElementsByClassName("tool sel")[0];
                var undoButt = document.getElementsByClassName("jsx-3659451671 tool undo")[0];
                document.getElementsByClassName("jsx-3659451671 tool fil")[0].click();

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
    if (!document.getElementsByClassName("ness-text").length){
        var widthinput = document.getElementsByClassName("jsx-340028725 bxopacity")[0];
        var ness = (()=>{var items = document.getElementsByClassName("jsx-340028725"); for (let i=0; i<items.length; i++){if (items[i].tagName=="INPUT"){return items[i]}}})()
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
        var trackBarBox = document.getElementsByClassName("jsx-340028725 bxopacity")[0];
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
    var toolBar = document.getElementsByClassName("jsx-3659451671 tools")[0].firstChild;
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];

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
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    var zoomC = document.getElementsByClassName("zoomC")[0];
    var toolBar = document.getElementsByClassName("jsx-3659451671 tools")[0].firstChild;
    if (!document.getElementsByClassName("loopa").length){
        var loopaButton = document.createElement("div");
        loopaButton.classList.add("jsx-3659451671");
        loopaButton.classList.add("tool");
        loopaButton.classList.add("loopa");
        loopaButton.style.margin="0px";
        //loopaButton.style.position="relative";
        //loopaButton.style.left="56px";
        //loopaButton.style.top="-54px";
        loopaButton.onclick = function(){
            if (document.getElementsByClassName("jsx-1307288772 core")[0].getElementsByClassName("jsx-1562482592 drawingContainer").length && !document.getElementsByClassName("jsx-1553483530 pencil").length){
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
var sLevel = 1;
function addSmoothingTool(){
    var toolBar = document.getElementsByClassName("jsx-3659451671 tools")[0].firstChild;

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
            console.log("over")
        } else {
            degRangeBorder.style.display="none";
        }
                       }, 1000)
    }

    var degRange1 = document.createElement('input');
    degRange1.type = "range";
    degRange1.min = 1;
    degRange1.max = 10;
    degRange1.step = 1;
    degRange1.value="0";
    degRange1.style.margin="23px 5px";
    degRange1.style.width="190px";
    degRange1.style.height="4px";
    degRange1.style.borderRadius="10px";
    degRange1.oninput=()=>{
        sCounter.innerText = degRange1.value
        sLevel = Number(degRange1.value);
    };

    var sCounter = document.createElement("div");
    sCounter.innerText = "1";
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
    smoothButton.style.margin="0px";

    smoothButton.onclick=()=>{
        if (!smoothButton.classList.contains("act1") && !document.getElementsByClassName("jsx-1553483530 pencil").length){
            smoothButton.classList.add("act1");
            degRangeBorder.style.display="";
            sLevel = Number(degRange1.value);
        } else {
            smoothButton.classList.remove("act1");
            degRangeBorder.style.display="none";
            sLevel = 1;
        }
    };

    smoothButton.onmouseenter=()=>{
        if (smoothButton.classList.contains("act1")){
            degRangeBorder.style.display="";
        }
    }

    smoothButton.onmouseleave=()=>{
        setTimeout(()=>{if ([
            smoothButton,
            sCounter,
            degRange1,
            degRangeBorder,
        ].indexOf(curElementOverCursor) != -1){
            console.log("over")
        } else {
            degRangeBorder.style.display="none";
        }
                       }, 1000)
    }

    smoothBorder.appendChild(smoothButton);

    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    var mapArray = [];
    var startPoint, endPoint;
    var onWorkingKey = false;
    pointerCanvas.addEventListener('pointerdown', (e)=>{
        var pipetTool = document.getElementsByClassName("jsx-3659451671 tool pipet act sel")[0];
        var bucketTool = document.getElementsByClassName("jsx-3659451671 tool fil sel")[0];
        if (Number(degRange1.value)!=1 && !bucketTool && e.which != 2 && !onWorking && e.which != 3 && !pipetTool){
            onWorkingKey = true;
            startPoint = [e.clientX, e.clientY];
        }
    })

    window.addEventListener('pointermove', (e)=>{
        if (onWorkingKey){
            mapArray.push([e.clientX, e.clientY]);
        }})

    pointerCanvas.addEventListener('pointerup', (e)=>{
        if (onWorkingKey){
            console.log(sLevel);
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

    window.addEventListener('pointerup', (e)=>{
        if (onWorkingKey){
            console.log(sLevel);
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
    if (document.getElementsByClassName("pipet-title")[0]){return 0};
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    var canada = document.getElementsByClassName("jsx-3193114933")[0];
    var curc = document.createElement("div");
    curc.style.height="10px";
    curc.style.width="10px";
    curc.style.border="1px solid black";
    var title = document.createElement("div");
    title.classList.add("pipet-title");
    title.style.width="auto";
    title.style.height="auto";
    title.style.border="1px solid black";
    title.style.position="absolute";
    title.style.backgroundColor="rgb(255, 239, 181)";
    pointerCanvas.addEventListener("pointermove", (e)=>{
        if (!title.hidden){
            var rgba = canada.getContext('2d').getImageData(e.offsetX*2, e.offsetY*2, 1, 1).data;
            title.innerText = rgba;
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
    var toolBar = document.getElementsByClassName("jsx-3659451671 tools")[0].firstChild;
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    var canada = document.getElementsByClassName("jsx-3193114933")[0];

    if (document.getElementsByClassName("pipet")[0] == undefined && pointerCanvas){
        var pipetButton = document.createElement("div");
        pipetButton.classList.add("jsx-3659451671");
        pipetButton.classList.add("tool");
        pipetButton.classList.add("pipet");
        pipetButton.style.margin="0px";

        toolBar.appendChild(pipetButton);

        pipetButton.onclick = function(){
            if (!document.getElementsByClassName("jsx-1553483530 pencil").length){
                addTitle();
                prevElem = document.getElementsByClassName("tool sel")[0];
                prevElem.classList.remove("sel");
                pipetButton.classList.add("act");
                pipetButton.classList.add("sel");
            }
        };


        toolBar.addEventListener('click', (e)=>{
            if (e.target != pipetButton && document.getElementsByClassName("act").length != 0){
                document.querySelector("#__next").removeChild(document.getElementsByClassName("pipet-title")[0]);
                prevElem.classList.add("sel");
                pipetButton.classList.remove("act");
                pipetButton.classList.remove("sel");
            }
        });

        pointerCanvas.addEventListener('pointerdown', (e)=>{
            if (document.getElementsByClassName("act").length != 0 && e.which == 1){
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

                    document.getElementsByClassName("jsx-3659451671 tool undo")[0].click();
                }, 50)
            }
        })


    } else { console.log("L-button already exists or pointerCanvas is undefined") }

}

//Кноака рандомного цвета
function randomColorButton(){
    var toolBar = document.getElementsByClassName("jsx-3659451671 tools")[0].firstChild;
    if (!document.getElementsByClassName("rand").length){
        var randomButton = document.createElement("div");
        randomButton.classList.add("jsx-3659451671");
        randomButton.classList.add("tool");
        randomButton.classList.add("rand");
        randomButton.style.margin="7px 0px 0px 0px";
        toolBar.appendChild(randomButton);
        randomButton.onclick = function(){
            setColor(rgb2hex(getRandomInt(256), getRandomInt(256), getRandomInt(256)));
        }
    }
}

/////////////////////////////////

//Функционал кнопки зеркала
function addMirrorButton(){
    var toolBar = document.getElementsByClassName("jsx-3659451671 tools")[0].firstChild;
    if (!document.getElementsByClassName("miror").length){
        var mirorButton = document.createElement("div");
        mirorButton.classList.add("jsx-3659451671");
        mirorButton.classList.add("tool");
        mirorButton.classList.add("miror");

        mirorButton.onclick=()=>{
            if (!document.getElementsByClassName("jsx-1553483530 pencil").length){
                if (document.getElementsByClassName("miror sel").length == 0){
                    mirorButton.classList.add("sel");
                    mirorButton.classList.add("act1");
                    updateMirrorLine();
                    document.querySelector("#content > div.rightpanel > div:nth-child(3)").style.opacity = 1;
                    document.getElementsByClassName("rightpanel")[0].style.right="0px";
                    document.querySelector("#content > div.rightpanel > div:nth-child(3)").style.animation="1s linear 0s normal none running here";
                } else {
                    mirorButton.classList.remove("sel");
                    clearMidCanvas();
                    mirorButton.classList.remove("act1");
                    document.getElementsByClassName("rightpanel")[0].style.right="-220px";
                    document.querySelector("#content > div.rightpanel > div:nth-child(3)").style.opacity = 0.5;
                    document.querySelector("#content > div.rightpanel > div:nth-child(3)").style.animation="";
                }
            }
        }

        toolBar.appendChild(mirorButton);
    }
}

//Функции зеркала
var onWorking = false;
function addMirrorBase(){
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    var mirrorCanvas = document.getElementsByClassName("jsx-3193114933")[0].cloneNode();
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
    var againCanvas = document.getElementsByClassName("mirror-canvas")[0];
    var kotik = againCanvas.getContext("2d");

    evttCanvas.addEventListener('pointerdown', (e)=>{
        var smoothingTool = document.getElementsByClassName("jsx-3659451671 tool smooth act1")[0];
        if (!onWorking && document.getElementsByClassName("miror sel").length != 0 && !document.getElementsByClassName("jsx-3659451671 tool pipet act sel").length && e.which == 1){
            rect = evttCanvas.getBoundingClientRect();
            let relX = e.clientX - rect.x;
            let relY = e.clientY - rect.y;
            arr.splice(0, 0, glass([relX, relY])); // Запись точек относительно холста
            key = true;
        }
    })

    document.getElementsByClassName("jsx-2562723607 jsx-3822683434 screen fade-enter-done")[0].addEventListener('pointermove', (e)=>{
        if (key){
            let relX = e.clientX - rect.x;
            let relY = e.clientY - rect.y;
            arr.splice(0, 0, glass([relX, relY]));
        }
    })


    window.addEventListener('pointerup', (e)=>{
        setTimeout(()=>{
            if (key && document.getElementsByClassName("miror sel").length != 0){
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

/////////////////////////////////

//Функционал исправленной заливки
function fixedBucket(){
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    var canvas = document.getElementsByClassName("jsx-3193114933 ")[0];
    var prevCanvas;

    //document.getElementsByClassName("jsx-3659451671 tool fil")[0].addEventListener('click', ()=>{
    //    prevCanvas = convert0Dto2D(canvas.getContext("2d").getImageData(0, 0, 1516, 848).data);
    //})

    var evtCanvas = pointerCanvas;

    evtCanvas.addEventListener('pointerdown', (e)=>{
        if (document.getElementsByClassName("jsx-3659451671 tool fil sel").length != 0 && document.getElementsByClassName("fi")[0].checked && e.which != 3){
            console.log("ok");
            prevCanvas = convert0Dto2D(canvas.getContext("2d").getImageData(0, 0, 1516, 848).data);
        }
    })

    evtCanvas.addEventListener("pointerup", (e)=>{setTimeout(()=>{
        if (document.getElementsByClassName("jsx-3659451671 tool fil sel").length != 0 && document.getElementsByClassName("fi")[0].checked){
            var curCanvas = convert0Dto2D(canvas.getContext("2d").getImageData(0, 0, 1516, 848).data);
            var newList = [];

            var time = performance.now();
            // некий код

            for (let y=0; y<848; y++){
                newList.push([]);
                for (let x=0; x<1516; x++){
                    if (isArrayEqual2(curCanvas[y][x], prevCanvas[y][x])){
                        newList[newList.length-1].push(0);
                    } else {
                        newList[newList.length-1].push(1);
                    }
                }
            }

            setTimeout(()=>{
            time = performance.now() - time;
            console.log('Время выполнения = ', time);
            document.getElementsByClassName("jsx-3659451671 tool pen")[0].click();
            var curThicc = document.getElementsByClassName("jsx-340028725 thickness sel")[0];
            document.getElementsByClassName("jsx-340028725 thickness")[0].click();

            drawNsort(getBorderOfNew(newList));

            curThicc.click();
            document.getElementsByClassName("jsx-3659451671 tool fil")[0].click();
            }, 30);
        }
    }, 2)})
}

////////////////////////////////

//Функционал кнопки очистки
function addClearButton(){
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0];
    if (!pointerCanvas){return false;};
    var toolBar = document.getElementsByClassName("jsx-3659451671 tools")[0].firstChild;
    if (!document.getElementsByClassName("clear").length){
        var clearButton = document.createElement("div");
        clearButton.classList.add("jsx-3659451671");
        clearButton.classList.add("tool");
        clearButton.classList.add("clear");
        clearButton.style.margin="7px 0px 0px";
        toolBar.appendChild(clearButton);
        clearButton.onclick=()=>{
            var rect = pointerCanvas.getBoundingClientRect();
            var x0 = rect.x;
            var y0 = rect.y;
            var x1 = rect.x + rect.width;
            var y1 = rect.y + rect.height;
            var beforeColor = (()=>{var items = document.getElementsByClassName("jsx-3071142060"); for (let i=0; i<items.length; i++){if (items[i].tagName=="INPUT"){return items[i]}}})().value;
            var beforeElement = document.getElementsByClassName("tool sel")[0];
            var rectButton = document.getElementsByClassName("jsx-3659451671 tool rec")[0];
            rectButton.click();
            setColor("#ffffff");
            clientMouseDown(x0, y0);
            clientMouseMove(x1, y1);
            clientMouseUp(x1, y1);
            setColor(beforeColor);
            beforeElement.click();
        };
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var blackList = [];
var alreadyKey = false;
var loopaKey = false;


function mainDrawFunc(){
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
    //document.getElementsByClassName("jsx-340028725 thickness")[0].click();
    /////////////////////////////////////////////

    //Обработка клавиатуры
    document.onkeydown = drawKeys;

    //Вилинговое увеличение экрана
    var pointerCanvas = document.getElementsByClassName("jsx-150592943")[0]// <- самый верхний холст
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
    //Блок функционала исправленной заливки
    fixedBucket()


    debugName();
}

function waitVideo(){
    document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1671937317.center > p").innerText="ЖДЕМ ОКОНЧАНИЯ ИГРЫ, А ПОКА ЧТО МОЖЕТЕ НАСЛАДИТЬСЯ ПРИЯТНОЙ МУЗЫКОЙ";

    var del = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1671937317.center > div");

    var video = document.createElement("iframe");
    video.width="634";
    video.height="358";

    document.getElementsByClassName("jsx-1671937317 lottie")[0].parentNode.removeChild(document.getElementsByClassName("jsx-1671937317 lottie")[0]);

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

function moveCanvases(){
    var nWindow = document.querySelector("#content");
    var nnWindow = document.getElementsByClassName("jsx-1307288772 core")[0];
    var drawContainer = document.getElementsByClassName("jsx-1562482592 drawingContainer")[0];
    var contCanvases = drawContainer.children;
    if (document.getElementsByClassName("jsx-1307288772 core")[0].getElementsByClassName("jsx-1562482592 drawingContainer").length > 0){
        drawContainer.parentNode.removeChild(drawContainer);
        drawContainer.style.position="absolute";
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
        whiteZone.style.zIndex=1;
        whiteZone.style.backgroundImage=document.getElementsByClassName("jsx-1307288772 core")[0].style.backgroundImage;
        nWindow.appendChild(whiteZone);
        nWindow.appendChild(drawContainer);
    } else {
        for (let i=0; i<contCanvases.length; i++){
            contCanvases[i].style.width=`758px`;
            contCanvases[i].style.height=`424px`;
        }
        document.getElementsByClassName("class100")[0].parentNode.removeChild(document.getElementsByClassName("class100")[0]);
        nWindow.removeChild(drawContainer);
        nnWindow.appendChild(drawContainer);
    }
}

//window.oncontextmenu=()=>{
//    moveCanvases();
//}

//Я и так знаю что делает эта функция, а значит это читает кто-то другой
window.addEventListener('resize', function(event){
    var drawContainer = document.getElementsByClassName("jsx-1562482592 drawingContainer")[0];
    if (drawContainer){
        var anCanvases = drawContainer.children;
        var newArray = [].slice.call(anCanvases);
        newArray.push(document.getElementsByClassName("class100")[0]);

        if (document.getElementsByClassName("jsx-1307288772 core")[0].getElementsByClassName("jsx-1562482592 drawingContainer").length == 0){
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

function dialogWindow(title, text){
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

        let colorInput1 = document.getElementsByClassName("color-input1")[0];
        let colorInput2 = document.getElementsByClassName("color-input2")[0];
        let colorInput3 = document.getElementsByClassName("color-input3")[0];
        let colorInput4 = document.getElementsByClassName("color-input4")[0];
        let degRange1 = document.getElementsByClassName("deg-input")[0];
        let percentRange1 = document.getElementsByClassName("prec-input1")[0];
        let percentRange2 = document.getElementsByClassName("prec-input2")[0];
        let linkInput1 = document.getElementsByClassName("link-input")[0];
        let linkInput2 = document.getElementsByClassName("link-input-2")[0];
        let opacity1 = document.getElementsByClassName("opacity1")[0];
        let opacity2 = document.getElementsByClassName("opacity2")[0];

        colorInput1.value="#7213e7";
        colorInput2.value="#c8435e";
        colorInput3.value="#000000";
        colorInput4.value="#000000";
        degRange1.value=209;
        percentRange1.value=22;
        percentRange2.value=85;
        linkInput1.value="";
        linkInput2.value="";
        opacity1.value=0;
        opacity2.value=0;

        styleUpdate();

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
    noButton.onclick=function(){d.parentNode.removeChild(d);};
    buttonBox.appendChild(noButton);
}

var proz = 0;

function asyncSpace(){
    var items = document.getElementsByClassName("jsx-4074752268 item");
    for (let i=0; i<items.length; i++){
        let canv = items[i].getElementsByTagName("canvas")[0];
        if (canv == undefined){
            var sp = items[i].getElementsByTagName("span");
            if (blackList.indexOf(sp[1].innerText.toUpperCase()) != -1 && sp[1].innerText!="CENSORED"){
                let event = Event ('click', { bubbles: true, cancelable: true});
                items[i].dispatchEvent(event);
            }
        }
    }
}

function decToHex(n){return Number(n).toString(16);}

function styleUpdate(){try{
    console.log("double")
    let colorInput1 = document.getElementsByClassName("color-input1")[0];
    let colorInput2 = document.getElementsByClassName("color-input2")[0];
    let colorInput3 = document.getElementsByClassName("color-input3")[0];
    let colorInput4 = document.getElementsByClassName("color-input4")[0];
    let degRange1 = document.getElementsByClassName("deg-input")[0];
    let percentRange1 = document.getElementsByClassName("prec-input1")[0];
    let percentRange2 = document.getElementsByClassName("prec-input2")[0];
    let linkInput1 = document.getElementsByClassName("link-input")[0];
    let linkInput2 = document.getElementsByClassName("link-input-2")[0];
    let opacity1 = document.getElementsByClassName("opacity1")[0];
    let opacity2 = document.getElementsByClassName("opacity2")[0];

    var test = getCookieDict();
    if (test.colorInput1 == undefined){
        console.log(test.colorInput1, test);
        colorInput1.value="#7213e7";
        colorInput2.value="#c8435e";
        colorInput3.value="#000000";
        colorInput4.value="#000000";
        degRange1.value="209";
        percentRange1.value="22";
        percentRange2.value="85";
        linkInput1.value="";
        linkInput2.value="";
        opacity1.value=0;
        opacity2.value=0;
    }


    colorInput1.style.backgroundColor=colorInput1.value;
    colorInput2.style.backgroundColor=colorInput2.value;
    colorInput3.style.backgroundColor=colorInput3.value;
    colorInput4.style.backgroundColor=colorInput4.value;

    var p1 = decToHex(Number(opacity1.value));
    if (p1.length == 1){p1="0"+p1;}
    document.getElementsByClassName("jsx-2562723607")[0].style.backgroundColor=colorInput3.value+p1;
    var p2 = decToHex(Number(opacity2.value));
    if (p2.length == 1){p2="0"+p2;}

    document.getElementsByClassName("jsx-2562723607")[1].getElementsByTagName("div")[0].style.backgroundColor=colorInput4.value+p2;
    document.getElementsByClassName("jsx-2562723607")[1].getElementsByTagName("div")[0].style.borderRadius="10px";


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.querySelector("body").style.backgroundImage=`linear-gradient(${degRange1.value}deg, ${colorInput1.value} ${percentRange1.value}%, ${colorInput2.value} ${percentRange2.value}%)`;
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (linkInput1.value != ""){
        document.querySelector("#__next").style.backgroundImage=`url(${linkInput1.value})`;
    } else {document.querySelector("#__next").style.backgroundImage=`url(https://garticphone.com/images/textura.png)`;}
    //////////////////////////////////////////////////////////////////////////////////////
    document.getElementsByClassName("jsx-2562723607")[1].style.backgroundImage=`url(${linkInput2.value})`;
    document.getElementsByClassName("jsx-2562723607")[1].style.border="none";

    if (linkInput2.value == ""){
        document.getElementsByClassName("jsx-2562723607")[1].style.border="";
    }

    document.getElementsByClassName("jsx-2562723607")[1].style.borderRadius="10px";
    document.getElementsByClassName("jsx-2562723607")[1].style.backgroundSize="cover";
    document.getElementsByClassName("jsx-2562723607")[1].style.backgroundPosition="center";
    document.getElementsByClassName("jsx-2562723607")[1].style.backgroundRepeat="no-repeat";
    //////////////////////////////////////////////////////////////////////////////////////
    var arr = [
        `colorInput1=${colorInput1.value};`,
        `colorInput2=${colorInput2.value};`,
        `colorInput3=${colorInput3.value};`,
        `colorInput4=${colorInput4.value};`,
        `degRange1=${degRange1.value};`,
        `precentRange1=${percentRange1.value};`,
        `precentRange2=${percentRange2.value};`,
        `linkInput1=${linkInput1.value};`,
        `linkInput2=${linkInput2.value};`,
        `opacity1=${opacity1.value};`,
        `opacity2=${opacity2.value};`
    ];

    arr.forEach(function(item, index, array){
       document.cookie = item + " expires=Tue, 19 Jan 2038 03:14:07 GMT";
    })
} catch (e) {setTimeout(styleUpdate, 100);}
}

function mainMenuTitle(){
    if (document.getElementsByClassName("title") != []){
        var title = document.createElement("div");
        title.classList.add("title");
        title.innerText=`GarticMode By Doctor Death D. Drac v${VERSION}`;
        title.style.backgroundColor="rgba(0,0,0, 0.5)";
        title.style.borderRadius="0px 0px 0px 5px";
        title.style.position="absolute";
        title.style.animation="10s linear 0s infinite normal none running rainbow";
        title.style.right="0px";
        title.style.fontSize="100%";
        title.style.heigth="auto";
        title.style.width="auto";
        title.style.fontFamily="Black";
        title.style.padding="1px 5px 1px 10px";
        //title.style.border="2px solid red";
        document.querySelector("#content").appendChild(title);
        title.onclick=()=>{ window.open("https://telegra.ph/GarticMod---Mod-dlya-igry-garticphonecom-05-18", '_blank'); };
        title.style.cursor="pointer";
        title.style.borderBlockStart="none";
        title.style.borderRight="hidden";
    }
}

var globalScale;

document.querySelector("body").style.overflow="hidden";

function backgroundUpdate(){
    let inputLink = document.getElementsByClassName("urlbg")[0];
    let degInput = document.getElementsByClassName("deginput")[0];
    let sizeInput = document.getElementsByClassName("sizeinput")[0];
    let xInput = document.getElementsByClassName("xinput")[0];
    let yInput = document.getElementsByClassName("yinput")[0];;
    let curBgStyle = document.getElementsByClassName("imgChange")[0];
    curBgStyle.innerText = `.newdiv::before {content: ''; position: absolute; width: 200%; height: 200%; top: ${yInput.value}%; left: ${xInput.value}%; z-index: -1; background: url(${inputLink.value}) 0 0 no-repeat; -webkit-transform: rotate(${degInput.value}deg); -moz-transform: rotate(${degInput.value}deg); -ms-transform: rotate(${degInput.value}deg); -o-transform: rotate(${degInput.value}deg); transform: rotate(${degInput.value}deg); background-position: center; background-size: ${sizeInput.value}%;}`;
}

function updateMirrorLine(){
    var xInput = document.getElementsByClassName("xmirror")[0];
    var yInput = document.getElementsByClassName("ymirror")[0];
    var degInput = document.getElementsByClassName("degmirror")[0];
    var middleCanvas = document.getElementsByClassName("mirror-canvas")[0];
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
    var middleCanvas = document.getElementsByClassName("mirror-canvas")[0];
    var context = middleCanvas.getContext("2d");
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, middleCanvas.width, middleCanvas.height);
    context.restore();
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
        rightPannel.style.right="0px";
    }

    rightPannel.onmouseleave=function(){
        backgroundMenuKey=false;
        setTimeout(()=>{
            if (!backgroundMenuKey && document.getElementsByClassName("miror sel").length == 0){
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
//////////////////////////////////////////////////////////////////
    var warningWindow = document.createElement('div');
    warningWindow.style.width='200px';
    warningWindow.style.height='auto';
    //warningWindow.innerText="Фикс заливки";
    warningWindow.style.background='rgba(255, 255, 255, 0.13)';
    warningWindow.style.borderRadius="10px";
    //textWindow.style.position="absolute";
    //textWindow2.style.transform="translateY(-134%)";
    //textWindow.style.position="fixed";
    warningWindow.style.border="3px solid rgba(255, 255, 255, 0.5)";
    warningWindow.style.margin="10px 10px 10px 50px";
    warningWindow.style.letterSpacing="1px";
    warningWindow.style.size="18px";
    warningWindow.style.padding="5px 0px";

    var fillLabel = document.createElement("div");
    fillLabel.innerText="Фикс заливки";
    fillLabel.style.color="white";
    fillLabel.style.fontFamily="Black";
    fillLabel.style.textAlign="left";
    fillLabel.style.lineHeight="15px";
    fillLabel.style.margin="0px 0px 10px 5px";
    warningWindow.appendChild(fillLabel);

    var fillSwitch = document.createElement("div");
    fillSwitch.style.flex="1 1 0%";
    fillSwitch.style.alignSelf="stretch";
    fillSwitch.style.position="relative";
    fillSwitch.style.backgroundColor="transparent";
    fillSwitch.style.border="2px solid rgba(255, 255, 255, 0.6)";
    fillSwitch.style. borderRadius="8px";
    fillSwitch.style.display="flex";
    fillSwitch.style.margin="5px";

    var onFill = document.createElement("input");
    onFill.classList.add("fi");
    onFill.for="narration_1";
    onFill.type = "radio";
    onFill.style.position= "absolute";
    onFill.style.overflow="hidden";
    onFill.style.display="none";

    var onFillLabel = document.createElement("label");
    onFillLabel.innerText = "ВКЛ";
    onFill.checked = false;
    onFillLabel.style.cursor="pointer";
    onFillLabel.style.flex="1 1 0%";
    onFillLabel.style.margin="2px";
    onFillLabel.style.display="flex";
    onFillLabel.style.webkitBoxAlign="center";
    onFillLabel.style.alignItems="center";
    onFillLabel.style.webkitBoxPack="center";
    onFillLabel.style.justifyContent="center";
    onFillLabel.style.fontFamily="Black";
    onFillLabel.style.fontSize="18px";
    onFillLabel.style.color="rgba(255, 255, 255, 0.7)";
    onFillLabel.style.borderRadius="5px";
    onFillLabel.style.transition="all 0.1s ease-in-out 0s";
    onFillLabel.style.padding="10px"
    onFillLabel.onclick=()=>{
        onFill.checked = true;
        offFill.checked = false;
    };

    var offFill = document.createElement("input");
    offFill.classList.add("fi");
    offFill.type = "radio";
    offFill.for="narration_0";
    offFill.checked = true;
    offFill.style.position= "absolute";
    offFill.style.overflow="hidden";
    offFill.style.display="none";

    var offFillLabel = document.createElement("label");
    offFillLabel.innerText = "ВЫКЛ";
    offFillLabel.style.cursor="pointer";
    offFillLabel.style.flex="1 1 0%";
    offFillLabel.style.margin="2px";
    offFillLabel.style.display="flex";
    offFillLabel.style.webkitBoxAlign="center";
    offFillLabel.style.alignItems="center";
    offFillLabel.style.webkitBoxPack="center";
    offFillLabel.style.justifyContent="center";
    offFillLabel.style.fontFamily="Black";
    offFillLabel.style.fontSize="18px";
    offFillLabel.style.color="rgba(255, 255, 255, 0.7)";
    offFillLabel.style.borderRadius="5px";
    offFillLabel.style.transition="all 0.1s ease-in-out 0s";
    offFillLabel.style.padding="10px"
    offFillLabel.onclick=()=>{
        offFill.checked = true;
        onFill.checked = false;
    };

    var fillWarning = document.createElement("div");
    fillWarning.innerText="Данный фикс убирает криво залитые области, но это занимает некоторое время, также плохо работает с прозрачностью";
    fillWarning.style.color="white";
    fillWarning.style.fontFamily="Black";
    fillWarning.style.textAlign="left";
    fillWarning.style.lineHeight="15px";
    fillWarning.style.textAlign="left";
    fillWarning.style.margin="0px 0px 10px 5px";

    fillSwitch.appendChild(onFill);
    fillSwitch.appendChild(onFillLabel);
    fillSwitch.appendChild(offFill);
    fillSwitch.appendChild(offFillLabel);
    warningWindow.appendChild(fillSwitch);
    warningWindow.appendChild(fillWarning);
    rightPannel.appendChild(warningWindow);

//////////////////////////////////////////////////////////////////

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
        if (document.getElementsByClassName("miror sel act1").length == 0){
            document.getElementsByClassName("miror")[0].click();
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

function creatColorPull(){
    if (document.querySelector("#content > div:nth-child(2)") == undefined && document.isTrusted){

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
        textWindow2.style.height="115px";
        textWindow2.style.padding="5px 0px 12px";
        textWindow2.style.background='rgba(255, 255, 255, 0.13)';
        textWindow2.style.borderRadius="10px";
        //textWindow.style.position="absolute";
        //textWindow2.style.transform="translateY(-134%)";
        //textWindow.style.position="fixed";
        textWindow2.style.border="3px rgba(255,255,255, 0.5) solid";
        textWindow2.style.color="#ffffff";
        textWindow2.style.fontFamily="Black";
        textWindow2.style.textAlign="center";
        textWindow2.innerText="Присоединятесь к нашему русскому сообществу в дискорде!\n\n";
        textWindow2.style.margin="0px 10px 10px 10px";
        textWindow2.style.letterSpacing="1px";
        textWindow2.style.size="18px";
        textWindow2.style.lineHeight="18px";
        leftPannel.appendChild(textWindow2);

        var dsLink = document.createElement('a');
        dsLink.innerText="Gartic Phone Ru";
        dsLink.href="https://bit.ly/3uZqiG7";
        dsLink.style.opacity=1;
        dsLink.style.fontSize="20px"
        dsLink.style.textDecoration="none";
        dsLink.onclick=()=>{ window.open("https://bit.ly/3uZqiG7", '_blank'); }
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

        var textWindow = document.createElement('div');
        textWindow.style.width='200px';
        textWindow.style.height='auto';
        textWindow.style.background='rgba(255, 255, 255, 0.13)';
        textWindow.style.borderRadius="10px";
        //textWindow.style.position="absolute";
        //textWindow.style.transform="translateY(170%)";
        //textWindow.style.position="fixed";
        textWindow.style.border="3px rgba(255,255,255, 0.5) solid";
        textWindow.style.color="#ffffff";
        textWindow.style.fontFamily="Black";
        textWindow.style.textAlign="center";
        textWindow.innerText="По всем вопросам и предложениям обращайтесь ко мне:\n";
        textWindow.style.margin="10px";
        textWindow.style.letterSpacing="1px";
        textWindow.style.size="18px";
        textWindow.style.lineHeight="18px";
        textWindow.style.padding="5px 0px 0px 0px";
        leftPannel.appendChild(textWindow);

        var tgLink = document.createElement('div');
        tgLink.innerText="TELEGRAM";
        tgLink.href="https://t.me/DoctorDeathDDracula";
        tgLink.style.opacity=1;
        tgLink.style.fontSize="20px"
        tgLink.style.textDecoration="none";
        tgLink.onclick=()=>{ window.open("https://t.me/DoctorDeathDDracula", '_blank'); }
        tgLink.style.border="2px solid";
        tgLink.style.padding="9px 0px 9px 0px";
        tgLink.style.borderRadius="5px";
        tgLink.style.backgroundColor="rgb(43, 162, 223)";
        tgLink.style.color="white";
        tgLink.style.margin="5px";
        tgLink.style.cursor="pointer";
        textWindow.appendChild(tgLink);

        var myDsLink = document.createElement('div');
        myDsLink.innerText="DISCORD";
        myDsLink.href="https://discord.gg/eSZyC9JeAF";
        myDsLink.style.opacity=1;
        myDsLink.style.fontSize="20px"
        myDsLink.style.textDecoration="none";
        myDsLink.onclick=()=>{ window.open("https://discord.gg/eSZyC9JeAF", '_blank'); }
        myDsLink.style.border="2px solid";
        myDsLink.style.padding="9px 0px 9px 0px";
        myDsLink.style.borderRadius="5px";
        myDsLink.style.backgroundColor="rgb(138, 155, 213)";
        myDsLink.style.color="white";
        myDsLink.style.margin="10px 5px 6px 5px";
        myDsLink.style.cursor="pointer";
        textWindow.appendChild(myDsLink);

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
        colorInput1.value=`${cookieDict.colorInput1}`;
        colorInput1.oninput=function(){styleUpdate();}
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
        colorInput2.value=`${cookieDict.colorInput2}`;
        colorInput2.oninput=function(){styleUpdate();}
        d.appendChild(colorInput2);

        var degRange1 = document.createElement('input');
        degRange1.classList.add("deg-input");
        degRange1.type = "range";
        degRange1.min = 0;
        degRange1.max = 360;
        degRange1.step = 1;
        //degRange1.value = 200;
        degRange1.value=`${cookieDict.degRange1}`;
        degRange1.style.margin="10px 5px";
        degRange1.style.width="190px";
        degRange1.style.height="4px";
        //degRange1.style.heigt="15px";
        degRange1.style.borderRadius="10px";
        degRange1.oninput=()=>{styleUpdate();};
        d.appendChild(degRange1);

        var percentRange = document.createElement('input');
        percentRange.classList.add("prec-input1");
        percentRange.type = "range";
        percentRange.min = 0;
        percentRange.max = 100;
        percentRange.step = 1;
        //percentRange.value = 0;
        percentRange.value = `${cookieDict.precentRange1}`;
        percentRange.style.width="190px";
        //percentRange.style.heigt="15px";
        percentRange.style.borderRadius="10px";
        percentRange.style.margin="10px 5px";
        percentRange.style.height="4px";
        percentRange.oninput=()=>{styleUpdate();};
        d.appendChild(percentRange);

        var percentRange1 = document.createElement('input');
        percentRange1.classList.add("prec-input2");
        percentRange1.type = "range";
        percentRange1.min = 0;
        percentRange1.max = 100;
        percentRange1.step = 1;
        //percentRange1.value = 85;
        percentRange1.value = `${cookieDict.precentRange2}`;
        percentRange1.style.margin="10px 5px";
        percentRange1.style.width="190px";
        //percentRange1.style.heigt="15px";
        percentRange1.style.borderRadius="10px";
        percentRange1.style.height="4px";
        percentRange1.oninput=()=>{styleUpdate();};
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
        colorInput3.value=`${cookieDict.colorInput3}`;
        colorInput3.style.backgroundColor=colorInput3.value;
        colorInput3.oninput=function(){styleUpdate();}
        d.appendChild(colorInput3);

        var opacity1 = document.createElement('input');
        opacity1.classList.add("opacity1");
        opacity1.type = "range";
        opacity1.min = 0;
        opacity1.max = 255;
        opacity1.step = 1;
        //percentRange1.value = 85;
        opacity1.value = `${cookieDict.opacity1}`;
        opacity1.style.margin="10px 5px";
        opacity1.style.width="190px";
        //percentRange1.style.heigt="15px";
        opacity1.style.borderRadius="10px";
        opacity1.style.height="4px";
        opacity1.oninput=()=>{styleUpdate();};
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
        //colorInput2.value="#c8435e";
        colorInput4.value=`${cookieDict.colorInput4}`;
        colorInput4.style.backgroundColor=colorInput4.value;
        colorInput4.oninput=function(){styleUpdate();}
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
        opacity2.oninput=()=>{styleUpdate();};
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
        linkInput1.value=`${cookieDict.linkInput1}`;
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
        linkInput1.oninput=()=>{styleUpdate();};
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
        linkInput2.value=`${cookieDict.linkInput2}`;
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
        linkInput2.oninput=()=>{styleUpdate();};
        linkInput2.disabled=true;


        d.appendChild(linkTitle);
        d.appendChild(linkInput1);
        d.appendChild(linkTitle2);
        d.appendChild(linkInput2);

        var randomButton = document.createElement('button');
        randomButton.style.fontFamily="Black";
        randomButton.style.width="190px";
        randomButton.style.height="";
        randomButton.innerText="random";
        randomButton.style.fontSize="18px";
        randomButton.style.margin="5px 5px 10px 5px";
        randomButton.style.borderRadius="5px";
        randomButton.style.height="40px";
        randomButton.style.color="#301A6B";
        randomButton.style.borderColor="rgba(0, 0, 0, 0)";
        randomButton.style.boxShadow="0px 6px 0px 0px #301a6b";
        randomButton.onmouseenter=function(){
            randomButton.style.backgroundColor="#cbb6e9";
        };
        randomButton.onmouseleave=function(){
            randomButton.style.backgroundColor="#ffffff";
            randomButton.style.boxShadow="0px 6px 0px 0px";
            randomButton.style.margin="5px 5px 10px 5px";
        };
        randomButton.onmousedown=function(){
            randomButton.style.boxShadow="0px 2px 0px 0px";
            randomButton.style.margin="10px 5px 5px 5px";
        };
        randomButton.onmouseup=function(){
            randomButton.style.boxShadow="0px 6px 0px 0px";
            randomButton.style.margin="5px 5px 10px 5px";
        };

        randomButton.onclick=()=>{
            let colorInput1 = document.getElementsByClassName("color-input1")[0];
            let colorInput2 = document.getElementsByClassName("color-input2")[0];
            let colorInput3 = document.getElementsByClassName("color-input3")[0];
            let colorInput4 = document.getElementsByClassName("color-input4")[0];
            let degRange1 = document.getElementsByClassName("deg-input")[0];
            let percentRange1 = document.getElementsByClassName("prec-input1")[0];
            let percentRange2 = document.getElementsByClassName("prec-input2")[0];
            let linkInput1 = document.getElementsByClassName("link-input")[0];
            let linkInput2 = document.getElementsByClassName("link-input-2")[0];
            let opacity1 = document.getElementsByClassName("opacity1")[0];
            let opacity2 = document.getElementsByClassName("opacity2")[0];


            colorInput1.value=rgb2hex(getRandomInt(255), getRandomInt(255), getRandomInt(255));
            colorInput2.value=rgb2hex(getRandomInt(255), getRandomInt(255), getRandomInt(255));
            degRange1.value=getRandomInt(360);
            percentRange1.value=getRandomInt(100);
            percentRange2.value=getRandomInt(100);

            styleUpdate();
        }

        d.appendChild(randomButton);


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
            dialogWindow('reset all style settings?', 'All style settings will be reset to the default settings without the possibility of recovery');
        };

        d.appendChild(defaultButton);
        setTimeout(styleUpdate, 500);
    }
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

function flagsOff(){

    if (drawKey && document.getElementsByClassName("jsx-1553483530 pencil")[0]){
        document.getElementsByClassName("jsx-1553483530 pencil")[0].parentNode.removeChild(document.getElementsByClassName("jsx-1553483530 pencil")[0]);
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
    var smth = document.getElementsByClassName("jsx-1307288772 core")[0];
    var mCanvas = document.getElementsByClassName("jsx-3193114933 ")[0];
    smth.style.backgroundImage="url()";
    smth.style.cursor="pointer";
    smth.onclick = ()=>{
        if (mCanvas.style.opacity == "" || mCanvas.style.opacity == "1"){
            mCanvas.style.opacity = 0;
            smth.style.backgroundImage="url(https://images-ext-1.discordapp.net/external/4j6MAS7dlRdJgi1KciurS5q6zKYnF3KbhUzq9YP1xFs/https/static-prod.weplay.tv/2018-12-19/f2e481db44650925f3f5bb8a840181ab_large_cover.jpeg?width=1202&height=676)";
            smth.style.backgroundSize="100%";
        } else {
            mCanvas.style.opacity = 1;
            smth.style.backgroundImage="url()";
        }
    }

}

function offBgMenu(){
    var panel = document.getElementsByClassName("rightpanel");
    if (panel.length != 0){
        panel[0].parentNode.removeChild(panel[0]);
    }
}


function main(){
    if ((document.URL.indexOf("https://garticphone.com/") != -1 && document.URL.length == 26) && !menuKey){
        //Блок главного меню
        //alert("menuKey");
        window.onload=()=>{
        //    deletBanner();
            creatColorPull();
        }

        styleUpdate();

        setTimeout(deletBanner, 10);
        setTimeout(mainMenuEdits, 500);
        setTimeout(creatColorPull, 500);
        setTimeout(mainMenuTitle, 500);
        //setTimeout(console.clear, 2000);
        flagsOff();
        menuKey=true;
    }
    else if (document.URL.indexOf("?c=") != -1 && !menuLinkKey){
        //Блок главного меню при входе по ссылке
        //alert("menuLinkKey");
        //window.onload=()=>{
            //deletBanner();
            //creatColorPull();
            //styleUpdate();
        //}
        setTimeout(deletBanner, 10);
        setTimeout(mainMenuEdits, 500);
        setTimeout(creatColorPull, 500);
        setTimeout(styleUpdate, 500);
        setTimeout(mainMenuTitle, 500);
        //setTimeout(console.clear, 2000);
        flagsOff();
        menuLinkKey=true;
    }
    else if (document.URL.indexOf("draw") != -1 && !drawKey){
        //Блок рисования
        //alert("drawKey");
        //window.onload=()=>{
        //    styleUpdate();
        //    mainDrawFunc();
        //}
        createSizePull();
        setTimeout(mainDrawFunc, 500);
        setTimeout(styleUpdate, 500);

        //setTimeout(console.clear, 2000);
        //styleUpdate();
        //mainDrawFunc();
        flagsOff();
        drawKey=true;
    }
    else if (document.URL.indexOf("lobby") != -1 && !lobbyKey){
        //Блок лобби с игроками
        //alert("lobbyKey");
        //window.onload=()=>{styleUpdate();}
        setTimeout(styleUpdate, 500);
        setTimeout(VIP, 200);
        //setTimeout(console.clear, 2000);
        //styleUpdate();
        //VIP();
        flagsOff();
        lobbyKey=true;
    }
    else if (document.URL.indexOf("book") != -1 && !bookKey){
        //Блок просмотра результатов
        //alert("bookKey");
        //window.onload=()=>{styleUpdate();}
        setTimeout(styleUpdate, 500);
        if (document.getElementsByClassName("zoomC").length){
            document.getElementsByClassName("zoomC")[0].parentNode.removeChild(document.getElementsByClassName("zoomC")[0]);
        }
        //styleUpdate();
        offBgMenu();
        //setTimeout(console.clear, 2000);
        VIP();
        flagsOff();
        bookKey=true;
    }
    else if (document.URL.indexOf("start") != -1 && !startKey){
        //Блок ввода первой истории
        //alert("startKey");
        //window.onload=()=>{
        //    styleUpdate();
        //    extendTextInput();
        //}
        setTimeout(styleUpdate, 500);
        //setTimeout(console.clear, 2000);

        //styleUpdate();
        setTimeout(extendTextInput , 500);
        flagsOff();
        startKey=true;
    }
    else if (document.URL.indexOf("write") != -1 && !writeKey){
        //Блок названия картинки
        //window.onload=()=>{
        //    extendTextInput();
        //    styleUpdate();
        //}
        offBgMenu();
        setTimeout(styleUpdate, 500);
        setTimeout(extendTextInput, 200);
        //setTimeout(console.clear, 2000);
        //alert("writeKey");
        if (document.getElementsByClassName("zoomC").length){
            document.getElementsByClassName("zoomC")[0].parentNode.removeChild(document.getElementsByClassName("zoomC")[0]);
        }
        //extendTextInput();
        //styleUpdate();
        flagsOff();
        writeKey=true;
        setTimeout(memoryFunc, 300);
    }
    else if (document.URL.indexOf("memory") != -1 && !memoryKey){
        //Блок перерисовки картинки
        //alert("memoryKey");
        //window.onload=()=>{styleUpdate();}
        offBgMenu();
        setTimeout(styleUpdate, 500);
        if (document.getElementsByClassName("zoomC").length){
            document.getElementsByClassName("zoomC")[0].parentNode.removeChild(document.getElementsByClassName("zoomC")[0]);
        }
        //setTimeout(console.clear, 2000);
        setTimeout(memoryFunc, 300);
        styleUpdate();
        flagsOff();
        memoryKey=true;
    }
    else if (document.URL.indexOf("waiting") != -1 && !waitingKey){
        //alert("IN");

        //window.onload=()=>{
        //    styleUpdate();
        //    waitVideo();
        //}

        //styleUpdate();
        //waitVideo();

        setTimeout(styleUpdate, 500);
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
    var stop = setInterval(f1, 10);
    var start = setInterval(main, 1);
    var under = setInterval(asyncDraw, 0);
    var asyncDes = setInterval(asyncSpace, 0);
    var asyncTres = setInterval(asyncSlowSpace, 100);
}
