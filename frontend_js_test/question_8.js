// Assume there is a json object of this format 
// var obj = {
//  “id” : 4, “name” : “abc”,
//  “id” : 10, “name” : “ab2”,
//  “id” : 5, “name” : “abc3”,
//  “id” : 6, “name” : “abc5”
// }
// Write a code to sort the object by id 

// Answer:
// i thik the question is incorrect, beacuse we cannot use same key,
// inside one object, or either we can do same operation in these two diffrent 
// object format, so we cannot sort it because we dont get any ref of all key, 
// always we able to fetch only one key at a time.  
// 1=> Object inside array
var obj = [
     {"id" : 4, "name" : "abc"},
     {"id" : 10,"name" : "abc"},
     {"id" : 5, "name" : "abc"},
     {"id" : 6, "name" : "abc"}
]
// 2=> array inside object
var obj_1 = {
    Array: ["id" = 4, "name" = "abc",
    "id" = 10,"name" = "abc",
    "id" = 5, "name" = "abc",
    "id" = 6, "name" = "abc"]
}
console.log(obj_1)