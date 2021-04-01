// ==UserScript==
// @name         GarticMode
// @description  Мой самый первый юзерскрипт
// @author       DoctorDeathDDracula
// @license      MIT
// @version      1.0
// @include      https://garticphone.com/*
// @grant        none
// @require      https://docs.opencv.org/4.0.1/opencv.js
// ==/UserScript==

//var cv = document.opencv;
//console.log(cv)

//////////////////////////////////////////////////////style///////////////////////////////////////////////
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

function sleep(millis) {
    var t = (new Date()).getTime();
    var i = 0;
    while (((new Date()).getTime() - t) < millis) {
        i++;
    }
}

function getPix(x, y, canvas){
    let ctx = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
    return ctx
}

function draw(x1, y1){
    var canvas = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core > div > canvas:nth-child(1)");
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

var canvas = document.createElement('canvas');

function globalDraw(){
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
                draw(x*5, y*5);
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
    var b = ["jsx-1217478847 ", "jsx-2571520253 "];
    b.forEach(function(item, i, arr){
        let canvases = document.getElementsByClassName(item);
        for (let i=0; i<canvases.length; i++){
            let nick = canvases[i].parentNode.parentNode.parentNode.getElementsByTagName("span")[0].innerText;
            canvases[i].style.cursor="pointer";
            canvases[i].parentNode.parentNode.parentNode.parentNode.style.transition="all 1s ease 0s";
            canvases[i].parentNode.parentNode.parentNode.parentNode.style.borderRadius="10px";
            canvases[i].onclick=()=>{
                let link = document.createElement('a');
                link.download = `${nick}.png`;
                link.href = canvases[i].toDataURL();
                link.click();
            }
            canvases[i].onmouseenter=()=>{
                canvases[i].parentNode.parentNode.parentNode.parentNode.style.backgroundColor="rgba(0,0,0,0.5)";
            }
            canvases[i].onmouseleave=()=>{
                canvases[i].parentNode.parentNode.parentNode.parentNode.style.backgroundColor="rgba(0,0,0,0)";
            }
        }
    })
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
    kok();
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

    //var border = document.querySelector("#content > div");
    //border.style.transform="scale(2)";

    //var banner = document.querySelector("#__next > div.jsx-4127328682.banner");

    //banner.parentNode.removeChild(banner)

    //document.body.style.backgroundImage=`linear-gradient(215deg, rgb(${MyVar1}, ${MyVar2}, ${MyVar3}) 0%, rgb(${MyVar3}, ${MyVar2}, ${MyVar1}) ${parseInt(i)}%)`;

    /*var input = document.querySelector("#content > div > div > div:nth-of-type(2) > div > input");
    input.value=color;

    $("#content>DIV>DIV>DIV:nth-of-type(2)>DIV>INPUT").trigger("change");
    $("#content>DIV>DIV>DIV:nth-of-type(2)>DIV>INPUT").change();
    $("#content>DIV>DIV>DIV:nth-of-type(2)>DIV>INPUT").val(color).change();
    $("#content>DIV>DIV>DIV:nth-of-type(2)>DIV>INPUT").text(color).change();
    $("#content>DIV>DIV>DIV:nth-of-type(2)>DIV>INPUT").html(color).change();
    console.log($("#content>DIV>DIV>DIV:nth-of-type(2)>DIV>INPUT"));

    var event = new Event('change', { bubbles: true, cancelable: true } );
    input.dispatchEvent(event);*/

    /*let canvas0 = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core > div > canvas:nth-child(1)");
    let event = new Event('mousedown', { bubbles: true, cancelable: true } );
    canvas0.dispatchEvent(event);

    canvas0 = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core > div > canvas:nth-child(1)");
    event = new Event('mouseup', { bubbles: true, cancelable: true } );
    canvas0.dispatchEvent(event);*/

    //let canvas1 = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core > div > canvas:nth-child(2)");
    //event = new Event('mouseup', { bubbles: true, cancelable: true } );
    //canvas1.dispatchEvent(event);

    //let canvas2 = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core > div > canvas.jsx-150592943");
    //event = new Event('mouseup', { bubbles: true, cancelable: true } );
    //canvas2.dispatchEvent(event);

    //canvas1 = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core > div > canvas:nth-child(2)");
    //event = new Event('mousedown', { bubbles: true, cancelable: true } );
    //canvas1.dispatchEvent(event);

    //canvas2 = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core > div > canvas.jsx-150592943");
    //event = new Event('mousedown', { bubbles: true, cancelable: true } );
    //canvas2.dispatchEvent(event);
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

function VIP(){
    var arr = document.getElementsByClassName("jsx-4216852870 jsx-2842824398 nick");
    for (let i=0; i<arr.length; i++){
        if (arr[i].innerText == "DOCTORDEATHDDRACULA "){
            //arr[i].style.background="linear-gradient(to right, red, yellow, green, cyan, blue, violet)";
            //arr[i].style.webkitTextFillColor="transparent";
            //arr[i].style.webkitBackgroundClip="text";
            arr[i].parentNode.title="Флекс"
            arr[i].href="https://t.me/DoctorDeathDDracula";
            arr[i].style.cursor="pointer";
            arr[i].onclick=()=>{ window.open("https://t.me/DoctorDeathDDracula", '_blank'); };
            arr[i].style.animation="rainbow 5s linear";
            arr[i].style.animationIterationCount="infinite";
            arr[i].style.opacity=1;
            arr[i].parentNode.style.backgroundColor="rgb(0, 0, 0)";
            arr[i].parentElement.style.border="2px rgb(255, 0, 0) solid";
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundImage="url(https://lh3.googleusercontent.com/LgF-bcC73DBytZ220ODGt2LuD1WJlK5y9UC4apQx75BUIQspyfrnnMtbxbQB57EFgFmbgOIgIg3Fuqw3XCOX=w1920-h964)"
            arr[i].parentElement.getElementsByTagName("span")[0].style.backgroundSize="110%";
        }
        else {}
    }
}

function extendTextInput() {
    var textInput = document.getElementsByClassName("jsx-856742297 ")[0];
    textInput.maxLength=70;
}

var num = 1
var Key = false
var minusActive = false;
var pipetKey = false;

function mainDrawFunc(){
    console.log(1);
    //Уберем изображение телефона
    //document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core")

    //Перемещение счетчика раундов
    var rounds_counter = document.querySelector("#content > div > div > div.jsx-2120888168.step");
    rounds_counter.style.top="100px";
    rounds_counter.style.left="960px";

    //Смещение инструментов ниже
    document.querySelector("#content > div > div > div.jsx-3659451671.tools").style.margin="60px 0px 0px 0px";

    //Изменение чувствительности ползунка прозрачности
    var g = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity > input")
    g.step="0.01";
    g.min="0";

    console.log(2);

    //Растяжение палитры так, чтобы поместились все цвета
    var palitra = document.querySelector("#content > div > div > div.jsx-3071142060.colors > div.jsx-3071142060");
    palitra.style.height="auto";

    //Выбираем объект цвета
    var nColor = document.querySelector("#content > div > div > div.jsx-3071142060.colors > div > div:nth-child(1)");

    //Очистка старой палитры
    while (palitra.firstChild.tagName != "INPUT") {
        palitra.removeChild(palitra.firstChild);
    }

    console.log(3);

    //Невозможность открыть контекстное меню на холсте
    document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core > div > canvas.jsx-150592943").oncontextmenu=function(){return false;};

    //Блок зума
    var scale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
    globalScale=Number(scale.split("(")[1].slice(0, -1));
    let supScale;
    let curScale;

    console.log(3.1);

    //Обработка клавиатуры
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            if (evt.key === "Escape" || evt.key === "Esc" || evt.keyCode === 27) {
                document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform=`scale(${globalScale})`;
                globalKey=false;
                minusButton.style.color="rgba(255, 142, 175, 0.6)";
                minusButton.style.backgroundColor="rgb(10, 10, 10, 0.3)";
                minusButton.style.cursor="auto";
            }
            if (evt.key === "UP" || evt.key === "up" || evt.keyCode === 38) {
                minusButton.style.cursor="pointer";
                minusButton.style.backgroundColor="rgb(100, 100, 100, 0.1)";
                minusButton.style.color="rgba(255, 142, 175, 0.6)";
                supScale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
                curScale=Number(supScale.split("(")[1].slice(0, -1));
                document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform=`scale(${curScale+0.1})`;
            }
            if (evt.key === "DOWN" || evt.key === "down" || evt.keyCode === 40) {
                supScale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
                curScale=Number(supScale.split("(")[1].slice(0, -1));
                if (curScale != globalScale){
                    document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform=`scale(${curScale-0.1})`;
                }
                supScale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
                curScale=Number(supScale.split("(")[1].slice(0, -1));
                if (curScale==globalScale) {
                    minusButton.style.color="rgba(255, 142, 175, 0.6)";
                    minusButton.style.backgroundColor="rgb(10, 10, 10, 0.3)";
                    minusButton.style.cursor="auto";
                };
            }
            if (evt.key === "0" || evt.keyCode === 48){
                var url = document.querySelector("#content > input[type=text]:nth-child(3)").value;

                var img = new Image();
                //const img = document.createElement('img');

                img.src = url;
                img.crossOrigin = "Anonymous";

                //var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                //
                canvas.width=192;
                canvas.height=110;

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


    //Копирование кнопки из инструментов в палитру
    let p = document.querySelector("#content > div > div > div.jsx-3659451671.tools > div > div.jsx-3659451671.tool.reb").cloneNode(true);
    let target = document.querySelector("#content > div > div > div.jsx-3071142060.colors > div.jsx-3071142060 > input");

    p.innerText="P";

    target.insertAdjacentElement('beforeBegin', p);
    target.insertAdjacentElement('beforeBegin', p.cloneNode(true));
    target.insertAdjacentElement('beforeBegin', p.cloneNode(true));


    //Создание пипетки
    var pipButton = document.createElement("button");
    pipButton.classList.add("newtoolz");
    pipButton.style.margin="0px 0px 0px";
    pipButton.style.lineHeight="46px";
    pipButton.style.fontSize="40px";
    pipButton.innerText="✐";

    pipButton.onclick=()=>{
        pipButton.classList.add("act");
    }

    target.insertAdjacentElement('beforeBegin', pipButton);

    document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-3659451671.tools > div").onclick=()=>{pipButton.classList.remove("act");}
    /////////////////////////////////////////////////

    var canada = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core > div > canvas:nth-child(1)");
    var mexico = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core > div > canvas:nth-child(3)");
    mexico.addEventListener('contextmenu', (e)=>{
        document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-3659451671.tools > div > div.jsx-3659451671.tool.undo").click();

        setTimeout(()=>{
        var rgba = canada.getContext('2d').getImageData(e.offsetX*2, e.offsetY*2, 1, 1).data;
        let r = rgba[0];
        let g = rgba[1];
        let b = rgba[2];
        let a = rgba[3];
        if (r == 0 && g == 0 && b == 0 && a == 0){r=255; g=255; b=255; a=255;}
        setColor(rgb2hex(r, g, b));
        setNess(a);
        }, 2)
    })

    /////////////////////////////////////////////////

    mexico.addEventListener('click', (e)=>{
        if (document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-3659451671.tools > div > div.jsx-3659451671.tool.fil").classList.indexOf("sel") != -1){
            document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-3659451671.tools > div > div.jsx-3659451671.tool.undo").click();
            sleep(10);
            let color = canada.getContext('2d').getImageData(e.offsetX*2, e.offsetY*2, 1, 1).data;

        }
    })

    /////////////////////////////////////////////////
    var random_color_btn = document.querySelector("#content > div > div > div.jsx-3071142060.colors > div > div:nth-child(3)");
    random_color_btn.onclick = function(){
        setColor(rgb2hex(getRandomInt(256), getRandomInt(256), getRandomInt(256)));
    }

    console.log(4);

    target = document.querySelector("#content > div > div > div.jsx-3071142060.colors > div.jsx-3071142060 > input");

    var color_list_str = ['(0, 0, 0)', '(34, 177, 76)', '(47, 253, 57)', '(51, 51, 51)', '(0, 81, 36)', '(74, 255, 169)', '(125, 125, 125)', '(255, 255, 125)', '(0, 9, 168)', '(175, 175, 175)', '(255, 242, 0)', '(0, 0, 255)', '(255, 255, 255)', '(255, 201, 14)', '(79, 83, 255)', '(90, 7, 12)', '(191, 191, 0)', '(87, 129, 215)', '(171, 14, 21)', '(119, 92, 0)', '(73, 189, 218)', '(255, 0, 0)', '(255, 210, 166)', '(153, 217, 234)', '(239, 71, 80)', '(254, 135, 48)', '(180, 3, 175)', '(245, 80, 127)', '(224, 96, 1)', '(163, 73, 164)', '(244, 128, 134)', '(80, 43, 18)', '(251, 30, 245)', '(249, 185, 188)', '(54, 29, 12)', '(253, 162, 251)'];
    var color_list = [[0, 0, 0], [34, 177, 76], [47, 253, 57], [51, 51, 51], [0, 81, 36], [74, 255, 169], [125, 125, 125], [255, 255, 125], [0, 9, 168], [175, 175, 175], [255, 242, 0], [0, 0, 255], [255, 255, 255], [255, 201, 14], [79, 83, 255], [90, 7, 12], [191, 191, 0],[87, 129, 215], [171, 14, 21], [119, 92, 0], [73, 189, 218], [255, 0, 0], [255, 210, 166], [153, 217, 234], [239, 71, 80], [254, 135, 48], [180, 3, 175], [245, 80, 127], [224, 96, 1], [163, 73, 164], [244, 128, 134], [80, 43, 18], [251, 30, 245], [249, 185, 188], [54, 29, 12], [253, 162, 251]]
    for (var i = 0; i < 36; i++){
        p = nColor.cloneNode(true);
        p.style.backgroundColor=`rgb${color_list_str[i]}`;
        target.insertAdjacentElement('beforeBegin', p);
        p.realcolor = color_list[i]
        p.addEventListener("click", function(event) {
            let cColor = event.path[0].realcolor;
            setColor(rgb2hex(cColor[0], cColor[1], cColor[2]));
            Key1=false;
        })
    }

    console.log(4.1)

    var toolBar = document.querySelector("#content > div > div > div.jsx-3659451671.tools > div");
    toolBar.style.margin="0px 0px -70px";
    // Создание минуса
    var minusButton = document.createElement("button");
    minusButton.style.display="flex";
    minusButton.style.lineHeight="42px";
    minusButton.style.justifyContent="center";
    minusButton.style.position="relative";
    minusButton.style.cursor="auto";
    minusButton.style.width="50px";
    minusButton.style.height="52px";
    minusButton.style.border="2px solid rgba(255, 142, 175, 0.6)";
    minusButton.style.borderRadius="5px";
    minusButton.style.margin="7px 0px 0px";
    minusButton.style.color="rgba(255, 142, 175, 0.6)";
    minusButton.innerText="-";
    minusButton.style.fontFamily="Black";
    minusButton.style.fontSize="60px";
    minusButton.style.backgroundColor="rgb(10, 10, 10, 0.3)";
    minusButton.onclick = function(){
       //zoom-=0.1;
       //document.body.style.zoom = zoom;
        supScale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
        curScale=Number(supScale.split("(")[1].slice(0, -1));
        if (curScale != globalScale){
            document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform=`scale(${curScale-0.1})`;
        }
        supScale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
        curScale=Number(supScale.split("(")[1].slice(0, -1));
        if (curScale==globalScale) {
            minusButton.style.color="rgba(255, 142, 175, 0.6)";
            minusButton.style.backgroundColor="rgb(10, 10, 10, 0.3)";
            minusButton.style.cursor="auto";
        };
    };

    minusButton.onmouseenter = function(){
        supScale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
        curScale=Number(supScale.split("(")[1].slice(0, -1));
        if (curScale != globalScale){
            minusButton.style.backgroundColor="rgb(255, 255, 255, 0.1)";
            minusButton.style.color="rgba(255, 140, 175, 1)";
        }
    };

    minusButton.onmouseleave = function(){
        supScale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
        curScale=Number(supScale.split("(")[1].slice(0, -1));
        if (curScale != globalScale){
            minusButton.style.backgroundColor="rgb(100, 100, 100, 0.1)";
            minusButton.style.color="rgba(255, 142, 175, 0.6)";
        }
    };

    minusButton.onmousedown = function(){
        supScale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
        curScale=Number(supScale.split("(")[1].slice(0, -1));
        if (curScale != globalScale){
            minusButton.style.backgroundColor="rgba(255, 255, 255, 0.4)";
            minusButton.style.color="rgba(255, 255, 255, 1)";
        }
    }

    minusButton.onmouseup = function(){
        supScale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
        curScale=Number(supScale.split("(")[1].slice(0, -1));
        if (curScale != globalScale){
        minusButton.style.backgroundColor="rgb(10, 10, 10, 0.3)";
        minusButton.style.color="rgba(255, 142, 175, 0.6)";
        }
    }


    toolBar.appendChild(minusButton);

    console.log(4.2);

    // Создание плюса
    var plusButton = document.createElement("button");
    plusButton.style.display="flex";
    plusButton.style.lineHeight="42px";
    plusButton.style.justifyContent="center";
    plusButton.style.position="relative";
    plusButton.style.cursor="pointer";
    plusButton.style.width="50px";
    plusButton.style.height="52px";
    plusButton.style.border="2px solid rgba(255, 142, 175, 0.6)";
    plusButton.style.borderRadius="5px";
    plusButton.style.margin="7px 0px 0px";
    plusButton.style.color="rgba(255, 142, 175, 0.6)";
    plusButton.innerText="+";
    plusButton.style.fontFamily="Black";
    plusButton.style.fontSize="60px";
    plusButton.style.backgroundColor="rgb(100, 100, 100, 0.1)";
    plusButton.onclick = function(){
        //zoom+=0.1;
        //document.body.style.zoom = zoom;
        minusButton.style.cursor="pointer";
        minusButton.style.backgroundColor="rgb(100, 100, 100, 0.1)";
        minusButton.style.color="rgba(255, 142, 175, 0.6)";
        supScale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform;
        curScale=Number(supScale.split("(")[1].slice(0, -1));
        document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform=`scale(${curScale+0.1})`;
    };

    plusButton.onmouseenter = function(){
        plusButton.style.backgroundColor="rgb(255, 255, 255, 0.1)";
        plusButton.style.color="rgba(255, 140, 175, 1)";
    };

    plusButton.onmouseleave = function(){
        plusButton.style.backgroundColor="rgb(100, 100, 100, 0.1)";
        plusButton.style.color="rgba(255, 142, 175, 0.6)";
    };

    plusButton.onmousedown = function(){
        plusButton.style.backgroundColor="rgba(255, 255, 255, 0.4)";
        plusButton.style.color="rgba(255, 255, 255, 1)";
    };

    plusButton.onmouseup = function(){
        plusButton.style.backgroundColor="rgb(255, 255, 255, 0.1)";
        plusButton.style.color="rgba(255, 140, 175, 1)";
    };

    toolBar.appendChild(plusButton);

    // Создание отмены
    var cancelButton = document.createElement("button");
    cancelButton.style.display="flex";
    cancelButton.style.lineHeight="42px";
    cancelButton.style.justifyContent="center";
    cancelButton.style.position="relative";
    cancelButton.style.cursor="pointer";
    cancelButton.style.width="108px";
    cancelButton.style.height="52px";
    cancelButton.style.border="2px solid rgba(255, 142, 175, 0.6)";
    cancelButton.style.borderRadius="5px";
    cancelButton.style.margin="7px 0px 0px";
    cancelButton.style.color="rgba(255, 142, 175, 0.6)";
    cancelButton.innerText="cancel";
    cancelButton.style.fontFamily="Black";
    cancelButton.style.fontSize="30px";
    cancelButton.title="Отменяет изменения размера окна, также работает если нажать на ESCAPE";
    cancelButton.style.backgroundColor="rgb(100, 100, 100, 0.1)";
    cancelButton.onclick = function(){
        //zoom=1;
        //document.body.style.zoom = zoom;
        document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done").style.transform=`scale(${globalScale})`;
        globalKey=false;
        minusButton.style.color="rgba(255, 142, 175, 0.6)";
        minusButton.style.backgroundColor="rgb(10, 10, 10, 0.3)";
        minusButton.style.cursor="auto";
    };

    cancelButton.onmouseenter = function(){
        cancelButton.style.backgroundColor="rgb(255, 255, 255, 0.1)";
        cancelButton.style.color="rgba(255, 140, 175, 1)";
    };

    cancelButton.onmouseleave = function(){
        cancelButton.style.backgroundColor="rgb(100, 100, 100, 0.1)";
        cancelButton.style.color="rgba(255, 142, 175, 0.6)";
    };

    cancelButton.onmousedown = function(){
        cancelButton.style.backgroundColor="rgba(255, 255, 255, 0.4)";
        cancelButton.style.color="rgba(255, 255, 255, 1)";
    };

    cancelButton.onmouseup = function(){
        cancelButton.style.backgroundColor="rgb(255, 255, 255, 0.1)";
        cancelButton.style.color="rgba(255, 140, 175, 1)";
    };

    toolBar.appendChild(cancelButton);

    console.log(5);

    document.querySelector("#content > div > div > div.jsx-3659451671.tools > div").style.height="auto";

    /*var toolsBar = document.querySelector("#content > div > div > div.jsx-3659451671.tools > div");
    toolsBar.appendChild(document.querySelector("#content > div > div > div.jsx-3659451671.tools > div > div.jsx-3659451671.tool.reb").cloneNode(true));
    toolsBar.style.height = "auto";*/

    //Удаление лого
    let logo = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.header > div");
    logo.parentNode.removeChild(logo);

    //Изменение местоположение тайтлов
    document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.header > h4").style.margin="20px 0px 10px";

    //Кнопка скачивания
    var upper = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.header");
    var downloadButton = document.createElement("button");
    downloadButton.style.position="absolute";
    downloadButton.style.right="715px";
    downloadButton.style.top="8px";
    downloadButton.style.width="36px";
    downloadButton.style.height="30px";
    downloadButton.style.borderWidth="initial";
    downloadButton.style.borderStyle="none";
    downloadButton.style.borderColor="initial";
    downloadButton.style.borderImage="initial";
    downloadButton.style.background="url(https://www.iconsdb.com/icons/preview/white/download-2-xxl.png) 0% 0% / contain no-repeat";
    downloadButton.style.cursor="pointer";
    downloadButton.onclick=function(){
        var link = document.createElement('a');
        link.download = 'filename.png';
        link.href = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core > div > canvas:nth-child(1)").toDataURL();
        link.click();
    };
    upper.appendChild(downloadButton);

    //Создание текстбокса для ссылки
    var input = document.createElement('input');
    input.type = "text";
    input.style.position="absolute";
    input.style.right="0";
    input.style.bottom="0";
    input.style.width="200px";
    input.title="Вставьте сюда любую ссылку на картинку";

    document.querySelector("#content").appendChild(input);
    input.addEventListener("input", function(event) {
        document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core").style.backgroundImage=`url("${input.value}")`;
    })

    //Трекбар для изменение размера картинки
    var trackBar = document.createElement('input');
    trackBar.type = "range";
    trackBar.style.position="absolute";
    trackBar.style.right="5px";
    trackBar.style.bottom="30px";
    trackBar.min="1";
    trackBar.max="400";
    trackBar.step="1";
    trackBar.value="200";
    //trackBar.style.margin="2px 190px";
    trackBar.style.width="200px"
    document.querySelector("#content").appendChild(trackBar);
    trackBar.addEventListener("input", function(event) {
        document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core").style.backgroundSize=`${trackBar.value}%`;
    })

    //Трекбар позиции x
    var trackBarX = document.createElement('input');
    trackBarX.type = "range";
    trackBarX.style.position="absolute";
    trackBarX.style.right="5px";
    trackBarX.style.bottom="60px";
    trackBarX.min="1";
    trackBarX.max="400";
    trackBarX.step="1";
    trackBarX.value="200";
    //trackBarX.style.margin="2px 190px";
    trackBarX.style.width="200px"
    document.querySelector("#content").appendChild(trackBarX);
    trackBarX.addEventListener("input", function(event) {
        document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core").style.backgroundPosition=`${50+Number(trackBarX.value)-200}% ${50+Number(trackBarY.value)-200}%`;
    })

    //Трекбар позиции y
    var trackBarY = document.createElement('input');
    trackBarY.type = "range";
    trackBarY.style.position="absolute";
    trackBarY.style.right="5px";
    trackBarY.style.bottom="90px";
    trackBarY.min="1";
    trackBarY.max="400";
    trackBarY.step="1";
    trackBarY.value="200";
    //trackBarX.style.margin="2px 190px";
    trackBarY.style.width="200px"
    document.querySelector("#content").appendChild(trackBarY);

    trackBarY.addEventListener("input", function(event) {
        document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core").style.backgroundPosition=`${50+Number(trackBarX.value)-200}% ${50+Number(trackBarY.value)-200}%`;
    })

    //Убираем лишнее с хослта
    var hos = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book > div.jsx-1307288772.core");
    hos.style.boxShadow="none";
    hos.style.margin="0px 6px 6px";

    //Book edit
    var book = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1307288772.book");
    book.style.height="538px";
    book.style.borderRadius="0px";

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

    //трекбар прозрачности
    var widthinput = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity > input");
    var ness = document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity");
    var nesstext = document.createElement("input");
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
    ness.appendChild(nesstext);

    //Ограничение инпута прозрачности
    nesstext.oninput = function(){
        if (this.value>100){this.value=100;}
        if (this.value=="00" || this.value=="000"){this.value=0;}
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
    };

    widthinput.addEventListener("input", function(event) {
        nesstext.value =`${Math.round(widthinput.value*100)}`;
    })

    nesstext.addEventListener("input", function(event) {
        if (nesstext.value==""){widthinput.value=0}else{
            setNess(nesstext.value);
        }
    })

    document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity").style.padding="0px 10px";
    document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity > span:nth-child(1)").style.margin = "5px";
    document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity > span:nth-child(3)").style.margin = "5px";

    //Изменение цвета панелей
    function interColor() {
        let newColor = document.querySelector("#content > div > div > div.jsx-3071142060.colors > div > input").value;
        var toolsList = document.getElementsByClassName("jsx-3659451671 tool");
        for (var i = 0; i < toolsList.length; ++i) {
            toolsList[i].style.border=`2px solid ${newColor}`;
        }
        document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div:nth-child(1)").style.border=`2px solid ${newColor}`;
        document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div:nth-child(2)").style.border=`2px solid ${newColor}`;
        document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity > span:nth-child(3)").style.backgroundColor=newColor;
        document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity > span:nth-child(1)").style.backgroundColor=newColor;
        document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div > div.jsx-340028725.bxopacity > span:nth-child(1)").style.opacity="0.34"
        document.querySelector("#content > div > div > div.jsx-3071142060.colors > div").style.border=`2px solid ${newColor}`;
        document.querySelector("#content > div > div > div.jsx-3659451671.tools > div").style.border=`2px solid ${newColor}`;
        document.querySelector("#content > div > div > div.jsx-1562482592.center > div.jsx-1562482592.bottom > div").style.border=`2px solid ${newColor}`;
        minusButton.style.border=`2px solid ${newColor}`;
        plusButton.style.border=`2px solid ${newColor}`;
        cancelButton.style.border=`2px solid ${newColor}`;
    }

    setTimeout(interColor, 100);

    //Изменение дизайна в соответствии с палитрой
    palitra.addEventListener('input', function (e) {
        interColor();
    });

    debugName();
}

function waitVideo(){
    document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1671937317.center > p").innerText="ЖДЕМ ОКОНЧАНИЯ ИГРЫ, А ПОКА ЧТО МОЖЕТЕ НАСЛАДИТЬСЯ ПРИЯТНОЙ МУЗЫКОЙ";

    var del = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1671937317.center > div");
    var wind = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen.fade-enter-done > div > div.jsx-1671937317.center");
    wind.removeChild(del);

    var video = document.createElement("iframe");
    video.width="634";
    video.height="358";


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

window.addEventListener('resize', function(event){
    setTimeout(()=>{
        var scale = document.querySelector("#content > div.jsx-2562723607.jsx-3822683434.screen").style.transform;
        globalScale=Number(scale.split("(")[1].slice(0, -1));
    }, 100)

});


function asyncDraw(){
    if (globalY < 128 && globalKey){
        if (globalX < 192){
            globalX++;
            let curPix = getPix(globalX, globalY, canvas);
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
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=color]:nth-child(1)").value="#7213e7";
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=color]:nth-child(2)").value="#c8435e";
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(3)").value="209";
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(4)").value="22";
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(5)").value="85";
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=text]:nth-child(7)").value="";
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
    //lol
}

function styleUpdate(){
    var test = getCookieDict();
    if (test.colorInput1 == undefined){
        console.log(test.colorInput1, test);
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=color]:nth-child(1)").value="#7213e7";
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=color]:nth-child(2)").value="#c8435e";
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(3)").value="209";
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(4)").value="22";
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(5)").value="85";
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=text]:nth-child(7)").value="";
    }


    let colorInput1 = document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=color]:nth-child(1)");
    let colorInput2 = document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=color]:nth-child(2)");
    let degRange1 = document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(3)");
    let percentRange1 = document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(4)");
    let percentRange2 = document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(5)");
    let linkInput = document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=text]:nth-child(7)");


    colorInput1.style.backgroundColor=colorInput1.value;
    colorInput2.style.backgroundColor=colorInput2.value;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.querySelector("body").style.backgroundImage=`linear-gradient(${degRange1.value}deg, ${colorInput1.value} ${percentRange1.value}%, ${colorInput2.value} ${percentRange2.value}%)`;
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //document.querySelector("#__next").style.backgroundImage=`url(${linkInput.value})`;//
    //////////////////////////////////////////////////////////////////////////////////////

    var arr = [
        `colorInput1=${colorInput1.value};`,
        `colorInput2=${colorInput2.value};`,
        `degRange1=${degRange1.value};`,
        `precentRange1=${percentRange1.value};`,
        `precentRange2=${percentRange2.value};`,
        `linkInput1=${linkInput.value};`
    ];

    arr.forEach(function(item, index, array){
       document.cookie = item + " expires=Tue, 19 Jan 2038 03:14:07 GMT";
    })
}

