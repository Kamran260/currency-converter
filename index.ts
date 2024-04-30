import inquirer from 'inquirer'

let rates:any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 277.95
}
  

let conversions:any = await inquirer.prompt([
    {
        name: "From_Conversion",
        type: "list",
        message: "Select a currency conversion",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "To_Conversion",
        type: "list",
        message: "Select a second currency conversion",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "Conversion_Number",
        type: "input",
        message: "Select a currency conversion"
    }
    
    
])

let fromAmount = rates[conversions.From_Conversion];
let toAmount = rates[conversions.To_Conversion];
let conversionAnount = conversions.Conversion_Number;

let ConvertFromAmount = conversionAnount / fromAmount;
let convertedAmount = ConvertFromAmount * toAmount;

console.log(convertedAmount);


