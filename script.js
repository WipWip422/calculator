let result = document.getElementById('result');

// get numbers from input field
function getNumbers() {
    let fieldOne = Number(document.getElementById('fieldOne').value);
    let fieldTow = Number(document.getElementById('fieldTwo').value);

    return [fieldOne, fieldTow];
}

// refresh the input fields and result
function refresh() {
    result.textContent = 'Result';
    document.getElementById('fieldOne').value = null;
    document.getElementById('fieldTwo').value = null;
}
document.getElementById('refresh').addEventListener('click', refresh);

// operation
function addition() {
    let [a, b] = getNumbers();
    result.textContent = a + b;
}
function subtraction() {
    let [a, b] = getNumbers();
    result.textContent = a - b;
}
function multiplication() {
    let [a, b] = getNumbers();
    result.textContent = a * b;
}
function division() {
    let [a, b] = getNumbers();
    result.textContent = a / b;
}
function reminder() {
    let [a, b] = getNumbers();
    result.textContent = a % b;
}

// events
document.getElementById('add').addEventListener('click', addition);
document.getElementById('subtract').addEventListener('click', subtraction);
document.getElementById('multiply').addEventListener('click', multiplication);
document.getElementById('divide').addEventListener('click', division);
document.getElementById('reminder').addEventListener('click', reminder);