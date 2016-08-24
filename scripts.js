//Prime bonus for week 3

//Function Name		--	What it Does
//add					Adds 5 to the number
//multiply				Multiplies the number by 2
//square				Squares the number

var add = function (number) {
  return number + 5;
};

var multiply = function (number) {
  return number * 2;
};

var square = function (number) {
  return number * number;
};

add(multiply(square(4)));