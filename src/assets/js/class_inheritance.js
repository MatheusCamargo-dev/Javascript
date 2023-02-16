const print = (...string) => console.log(...string);

class electronicDevice {
    constructor(name) {
        this.name = name;
        this.on_off = true;
    }

    turnOn() {
        if (this.on_off){
            print(`${this.name} is already turned on`)
            return;
        } 
        this.on_off = true;
    }

    turnOff() {
        if (!this.on_off) {
            print(`${this.name} is already turned off`)
            return;
        } 
        this.on_off = false;
    }
}

const cell = new electronicDevice('Cellphone');
cell.turnOn() 
cell.turnOff()
cell.turnOff()
print(cell)

class Smartphone extends electronicDevice {
    constructor(brand, color, model = 'iPhone'){
        super()
        this.model = model;
        this.brand = brand;
        this.color = color;
    }

    turnOn() {
        if (this.on_off){
            print(`${this.name} is already turned on`)
            return;
        } 
        this.on_off = true;
    }
}

const smartphone = new Smartphone('apple', 'white');
print(smartphone)

class Tablet extends electronicDevice {
    constructor(color){
        super('Tablet')
        this.color = color;
        this.battery = 100;
    }

    turnOn() {
        if (this.on_off){
            print(`${this.name} is already turned on`)
            return;
        } 

        if(this.battery <= 5){
            print('battery is low')
            return;
        }

        this.on_off = true;
    }

}

const tablet = new Tablet('blue');
tablet.turnOff()
tablet.battery = 5;
tablet.turnOn()