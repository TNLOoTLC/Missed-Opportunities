(function () {
  // cache bitcoin prices
  var prices = {
    2009: 0.005,
    2010: 0.08,
    2011: 0.30,
    2012: 5.27,
    2013: 13.30,
    2014: 309.87,
    2015: 333.75,
    2016: 434.46,
    2017: 1169.04
  }
  // cache all need elems
  var elems = {
    year: document.getElementById('stock-year-select'),
    price: document.getElementById('buy-stock-price'),
    profit: document.getElementById('stock-profit-price'),
    sentence: document.getElementById('stock-profit-desc')
  }
  // format money 
  function format(price) {
    price = parseInt(price);
    price = '$' + price.toLocaleString();
    return price;
  }
  // update price and display 
  function update() {
    var profit = parseInt(elems.price.value);
    var price = profit;
    var year = parseInt(elems.year.value);
    profit = Math.floor((profit / prices[year]) * 15000);
    if (profit && year) {
      elems.profit.innerText = format(profit);
      elems.sentence.innerText = 'If you bought ' + format(price) + ' worth of BitCoin in ' + year + ' it would be worth ' + format(profit) + ' today, minus your initial investment you would have a profit of ' + format(profit - price) + '!';
    } else {
      elems.profit.innerText = format(0);
      elems.sentence.innerText = 'You done messed up now...';
    }
  }
  // listen to event changes
  elems.price.onchange = update;
  elems.year.onchange = update;
  // init 
  update();
})();