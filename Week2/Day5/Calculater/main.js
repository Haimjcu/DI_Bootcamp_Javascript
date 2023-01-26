let equation='';
function number(num) {
    equation+=num;
}

function operator(operator) {
    equation+=operator;
}

function equal() {
    console.log(`${equation} = ${eval(equation)}`);
}

function clear() {
    equation='';
    console.log(equation);
}