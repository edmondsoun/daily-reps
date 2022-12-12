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

/** PART 1 */

// Process a stack one item at a time:

async function generateStack() {

    const input = await readInput("inputStack.txt");

    const inputStack = input.split(/\r?\n/);

    for (let i = 0; i < inputStack.length; i++) {
        inputStack[i] = inputStack[i].split(" ");
    }

    return inputStack;

}

async function generateInstructions() {

    const instructions = await readInput("input5.txt");
    const instructionsArray = instructions.split(/\r?\n/);

    for (let i = 0; i < instructionsArray.length; i++) {
        const simplifiedInstructions = instructionsArray[i].split(" ");
        instructionsArray[i] = [parseInt(simplifiedInstructions[1]),
        parseInt(simplifiedInstructions[3]),
        parseInt(simplifiedInstructions[5])]
    }

    return instructionsArray;

}

async function processStack() {

    const stack = await generateStack();
    const instructions = await generateInstructions();
    const result = [];

    for (let i of instructions) {
        let [move, from, to] = i;
        // compensate for 0 indexing: 
        from -= 1
        to -= 1
        while (move > 0) {
            let curr = stack[from].pop();
            stack[to].push(curr);
            move--;
        }
    }

    for (let s of stack) {
        result.push((s[s.length - 1]));
    }

    console.log("PART 1 RESULT:", result.join(''));
    return;

}

processStack();

/** PART 2 */

// Process a stack retaining batch order:

async function processStackBatches() {

    const stack = await generateStack();
    const instructions = await generateInstructions();
    const result = [];

    for (let i = 0; i < instructions.length; i++) {
        let [move, from, to] = instructions[i];
        // compensate for 0 indexing: 
        from -= 1
        to -= 1
        //
        let curr = stack[from].splice(stack[from].length - move, move);
        for (let c of curr) {
            stack[to].push(c);
        }
    }

    for (let s of stack) {
        result.push((s[s.length - 1]));
    }

    console.log("PART 2 RESULT:", result.join(''));
    return;

}

processStackBatches();