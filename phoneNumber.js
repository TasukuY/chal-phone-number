// // console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let createPhoneNumber = arr => '(' + arr.slice(0, 3).join('') + ') ' + arr.slice(3, 6).join('') + '-' + arr.slice(5, 10).join('')
console.log(createPhoneNumber(testArr));

// function createPhoneNumber(arr){
//     let phonenumber = '';
//     arr.unshift('(');
//     arr.splice(4, 0, ') ');
//     arr.splice(8, 0, '-')
//     for(let i = 0; i < arr.length; i++){
//         phonenumber += arr[i];
//     }
//     return phonenumber;
// }

const phoneNumber = arr => arr.join('').replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")

console.log(testArr.unshift(100));
