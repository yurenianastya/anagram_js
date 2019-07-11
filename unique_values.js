 
function countUniqueValues(numbers){
    
    let unique_pointer = 0;
    
    let scout_pointer = 1;
    
    if (numbers.length < 2) {
      return 0;
    }
    
    while (scout_pointer < numbers.length) {
        
        if (numbers[unique_pointer] === numbers[scout_pointer]) {
          
            scout_pointer++;
        
        }
        
        else {
            
            unique_pointer++;
            
            numbers[unique_pointer] = numbers[scout_pointer]
        
        }
      
    }
    
    return unique_pointer + 1

}

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))
