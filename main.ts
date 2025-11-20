/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-11-19
 * @fileoverview this program asks for a number in centimeters and calculates it to inches
 */

let centimeters: number; 

centimeters = Number(prompt("Can you give me a random length in centimeters?"));

const answer = centimeters / 2.54

console.log( centimeters + " centimeters is " + (centimeters / 2.54) + " inches.");

console.log("\nDone");

