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

// async function generateDiagnosticReport(path) {
//     let input = await readInput(path);

//     const zeroes = {};
//     const ones = {};
//     const gamma = [];
//     const epsilon = [];

//     for (let entry of input) {
//         let entryDigits = entry.split('');
//         for (let i = 0; i < entryDigits.length; i++) {
//             if (entryDigits[i] === '0') zeroes[i] ? zeroes[i] = zeroes[i] + 1 : zeroes[i] = 1;
//             if (entryDigits[i] === '1') ones[i] ? ones[i] = ones[i] + 1 : ones[i] = 1;
//         }
//     }

//     for (let key in zeroes) {
//         if (zeroes[key] > ones[key]) {
//             gamma.push('0');
//             epsilon.push('1');
//         } else {
//             gamma.push('1');
//             epsilon.push('0');
//         }
//     }

//     let gammaDecimal = gamma.join('');
//     let epsilonDecimal = epsilon.join('');

//     console.log('product of gamma and epsilon:', parseInt(gammaDecimal, 2) * parseInt(epsilonDecimal, 2));

//     return;

// }

// generateDiagnosticReport(process.argv[2])


async function searchAndRemoveOxy(input, sortIndex = 0) {

    //base case
    if (input.length === 1) {
        return input[0];
    }


    //sort by indexed digit to determine if there are more 0s or 1s:
    input.sort((a, b) => a.charCodeAt(sortIndex) - b.charCodeAt(sortIndex));


    //Math.ceil will ensure 1s always are prioritized in a slice:
    let mid = Math.ceil((input.length - 1) / 2);

    if (input[mid][sortIndex] === '0') {
        for (let i = mid; i < input.length; i++) {
            if (input[i][sortIndex] === '1') {
                let slicedInput = input.slice(0, i);
                sortIndex += 1;
                return await searchAndRemoveOxy(slicedInput, sortIndex);
            } else if (i === input.length - 1) {
                sortIndex += 1;
                return await searchAndRemoveOxy(input, sortIndex);
            }
        }

    }

    if (input[mid][sortIndex] === '1') {
        for (let i = mid; i > -1; i--) {
            if (input[i][sortIndex] === '0') {
                let slicedInput = input.slice(i + 1);
                sortIndex += 1;
                return await searchAndRemoveOxy(slicedInput, sortIndex);
            } else if (i === 0) {
                sortIndex += 1;
                return await searchAndRemoveOxy(input, sortIndex);
            }
        }
    }

    return;

}


async function searchAndRemoveC02(input, sortIndex = 0) {

    //base case
    if (input.length === 1) {
        return input[0];
    }


    //sort by indexed digit to determine if there are more 0s or 1s:
    input.sort((a, b) => a.charCodeAt(sortIndex) - b.charCodeAt(sortIndex));


    let mid = Math.ceil((input.length - 1) / 2);

    if (input[mid][sortIndex] === '0') {
        for (let i = mid; i < input.length; i++) {
            if (input[i][sortIndex] === '1' || i === input.length - 1) {
                let slicedInput = input.slice(i);
                sortIndex += 1;
                return searchAndRemoveC02(slicedInput, sortIndex);
            }
        }

    }

    if (input[mid][sortIndex] === '1') {

        for (let i = mid; i > -1; i--) {
            if (input[i][sortIndex] === '0' || i === 0) {
                let slicedInput = input.slice(0, i + 1);
                sortIndex += 1;
                return searchAndRemoveC02(slicedInput, sortIndex);
            }
        }
    }

    return;

}

async function findOxygenandC02Ratings(path) {

    let input = await readInput(path);

    let c02 = await searchAndRemoveC02(input);
    let oxy = await searchAndRemoveOxy(input);

    console.log('gas contents', parseInt(oxy, 2) * parseInt(c02, 2));

    return; 
}


findOxygenandC02Ratings(process.argv[2])



// 2825768 -> too low
// 2843892 -> too high
// 2847501 -> too high
// 2829354 -> JUST RIGHT!