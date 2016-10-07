'use strict';

let maxProfit = function(stockPrices){
  let curMax = 0;
  for(let i = 0; i < stockPrices.length; i++){

    for(let j = i + 1; j < stockPrices.length; j++){
      //console.log(`comparing: ${stockPrices[i]} and ${stockPrices[j]}`);
      let diff = stockPrices[i] - stockPrices[j]
      if(diff < curMax) curMax = diff;
    }
  }
  curMax = Math.abs(curMax);
  console.log(curMax);

}

let stocks = [45, 24, 35, 31, 40, 38, 11];
maxProfit(stocks);
