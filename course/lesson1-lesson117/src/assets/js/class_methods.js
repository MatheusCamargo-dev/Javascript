const print = (...string) => console.log(...string);

class RemoteControl {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Instance method
    increaseVolume() {
        this.volume += 2;
    }

    decraseVolume() {
        this.volume -= 2;
    }

    // Static Method
    static changeBattery() {
        print('change all.')
    }
}

const control = new RemoteControl('SAMSUNG');

control.increaseVolume()
control.increaseVolume()
RemoteControl.changeBattery()
print(control)