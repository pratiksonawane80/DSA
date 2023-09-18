// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 
const strs = ["flower","flow","flight"];

var longestCommonPrefix = function(strs) {
    let prefix = "";
    lastInd = strs.length - 1
    sorted = strs.sort();
    for(let i = 0; i < sorted[0].length; i++) {
        if(sorted[0].charAt(i) === sorted[lastInd].charAt(i)) {
            prefix += sorted[0].charAt(i)
        }
        else {
            break
        }
    }
    return prefix
};

var longestCommonPrefix = function(strs) {
    let cur = strs[0]
    let temp = ""
    for(let i = 1; i < strs.length; i++){
        for(let j = 0; j < cur.length; j++){
            if(cur[j] == strs[i][j]){
                temp += cur[j]
                console.log(temp)
            } else {
                break
            }
        }
        cur = temp
        temp = ""
    }
    return cur
};