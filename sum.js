var arr = [1,2,3,4,5]
function sumOfArray(arr) {
		if(arr.length == 0) {
			return 0
		}
		else {
		    return arr[0] + sumOfArray(arr.slice(1))
		}
}
console.log(sumOfArray(arr))
