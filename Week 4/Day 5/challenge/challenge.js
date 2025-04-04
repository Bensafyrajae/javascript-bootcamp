function isAnagram(str1, str2) {
    
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}


console.log(isAnagram("Astronomer", "Moon starer"));  // true
console.log(isAnagram("School master", "The classroom"));  // true
console.log(isAnagram("The Morse Code", "Here come dots"));  // true
console.log(isAnagram("Hello", "World"));  // false

