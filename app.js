const inputNum = document.querySelector('#input-num');

const stockNum = document.querySelector('#stock-num');

const currentNum = document.querySelector('#current-num');

const priceTell = document.querySelector('#tellbtn');

const output = document.querySelector('#output-text');

function calcProfitOrLoss(initial, quantity, current) {

    if (initial > current) {
        let loss = ((initial - current) * quantity);
        let lossPercent = ((loss / initial) * 100);
        let lossPer = lossPercent.toFixed(2);
        showOutput('You have recieved a loss of ' + loss + 'Rs/- and the loss percentage is ' + lossPer + '%.');

    } 
    else if (current > initial) 
    {
        let profit = ((current - initial) * quantity);
        let profitPercent = ((profit / initial) * 100);
        let profitPer = profitPercent.toFixed(2);
        showOutput('You have recieved a profit of ' + profit + 'Rs/- and the profit percentage is ' + profitPer + '%.');
    } 
    else 
    {
        showOutput('You have neither recieved a LOSS nor PROFIT.You HAVE what You HAD.')
    }
}

function showOutput(msg){
    
    output.innerText = msg;
}


function clickHandler() {
    let cost = Number(inputNum.value);
    let quant = Number(stockNum.value);
    let sell = Number(currentNum.value);

    calcProfitOrLoss(cost, quant, sell);
}

priceTell.addEventListener('click', clickHandler);