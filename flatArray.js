// Recurssion

const arr = [5,7,[2,[1,10]],[[9,3,4,8],6]]
const newArr = []
function flatArr(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
			flatArr(arr[i])
    }
    else {
    	newArr.push(arr[i])
    }
  }
}
flatArr(arr)
console.log(newArr)