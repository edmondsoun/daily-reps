"use strict";

const fsP = require("fs/promises");

async function readInput(path) {
    try {
        let contents = await fsP.readFile(path, 'utf-8');
        const contentsArray = contents.split(/\r?\n/);
        return contentsArray;
    } catch (err) {
        process.exit(1);
    }
}

// readInput(process.argv[2]);

// PART ONE

async function generateDiagnosticReport(path) {
    let input = await readInput(path);

    const zeroes = {};
    const ones = {};
    const gamma = [];
    const epsilon = [];

    for (let entry of input) {
        let entryDigits = entry.split('');
        for (let i = 0; i < entryDigits.length; i++) {
            if (entryDigits[i] === '0') zeroes[i] ? zeroes[i] = zeroes[i] + 1 : zeroes[i] = 1;
            if (entryDigits[i] === '1') ones[i] ? ones[i] = ones[i] + 1 : ones[i] = 1;
        }
    }

    for (let key in zeroes) {
        if (zeroes[key] > ones[key]) {
            gamma.push('0');
            epsilon.push('1');
        } else {
            gamma.push('1');
            epsilon.push('0');
        }
    }

    let gammaDecimal = gamma.join('');
    let epsilonDecimal = epsilon.join('');

    console.log('product of gamma and epsilon:', parseInt(gammaDecimal, 2) * parseInt(epsilonDecimal, 2));

    return;
    
}

generateDiagnosticReport(process.argv[2])

// PART TWO

// Examine the first bit
// Keep only numbers which meet the criteria
// When only one number is left, stop, this is the value
// Otherwise, repeat considering the next  bit to the right.

// PLAN: implement a recursive function that sorts and then splices as you proceed thru indexes

// 

async function findOxygenandC02Ratings(path) {
    let input = await readInput(path);

    input.sort();

    await searchAndRemove(input);

    return;


}

async function searchAndRemove(input) {

    console.log('entering search')
    console.log(input)

    if (input.length === 1) return input[0];

    let start = 0;
    let end = input.length-1
    let mid = Math.floor((input.length-1)/2)

    if (input[mid][0] === '0') {
        console.log('entering 0 block')
        for (let i = mid; i < input.length; i++) {
            if (input[i][0] === '1') {
                console.log('index:', i)
                return input[i]
            }
        }
    }

    if (input[mid][0] === '1') {
        console.log('entering 1 block')
        for (let i = mid; i > -1; i--) {
            if (input[i][0] === '0') {
                console.log('index:', i)
                return input[i]
            }
        }
    }
    
    return;

}

findOxygenandC02Ratings(process.argv[2])

