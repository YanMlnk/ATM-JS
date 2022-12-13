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
        this.balance = this.balance + parseFloat(amount) 
    },
// - withdrawal, also a function
// this function should be able do withdrawal money from the balance of the account
    withdraw(amount) {
        this.balance = this.balance - parseFloat(amount)
    },
// - getAccountName, function as well
// this function should dispaly the account holders name to the user
    getAccountName() {
        alert(this.accountName)
    },
    accountError() {

    }

// - accountError, same as above function!
// this one is a bit tricky... it's up to you to figure out how or what you should use this for.
// HINT: it's more a thinking poblem than a technical problem :)

}; 




atm();



















