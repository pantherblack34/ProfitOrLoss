const costNum = document.querySelector('#cost-num');

const stockNum = document.querySelector('#stock-num');

const sellNum = document.querySelector('#sell-num');

const priceTell = document.querySelector('#tellbtn');

const output = document.querySelector('#output-text');

function calcProfitOrLoss(cost, quantity, sell) {

    if(cost > 0 && quantity > 0 && sell > 0){
            if (cost > sell) {
                let loss = ((cost - sell) * quantity);
                let lossPercent = ((cost - sell / cost) * 100);
                let lossPer = lossPercent.toFixed(2);
                return  showOutput('You have recieved a loss of ' + loss + 'Rs/- and the loss percentage is ' + lossPer + '%.');

            } 
            else if (sell > cost) 
            {
                let profit = ((sell - cost) * quantity);
                let profitPercent = ((sell - cost / cost) * 100);
                let profitPer = profitPercent.toFixed(2);
                return showOutput('You have recieved a profit of ' + profit + 'Rs/- and the profit percentage is ' + profitPer + '%.');
            } 
            else 
            {
                return showOutput('You have neither recieved a LOSS nor PROFIT.You HAVE what You HAD.')
            }
    }else{
        return showOutput('PLEASE ENTER POSITIVE VALUE');
    }    
}

function showOutput(msg){
    
    output.innerText = msg;
}


function clickHandler() {
    let cost = Number(costNum.value);
    let quant = Number(stockNum.value);
    let sell = Number(sellNum.value);

    calcProfitOrLoss(cost, quant, sell);
}

priceTell.addEventListener('click', clickHandler);