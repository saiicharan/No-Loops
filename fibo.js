function fibo(n) {
	if(n == 0) {
		return 0
	}
	else {
		var a = 0, b = 1
		var c = a + b
		a = b
		b = c
		return fibo(n-1)
	}
}

console.log(fibo(10))