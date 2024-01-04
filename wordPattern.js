// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false


var wordPattern = function(pattern, s) {
    const map = new Map();
    const map1 = new Map()
    const splitPattern = pattern.split("")
    const splitString = s.split(" ")
    if(splitPattern.length != splitString.length) return false
    for(let i = 0; i < pattern.length; i++) {
        if(!map.has(splitPattern[i])) map.set(splitPattern[i], splitString[i])
        else if (map.get(splitPattern[i]) != splitString[i]) {
            return false
        }

        if(!map1.has(splitString[i])) map1.set(splitString[i], splitPattern[i])
        else if (map1.get(splitString[i]) != splitPattern[i]) {
            return false
        }
    }
    return true
};
wordPattern("abba", "cat dog dog cat")