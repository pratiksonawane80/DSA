const arr = ["red", "green", "blue", "red", "black", "green", "red", "blue"];

let ans = arr.reduce((acc, cur) => {
    if(acc[cur]) {acc[cur] += 1}
    else {acc[cur] = 1};
    return acc
}, {})

console.log(ans);