// var a = Number(prompt("Enter first number"))
// var b = Number(prompt("Enter first number"))

// alert(a+b)

// let x,y;

// x = parseInt( prompt("Enter first number"))
// y = parseInt(prompt("Enter second number"))

// let z = x+y;
// let a = x-y;
// let b = x*y;
// let c = x/y;

// // alert("Result:" + z)
// // alert("Result:" + a)
// // alert("Result:" + b)
// // alert("Result:" + c)
// if(alert.value == z) {
//     alert("Result:" + z)
// } else if(alert.value == a) {
//     alert("Result:" + a)
// } else if(alert.value == b) {
//     alert("Result:" + b)
// } else {
// alert("Result:" + c)
// }


function calc() {
    var n1 = parseInt(document.getElementById('n1').value)
    var n2 = parseInt(document.getElementById("n2").value)
    var oper = document.getElementById("operators").value

    if(oper === '+') {
        var n2 = document.getElementById('result').value = n1+n2
    }

    if(oper === '-') {
        var n2 = document.getElementById('result').value = n1-n2
    }
    if(oper === '/') {
        var n2 = document.getElementById('result').value = n1/n2
    }
    if(oper === 'x') {
        var n2 = document.getElementById('result').value = n1*n2
    }

}
