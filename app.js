const listContainer = document.getElementById('listContainer');
const addListBtn = document.getElementById('addListBtn');
const mergeForm = document.getElementById('mergeForm');
const resultEl = document.getElementById('result');

let listCount = 0;

function addInput(prefill = '') {
    listCount += 1;

    const label = document.createElement('label');
    label.htmlFor = 'list-' + listCount;
    label.textContent = 'List ' + listCount;

    const input = document.createElement('input');
    input.id = 'list-' + listCount;
    input.type = 'text';
    input.placeholder = 'e.g. Alice, Bob, Charlie';
    input.value = prefill;

    label.appendChild(input);
    listContainer.appendChild(label);
}

function parseUsers(value) {
    return value
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean);
}

addListBtn.addEventListener('click', () => addInput());

mergeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = listContainer.querySelectorAll('input');
    const arrays = Array.from(inputs, (input) => parseUsers(input.value));

    const output = window.combineUsers(...arrays);
    resultEl.textContent = JSON.stringify(output, null, 2);
});

addInput('Jim3, Pam5, Dwight77');
addInput('Michael6, Eleanor22, Chidi202');
addInput('Jack_jack, Julia_Oreo, Bill_bore');
