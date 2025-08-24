console.log('helllo worllddd') //neden " " içinde değil?
console.log("hello worldddd") //fark var mı ?
//araştırdım --> 
/*
const a = "Ahmet'in kalemi"; // içinde ' varsa, dışarıda " iyi olur
const b = 'She said "hello"'; // içinde " varsa, dışarıda ' iyi olur
-------YA DA-------
const name = 'Seher';
console.log(`Merhaba, ${name}!`);
--YANİ
**Backtick (` `) ile yazılır.
**Değişken içeriği ${} ile string’e gömülebilir.
**Çok satırlı string yazılabilir.

*/


//let keyword is better for variable
let name = "Mosh";
console.log(name);

//ts dynamic bir dil!!!!!!

//OBJECTS
let person = {
  name: "Mosh",
  age:30
};

//dot notation    //bu daha kısa ve daha anlaşılır dedi
console.log(person)

//bracket notation
let selection = 'name';
person['name'] = 'Mary';

console.log(person.name);

//ARRAYS
let selectedColors = ["red", "blue"];

selectedColors[2] = "green";
selectedColors[2] = 1;
console.log(selectedColors);

console.log(selectedColors.length) //kaç tane element var içinde mesela
// -----------------------. koyup altta çıkanlara bak. hepsini kullanabilrsin

//--------functions----------
//bunu diğer 60mins ya da diğer videoda daha iyi gördük
