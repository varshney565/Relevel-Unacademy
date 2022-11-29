/**
 * 
 * Why we need abstraction ???
 * 1. Better Customer Experience.
 *    a)Driving car(we don't need to worry about how things are working internally like how 
 *      much presure i have to apply,how many torc i have to apply and how much rotation ??
 *      we don't need to care about those things.)
 *    b)Facebook
 *       v1  : 
 *       v2  : 
 *       v3  : 
 *       v4  : 
 *       v5  : 
 *       v6  : 
 *       ........
 *       v12 : 
 *         
 *       In all the versions users gonna see the same username , password , submit button
 *       In all different versions ...   
 * 
 *       If Let say facebook told in v1 we use some method for login and now in v2 user has to login
 *       in different way,then noone gonna use the facebook ...
 * 2. Security 
 *    Let say end user know the encrypting algorithem of facebook,than facebook data is no 
 *    more safe,everyone has access to everyone's account.
 *    
 */


function Login(username,password){
    this.username = username;
    this.password = password;
}


//won't be visible to everyone 
Login.prototype.loginLogic = function(){
    console.log("Logic to login to the facebook");
}

const LoginObj = new Login("shivam",12345);
console.log(LoginObj);