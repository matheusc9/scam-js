// MAIN
function main() {
    show('create', true);
    show('payment', false);
    show('load', false);
    show('fail', false);
    show('result', false);
} main();

function show(className, bool) {
    const element = document.querySelector(`.${className}`);
    if (!element) return;
    element.style.display = bool ? 'flex' : 'none';
}

// CREATE
function confirmCreate() {
    show('create', false);
    show('payment', true);
    labels();
}


// PAYMENT
function labels() {
    const labelTipo = document.querySelector('#tipo');
    const labelValor = document.querySelector('#valor');

    const select = document.getElementById('tipoPagamento');
    const input = document.getElementById('valorPagamento');

    const tipo = select.value;
    const valor = parseFloat(input.value) || 0;

    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);

    labelTipo.innerText = `Tipo: ${tipo}`;
    labelValor.innerText = `Valor: ${valorFormatado}`;
}

const display = document.querySelector('#display')

function press(key) {
    if (display.value.length < 8) {
        display.value += Number(key);
    }
}

function erase() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
}

let pass = '';

function confirm() {
    if (display.value.length < 4 || display.value.length > 8) {
        alert('Senha inválida!')
        display.value = '';
    } else {
        show('payment', false)
        show('load', true);
        pass = display.value;
    }
}

// LOAD
function fail() {
    show('load', false);
    show('fail', true);
}

// FAIL && RESULT
const labelPass = document.querySelector('#pass')

function result() {
    show('fail', false);
    show('result', true);
    labelPass.innerText = `Senha: ${pass}`;
}