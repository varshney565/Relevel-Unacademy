
/**
 * Manually
 */
console.log("-----------------Manually------------------");
const friend1 = "Hritik";
const friend2 = "Vishal";
const friend3 = "Rahul";
const friend4 = "Badal";
const friend5 = "Mechanical";
const friend6 = "Lovish";

function invitation(friendName){
    console.log(`Hey! ${friendName},You are invited to the party!`);
}

invitation(friend1);
invitation(friend2);
invitation(friend3);
invitation(friend4);
invitation(friend5);
invitation(friend6);


/**
 * Using Array
 */
console.log("------------Using Array--------------");
const friend = ["Hritik","Vishal","Rahul","Mechanical","Lovish"];
for(let i = 0 ; i < friend.length ; i++){
    invitation(friend[i]);
}


/**BREAK TIME QUESTION**/

// n = 5;
// ans = "";
// isEven = 0;
// if(n%2) isEven = 1;
// for(let i = 1 ; i <= n ; i++){
//   for(let j = 1 ; j <= 2*n-1 ; j++){
//     if(j >= n-i+1 && j <= n+i-1){
//        if((i+j+isEven)%2){
//          ans += "*";
//        }else{
//          ans += " ";
//        }
//     }else{
//       ans += " ";
//     }
//   }
//   ans += "\n";
// }

// for(let i = n-1 ; i >= 1 ; i--){
//   for(let j = 1 ; j <= 2*n-1 ; j++){
//     if(j >= n-i+1 && j <= n+i-1){
//        if((i+j+isEven)%2){
//          ans += "*";
//        }else{
//          ans += " ";
//        }
//     }else{
//       ans += " ";
//     }
//   }
//   ans += "\n";
// }
// console.log(ans);



n = 4;
ans = "";

for(let i = 1 ; i <= n ; i++){
  for(let j = 1 ; j <= 2*n-1 ; j++){
    if(j == n-i+1 || j == n+i-1){
        ans += "*";
    }else{
        ans += " ";
    }
  }
  ans += "\n";
}

for(let i = n-1 ; i >= 1 ; i--){
  for(let j = 1 ; j <= 2*n-1 ; j++){
    if(j == n-i+1 || j == n+i-1){
        ans += "*";
    }else{
        ans += " ";
    }
  }
  ans += "\n";
}
console.log(ans);


//Object
//1st way : literal way
const obj = {
  name : "shivam",
  age : 22
};

console.log(obj);

//2nd way
const obj2 = Object.create(obj);
console.log(obj2);
console.log(obj2.__proto__);
obj.name = "vishwa";
console.log(obj);
console.log(obj2.__proto__);