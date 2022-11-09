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

    console.log(zeroes)

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

    console.log(parseInt(gammaDecimal, 2) * parseInt(epsilonDecimal, 2));

    return;
    
}

generateDiagnosticReport(process.argv[2])