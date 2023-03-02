import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/bootstrap.css';

document.addEventListener('click', function(e){
    let el = e.target;
    if(el.classList.contains('bi-trash')){
        e.preventDefault()
        var myModalEl = document.getElementById('modalContact')
        let href = el.parentNode.href;
        myModalEl.addEventListener('click', function (event) {
            if(event.target.classList.contains('btn-primary')){
                window.location.href = href;
            }
        })


    }
})