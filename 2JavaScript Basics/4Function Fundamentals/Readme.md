# Function Fundamentals


## Declaring Functions

- Create the Function
- Call the Function

## Passing Arguments to Functions

- Pass the value in function
	- For example addition(a,b)

- Unique in Javascript Function
	- Calling a function() before declare.
	- We pass string orderId.

- How JavaScript processes.
	- Javascript have two passes
	- First pass create a variable for functions.
	- First pass take that function in global variable then second pass execute it.

	function printOrder(orderId){
		 console.log('orderId => '+ orderId);
	};
	printOrder('9116');


- Passing variables
	- Variable value not assigned or declared. We have an error() undefined

## Getting a Returning Values

- Use **return** keyword for return a value from function.
- We can assign a function to a variable


        var totalPrice = calculateTotalPrice(4,2);
            totalPrice = calculateTotalPrice(8,2);

- Use multiple times for the function

- A function nothing returned means undefined


	    function order() {
	    };
		var orders = order();
		console.log(orders);


## Function Expressions

- Assigning a function to a variable


        var addingValue = function (a,b) {
         console.log(a+b);
         };

	console.log(addingValue(10,10)); //20

	console.log(addingValue); //function

	console.log(typeof addingValue); // function

	addingValue(); // NaN

	addingValue(50,50); // 100

	var values = addingValue(50,50);
	console.log(values); //100

	addingValue; // Nothing to display
