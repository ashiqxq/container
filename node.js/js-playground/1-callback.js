setTimeout(()=>{

},2000);

const add = (a, b, callback)=>{
    setTimeout(()=>{
        callback(a+b);
    }, 2000);
    console.log("wait for 2 sec")
};

add(1, 2, (sum)=>{
    console.log(sum);
})