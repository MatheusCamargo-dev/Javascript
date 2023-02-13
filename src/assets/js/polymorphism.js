const print = (...string) => console.log(...string);

function Account(agency, account, balance){
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = function(value){
    if(value > this.balance ){
        print(`Insufficient balance: R$${this.balance.toFixed(2)}`)
        return;
    }

    this.balance -= value;
    print(this.showBalance());
}

Account.prototype.deposit = function(value){
    this.balance += value;
    print(this.showBalance())
}

Account.prototype.showBalance = function(){
    return `Agn/Acc: ${this.agency} / ${this.account} | ` +
    `Balance: R$${this.balance.toFixed(2)}`
}

function CurrentAccount(agency, account, balance, limit){
    Account.call(this, agency, account, balance);
    this.limit = limit;

}

CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.withdraw = function(value){
    if(value > (this.balance + this.limit)){
        print(`Insufficient balance: R$${this.balance.toFixed(2)}`)
        return;
    }

    this.balance -= value;
    print(this.showBalance());
}

function AgencyAccount(agency, account, balance){
    Account.call(this, agency, account, balance);
}

AgencyAccount.prototype = Object.create(Account.prototype);
AgencyAccount.prototype.constructor = AgencyAccount;


const ca = new CurrentAccount(11, 22, 0, 100);
ca.deposit(10)
ca.withdraw(110)
ca.withdraw(1)

print();

const aa = new AgencyAccount(12, 33, 0);
aa.deposit(10)
aa.withdraw(10)
aa.withdraw(1)