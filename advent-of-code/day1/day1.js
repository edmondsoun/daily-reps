"use strict";

/** Count the number of times an item in an array is greater than the item preceeding. 
 * 
 *  Presume all numeric values.
 */

function countNumIncreases(array) {

    let total = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) total++;
    }

    return total;

}

/** Count the number of times a window of three items in an array is greater 
 *  than the window of three items preceeding. 
 *  
 *  Presume all numeric values.
 */

function countNumIncreasesInSlidingWindow(array) {

    let total = 0;

    for (let i = 3; i < array.length; i++) {
        let currentWindow = array[i - 2] + array[i - 1] + array[i];
        let previousWindow = array[i - 3] + array[i - 2] + array[i - 1];
        if (currentWindow > previousWindow) total++;
    }

    return total;

}