var globalScale;

function creatColorPull(){
    if (document.querySelector("#content > div:nth-child(2)") == undefined){

    var cookieDict = getCookieDict();

    if (document.querySelectorAll("#content").length>1){
        var parent = document.querySelectorAll("#content")[1];
    } else {parent = document.querySelectorAll("#content")[0];}

    var leftPannel=document.createElement('div');
    leftPannel.style.width='270px';
    leftPannel.style.position="absolute";
    leftPannel.style.left="-220px";
    //leftPannel.style.opacity=0;
    leftPannel.style.transition="all 0.5s ease-in-out 0s";

    var styleMenuKey=false;

    parent.appendChild(leftPannel);
    leftPannel.onmouseenter=function(){
        styleMenuKey=true;
        leftPannel.style.left="0px";
    }

    leftPannel.onmouseleave=function(){
        styleMenuKey=false;
        setTimeout(()=>{
            if (!styleMenuKey){
                leftPannel.style.left="-220px";
            }
        }, 1000);
    }

    var minimaseButton = document.createElement('button');
    minimaseButton.style.background='rgba(255, 255, 255, 0.13)';
    //minimaseButton.style.transform="translateY(-134%)";
    minimaseButton.style.borderRadius="10px";
    minimaseButton.style.border="3px rgba(255,255,255, 0.5) solid";
    minimaseButton.style.fontFamily="Black";
    minimaseButton.style.fontSize="25px";
    minimaseButton.style.color="rgba(255, 255, 255, 0.5)";
    minimaseButton.style.margin="10px";
    minimaseButton.style.width="40px";
    minimaseButton.style.height="40px";
    minimaseButton.style.margin="10px 0px 0px 10px";
    minimaseButton.style.transition="all 0.2s ease 0s";

    minimaseButton.onmouseenter=()=>{
        minimaseButton.style.background='rgba(255, 255, 255, 0.3)';
        minimaseButton.style.color='rgba(255, 255, 255, 0.8)';
    };

    minimaseButton.onmouseleave=()=>{
        minimaseButton.style.background='rgba(255, 255, 255, 0.13)';
        minimaseButton.style.color='rgba(255, 255, 255, 0.5)';
    };

    minimaseButton.onmousedown=()=>{
        minimaseButton.style.background='rgba(255, 255, 255, 0.8)';
        minimaseButton.style.color='rgba(255, 255, 255, 1)';
    };

    minimaseButton.onmouseup=()=>{
        minimaseButton.style.background='rgba(255, 255, 255, 0.5)';
        minimaseButton.style.color='rgba(255, 255, 255, 1)';
    };

    minimaseButton.onclick=()=>{
        if (d.hidden){
            d.hidden=false;
            textWindow.hidden=false;
            textWindow2.hidden=false;
        } else {
            d.hidden=true;
            textWindow.hidden=true;
            textWindow2.hidden=true;
               }
    }

    minimaseButton.innerText="_";
    leftPannel.appendChild(minimaseButton);
    minimaseButton.hidden=true;

    var textWindow2 = document.createElement('div');
    textWindow2.style.width='200px';
    textWindow2.style.height='180px';
    textWindow2.style.background='rgba(255, 255, 255, 0.13)';
    textWindow2.style.borderRadius="10px";
    //textWindow.style.position="absolute";
    //textWindow2.style.transform="translateY(-134%)";
    //textWindow.style.position="fixed";
    textWindow2.style.border="3px rgba(255,255,255, 0.5) solid";
    textWindow2.style.color="#ffffff";
    textWindow2.style.fontFamily="Black";
    textWindow2.style.textAlign="center";
    textWindow2.innerText="\nДля корректной работы - не открывайте больше одной вкладки с игрой. Также некоторые элементы (в частности картинки) могут не отображаться из-за настроек браузера.\n";
    textWindow2.style.margin="70px 10px 10px 10px";
    textWindow2.style.letterSpacing="1px";
    textWindow2.style.size="18px";
    textWindow2.style.lineHeight="15px";
    leftPannel.appendChild(textWindow2);

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
    textWindow.style.height='300px';
    textWindow.style.background='rgba(255, 255, 255, 0.13)';
    textWindow.style.borderRadius="10px";
    //textWindow.style.position="absolute";
    //textWindow.style.transform="translateY(170%)";
    //textWindow.style.position="fixed";
    textWindow.style.border="3px rgba(255,255,255, 0.5) solid";
    textWindow.style.color="#ffffff";
    textWindow.style.fontFamily="Black";
    textWindow.style.textAlign="center";
    textWindow.innerText="\nИзменение стиля просто незначительный элемент как вишенка на торте, я не напрягался с этим, так что сделал программу минимум, но если вы захотите большего разнообразия (например динамический фон или фон для каждого раздела меню как в оригинале), то пните этого чела:\n";
    textWindow.style.margin="10px";
    textWindow.style.letterSpacing="1px";
    textWindow.style.size="18px";
    textWindow.style.lineHeight="15px";
    leftPannel.appendChild(textWindow);

    var tgLink = document.createElement('a');
    tgLink.innerText="@DoctorDeathDDracula";
    tgLink.href="https://t.me/DoctorDeathDDracula";
    tgLink.style.animation="rainbow 5s linear";
    tgLink.style.animationIterationCount="infinite";
    tgLink.style.opacity=1;
    tgLink.style.fontSize="14px"
    tgLink.style.textDecoration="none";
    tgLink.onclick=()=>{ window.open("https://t.me/DoctorDeathDDracula", '_blank'); }
    textWindow.appendChild(tgLink);

    var colorInput1 = document.createElement('input');
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
    colorInput1.oninput=function(){this.style.backgroundColor=this.value; styleUpdate();}
    d.appendChild(colorInput1);

    var colorInput2 = document.createElement('input');
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
    colorInput2.oninput=function(){this.style.backgroundColor=this.value; styleUpdate();}
    d.appendChild(colorInput2);

    var degRange1 = document.createElement('input');
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

    var linkTitle = document.createElement('div');
    linkTitle.innerText="Задний фон";
    linkTitle.style.fontFamily='Black';
    linkTitle.style.color="rgb(255, 255, 255)";
    linkTitle.style.fontSize="15px";
    linkTitle.style.margin="5px";
    d.appendChild(linkTitle);

    var linkInput = document.createElement('input');
    linkInput.type="text";
    linkInput.value=`${cookieDict.linkInput1}`;
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
    linkInput.oninput=()=>{styleUpdate();};

    document.querySelector("#__next").style.backgroundImage=`url(${linkInput.value})`

    if (linkInput.value==""){
        document.querySelector("#__next").style.backgroundImage="url(https://garticphone.com/images/textura.png)";
    }

    linkInput.oninput=()=>{
        if (linkInput.value==""){
            document.querySelector("#__next").style.backgroundImage="url(https://garticphone.com/images/textura.png)";
        } else {document.querySelector("#__next").style.backgroundImage=`url(${linkInput.value})`;}
    }

    d.appendChild(linkInput);

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
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=color]:nth-child(1)").value=rgb2hex(getRandomInt(255), getRandomInt(255), getRandomInt(255));
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=color]:nth-child(2)").value=rgb2hex(getRandomInt(255), getRandomInt(255), getRandomInt(255));
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(3)").value=getRandomInt(360);
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(4)").value=getRandomInt(100);
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=range]:nth-child(5)").value=getRandomInt(100);
        document.querySelector("#content > div:nth-child(2) > div:nth-child(3) > input[type=text]:nth-child(7)").value="";
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
    }
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

