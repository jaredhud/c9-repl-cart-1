import rl from 'readline-sync';

let commands = ['list products'];

while (true) {
  console.log('The commands are:', commands);
  const theCommand = rl.question('What is your command? ');
  
  if (theCommand === 'list products') {
    console.log('Here is the list of products: ....');
  } else {
    console.log(`Invalid command: ${theCommand}`);
  }
}
