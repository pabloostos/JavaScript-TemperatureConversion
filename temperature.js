// Create two temperature unit converter functions, from ºF to ºC and viceversa.

function toFahrenheit(celsius) {
  return (9 / 5) * (celsius + 32);
}

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let miscelsius = 23;
let misfahs = 77;

console.log(
  `The conversion of ${miscelsius}ºC to Fahrenheit is: ${toFahrenheit(
    miscelsius
  )}ºF`
);
console.log(
  `The conversion of ${misfahs}ºF to Fahrenheit is: ${toCelsius(misfahs)}ºC`
);
