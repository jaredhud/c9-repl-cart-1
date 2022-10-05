import rl from 'readline-sync';

let commands = ["list products"];
console.log("The commands are:", commands);
const result = rl.question('What is your command? ');

console.log(`Command you entered: ${result}`);
