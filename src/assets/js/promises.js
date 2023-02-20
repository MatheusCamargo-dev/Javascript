
const print = (...string) => console.log(...string);
const rand = (min = 1000, max = 3000) =>  Math.floor(Math.random() * (max - min) + min) ; 


function wait(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('MSG is NOT STRING');
        setTimeout(() => { 
            resolve(msg);
        }, time);
    });

    
}

// wait('msg 1', rand(), function(){
//     wait('msg 2', rand(), function() {
//         wait('msg 3', rand())
//     })
// })


// NOTE: *** I will only continue (then) with my promise if it resolves (resolve) ***

// Examples promises
wait('Connection with DB...', rand())
    .then(r => {
        print(r)
        return wait('Searching for data...', rand())
    })
    .then(r => {
        print(r)
        return wait('Treating the data...', rand());
    })
    .then( r => {
        print(r)
        return 'Show data on screen'
    }).then((r) => {
        print(r)
        return wait(1111, rand())
    }).then((r) => print(r))
.catch(e => print('ERRO:', e))

print('First resolve')
