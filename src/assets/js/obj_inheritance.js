const print = (...string) => console.log(...string);

function Product(name, value){
    this.name = name;
    this.value = value;
 
}

Product.prototype.decreaseValue = function(amount){
    this.value -= amount;
} 

Product.prototype.increaseValue = function(amount){
    this.value += amount;
} 

function Tshirt(name, value, color){
    Product.call(this, name, value)
    this.color = color;
}
Tshirt.prototype = Object.create(Product.prototype);
Tshirt.prototype.constructor = Tshirt;

Tshirt.prototype.increaseValue = function(percentage){ 
    this.value = this.value + ((this.value * percentage) / 100)
} 

const ts1 = new Tshirt('Tank top', 10, 'blue')
ts1.increaseValue(100)
print(ts1)

function Mug(name, value, material, stock){
    Product.call(this, name, value);
    this.material = material;
    this.stock = stock;

    Object.defineProperty(this, 'stock',{
        enumerable: true,
        configurable: false,
        get: function(){
            return stock;
        },
        set: function(value){
            if(typeof value !== 'number') return;
            stock = value;
        }
    })
}
Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const coffeMug = new Mug('Coffe Mug', 10, 'Porcelain', 5);
coffeMug.decreaseValue(5)
coffeMug.stock = 100

print(coffeMug)
print(coffeMug.stock)