function main(){
    if (document.URL == "https://garticphone.com/ru" && !menuKey){
        //Блок главного меню
        //alert("menuKey");
        setTimeout(deletBanner, 100);
        setTimeout(creatColorPull, 500);
        setTimeout(styleUpdate, 700);
        flagsOff();
        menuKey=true;
    }
    else if (document.URL.indexOf("https://garticphone.com/ru?c=") != -1 && !menuLinkKey){
        //Блок главного меню при входе по ссылке
        //alert("menuLinkKey");
        setTimeout(deletBanner, 100);
        setTimeout(creatColorPull, 500);
        setTimeout(styleUpdate, 700);
        flagsOff();
        menuLinkKey=true;
    }
    else if (document.URL == "https://garticphone.com/ru/draw" && !drawKey){
        //Блок рисования
        //alert("drawKey");
        flagsOff();
        setTimeout(mainDrawFunc, 500);
        setTimeout(styleUpdate, 700);
        drawKey=true;
    }
    else if (document.URL == "https://garticphone.com/ru/lobby" && !lobbyKey){
        //Блок лобби с игроками
        //alert("lobbyKey");
        setTimeout(styleUpdate, 700);
        VIP();
        flagsOff();
        lobbyKey=true;
    }
    else if (document.URL == "https://garticphone.com/ru/book" && !bookKey){
        //Блок просмотра результатов
        //alert("bookKey");
         setTimeout(styleUpdate, 700);
        VIP();
        flagsOff();
        bookKey=true;
    }
    else if (document.URL == "https://garticphone.com/ru/start" && !startKey){
        //Блок ввода первой истории
        extendTextInput();
        //alert("startKey");
        setTimeout(styleUpdate, 700);
        flagsOff();
        startKey=true;
    }
    else if (document.URL == "https://garticphone.com/ru/write" && !writeKey){
        //Блок названия картинки
        extendTextInput();
        setTimeout(styleUpdate, 700);
        //alert("writeKey");
        flagsOff();
        writeKey=true;
    }
    else if (document.URL == "https://garticphone.com/ru/memory" && !memoryKey){
        //Блок перерисовки картинки
        //alert("memoryKey");
        setTimeout(styleUpdate, 700);
        flagsOff();
        memoryKey=true;
    }
    else if (document.URL == "https://garticphone.com/ru/waiting" && !waitingKey){
        //alert("IN");
        setTimeout(styleUpdate, 700);
        flagsOff();
        waitingKey=true;
        setTimeout(waitVideo, 500);
    }
    else{
        //Непромодулированная комната
        //flagsOff();
    }
}

function exec() {
    var stop = setInterval(f1, 10);
    var start = setInterval(main, 100);
    var under = setInterval(asyncDraw, 0);
    //var asyncDes = setInterval(asyncSpace, 0);
    var asyncTres = setInterval(asyncSlowSpace, 1000);
}

exec();