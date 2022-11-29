//Q1 : minimum number of steps needed to reach 1 using /2,/3,-1
let n = 10;
dp = [...Array(n+1)].fill(0);
for(let i = 2 ; i <= n ; i++){
    dp[i] = dp[i-1]+1;
    if(i%2 == 0)
        dp[i] = Math.min(dp[i],dp[i/2]+1);
    if(i%3 == 0)
        dp[i] = Math.min(dp[i],dp[i/3]+1);
}
console.log("minimum steps : ",dp[n]);

//Q2 : combinational sum
const arr = [2,3,6,7,5,4,3,1,2];
let tar = 7;
n = arr.length;
dp = [...Array(n+1)].map(e=>Array(tar+1).fill(-1));
function go(i,sum){
    if(sum < 0){
        return 0;
    }
    if(dp[i][sum] != -1) return dp[i][sum];
    if(i == n){
        if(sum == 0){
            return 1;
        }
        return 0;
    }
    dp[i][sum] = go(i+1,sum);
    dp[i][sum] += go(i+1,sum-arr[i]);
    return dp[i][sum];
}
let ans = go(0,tar);
console.log(ans);

//notes denomanation
notes = [1,2,5,10,20,50,100,200,500,2000];
notes.sort((a,b)=>{
    return b-a;
});
count = 868;
ans = {};
for(let i = 0 ; i < notes.length ; i++){
    if(notes[i] <= count){
        let val = parseInt(count/notes[i]);
        ans[notes[i]] = val;
        count = count-val*notes[i];
    }
}
console.log(ans);
