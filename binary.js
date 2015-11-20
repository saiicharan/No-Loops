var arr = [10,20,30,40,50,60,70,80,90]
var mid,first,last

first = 0
last = arr.length-1

function binary_search(key, first, last) {
	mid = Math.floor((first+last)/2)
	if(arr[mid] == key ) {
		console.log("Key found at " + mid)
		return;
	} else if (last < first) {
		console.log("not found")
		return;
	} else if(key > arr[mid]) {
		binary_search(key,mid +1,last)
	} else {
		binary_search(key,first,mid -1)
	}
}

binary_search(98, 0, arr.length-1)
