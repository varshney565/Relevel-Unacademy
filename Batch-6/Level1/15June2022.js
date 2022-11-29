//Q1 : count total numnber of ways to arrenge parenthesis

ans = 0;
op = [];
function go(o,c,n,r){
    if(o == n && c == n){
        ans++;
        op.push([...r]);
        return;
    }
    if(o < n){
        r.push("(");
        go(o+1,c,n,r);
        r.pop();
        if(c < o){
            r.push(")");
            go(o,c+1,n,r);
            r.pop();
        }
    }else{
        r.push(")");
        go(o,c+1,n,r);
        r.pop();
    }
}
r = [];
go(0,0,5,r);
console.log(ans);
console.log(op);






//Q2 : Tiling Problem

//given  a 2*n board and tile of 2*1 size
//count number of ways to tile the board

function goo(n){
    if(n == 1){
        return 1;
    }
    if(n == 2){
        return 2;
    }
    return goo(n-1) + goo(n-2);
}
n = 3;
console.log(goo(n));


//Q3 : Lexographical order

arr = [];
n = 10;
for(let i = 1 ; i <= n ; i++){
    arr.push(i.toString());
}
console.log(arr);
arr.sort((x,y)=>{
    for(let i = 0 ; i < Math.min(x.length,y.length) ; i++){
        if(x[i] != y[i]){
            return x[i] - y[i];
        }
    }
    return x.length - y.length;
});
console.log(arr);


//Q4 : generate all permutation of a given array
function generate(arr,s,e){
    if(s == e){
        console.log(arr.join(""));
        return;
    }

    for(let i = s ; i <= e ; i++){
        [arr[i],arr[s]] = [arr[s],arr[i]];
        generate(arr,s+1,e);
        [arr[i],arr[s]] = [arr[s],arr[i]];
    }
}
str = "ABC";
arr = str.split("");
console.log(arr);
n = arr.length;
generate(arr,0,n-1);



//Q5 : Stair Problem

function fo(n){

    if(n == 0){
        return 1;
    }

    if(n <= 2) return n;
    return fo(n-1)+fo(n-2)+fo(n-3);
}
n = 3;
console.log(fo(n));