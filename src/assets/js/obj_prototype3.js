const print = (...string) => console.log(...string);

function Product(name, value){
    this.name = name;
    this.value = value;
 
}

Product.prototype.discountValue = function(percentage){
    this.value = this.value - ((this.value * percentage) / 100)
} 

Product.prototype.increaseValue = function(percentage){
    this.value = this.value + ((this.value * percentage) / 100)
} 


const p1 = new Product('Pants', 50);
p1.discountValue(100)

const p2 = {
    name: 'T-shirt',
    value: 10
}
// set prototype for other obj
Object.setPrototypeOf(p2, Product.prototype)

p2.increaseValue(100)

print(p2.value)

const p3 = Object.create(Product.prototype, {
    name: { 
        value: 'shoes'
    },
    value: {
        value: 99,
        writable: true, //needs true
        configurable: true,
        enumerable: true,
    }
})

p3.increaseValue(10)
print(p3.value)