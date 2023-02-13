const print = (...string) => console.log(...string);

const persons = [
    {id: 3, name: 'Luffy'},
    {id: 2, name: 'Zoro'},
    {id: 1, name: 'Sanji'},
]

const newsP = new Map();

for (const person of persons){
    const { id } = person;
    newsP.set(id, {...person});
}

for (const [i, {id, name}] of newsP){
    print(i, id, name)
}

for (const key of newsP.keys()){
    print(key)
}

for (const values of newsP.values()){
    print(values)
}

print(newsP.get(1))
print(newsP.delete(2)) //return true or false
print(newsP)