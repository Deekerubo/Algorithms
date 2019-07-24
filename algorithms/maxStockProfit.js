//takes in array of prices as parameter
// returns the max possible profit of the day
function maxstockProfit(pricesArr){
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice =0;

  var changeBuyPrice = true;

  for (var i = 0; i<pricesArr.length; i++){
    if(changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[1+1];

    if(sellPrice < buyPrice){
      changeBuyPrice = true;
    }
    else{
      var tempProfit = sellPrice-buyPrice;
      if (tempProfit>maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}

maxstockProfit ([32,46,26,38,40,48,42]);