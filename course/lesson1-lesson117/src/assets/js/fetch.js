
const print = (...args) => console.log(...args);
const loadResult = document.querySelector('.loadAjax');

const loadElement = (e) => {
    loadResult.innerHTML = e;
}

const loadPage = async (el) => {
    try{
        const href = el.href;
        const r = await fetch(href);

        if (r.status !== 200) throw new Error(`ERROR CODE: ${r.status}!`)

        const html = await r.text()

        loadElement(html);
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