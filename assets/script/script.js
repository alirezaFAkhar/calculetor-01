let num1 = "0";
let num2 = "";
let last = "";
const screen = document.getElementById("inputscreen");
const upScreen = document.querySelector(".calc-operation");
function calculator(val) {
   
    switch (val) {
        case '+':
        case '-':
        case '÷':
        case 'x':
            checkNumber(val);
           
            break;
        case '=':
            _Equal(val);
            if(isNaN(num1))
            {
                Clear();
            }
            screen.innerText = num1;
            break;
        case '.':
            checkD(val);
            break;
        default:
            if (last == "=") {
                if (window.confirm("adam bash.."))
                last = "";
                else
                    break;
            }
            if (num1 == "0") {
                num1 = "";
            }
            num1 += val;
            screen.innerText = num1;
           
            break;
    }
}
function Clear() {
    num1 = "0";
    num2 = "";
    last = "";
    screen.innerText = num1;
}
function Op(_op) {
    
    if (_op == '+')
        return Number(num1) + Number(num2);
    else if (_op == '-')
        return Number(num2) - Number(num1);
    else if (_op == '÷')
        return Number(num2) / Number(num1);
    else {
        return Number(num1) * Number(num2);
    }
}
function checkNumber(val) {
    if(num2 != "")
    num1 = Op(val);
    last = val;
    num2 = num1;
    num1 = "0";
    screen.innerText = num1;
    
    
}
function checkD(val) {
    if (!num1.includes('.')) {
        num1 += val;
        screen.innerText = num1;
    }
}
function _Equal(val) {
    if(last == "")
    {
      alert("adam bash..")
        return;
    }
    num1 = Op(last);
    num2 = "";
    last = val;
}