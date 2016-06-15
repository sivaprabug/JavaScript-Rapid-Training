var isSpecial = true;
// var isSpecial = True;
if (isSpecial) {
    console.log('Condition true');
}


console.log(Boolean('Hello'));
console.log(Boolean(true));
console.log(Boolean(''));
// typeof empty string
console.log(typeof(''));

// single space have very definite ASCII value
console.log(Boolean(''));

// Because valid numeric value
console.log(Boolean(6));
//other than 0 will be true
console.log(Boolean(0));

// undefined
console.log(Boolean(undefined));

//null
console.log(Boolean(null));


// var value = 99.99;
// var value = undefined;
// var value = 99.99;
var value = '';

//!! is a special way to convert any value or any variable to an Boolean value.
console.log(typeof !!value);

var vals = 'sivag';
console.log(!!vals);


var value = false;
console.log(!!!!value);
