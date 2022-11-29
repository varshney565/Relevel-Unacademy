/**
 * destructive and not destructive methods
 * destructive method     : that will change the original array
 * not destructive method : that will not change the original array
 *  destructive methods                   non destructive methods
 *      push                                  slice
 *      pop                                   join
 *      shift                                 concat
 *      unshift                               split
 *      splice                                includes
 *      reverse                               indexOf
 * 
 *      
 * 
 * 
 *      split,slice,reverse done in class
*/




console.log("\n\n\n\n\n\n=============================NON DESTRUCTIVE METHODS=============================\n\n\n\n\n\n");
//Q : How  to concatinate two arrays ??
//Answer : use concat()
console.log("=====================concat=====================\n");
const arr1 = [1,2,3,4,5];
const brr1 = [6,7,8,9,10];
let op = arr1.concat(brr1);
console.log("First Array : ",arr1);
console.log("Second Array : ",brr1);
console.log("After Concat op : ",op);


console.log("=====================slice=====================\n");
const animals = ["elephant","Lion","bison","ant","Zebra","Monkey","Dog","Mouse","Cat"];
console.log("Animals : ",animals);
op = animals.slice(1,4);
console.log("Slice(1,4) : ",op);
op = animals.slice(-3);
console.log("Slice(-3) : ",op);
op = animals.slice(-3,1);
console.log("Slice(-3,1) : ",op);//As it reads from left to right there will be -2 after -3 so it won't be able to find 1 after -3 so that's why it will show []

console.log("=====================join=====================\n");
console.log("array : ",arr1);
op = arr1.join(" --> ");
console.log("output : ",typeof(op)," ",op);


console.log("====================indexOf===================\n");
console.log("Array : ",arr1);
op = arr1.indexOf(9);
console.log("Index Of 9 : ",op);

let text = "Hello world, welcome to the universe.welcome";
console.log("String : ",text);
let result = text.indexOf("welcome");
console.log("Index Of welcome : ",result);
let result2 = text.indexOf("welcome",14);//it will start searching from index 14 default is 0
console.log("Index Of Welcome Starting fromt index 14 : ",result2);

console.log("====================includes==================\n");
console.log("String : ",text);
result = text.includes("welcome",14); //it will start searching from index 14 by defaut it is 0
console.log("welcome is present or not ?? :",result);

console.log("\n\n\n\n\n\n===============================DESTRUCTIVE METHODS===============================\n\n\n\n\n\n");
//Q : How to delete last element of an array ??
//A : use pop()
console.log("=====================pop======================\n");
let arr2 = [1,2,3,4,5,6,7,8,9];
console.log("Before Pop : ",arr2);
arr2.pop();
console.log("after pop : ",arr2);
//what if array is empty and we perfrom pop operation ??
arr2 = [];
arr2.pop();
console.log(arr2);




//Q : How to insert element at the end of an array ??
//A : use push()
console.log("=====================push=====================\n");
let arr3 = [1,2,3,4,5,6,7,8,9];
console.log("Before Push : ",arr3);
arr3.push(10);
console.log("Push : ",arr3);

console.log("=====================shift====================\n");

const narr = [1,2,3,"Sidhu Moose wala","KK"];
console.log("before Shift : ",narr);
narr.shift();
console.log("Shift : ",narr);
narr.shift();
console.log("Shift : ",narr);


console.log("====================unshift===================\n");
//it will add new elemets at the starting of the array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before UnShift : ",fruits);
const newLen = fruits.unshift("Lemon","Pineapple");
//we can pass any number of arguments it will simply add those elements to the 
//starting of the array
console.log("After Unshift : ",fruits);
console.log("new length : ",newLen);
console.log("====================splice====================\n");
/**
 *   Syntax
 *   array.splice(index, howmany, item1, ....., itemX)
 * 
 *   index 	                Required.
 *                          The position to add/remove items.
 *                          Negative value defines the position from the end of the array.
 *   howmany 	            Optional.
 *                          Number of items to be removed.
 *   item1, ..., itemX 	    Optional.
 *                          New elements(s) to be added.
 * 
 *   it will return the array containg removed items
 */

 const fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi","Lichi","Papaya","Grips","Chiku"];
 console.log("Initial Fruit Array : ",fruit);
 fruit.splice(2, 2);
 console.log("Removing 2 items starting from index 2 Fruit Array: ",fruit);
 fruit.splice(2,0,"apple","mango");
 console.log("Adding items at idnex 2 of the Fruit Array : ",fruit);
 fruit.splice(-6,4);
 console.log("After Removing 4 items starting from last 6 index,  Fruit Array: ",fruit);
 fruit.splice(-1,4);
 console.log("After Removing 4 items starting from last 1 index,  Fruit Array: ",fruit);


 console.log("====================reverse====================\n");
 ar = [1,2,3,4,5];
 console.log("arr1 ",ar);
 ar.reverse();
 console.log(ar);
 /*output : 


=============================NON DESTRUCTIVE METHODS=============================






=====================concat=====================

First Array :  [ 1, 2, 3, 4, 5 ]
Second Array :  [ 6, 7, 8, 9, 10 ]
After Concat op :  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
=====================slice=====================

Animals :  [
  'elephant', 'Lion',
  'bison',    'ant',
  'Zebra',    'Monkey',
  'Dog',      'Mouse',
  'Cat'
]
Slice(1,4) :  [ 'Lion', 'bison', 'ant' ]
Slice(-3) :  [ 'Dog', 'Mouse', 'Cat' ]
Slice(-3,1) :  []
=====================join=====================

array :  []
output :  1 --> 2 --> 3 --> 4 --> 5
====================indexOf===================

Array :  [ 1, 2, 3, 4, 5 ]
Index Of 9 :  -1
String :  Hello world, welcome to the universe.welcome
Index Of welcome :  13
Index Of Welcome Starting fromt index 14 :  37
====================includes==================

String :  Hello world, welcome to the universe.welcome
welcome is present or not ?? : true






===============================DESTRUCTIVE METHODS===============================






=====================pop======================

Before Pop :  [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
after pop :  [
  1, 2, 3, 4,
  5, 6, 7, 8
]
[]
=====================push=====================

Before Push :  [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
Push :  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
=====================shift====================

before Shift :  [ 1, 2, 3, 'Sidhu Moose wala', 'KK' ]
Shift :  [ 2, 3, 'Sidhu Moose wala', 'KK' ]
Shift :  [ 3, 'Sidhu Moose wala', 'KK' ]
====================unshift===================

Before UnShift :  [ 'Banana', 'Orange', 'Apple', 'Mango' ]
[ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ]
new length :  6
====================splice====================

Initial Fruit Array :  [
  'Banana', 'Orange',
  'Apple',  'Mango',
  'Kiwi',   'Lichi',
  'Papaya', 'Grips',
  'Chiku'
]
Removing 2 items starting from index 2 Fruit Array:  [
  'Banana', 'Orange',
  'Kiwi',   'Lichi',
  'Papaya', 'Grips',
  'Chiku'
]
Adding items at idnex 2 of the Fruit Array :  [
  'Banana', 'Orange',
  'apple',  'mango',
  'Kiwi',   'Lichi',
  'Papaya', 'Grips',
  'Chiku'
]
After Removing 4 items starting from last 6 index,  Fruit Array:  [ 'Banana', 'Orange', 'apple', 'Grips', 'Chiku' ]
After Removing 4 items starting from last 1 index,  Fruit Array:  [ 'Banana', 'Orange', 'apple', 'Grips' ]
  */