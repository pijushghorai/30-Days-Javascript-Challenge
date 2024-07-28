// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

class Account {
    #balance; // Private field
  
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
  console.log(`Initial balance: ${myAccount.getBalance()}`); 
  
  myAccount.deposit(50);   
  console.log(`Balance after deposit: ${myAccount.getBalance()}`); 
  
  myAccount.withdraw(30);  
  console.log(`Balance after withdrawal: ${myAccount.getBalance()}`); 
  
  myAccount.deposit(200);  
  console.log(`Balance after deposit: ${myAccount.getBalance()}`);
  
  myAccount.withdraw(50);  
  console.log(`Balance after withdrawal: ${myAccount.getBalance()}`); 
  