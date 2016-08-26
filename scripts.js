//Prime bonus for week 3

//Function Name		--	What it Does
//add					Adds 2 to the number
//multiply				Multiplies the number by 3
//square				Squares the number

var add = function (number) {
  return number + 2;
};

var multiply = function (number) {
  return number * 3;
};

var square = function (number) {
  return number * number;
};

add(multiply(square(4)));