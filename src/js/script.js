function f() {
    let inputValue = document.getElementById('incoming_data').value;
    if (inputValue === '1') {
        document.getElementById('result').innerHTML = 'Факториал 1 = 1 😀';
    }
    if (inputValue === '') {
        document.getElementById('result').innerHTML = 'Поле не может быть пустым.';
    }
    if (inputValue >= 100) {
        document.getElementById('result').innerHTML = 'Слишком большое значение.';
    } else {
        function factorial(n) {
            return (n !== 1) ? n * factorial(n - 1) : 1;
        }

        document.getElementById('result').innerHTML = "Факториал числа: " + inputValue + " = " + factorial(inputValue);
    }
}
