var canConstruct = function(ransomNote, magazine) {
    // const hashMap = new Map();
    // let temp = 0
    // for(let i = 0; i < ransomNote.length; i++) {
    //     hashMap.set(i, ransomNote[i])
    // }
    // for(let i = 0; i < magazine.length; i++) {
    //     const x = hashMap.get(i)
    //     if(x == magazine[i]) temp++
    // }
    // console.log(hashMap)
    // return temp > 1 ? true : false


    // const hashMap = new Map();
    // let temp = 0
    // for(let i = 0; i < ransomNote.length; i++) {
    //     hashMap.set(ransomNote[i], i)
    // }
    // for(let i = 0; i < magazine.length; i++) {
    //     hashMap.get(magazine[i]) ? temp++ : ''
    // }
    // console.log(hashMap)
    // return temp >= ransomNote.length ? true : false

    const ransomCounts = new Map();
    const magazineCounts = new Map();

    // Count characters in ransomNote
    for (const char of ransomNote) {
        ransomCounts.set(char, (ransomCounts.get(char) || 0) + 1);
    }
    console.log(ransomCounts)

    // Count characters in magazine
    for (const char of magazine) {
        magazineCounts.set(char, (magazineCounts.get(char) || 0) + 1);
    }

    // Check if ransomNote can be constructed from magazine
    for (const [char, count] of ransomCounts) {
    	console.log(count, 'count')
        if (count > (magazineCounts.get(char) || 0)) {
            return false;
        }
    }
    return true;


    // alternate solution
    // for (const char of magazine) {
    //     ransomNote = ransomNote.replace(char, "");
    //   }
      
    //   if (!ransomNote) return true;
    //   else return false;
};

canConstruct("aab", "baa")