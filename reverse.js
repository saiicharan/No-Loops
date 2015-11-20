var arr = [1,2,3,4,5]
var newArr = []
function reverse(arr) {
	if(arr.length == 0){
		return 0
	}
	var ele = arr.pop()
	newArr.push(ele)
	reverse(arr)
}
reverse(arr)
console.log(newArr)
