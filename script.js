// BANK ACCOUNT

function atm() {
    //const message = parseFloat(prompt("Display message"));
    //we use ParseFloat in order to convert string into numbers; 
    const key = prompt(`ATM choices: 
    1) Check your balance 
    2) Make a deposit 
    3) Make a withdrawal 
    4) Get your account name 
    5) Exit `);
    //I've decided to use switch simply because it seems easier and "cleaner" to me; 
    switch (key) {
         case "1":
        account.getBalance();
        atm();
                break;
          
              case "2":
                account.deposit(prompt("Enter the amount you would like to deposit into your account."));
                atm();
                break;
          
              case "3":
                account.withdraw(prompt("Enter the amount you would like to withdraw from your account."));
                atm();
                break;
          
              case "4":
                account.getAccountName();
                atm();
                break;
          
              case "5":
                break;
            
              case null:
                break;
          
              default:
                alert("Invalid choice. Try again!");
                atm();
                break;
            }
          }

const account = {
    accountName: "Yana",
    // - balance, should be the data type number
// this property should contain the total amount of the account
    balance: 100,
    // - getBalance, should be a function
// this function should display the total amount of the account to the user
    getBalance() {
        alert(this.balance)

    },
// - deposit, also a function
// this function should be able to deposit money onto the balance of the account
    deposit(amount) {
        if (amount != Number(amount) && amount) {
            this.accountError("Please enter a valid number.");
        } else if (amount === "") {
            this.accountError("Please enter a number");
        
        } else if (amount < 0) {
            this.accountError("Please enter a positive number.");
        
        } else {
            this.balance = this.balance + parseFloat(amount) 
            
        }
    },
    withdraw(amount) {
        if (amount != Number(amount) && amount) {
            this.accountError("Please enter a valid number.");
        
        } else if (amount > this.balance) {
            this.accountError("Unable to withdraw an amount larger than your balance");
        
        } else if (amount === "") {
            this.accountError("Please enter a number");
        
        } else if (amount < 0) {
            this.accountError("Please enter a positive number.");
        
        } else {
            this.balance = this.balance - parseFloat(amount)
            
        } 
    
    },

    getAccountName() {
        alert(this.accountName)
    },
    accountError(errorMessage) {
        alert (`Account error: ${errorMessage}`)

    }
}; 

atm();