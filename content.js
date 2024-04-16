let btc = document.querySelector('.btcp');
let usdt = document.querySelector('.usdtp');
let google = document.querySelector('googlp');


// API
let urlbtc = `https://criptoya.com/api/lemoncash/btc/ars/0.1`;
let urlusdt = "https://criptoya.com/api/lemoncash/usdt/ars/0.1";

async function getPrices(){
    const response1 = await fetch(urlbtc);
    const data1 = await response1.json();
    const price1 = data1.bid;

    const response2 = await fetch(urlusdt);
    const data2 = await response2.json();
    const price2 = data2.bid;

    let btcPrice = Math.floor(price1/price2);

    btc.textContent = "$"+ btcPrice;
    usdt.textContent = "$" + Math.round(price2);
    console.log(btcPrice);
    console.log(price2);
}

getPrices();