// Write a function to convert an amount from one currency to another using static exchange rates.

// Notes:-
// * Write a function called currencyConvert that takes three parameters:-amount,fromCurrency and toCurrency.
// * Use a fixed object to exchange rates relative to base currency.(eg:USD)
// * The function should return the converted amount in the target currency.
// * Handle the conversion through USD as base, meaning if converting from GBP to EUR, first convert GBP to USD  and then USD to EUR.

// console.log(currencyConvertor(100,"GBP","EUR")) //

const rates = {
  USD: 1, //Base currency
  EUR: 0.9, // 1 USD = 0.9 EUR
  GBP: 0.8, // 1 USD = 0.8 GBP
  INR: 82, // 1 USD = 82 INR
};

const currencyConvertor = (amount, fromCurrency, toCurrency) => {
  let amountInUSD = 0;
  if (fromCurrency != "USD") {
    amountInUSD = amount / rates[fromCurrency];
  } else {
    amountInUSD = amount;
  }

  let currencyConvert = 0;
  if (toCurrency != "USD") {
    convertCurrency = amountInUSD * rates[toCurrency];
  } else {
    convertCurrency = amountInUSD;
  }
  return convertCurrency;
};

console.log(currencyConvertor(100, "GBP", "EUR"));
