
"use strict";

const fsP = require('fs/promises');

/** Generic function to read input text files. */
async function readInput(path) {
    try {
        let contents = await fsP.readFile(path, "utf8");
        return contents;
    } catch (err) {
        process.exit(1);
    }
}

// PART 1

/** Calculate total score based on pre-calculated score totals. */
async function calculateTotalScorePartOne() {

    const puzzleInput = await readInput('input2.txt');

    const gameRounds = puzzleInput.split(/\r?\n/);

    const possibleScores = {
        'A X': 4,
        'A Y': 8,
        'A Z': 3,
        'B X': 1,
        'B Y': 5,
        'B Z': 9,
        'C X': 7,
        'C Y': 2,
        'C Z': 6,
    };

    let totalScore = 0;

    for (let round of gameRounds) {
        totalScore += possibleScores[round];
    }

    console.log('Part 1 total score:', totalScore);

}

calculateTotalScorePartOne();

async function calculateTotalScorePartTwo() {

    const puzzleInput = await readInput('input2.txt');
    const gameRounds = puzzleInput.split(/\r?\n/);

    // X lose, Y draw, Z win
    // A rock, B paper, C scissors
    // 1, 2, 3 points respectively
    const possibleScores = {
        'A X': 3,
        'A Y': 4,
        'A Z': 8,
        'B X': 1,
        'B Y': 5,
        'B Z': 9,
        'C X': 2,
        'C Y': 6,
        'C Z': 7,
    };

    let totalScore = 0;

    for (let round of gameRounds) {
        totalScore += possibleScores[round];
    }

    console.log('Part 2 totalscore:', totalScore);

}

calculateTotalScorePartTwo();