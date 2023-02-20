
const print = (...args) => console.log(...args);
const loadResult = document.querySelector('.loadAjax');

const request = (obj) =>  {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.open(obj.method, obj.url, true);
        ajax.send();
        ajax.addEventListener('load', () => {
            if(ajax.status >= 200 && ajax.status < 300){
                resolve({
                    response: ajax.responseText,
                    status: 1
                })
            } else{
                reject({
                    code: ajax.status,
                    msg: ajax.statusText,
                    status: 0
                })
            }
        })
    })
    
}

const loadElement = (e) => {
    loadResult.innerHTML = e;
}

const loadPage = async (el) => {
    const href = el.href;
    const objConfig = {
        method: 'GET',
        url: href
    }
    try{
        const r = await request(objConfig);
        if (r.status = 1) loadElement(r.response);
    } catch(e) {
        print(e)
    }
   
}

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadPage(el);
    }
})
