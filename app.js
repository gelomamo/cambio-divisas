let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let oneYenIs = {
    "EUR": 0.00781861,
    "USD": 0.00938233,
    "GBP": 0.00625489,
}

let oneDollarIs = {
    "EUR": 0.8333,
    "JPY": 106.5833,
    "GBP": 0.66666667,
}

let fromDollarToYen = function (dollar){
    let totalYen = oneDollarIs ["JPY"] * dollar
    return totalYen
}
console.log(fromDollarToYen());

let fromEuroToDollar = function (euros){
    let totaldolar = oneEuroIs ["USD"] * euros
    return totaldolar
}
console.log(fromEuroToDollar());

let fromYenToPound = function (yenes){
    let totalpound = oneYenIs["GBP"] * yenes
    return totalpound
}
console.log(fromYenToPound());

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}