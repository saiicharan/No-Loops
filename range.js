//1st method using recursion

 var arr = []
 function range(a,b) {
	arr.push(a)
	//console.log(arr)
	if(a == b){
		return 0
	}
	range(a+1,b)
}

range(12,18)
console.log(arr)

//2nd method using recursion
 function range(a,b) {
	if(a > b)
		return 0
	arr.push(a)
	range(a+1,b)
}
