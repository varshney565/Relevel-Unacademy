//sort()
//only works on array
//will change the original array

let arr = [1,2,5,4,3];
console.log(arr.sort((a,b)=>b-a));

console.log(arr);

//reverse()
//will reverse the original string
//will work only for arrays
let a = [1,2,3,4];
console.log(a.reverse());
console.log(a);


//split()
//will not change the original string
//works only on strings
let ab = "RELEVEL IS A GOOD PLATEFORM";
const op = ab.split('A');
const ot = ab.split(' ');
console.log(ot);
console.log(op);
console.log(ab);

//slice()
//will not change the original array
//work for only array
arr = ["ant","bison","elephant","peacock","dog","cat",5];
console.log(arr.slice(2));
console.log(arr.slice(2,3));
console.log(arr[2].slice(2,7));
console.log(arr.slice(4,2));
console.log(arr);

//Destructuring Object
console.log("Destructuring Objects");
const obj = {
    name : "shivam",
    age : 22,
    salary : 100000000
};

console.log(obj);
let {name,age} = obj;
console.log(name);
console.log(age);
name = "Rahul";
age = 21;
console.log(name);
console.log(age);
console.log(obj);

//WorkBook Class
let person = {
    "brother" : "Priyanshu",
    "sister" : "Mehak",
    "name" : "Dipanshu",
    "age" : 24,
    "hobbies" : [
        "Singing",
        "Trekking"
    ]
}

// let {hobbies:[
//     Hb1,
//     Hb2
// ]} = person;

//or

let {hobbies:{
    0:Hb1,
    1:Hb2
}} = person;
console.log(Hb1);
console.log(Hb2);

let {brother:bro,sister:sis,...restOfDetails} = person;
console.log(typeof(restOfDetails),restOfDetails);

//Every element at even index should be greater //than all the elements at odd index.
const ARR = [1,3,2,2,5,6];
//1 2 2 3 5
//1 3 2 5 2
ARR.sort();
let n = ARR.length;
let i = 0,j = parseInt((n+1)/2);


while(j < n){
  if(i%2 == 1){
    let c = ARR[i];
    ARR[i] = ARR[j];
    ARR[j] = c;
    j++;
  }
  i++;
}
console.log(ARR);



//Q2
const obj1 = {
  "name" : "shivam",
  age : 22,
  branch : "CS"
};

const obj2 = {
  "name" : "shivam",
  age : "22",
  branch : "CS"
}
  
const keys = Object.keys(obj1);
const valu = Object.values(obj1);
const entities = Object.entries(obj1);
console.log(keys);
console.log(valu);
console.log(entities);

m = Object.keys(obj1).length;
n = Object.keys(obj2).length;
if(m != n){
  console.log("d1");
  console.log("Both Objects are differnt");
}else{
  ok = true;
  for(let key in obj1){
    if(obj1[key] == undefined){
      console.log("d2");
      ok = false;
      break;
    }else if(obj1[key] != obj2[key]){
      console.log("d3");
      ok = false;
      break;
    }
  }
  if(ok){
    console.log("Both Objects are equal");
  }else{
    console.log("Both Objects are different");
  }
}



//for of 
//works only on iterable objects like array,string not objects
arr = [1,2,3,4,5];
for(i of arr){
  console.log(i);
}

//for in
//works on both arrays and objects
for(i in arr){
  console.log(i,arr[i]);
}