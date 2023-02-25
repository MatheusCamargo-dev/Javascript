
const print = (...string) => console.log(...string);
const rand = (min = 1000, max = 3000) =>  Math.floor(Math.random() * (max - min) + min) ; 


function wait(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('MSG is NOT STRING');
            return;
        }
        setTimeout(() => { 
            resolve(msg.toUpperCase());
        }, time);
    });
}

function timer (msg,time) {

    setTimeout(() => { 
        print('after PROMISE');
    }, time-1000);

    setTimeout(() => { 
        print('before PROMISE');
    }, time+1000);

    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(msg.toUpperCase());
        }, time);

    })



}

// wait('promise 1', rand())
//     .then(r => {
//         print(r); 
//         return wait('promise 2', rand())
//     })
//     .then(r =>{
//         print(r)
//         return wait('promise 3', rand())
//     })
//     .then(r => print(r))

async function init() {
    try{
        const r = await wait('promise 1', rand())
        print(r)
    
        const r2 = await wait('promise 2', rand())
        print(r2)
        const r3 = await wait('promise 3', rand())
        print(r3)
        const t = await timer('test promise', rand())
        print('more promise:', t)
        // const erro = await wait(1111, rand())
        // print(erro)
        
    }catch(e){
        print(e)
    }

}

init()