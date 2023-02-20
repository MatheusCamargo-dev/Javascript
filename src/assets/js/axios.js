
const print = (...args) => console.log(...args);
const table = document.querySelector('#person-field');
const thead = document.querySelector('#person-field > thead');
const tbody = document.querySelector('#person-field > tbody');

const init = async () => {
    const r = await axios('../json/person.json')
    loadPersonJson(r.data)
}

const create = (element) => {
    return document.createElement(element);
}    
const loadPersonJson = (json) => {
   
    let tr = create('tr');
    tr.innerHTML = `<td>NAME</td>
                    <td>EMAIL</td>
                    <td>SALARY</td>
                    <td>STATE</td>
                    <td>COMPANY</td>
                    <td>AGE</td>
                    <td>GENDER</td>
                    <td>CPF<td>`;
    thead.appendChild(tr);

    json.forEach(person => {
        insertPerson(person)
    });
}

const insertPerson = (person) => {
    let tr = create('tr');

    for(let data in person){
        let td = create('td');
        td.innerText = person[data]
        tr.appendChild(td)
    }
    
    tbody.appendChild(tr)
}


init()