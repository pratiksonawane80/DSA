var isIsomorphic = function(s, t) {
    // const map = new Map();
    // const map2 = new Map();
    // for(let i = 0; i < s.length; i++) {
    //     map.set(s[i], (map.get(s[i]) || 0) + 1)
    //     map2.set(t[i], (map2.get(t[i]) || 0) + 1)
    //     if(map.get(s[i]) != map2.get(t[i])) {
    //         return false;
    //     }
    // }
    // console.log(map, map2)
    // return true
    
    const map = new Map();
    const map1 = new Map()
    for(let i = 0; i < s.length; i++) {
        if(!map.has(s[i])) map.set(s[i], t[i])
        else {
            if(map.get(s[i]) != t[i]){
                return false
            }
        }
        if(!map1.has(t[i])) map1.set(t[i], s[i])
        else {
            if(map1.get(t[i]) != s[i]){
                return false
            }
        }
    }
    return true
};

console.log(isIsomorphic("egg", "add"));