const calcFieldPerPlayer = document.getElementById('calc-field-per-player');
const calcFieldManager = document.getElementById('calc-field-manager');
const calcFieldCoach = document.getElementById('calc-field-coach');
const calculateBtn = document.getElementById('calculate');
const calculateTotalBtn = document.getElementById('calculate-total');
const playerExpensesValue = document.getElementById('player-expenses-value');
const totalExpensesValue = document.getElementById('total-expenses-value');

const inputFields = [calcFieldPerPlayer, calcFieldManager, calcFieldCoach];
for (const inputField of inputFields) {
    inputField.addEventListener('keyup', function (event) {
        if (isNaN(event.target.value)) {
            alert('Please enter valid Number');
            const fieldValueList = event.target.value.split('');
            const newValueList = [];
            for (const fieldvalue of fieldValueList) {
                if (!isNaN(parseFloat(fieldvalue))) {
                    newValueList.push(parseFloat(fieldvalue));
                }
            }
            event.target.value = newValueList.join('');
        }
    })
}

function returnNumberOnly(str) {
    if (isNaN(parseFloat(str))) {
        console.log(NaN);
        return 0;
    }
    else {
        return parseFloat(str);
    }
}

function calculation() {
    playerExpensesValue.innerText = parseFloat(returnNumberOnly(calcFieldPerPlayer.value)) * playerCurrentOl.children.length;
    totalExpensesValue.innerText = returnNumberOnly(playerExpensesValue.innerText) + returnNumberOnly(calcFieldManager.value) + returnNumberOnly(calcFieldCoach.value);
}
calculateBtn.addEventListener('click', calculation)
calculateTotalBtn.addEventListener('click', calculation)
