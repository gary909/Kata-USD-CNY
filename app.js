function usdcny(usd) {
    var myResult = usd * 6.75;
    return myResult.toFixed(2) + ' Chinese Yuan';
}

console.log(usdcny(15)); // '101.25 Chinese Yuan'
console.log(usdcny(465)); // '3138.75 Chinese Yuan'