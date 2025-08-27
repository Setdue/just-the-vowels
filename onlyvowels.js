function getVowels(input) {
    
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

   
    const vowels = "aeiouAEIOU";
    const result = [];

   
    for (let char of input) {
        if (vowels.includes(char)) {
            result.push(char);
        }
    }

    return result;
}


try {
    console.log(getVowels("Hel5lo")); 
    console.log(getVowels("my name is seth "));  
    console.log(getVowels(""));            
    console.log(getVowels("12345 is the way"));       
    console.error(error.message);
} catch(error){
    
}
