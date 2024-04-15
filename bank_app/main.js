class bankaccount1{
    constructor(accountno,accountname,balance){
        this.balance =balance;
        this.accountno=accountno;
        this.accountname=accountname;

    }
    Deposit(amount){
        this.balance+=amount;

    }
    withdrawal(amount){
        if(amount<=this.balance){
            this.balance-= amount;
        } 
       else{
        console.log("Insufficient balance")
       }

    }
    getbalance(amount){
        return this.balance;
    }
    displayAccountInfo() {
        console.log("Account Name: " + this.accountname);
        console.log("Account Number: " + this.accountno);
        console.log("Balance: " + this.balance);
    }


    }
console.log("display account Info:")
var person01=new bankaccount1(12345,"John Doe",1000);
person01.displayAccountInfo();

console.log("Deposit & withdrawal info:")
person01.Deposit(500);
person01.withdrawal(600);
console.log("Current balance:" + person01.getbalance());

console.log("display account Info:")
var person02=new bankaccount1(678910,"John Danny",600);
person02.displayAccountInfo();

console.log("Deposit & withdrawal info:")
person02.Deposit(300);
person02.withdrawal(550);
console.log("Current balance:" + person02.getbalance());


