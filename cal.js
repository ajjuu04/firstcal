document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === '=') {
                try {
                    // Replace 'x' with '*' and '÷' with '/' for proper evaluation
                    const evaluatedExpression = expression.replace(/x/g, '*').replace(/÷/g, '/');
                    const result = eval(evaluatedExpression);
                    display.value = result;
                } catch (error) {
                    display.value = 'Error';
                }
                expression = '';
            } else if (buttonText === 'C') {
                expression = expression.slice(0, -1);
                display.value = expression;
            } else if (buttonText === 'AC') {
                expression = '';
                display.value = '';
            } else if (buttonText === '=' && expression.includes('%')) {
                try {
                    // Evaluate the expression without the percentage sign
                    const value = eval(expression.replace(/%/g, '/'));
                    
                    // Calculate the percentage
                    const percentage = value * 100;
                    
                    display.value = percentage;
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                expression += buttonText;
                display.value = expression;
            }
        });
    });
});
