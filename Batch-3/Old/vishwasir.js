const name = "shivam";
console.log(name);

function func(){
	let name = "vishwa";
	let age = 20;
	console.log(name);
	console.log(age);
}

func();
console.log(name);


// {
// 	var t = 20;
// 	console.log(t);
// }
// console.log(t);







// class Teacher{
// 	#age = 87;
// 	constructor(name){
// 		this.name = name;
// 	}
// }

// const obj = new Teacher("shivam");
// console.log(obj);
// console.log(obj.age);










// function a(i,j,k){
// 	return i+j+k;
// }


// function a(i,j){
// 	return i+j;
// }

// console.log(a(2,3,5));










// class Sugar{
// 	#q;
// 	constructor(q){
// 		this.#q = q;
// 	}

// 	getsugar(){
// 		return this.#q;
// 	}

// 	change(){
// 		this.#q -= 1;
// 	}
// };

// const o = new Sugar(23);
// console.log(o.getsugar());
// o.change();
// console.log(o.getsugar());








// class Student{
// 	static count = 0;
// 	constructor(){
// 		Student.count += 1;
// 	}

// 	static totalStudents(){
// 		return Student.count;
// 	}
// }


// const obj1 = new Student();
// const obj2 = new Student();
// const obj3 = new Student();
// const obj4 = new Student();
// console.log(Student.totalStudents());








// function Crickter(name,age){
// 	this.name = name;
// 	this.age = age;
// }

// Crickter.prototype.team = "India";
// const a = new Crickter("Virat",33);
// const b = new Crickter("Rohit",34);
// const c = new Crickter("Dhoni",40);
// console.log(a);
// console.log(a.team);
// console.log(Crickter.prototype.team);
// console.log(Crickter.prototype);
// a.__proto__.paisa = 2000000000;
// console.log(a.__proto__);
// console.log(a.__proto__.__proto__);
// console.log(a.__proto__.__proto__.__proto__);
// console.log(a.__proto__.__proto__.__proto__);
// console.log(Crickter.prototype);










// function greet(func){
// 	func(2,3);
// 	console.log("Inside Greet");
// }

// greet(function func(a,b){
// 	console.log(a+b);
// })









// function Vishwa(){
// 	setTimeout(function(){
// 		return "HaHa";
// 	},2000);
// }


// const ans = Vishwa();
// console.log(ans);
// setTimeout(function(){
// 	console.log(ans);
// },3000);





// async function call(){
// 	const P = await new Promise(function(resolve,reject){
// 		ans = true;
// 		setTimeout(function(){
// 			if(ans){
// 				resolve("YES");
// 			}else{
// 				reject("NO");
// 			}
// 		},2000);
// 	});
// 	console.log("Balle Balle");
// 	return P;
// }


// const val = call();
// console.log(val);
// val.then(function(msg){
// 	console.log(msg);
// })






// const person = {
// 	name : "shivam",
// 	location : "Kuruksheta",
// 	intro : function(){
// 		console.log(this.name + " lives in " + this.location);
// 	}
// };


// person.intro();
// const func = person.intro;
// func();
// const fun = person.intro.bind(person);
// fun();
// person.name = "shivam varshney";
// fun();












// class Animal{
// 	static color = "Blue";
// 	time = 2;
// 	name = "parent";
// 	constructor(age){
// 		this.age = age;
// 	}
// 	eat(){
// 		console.log("Eating the food");
// 	}
// };

// class Dog extends Animal{
// 	constructor(age){
// 		super(age);
// 	}
// };


// const dog = new Dog(34);
// dog.eat();
// console.log(Dog.color);
// console.log(dog.time);
// console.log(dog.age);


// const animal = new Animal(22);
// console.log(animal);









// const pro = new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 		console.log("****");
// 		resolve("hello");
// 	},2000);
	
// 	console.log("Gone");
// });

// console.log(pro);

// pro.then(function(msg){
// 	console.log(msg)
// });



// const pro = new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 		console.log("****");
		
// 	},2000);
// 	resolve("hello");
// 	console.log("Gone");
// });

// console.log(pro);

// pro.then(function(msg){
// 	console.log(msg)
// });

