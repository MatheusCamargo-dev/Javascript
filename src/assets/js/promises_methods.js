
const print = (...string) => console.log(...string);
const rand = (min = 1000, max = 3000) =>  Math.floor(Math.random() * (max - min) + min) ; 


function wait(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('MSG is NOT STRING');
        setTimeout(() => { 
            resolve(msg.toUpperCase() + ' i passed this promise ');
        }, time);
    });

    
}

const promises = [
    'first value',
    wait('Promise 1', 3000),
    wait('Promise 2', 500),
    wait('Promise 3', 1000),
    'other value'
]
// Promise.all(promises).then( value => print(value)).catch( e => print(e))

const race = [
    wait('Promise 1', rand()),
    wait('Promise 2', rand()),
    wait('Promise 3', rand()),
]

// Promise.race(race).then( value => print(value)).catch( e => print(e)) //return first promise resolve

const downloadPage = () => {
    const inCache = false;

    if(inCache == undefined) return Promise.reject('ERRO');

    if(inCache) {
        return Promise.resolve('Page in cache')
    } else{
        return wait('Download page', rand());
    }

}

downloadPage().then(r => print(r)).catch( e => print(e))
