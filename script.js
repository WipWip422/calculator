let result = document.getElementById('result');
let fieldOne = document.getElementById('fieldOne');
let fieldTwo = document.getElementById('fieldTwo');

function getNumbers() {
    let fieldOne = document.getElementById('fieldOne').value;
    let fieldTwo = document.getElementById('fieldTwo').value;
  
    if(fieldOne === '' || fieldTwo === '') {
        result.textContent = 'Field is empty';
        return null;
    }

    return [Number(fieldOne), Number(fieldTwo)];
}

function refresh() {
    result.textContent = 'Result';
    document.getElementById('fieldOne').value = null;
    document.getElementById('fieldTwo').value = null;
}
document.getElementById('refresh').addEventListener('click', refresh);

function calculate(operations) {
    let numbers = getNumbers(); 
    if(!numbers) return;

    let [a, b] = numbers;
    let output;

    switch(operations) {
        case 'add':
            output = a + b;
            break;
        case 'subtract':
            output = a - b;
            break;
        case 'multiply':
            output = a * b;
            break;
        case 'divide':
            output = b === 0 ? "Can't divide with 0" : parseFloat((a / b).toFixed(9));
            break;
        case 'remainder':
            output = b === 0 ? "Can't divide with 0" : parseFloat((a % b).toFixed(9));
            break;
        case 'power':
            output = Math.pow(a, b);
            break;
        default:
            output = 'Unknown Operation';
    }
    result.textContent = output;
}

document.getElementById('add').addEventListener('click', () => calculate('add'));
document.getElementById('subtract').addEventListener('click', () => calculate('subtract'));
document.getElementById('multiply').addEventListener('click', () => calculate('multiply'));
document.getElementById('divide').addEventListener('click', () => calculate('divide'));
document.getElementById('remainder').addEventListener('click', () => calculate('remainder'));
document.getElementById('power').addEventListener('click', () => calculate('power'));
