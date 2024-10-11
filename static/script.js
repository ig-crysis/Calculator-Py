let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    document.getElementById('display').value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    document.getElementById('display').value = '';
}

function backspace() {
    currentExpression = currentExpression.slice(0, -1);  
    document.getElementById('display').value = currentExpression;  
}

async function calculate() {
    const response = await fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ expression: currentExpression })
    });
    const result = await response.json();
    document.getElementById('display').value = result.result;
    currentExpression = '';  
}


document.addEventListener('keydown', function(event) {
    const key = event.key;

    
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (key === '+') {
        appendToDisplay(key);
    } else if (key === '-') {
        appendToDisplay(key);
    } else if (key === '*') {
        appendToDisplay(key);
    } else if (key === '/') {
        appendToDisplay(key);
    } else if (key === '%') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();  
    } else if (key === 'Escape') {
        clearDisplay();  
    } else if (key === 'Backspace') {
        backspace();  
    }
});
