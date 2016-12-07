/*

Kyle Lingat
Arrays and Objects
Dec. 5, 2016

*/

// variables 
//array
var numbers = [1,2,3,4,5,6,7,8,9,10];
var names = ['tan', 'zak', 'yolo', 'ohai', 'jef'];
var colors = ['rainbow', 'black', 'ron burgandy', 'light black', 'highlighter'];
var adj = ['smart', 'special case', 'yumy', 'tiny whiny', 'ferocious'];
var slang = ['scrap', 'kobe beef', 'da kiine', 'liddat', 'pau'];

// object

var donut = {
  toppings : ['sprinkles', 'frosting', 'ohare ayre'],
  fillings : 'jelly',
  shape : 'circle',
  count : 12
}



function blahblah(creative) {
  console.log(creative[4] + creative[5]);
}

blahblah(numbers)



function brehbreh(param) {
  if (param[1] == 'jelly') {
    console.log(param[0] + param[2] + param[1]);
  }
  else if (param === false) {
    console.log(param[3] + param[2] + param [1] + param[0]);
  }
}

brehbreh(donut)