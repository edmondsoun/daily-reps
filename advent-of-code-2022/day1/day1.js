"use strict";

const fsP = require('fs/promises');

async function readInput() {
    try {
        let contents = await fsP.readFile("input.txt", "utf8");
        return contents;
    } catch (err) {
        process.exit(1);
    }
}

// PART 1

async function findMax() {

    const input = await readInput();

    const groupedInput = input.split(/\r?\n/)

    let count = 0;
    const totals = [];

    for (let i = 0; i < groupedInput.length; i++) {
        if (groupedInput[i] === '') {
            totals.push(count);
            count = 0;
        } else {
            count += parseInt(groupedInput[i]);
        }
    }

    console.log(Math.max(...totals));

}

findMax();

// PART 2

async function findTopThree() {

    const input = await readInput();

    const groupedInput = input.split(/\r?\n/)

    let count = 0;
    const totals = [];

    for (let i = 0; i < groupedInput.length; i++) {
        if (groupedInput[i] === '') {
            totals.push(count);
            count = 0;
        } else {
            count += parseInt(groupedInput[i]);
        }
    }

    totals.sort((a,b) => a - b)

    console.log(totals.slice(-3).reduce((a,b) => (a+b)))

}

findTopThree();