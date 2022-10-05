import rl from 'readline-sync';

let commands = ['list products', 'show product', 'add to cart'];
let products = [
  {
    name: 'hair spray',
    price: '$5',
    description: 'keep your hair straight & tidy',
    upcCode: '123xyz567',
  },
  {
    name: 'fruit loops',
    price: '$2',
    description: 'best cereal ever',
    upcCode: '111yyy000',
  },
  {
    name: 'tweezers',
    price: '$1',
    description: 'Tweek, OW!',
    upcCode: '333398988',
  },
  {
    name: 'bananananananas',
    price: '$29',
    description: 'Yellow and Yummy',
    upcCode: '4011',
  },
  {
    name: 'baseball cards',
    price: '$0.10',
    description: "Let's Go Blue Jays",
    upcCode: null,
  },
];

while (true) {
  console.log('The commands are:', commands);
  const theCommand = rl.question('What is your command? ');

  if (theCommand === 'list products') {
    console.log('Here is the list of products:');
    products.forEach((p) => {console.log(p.name)})
  } else if (theCommand === 'show product') {
    console.log('Product Details Go HERE');
  } else if (theCommand === 'add to cart') {
    console.log('It is in the cart!!! Yummy!');
  } else {
    console.log(`Invalid command: ${theCommand}`);
  }
}
