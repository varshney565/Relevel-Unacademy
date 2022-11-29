
//Object-->Litereal way,Constructral way

//freeze,seal,preventExtensions

//map,filter,reduce

//forEach


function Car(n,ver,prop){
    this.name = n;
    this.ver = ver;
    //deep copy
    this.prop = [...prop];
}


//Freeze  =>  can't add,can't change,can't delete.

prop = ["SuperFast","BulletProof"];
C1 = new Car("Ferari",4,prop);
Object.freeze(C1);
C1.prop.push("Coder's ride"); // it will add element at prop as we have freezed it.
                              // we have not changed the reference,as reference is same.
                              // so it will not be counted as a changed value.
prop.push("Amplifier");
console.log(C1);
console.log(prop);


//seal                        //can change,can't add,can't delete

//preventExtension            //can't add ,can update ,can delete

