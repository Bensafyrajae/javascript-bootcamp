
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  function toJs() {
    return new Promise((resolve, reject) => {
      try {
       
        const morseJS = JSON.parse(morse);
        
        
        if (Object.keys(morseJS).length === 0) {
          reject("Error: Morse object is empty!");
        } else {
          resolve(morseJS);
        }
      } catch (error) {
        reject("Error parsing morse JSON: " + error.message);
      }
    });
  }
  
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
    
      const userInput = "Hello"; 
      console.log(`User input: "${userInput}"`);
      
      const lowerCaseInput = userInput.toLowerCase();
      
      const morseTranslation = [];
      
      for (let i = 0; i < lowerCaseInput.length; i++) {
        const char = lowerCaseInput[i];
        
        if (char === ' ') {
          morseTranslation.push(' ');
          continue;
        }
        
        if (morseJS[char] === undefined) {
          reject(`Error: Character "${char}" doesn't exist in the morse code dictionary!`);
          return;
        }
        
        morseTranslation.push(morseJS[char]);
      }
      
      resolve(morseTranslation);
    });
  }
  
  function joinWords(morseTranslation) {
    const morseString = morseTranslation.join('\n');
    
   
    console.log("Morse code translation:");
    console.log(morseString);
    
    return morseString;
  }
  
  console.log("Starting morse code translation...");
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));
  
  console.log("\nTesting with invalid character...");
  toJs()
    .then(morseJS => {
      const userInput = "¡Hola!";
      console.log(`User input: "${userInput}"`);
      
      const lowerCaseInput = userInput.toLowerCase();
      
      const morseTranslation = [];
      
      for (let i = 0; i < lowerCaseInput.length; i++) {
        const char = lowerCaseInput[i];
        
        if (char === ' ') {
          morseTranslation.push(' ');
          continue;
        }
        
        if (morseJS[char] === undefined) {
          throw `Error: Character "${char}" doesn't exist in the morse code dictionary!`;
        }
        
        morseTranslation.push(morseJS[char]);
      }
      
      return morseTranslation;
    })
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));