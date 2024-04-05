#! /usr/bin/env node
//shabang

import inquirer from 'inquirer'


const currancy: any= {
    USD: 1, //Base currancy
    PKR: 280,
    YEN: 0.5454,
    Lira: 0.115149,
    EUR: 0.003320,
    IND: 0.299565,
    Dinnar: 0.001353,
    Riyal: 0.013489,
    Ringgit: 0.017078

};
let user_answer = await inquirer.prompt(
    [
        {
            name: 'from',
            message: "enter from currancy",
            type: 'list',
            choices: ['USD', 'PKR', 'YEN', 'Lira', 'EUR', 'IND', 'Dinnar', 'Riyal', 'Ringgit']
            },
        {
            name: 'to',
            message: "enter to currancy",
            type: 'list',
            choices: ['USD', 'PKR', 'YEN', 'Lira', 'EUR', 'IND', 'Dinnar', 'Riyal', 'Ringgit']
        },
        {
            name: 'amount',
            message: "Enter your Amount",
            type: 'number'
        },
    ]
)

let fromAmount = currancy[user_answer.from]
let toAmount = currancy[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount // USD base currany 
console.log(convertedAmount);

