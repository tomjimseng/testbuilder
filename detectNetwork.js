// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
var firstDigits = cardNumber.substr(0,2);
var firstThree = cardNumber.substr(0,3);
var firstFour = cardNumber.substr(0,4);
var firstSix = cardNumber.substr(0,6);
var firstNum = cardNumber[0];
	if (firstDigits === '38' && cardNumber.length === 14 ) {
		return 'Diner\'s Club';
  } else if (firstDigits === '39' && cardNumber.length === 14 ) {
    return 'Diner\'s Club';
	} else if (firstDigits === '34' && cardNumber.length === 15) {
		return 'American Express';
	} else if (firstDigits === '37' && cardNumber.length === 15) {
    return 'American Express';
  } else if (firstFour === '4903' && cardNumber.length === 16) {
    	return 'Switch';
  } else if (firstFour === '4903' && cardNumber.length === 18) {
    	return 'Switch';
  } else if (firstFour === '4903' && cardNumber.length === 19) {
    	return 'Switch';
  } else if (firstFour === '4905' && cardNumber.length === 16) {
    	return 'Switch';
  } else if (firstFour === '4905' && cardNumber.length === 18) {
    	return 'Switch';
  } else if (firstFour === '4905' && cardNumber.length === 19) {
    	return 'Switch';
  } else if (firstFour === '4911' && cardNumber.length === 16) {
    	return 'Switch';
  } else if (firstFour === '4911' && cardNumber.length === 18) {
    	return 'Switch';
  } else if (firstFour === '4911' && cardNumber.length === 19) {
    	return 'Switch';
  } else if (firstFour === '4936' && cardNumber.length === 16) {
    	return 'Switch';
  } else if (firstFour === '4936' && cardNumber.length === 18) {
    	return 'Switch';
  } else if (firstFour === '4936' && cardNumber.length === 19) {
    	return 'Switch';
  } else if (firstSix === '564182' && cardNumber.length === 16) {
    	return 'Switch';
  } else if (firstSix === '564182' && cardNumber.length === 18) {
    	return 'Switch';
  } else if (firstSix === '564182' && cardNumber.length === 19) {
    	return 'Switch';
  } else if (firstSix === '633110' && cardNumber.length === 16) {
    	return 'Switch';
  } else if (firstSix === '633110' && cardNumber.length === 18) {
    	return 'Switch';
  } else if (firstSix === '633110' && cardNumber.length === 19) {
    	return 'Switch';
  } else if (firstFour === '6333' && cardNumber.length === 16) {
    	return 'Switch';
  } else if (firstFour === '6333' && cardNumber.length === 18) {
    	return 'Switch';
  } else if (firstFour === '6333' && cardNumber.length === 19) {
    	return 'Switch';
  } else if (firstFour === '6759' && cardNumber.length === 16) {
    	return 'Switch';
  } else if (firstFour === '6759' && cardNumber.length === 18) {
    	return 'Switch';
  } else if (firstFour === '6759' && cardNumber.length === 19) {
    	return 'Switch';
  } else if (firstNum === '4' && cardNumber.length === 13) {
    return 'Visa';
  } else if (firstNum === '4' && cardNumber.length === 16) {
    return 'Visa';
  } else if (firstNum === '4' && cardNumber.length === 19) {
    return 'Visa';
  } if (firstDigits === '51' && cardNumber.length === 16) {
    return 'MasterCard';
  } else if (firstDigits === '52' && cardNumber.length === 16) {
    return 'MasterCard';
  } else if (firstDigits === '53' && cardNumber.length === 16) {
    return 'MasterCard';
  } else if (firstDigits === '54' && cardNumber.length === 16) {
    return 'MasterCard';
  } else if (firstDigits === '55' && cardNumber.length === 16) {
    return 'MasterCard';
  } else if (firstFour === '6011' && cardNumber.length === 16) {
    return 'Discover';
  } else if (firstFour === '6011' && cardNumber.length === 19) {
    return 'Discover';
  } else if (firstThree === '644' && cardNumber.length === 16) {
    return 'Discover';
  } else if (firstThree === '644' && cardNumber.length === 19) {
    return 'Discover';
  } else if (firstThree === '645' && cardNumber.length === 16) {
    return 'Discover';
  } else if (firstThree === '645' && cardNumber.length === 19) {
    return 'Discover';
  } else if (firstThree === '646' && cardNumber.length === 16) {
    return 'Discover';
  } else if (firstThree === '646' && cardNumber.length === 19) {
    return 'Discover';
  } else if (firstThree === '647' && cardNumber.length === 16) {
    return 'Discover';
  } else if (firstThree === '647' && cardNumber.length === 19) {
    return 'Discover';
  } else if (firstThree === '648' && cardNumber.length === 16) {
    return 'Discover';
  } else if (firstThree === '648' && cardNumber.length === 19) {
    return 'Discover';
  } else if (firstThree === '649' && cardNumber.length === 16) {
    return 'Discover';
  } else if (firstThree === '649' && cardNumber.length === 19) {
    return 'Discover';
  } else if (firstDigits === '65' && cardNumber.length === 16) {
    return 'Discover';
  } else if (firstDigits === '65' && cardNumber.length === 19) {
    return 'Discover';
  } else if (firstFour === '6011' && cardNumber.length === 19) {
    return 'Discover';
  } else if (firstFour === '5018' && cardNumber.length === 12) {
    return 'Maestro';
  } else if (firstFour === '5018' && cardNumber.length === 13) {
    return 'Maestro';
  } else if (firstFour === '5018' && cardNumber.length === 14) {
    return 'Maestro';
  } else if (firstFour === '5018' && cardNumber.length === 15) {
    return 'Maestro';
  } else if (firstFour === '5018' && cardNumber.length === 16) {
    return 'Maestro';
  } else if (firstFour === '5018' && cardNumber.length === 17) {
    return 'Maestro';
  } else if (firstFour === '5018' && cardNumber.length === 18) {
    return 'Maestro';
  } else if (firstFour === '5018' && cardNumber.length === 19) {
    return 'Maestro';
  } else if (firstFour === '5020' && cardNumber.length === 12) {
    return 'Maestro';
  } else if (firstFour === '5020' && cardNumber.length === 13) {
    return 'Maestro';
  } else if (firstFour === '5020' && cardNumber.length === 14) {
    return 'Maestro';
  } else if (firstFour === '5020' && cardNumber.length === 15) {
    return 'Maestro';
  } else if (firstFour === '5020' && cardNumber.length === 16) {
    return 'Maestro';
  } else if (firstFour === '5020' && cardNumber.length === 17) {
    return 'Maestro';
  } else if (firstFour === '5020' && cardNumber.length === 18) {
    return 'Maestro';
  } else if (firstFour === '5020' && cardNumber.length === 19) {
    return 'Maestro';
  } else if (firstFour === '5038' && cardNumber.length === 12) {
    return 'Maestro';
  } else if (firstFour === '5038' && cardNumber.length === 13) {
    return 'Maestro';
  } else if (firstFour === '5038' && cardNumber.length === 14) {
    return 'Maestro';
  } else if (firstFour === '5038' && cardNumber.length === 15) {
    return 'Maestro';
  } else if (firstFour === '5038' && cardNumber.length === 16) {
    return 'Maestro';
  } else if (firstFour === '5038' && cardNumber.length === 17) {
    return 'Maestro';
  } else if (firstFour === '5038' && cardNumber.length === 18) {
    return 'Maestro';
  } else if (firstFour === '5038' && cardNumber.length === 19) {
    return 'Maestro';
  } else if (firstFour === '6304' && cardNumber.length === 12) {
    return 'Maestro';
  } else if (firstFour === '6304' && cardNumber.length === 13) {
    return 'Maestro';
  } else if (firstFour === '6304' && cardNumber.length === 14) {
    return 'Maestro';
  } else if (firstFour === '6304' && cardNumber.length === 15) {
    return 'Maestro';
  } else if (firstFour === '6304' && cardNumber.length === 16) {
    return 'Maestro';
  } else if (firstFour === '6304' && cardNumber.length === 17) {
    return 'Maestro';
  } else if (firstFour === '6304' && cardNumber.length === 18) {
    return 'Maestro';
  } else if (firstFour === '6304' && cardNumber.length === 19) {
    return 'Maestro';
}
for (var i = 622126; i <= 622925; i++) {
	var prefix = i.toString();
	if (firstSix === prefix && cardNumber.length === 16) {
		return 'China UnionPay';
  } else if (firstSix === prefix && cardNumber.length === 17) {
		return 'China UnionPay';
	} else if (firstSix === prefix && cardNumber.length === 18) {
		return 'China UnionPay';
	} else if (firstSix === prefix && cardNumber.length === 19) {
		return 'China UnionPay';
	} else if (firstThree === '624' && cardNumber.length === 16) {
    	return 'China UnionPay';
    } else if (firstThree === '624' && cardNumber.length === 17) {
    	return 'China UnionPay';
    } else if (firstThree === '624' && cardNumber.length === 18) {
    	return 'China UnionPay';
    } else if (firstThree === '624' && cardNumber.length === 19) {
    	return 'China UnionPay';
    } else if (firstThree === '625' && cardNumber.length === 16) {
    	return 'China UnionPay';
    } else if (firstThree === '625' && cardNumber.length === 17) {
    	return 'China UnionPay';
    } else if (firstThree === '625' && cardNumber.length === 18) {
    	return 'China UnionPay';
    } else if (firstThree === '625' && cardNumber.length === 19) {
    	return 'China UnionPay';
    } else if (firstThree === '626' && cardNumber.length === 16) {
    	return 'China UnionPay';
    } else if (firstThree === '626' && cardNumber.length === 17) {
    	return 'China UnionPay';
    } else if (firstThree === '626' && cardNumber.length === 18) {
    	return 'China UnionPay';
    } else if (firstThree === '626' && cardNumber.length === 19) {
    	return 'China UnionPay';
    } else if (firstFour === '6282' && cardNumber.length === 16) {
    	return 'China UnionPay';
    } else if (firstFour === '6282' && cardNumber.length === 17) {
    	return 'China UnionPay';
    } else if (firstFour === '6282' && cardNumber.length === 18) {
    	return 'China UnionPay';
    } else if (firstFour === '6282' && cardNumber.length === 19) {
    	return 'China UnionPay';
    } else if (firstFour === '6283' && cardNumber.length === 16) {
    	return 'China UnionPay';
    } else if (firstFour === '6283' && cardNumber.length === 17) {
    	return 'China UnionPay';
    } else if (firstFour === '6283' && cardNumber.length === 18) {
    	return 'China UnionPay';
    } else if (firstFour === '6283' && cardNumber.length === 19) {
    	return 'China UnionPay';
    } else if (firstFour === '6284' && cardNumber.length === 16) {
    	return 'China UnionPay';
    } else if (firstFour === '6284' && cardNumber.length === 17) {
    	return 'China UnionPay';
    } else if (firstFour === '6284' && cardNumber.length === 18) {
    	return 'China UnionPay';
    } else if (firstFour === '6284' && cardNumber.length === 19) {
    	return 'China UnionPay';
    } else if (firstFour === '6285' && cardNumber.length === 16) {
    	return 'China UnionPay';
    } else if (firstFour === '6285' && cardNumber.length === 17) {
    	return 'China UnionPay';
    } else if (firstFour === '6285' && cardNumber.length === 18) {
    	return 'China UnionPay';
    } else if (firstFour === '6285' && cardNumber.length === 19) {
    	return 'China UnionPay';
    } else if (firstFour === '6286' && cardNumber.length === 16) {
    	return 'China UnionPay';
    } else if (firstFour === '6286' && cardNumber.length === 17) {
    	return 'China UnionPay';
    } else if (firstFour === '6286' && cardNumber.length === 18) {
    	return 'China UnionPay';
    } else if (firstFour === '6286' && cardNumber.length === 19) {
    	return 'China UnionPay';
    } else if (firstFour === '6287' && cardNumber.length === 16) {
    	return 'China UnionPay';
    } else if (firstFour === '6287' && cardNumber.length === 17) {
    	return 'China UnionPay';
    } else if (firstFour === '6287' && cardNumber.length === 18) {
    	return 'China UnionPay';
    } else if (firstFour === '6287' && cardNumber.length === 19) {
    	return 'China UnionPay';
    } else if (firstFour === '6288' && cardNumber.length === 16) {
    	return 'China UnionPay';
    } else if (firstFour === '6288' && cardNumber.length === 17) {
    	return 'China UnionPay';
    } else if (firstFour === '6288' && cardNumber.length === 18) {
    	return 'China UnionPay';
    } else if (firstFour === '6288' && cardNumber.length === 19) {
    	return 'China UnionPay';
    } 
}
};

