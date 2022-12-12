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

async function findPacketStart() {
    const packet = await readInput('input6.txt');

    for (let i = 0; i < packet.length; i++) {
        const inputSet = new Set([packet[i],
                                packet[i+1],
                                packet[i+2],
                                packet[i+3]]);
        if (inputSet.size === 4) {
            console.log(i+4);
            return i;
        }
    }

    return null;
}

findPacketStart();

/** PART 2 */

async function findMessageStart() {
    const packet = await readInput('input6.txt');

    for (let i = 0; i < packet.length; i++) {
        const inputSet = new Set(packet.slice(i,i+14));
        if (inputSet.size === 14) {
            console.log(i+14);
            return i;
        }
    }

    return null;
}

findMessageStart();