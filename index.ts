#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlue.bold("\nUnited States Dollar (USD)"),chalk.bgBlueBright.bold("Euro (EUR)"),chalk.bgYellow.bold("British Pound Sterling (GBP)"));
console.log(chalk.bgCyanBright.bold("\nCanadian Dollar (CAD)"),chalk.bgMagenta.bold("Australian Dollar (AUD)"),chalk.bgGray.bold("New Zealand Dollar (NZD)"));
console.log(chalk.bgYellow.bold("\nUnited Arab Emirates Dirham (AED)"),chalk.bgRedBright.bold("Saudi Riyal (SAR)"),chalk.bgMagentaBright.bold("Chinese Yuan (CNY)"));
console.log(chalk.bgRed.bold("\nTurkish Lira (TRY)"),chalk.bgCyan.bold("Indian Rupee (INR)"),chalk.bgGreen.bold("Pakistani Rupee (PKR)"));
console.log("\n");
const currency: { [key: string]: number } = {
    USD: 1,        
    EUR: 0.92,   
    GBP: 0.76,     
    CAD: 1.25,     
    AUD: 1.32,     
    NZD: 1.44,
    AED: 3.67,     
    SAR: 3.75,     
    CNY: 6.40,     
    TRY: 13.5,     
    INR: 75.50,    
    PKR: 277.54
};

const main = async () => {
    try {
        const user_answer = await inquirer.prompt([
            {
                name: "from",
                message: "Enter From Currency",
                type: 'list',
                choices: ["USD", "EUR", "GBP", "CAD", "AUD", "NZD", "AED", "SAR","CNY", "TRY", "INR", "PKR"],
            },
            {
                name: "to",
                message: "Enter To Currency",
                type: 'list',
                choices: ["USD", "EUR", "GBP", "CAD", "AUD", "NZD", "AED", "SAR","CNY", "TRY", "INR", "PKR"],
            },
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
                validate: (value) => value > 0 ? true : 'Amount must be a positive number',
            },
        ]);

        const fromAmount = currency[user_answer.from];
        const toAmount = currency[user_answer.to];
        const amount = user_answer.amount;
        const baseAmount = amount / fromAmount;
        const convertedAmount = baseAmount * toAmount;

        console.log(chalk.magentaBright(`\n${amount} ${user_answer.from} is equal to ${convertedAmount.toFixed(2)} ${user_answer.to}`));
    } catch (error) {
        if (error instanceof Error) {
            console.error(chalk.red(`Error: ${error.message}`));
        } else {
            console.error(chalk.red('An unknown error occurred'));
        }
    }
};

main();