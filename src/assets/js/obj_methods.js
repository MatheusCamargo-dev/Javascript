const print = (...string) => console.log(...string);

const product = {
    name: 'cup',
    value: 1.19
}

const other = Object.assign({}, product, {color: 'blue'})
other.value = 1.20


print(product)
print(other)

print(Object.getOwnPropertyDescriptor(other, 'color')) //return property from obj
Object.defineProperty(other, 'color', {
    value: 'red', 
    writable: true, 
    enumerable: true, 
    configurable: true
})
print(Object.getOwnPropertyDescriptor(other, 'color'))

print(Object.values(other))

for(let entry of Object.entries(product)){
    print(entry)
}
