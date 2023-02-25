const print = (...string) => console.log(...string);

function Product(name, value, stock){

    this.name = name
    this.value = value
    Object.defineProperty(this, 'stock', {
        enumerable: true, 
        configurable: false, 
        get: function(){
            return stock
        },
        set: function(value) {

            if(typeof(value) === 'number'){
                stock = value
            }else{
                print('Invalid value!')
            }
        }
    })

}

const t_shirt = new Product('T-shirt', 20, 10)
t_shirt.stock = 'string'
print(t_shirt.stock)

function createProduct(name){
    return {
        get name(){
            return name;
        },
        set name(value){
            name = value
        }
    }
}

const p1 = createProduct('T-shirt')
p1.name = 'jfdsjkhfsdkjfh'
console.log(p1.name)