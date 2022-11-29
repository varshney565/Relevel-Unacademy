foo = function(name){
    this.Myname = name;
}

foo.prototype.tellMyName = function(){
    console.log(this.Myname);
}

var fooobj1 = new foo("James");
fooobj1.tellMyName();

