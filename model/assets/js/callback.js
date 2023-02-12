
const rand = (min = 1000, max = 3000) => {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r)
}

function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if (callback) callback();
    }, rand())
}
function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if (callback) callback();
    }, rand())
}
function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if (callback) callback();
    }, rand())
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('teste')
        })
    })
})
