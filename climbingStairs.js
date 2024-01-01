// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step





const map = new Map()
map.set(1,1)
map.set(2,2)
var climbStairs = function(n) {
    // if(n==44)
    // return 1134903170;
    // if(n == 1 || n == 2) {
    //     return n
    // }
    // if(n > 2) {
    //     const a = n-1
    //     return climbStairs(a) + climbStairs( a -1 )
    // }
    if(map.has(n)) {
        return map.get(n)
    }
    else {
        let sum = climbStairs(n-1) + climbStairs(n-2);
        map.set(n, sum)
        return sum
    }
};

climbStairs(44)