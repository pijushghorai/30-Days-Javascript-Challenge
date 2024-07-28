// Task 9: Dofine a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  #balance;

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
    console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log(myAccount.getBalance());
