const print = (...string) => console.log(...string);

class Person {
    constructor(name, last_name){
        this.name = name;
        this.last_name = last_name;
    }

    get fullName() {
        return this.name+' '+this.last_name
    }
    speak() {
        print(`${this.name}: ....`);
    }

}

const p1 = new Person('Sanji', 'Vinsmoke');
print(p1)
print(p1.fullName)

const _speed = Symbol();

class Car {
    constructor(name, limit_velocity) {
        this.name = name;
        this[_speed] = 0;
        this.limit_velocity = limit_velocity;
    }

    set speed (velocity) {
        if(typeof(velocity) !== 'number') return;
        if(velocity >= 1000 || velocity <= 0) return;
        this[_speed] = velocity;
    }

    get speed() {
        return this[_speed];
    }

    speedUp() {
        if (this[_speed] >= this.limit_velocity) return;
        this[_speed]++;
    }

    speedDown() {
        if (this[_speed] <= 0) return;
        this[_speed]--;
    }

}

const car = new Car ('Tesla', 800);

for(let i=0; i < 200; i++){
    car.speedUp()
}
car.speed = 500;
print(car.speed)