// Find the maximum consecutive 1's in an array of 0's and 1's.
// Example:
// a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
// b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]

let arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// let arr = [0,0,0,0,0,0,0,0,0,1]
// let arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,0]

let ans = 0
let maxOne = 0
for (let i = 1; i < arr.length; i++) {
    if (arr[i] == 1 && arr[i-1] == 1) {
        maxOne += 1
    }
    if (arr[i] == 0 && arr[i-1] == 1) {
        maxOne += 1
    }
    if (arr[i] == 1 && arr[i-1] == 0 && (arr.length-1) == i){
        maxOne += 1
    }
    else if (arr[i] == 0 && arr[i-1] == 0){
        ans = Math.max(ans, maxOne)
        maxOne = 0
    }
    else if (arr[i] == 1 && arr[i-1] == 0){
        ans = Math.max(ans, maxOne)
        maxOne = 0
    }
    else if (arr[i] == 1 && arr[i-1] == 1 && (arr.length-1) == i){
        maxOne += 1
    }
    
    
}
ans = Math.max(ans, maxOne)
console.log(ans)