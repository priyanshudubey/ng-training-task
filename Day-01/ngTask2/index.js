function Calculation(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var opt = document.getElementById("opt").value;

    if(opt === 'Add'){
        var ans = num1+num2;
    }
    else if(opt === 'Substraction'){
        var ans = num1-num2;
    }
    else if(opt === 'Multiplication'){
        var ans = num1*num2;
    }
    else if(opt === 'Division'){
        var ans = num1/num2;
    }
    
    document.getElementById("ans").value = ans;
}