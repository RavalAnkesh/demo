class BankAccount {
    constructor(name, accountNo, balance) {
        this.name = name;            
        this.accountNo = accountNo;   
        this._balance = balance;      
        this.transactions = [];
    }

    deposit(amount) {                
        this._balance += amount;
        this.transactions.push(`Deposited: ${amount}`);
    }

    withdraw(amount) {               
        if (amount > this._balance) {
            this.transactions.push(`Failed withdrawal: ${amount}`);
        } else {
            this._balance -= amount;
            this.transactions.push(`Withdrawn: ${amount}`);
        }
    }

    showBalance() {
        document.write(`<p>Balance: ${this._balance}</p>`);
    }

    showTransactions() {
        document.write("<ul>");
        for (let t of this.transactions) {
            document.write(`<li>${t}</li>`);
        }
        document.write("</ul>");
    }
}

class SavingAccount extends BankAccount {
    constructor(name, accountNo, balance, interestRate) {
        super(name, accountNo, balance);
        this.interestRate = interestRate;
    }

    addInterest() {                  
        let interest = (this._balance * this.interestRate) / 100;
        this.deposit(interest);       
        document.write(`<p>Interest added: ${interest}</p>`);
    }

    showBalance() {                 
        document.write(`<p>Savings Balance: ${this._balance}</p>`);
    }
}

const myAccount = new SavingAccount("Alex", 101, 5000, 5);




document.write(`<p>Account Holder: ${myAccount.name}</p>`);
document.write(`<p>Account Number: ${myAccount.accountNo}</p>`);
document.write(`<p>Initial Balance: ${myAccount._balance}</p>`);

myAccount.deposit(2500);
myAccount.withdraw(2000);
myAccount.addInterest(); 

document.write("<p>Transactions:</p>");
myAccount.showTransactions();

document.write(`<p>Current Balance: ₹${myAccount._balance}</p>`);

