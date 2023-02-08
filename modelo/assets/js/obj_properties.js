const print = (...string) => console.log(...string);

function Product(name, value, stock){

    Object.defineProperty(this, 'stock', {
        enumerable: true, //show key
        value: stock, //value from key
        writable: false, // -> control if this property can or not get edit values
        configurable: false // -> control if this key can or not delete/(edit or new) values
    })

    Object.defineProperties(this, {
        name: { 
            enumerable: true, //show key
            value: name, //value from key
            writable: true, // -> control if this property can or not get edit values
            configurable: true
        },
        value: {
            enumerable: true, //show key
            value: value, //value from key
            writable: false, // -> control if this property can or not get edit values
            configurable: true
        }
    });

}

const t_shirt = new Product('T-shirt', 20, 3)
t_shirt.stock = 10
t_shirt.name = 'T-shirt blue'
delete t_shirt.stock;

print(Object.keys(t_shirt))

for (let key in t_shirt){
    print(key)
}

print(t_shirt)