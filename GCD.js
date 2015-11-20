//1st method using recursion

function gcd(num1,num2) {
	if(num2>num1) {
		var temp
		temp = num2
		num2 = num1
		num1 = temp
	}
	var remainder = num1 % num2
	
	console.log("num1 = " + num1 + "num2 = " + num2)
 	var quotient = Math.floor(num1/num2)
	console.log("remainder = " + remainder)
	if(num1 == (quotient * num2) + remainder){
		console.log("num1 = " + num1 + "num2 = " + num2)
		gcd(num2,remainder)
		if(remainder == 0) {
			console.log("GCD is " + num2)
		}
	}
}


gcd(325,25) // GCD is 25



//2nd method using recursion

function gcd1(num1, num2) {
	if (!(num2 % num1)) {
		console.log("GCD is " + num1)
		return;
	}
	gcd1((num2 % num1), num1)
}


gcd1(325, 25) //GCD is 25
