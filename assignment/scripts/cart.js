console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//Create a global variable named `basket` and set it to an empty array.



  //- Create a function called `addItem`. It should:
  //  - take an input parameter for a string `item`
  //  - add the new item to the global array `basket`.
  //  - return `true` indicating the item was added

let basket = [];
//global variable named basket set to an empty array

function addItem (item){
  basket.push(item);
  //adding item to basket array
  return true;
  //return true if item is in the array
}//end addItems

console.log(basket);

console.log(addItem('salad'));
console.log(addItem('spinach'));
console.log(addItem('string cheese'));



//- Create a function called `listItems`. It should:
  //- loop over the items in the `basket` array
  //- console.log each individual item on a new line


function listItems(){
  for(let i=0; i<basket.length; i++) {
    console.log('Cart contents:', basket[i]);
    //console.log each item on a new line
  }
}

console.log(listItems());


//- Create a function called `empty`. It should:
//  - reset the `basket` to an empty array

function empty(){
  basket.length = 0;
  //set array length to zero to empty out array
  console.log(basket);
}

console.log(empty());
