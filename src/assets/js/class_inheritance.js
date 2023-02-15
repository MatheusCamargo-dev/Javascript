const print = (...string) => console.log(...string);

class electronicDevice {
    constructor(name) {
        this.name = name;
        this.on_off = true;
    }

    turnOn() {
        if (this.on_off) return;
        this.on_off = true;
    }

    turnOff() {
        if (!this.on_off) return;
        this.on_off = false;
    }
}

const cell = new electronicDevice('Cellphone');
cell.turnOff()
print(cell)