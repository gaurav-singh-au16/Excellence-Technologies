// Suppose you have an array of 101 integers. This array is already sorted 
// and all numbers in this array are consecutive. 
// Each number only occurs once in the array except one number 
// which occurs twice. Write a js code to find the repeated number.
// e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);

let arr = [0,1,2,3,4,5,6,7,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr [i-1] != 1) {
        console.log(arr[i])
        break
    }
}
