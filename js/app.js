// 1-misol
 function capitalizeWords(str) {
    let words = str.split(" ");

     let kattawords = words.map(kattaword => {
         if (kattaword.length === 0) return "";
         return kattaword[0].toUpperCase() + kattaword.slice(1).toLowerCase();
    });

     return kattawords.join(" ");
 }

 let sinow = "Salom dunyo";
 console.log(capitalizeWords(sinow));

// 2-misol 
 function toUpperNames(names) {
     let name = names.map(ism => ism.toUpperCase());
     return name;
 }
 let names = ["assalomu", "alaykum"];
 console.log(toUpperNames(names));

//3-misol
 function countPositive(numbers) {
     let number = numbers.filter(num => num > 0);
     let lengths =number.length;
   return lengths
 }
 son = [2,3,4,-4,-6,-8]
 console.log(countPositive(son));

//4-misol
function removeSpaces(str) {
    let start = str.trim(); 
    let finish = start.replaceAll(" ", ""); 
    return finish;
}

let word = '    Najot Talim    ';
console.log(removeSpaces(word));

//5-misol 
 function hasEvenNumber(arr) {
     let couple = arr.some(son => son%2==0);
     return couple
 }

 const son = [1,2,3,4,5,6,]
 console.log(hasEvenNumber(son));

// 6-misol 
 function removeZeros(arr) {
   return arr.filter((num) => num !== 0);
 }
 console.log(removeZeros([0, 1, 2, 0, 3]));

/// 7-misol 
 function reverseWords(text) {
     let words = text.split(" ");
     let reversedWords = words.map(word => word.split("").reverse().join(""));
     return reversedWords.join(" ");
 }
 console.log(reverseWords("hayr dunyo"));

// 8-misol
 function threeLetterWords(words) {
     let result = words.filter(soz => soz.length ===3)
     return result
 }
  let soz =['ali', 'vali', 'Azizbek', 'azi']
 console.log(threeLetterWords(soz));

// 9-misol 
function doubleNumbers(numbers) {
  return numbers.map(num => num * 2);
}

console.log(doubleNumbers([1, 2, 3]));

// 10-misol 
 function splitChars(str) {
     return str.split("")
 }
 let words='Zubayr'
 console.log(splitChars(words));

// 11-misol 
function onlyIntegers(arr) {
  return arr.filter((num) => Number.isInteger(num));
}
console.log(onlyIntegers([1.5, 2, 3.1, 4, ])); 

//12-misol
function addIndex(arr) {
    return arr.map((value, index) => value+index )

}
let sonlar =[20,40,60,80,100]
console.log(addIndex(sonlar));


//13-misol 
function countA(str) {
    let lower = str.toLowerCase();
    let letters = lower.split("");
   let count = letters.filter(harf => harf === 'a').length;
    return count;
}
let matn = "Assalomu Alaykum";
console.log(countA(matn)); 


//14-misol 
function getInitials(str) {
    let split= str.split(" ")
    let map = split.map(words => words[0])
    let join = map.join('')
    return join
}

let words2="Assalomu Alaykum"
console.log(getInitials(words2));


//15-misol
 function flattenArray(arr) {
     let result = arr.flat()
     return result
 }
 console.log(flattenArray([1, [2, 3], [4, 5]]));

// 17-misol
 function extractNumbers(str) {
     let splitt= str.split('');
     let filterr= splitt.filter(char => !isNaN(char) && char !== ' ')
     let mapp = filterr.map(num => Number(num))
     return mapp
 }
 console.log(extractNumbers("ab1c3d2"));


// 18-misol 
 function specialReverse(str) {
     let words = str.split(" "); 
      words = words.map(word => word.split("").reverse().join(""));
     words[words.length - 1] = words[words.length - 1].toUpperCase();
     return words.join(" "); 
 }
 console.log(specialReverse("salom dunyo js"));


// 19-misol

// 20-misol 
// 1. every() yordamida typeof qiymat 'number' ekanligini tekshiring

function allNumbers(arr) {
   return arr.every(item => typeof item === 'number');
 }
 console.log(allNumbers([1, 2, 3]));
