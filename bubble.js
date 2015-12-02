var arr=[24,16,12,6]
function bubbleSort(arr){
		if(arr.length === 1){
			return arr
		} else {
			arr = swapAndReplace(arr)
			return bubbleSort(arr.slice(0,-1)).concat(arr.slice(-1))
		}
}
function swapAndReplace(arr) {
	if(arr.length == 1) {
		return arr
	} else if(arr[0] > arr[1]) {
 		temp = arr[0]
		arr[0] = arr[1]
		arr[1] = temp
	}
	return [arr[0]].concat(swapAndReplace(arr.slice(1)))
}	
arr = bubbleSort(arr)
console.log(arr) // [6,12,16,24]