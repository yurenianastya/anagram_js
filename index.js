function validAnagram(first_string, second_string) {
    
    let first_frequency = {};
    
    let second_frequency = {};
    
     if (first_string.length != second_string.length) {
         
         return false;
     
     }
     
     for (let i = 0; i < first_string.length; i++) {
       
       char = first_string.charAt(i)
       first_frequency[char] = (first_frequency[char] || 0) + 1
       
     }
     
     for (let i = 0; i < second_string.length; i++) {
       
       char = second_string.charAt(i)
       second_frequency[char] = (second_frequency[char] || 0) + 1
       
     }
     
     for (let key in first_frequency) {
         
         if (!(key in second_frequency)) {
             
             return false;
         }
         if (second_frequency[key] !== first_frequency[key]) {
           
           return false;
           
         }
     }
     
     return true;
}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram("rat", "car"))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('textwisttime', 'timewisttext'))
 
