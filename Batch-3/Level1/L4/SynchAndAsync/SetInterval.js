function TofirKrna(){
    console.log("Study");
}

const interval = setInterval(TofirKrna,1000);
setTimeout(() => {
    clearInterval(interval);
}, 5000);