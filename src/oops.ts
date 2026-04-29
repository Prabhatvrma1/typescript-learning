//interface for function shapes

interface mathoperation{
    (a:number, b:number):number
}

const addMath:mathoperation = (a, b) => {
    return a + b;
}

const subtract:mathoperation = (a, b) => {
    return a - b;
}



//opetional and readonly  properties

interface product{
    id:number,
    name:string,
    price:number,
    description?:string, // optional property
    readonly sku:string // readonly property
}

let product1:product = {
    id: 1,
    name: "Product 1",
    price: 100,
    sku: "SKU001"
}
product1.description = "This is product 1"; // valid\
//product1.sku = "SKU002"; // error because sku is readonly

//etending interfaces
interface electronic extends product{
    warranty: number
}

const electronic1:electronic = {
    id: 2,
    name: "Electronic 1", 
    price: 200,
    sku: "SKU002",
    warranty: 12,
}


class bankaccount{
    private balance: number = 0 ;
    deposit(amount: number): void{
        this.balance += amount;
    }
    withdraw(amount: number): void{
        this.balance -= amount;
    }
    showbalance(): number{
        return this.balance;
    }
}
const account = new bankaccount();
account.deposit(100);
account.withdraw(30);
console.log(account.showbalance()); // 70


class employee{
    constructor(public  name:string , public id:number){

    }
}

class manager extends employee{
    constructor(name:string, id:number, public department:string){
        super(name, id);
    }
    displayInfo(): string{
        return `Manager Name: ${this.name}, ID: ${this.id}, Department: ${this.department}`;
    }  
}

const manager1 = new manager("Alice", 1, "HR");
console.log(manager1.displayInfo()); // Manager Name: Alice, ID: 1, Department: HR



//abstract class 

// abstract class shape{
//     abstract area(): number;
//     abstract perimeter(): number;
// }





