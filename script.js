
function btnOne(){
    document.getElementById('myInput').value += "1";
    
}

function btnTwo() {
    document.getElementById('myInput').value += "2";
}

function btnThree() {
    document.getElementById('myInput').value += "3";
}

function btnFour() {
    document.getElementById('myInput').value += "4";
}

function btnFive() {
    document.getElementById('myInput').value += "5";
}

function btnSix() {
    document.getElementById('myInput').value += "6";
}

function btnSeven() {
    document.getElementById('myInput').value += "7";
}

function btnEight() {
    document.getElementById('myInput').value += "8";
}

function btnNine() {
    document.getElementById('myInput').value += "9";
}

function btnZero() {
    document.getElementById('myInput').value += "0";
}
function btnZeroO() {
    document.getElementById('myInput').value += "00";
}


// Signs
function btnPlus(){
    document.getElementById('myInput').value +='+';
    
}
function btnMinus(){
    document.getElementById('myInput').value +='-';
    
}
function btnMulti(){
    document.getElementById('myInput').value +='*';
    
}
function btnDivide(){
    document.getElementById('myInput').value +='/';

}

function btnBackspace(){
    if (document.getElementById('myInput').value.length > 0) {
        document.getElementById('myInput').value = document.getElementById('myInput').value.substr(0,document.getElementById('myInput').value.length-1);
    }
}


function btnDot(){
    document.getElementById('myInput').value +='.';

}

function btnpercent(){
    document.getElementById('myInput').value +='%';

}

function btnClearAll(){
    document.getElementById('myInput').value = '';
}

function btnEqual() {
    document.getElementById('myInput').value = eval(document.getElementById('myInput').value);
}
