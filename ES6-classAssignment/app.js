// 01) Create a Class personAccount
// class PersonAccount {
//     constructor(firstName, lastName, income, incomeDescription, expense, expenseDescription) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.incomes = [{
//             income,
//             incomeDescription
//         }]
//         this.expenses = [{
//             expense,
//             expenseDescription

//         }]
//     }

//     totalIncome(){
//        return console.log("totalIncome")
//     }
//     totalExpense(){  
//         return console.log("totalExpense")
//      }
//      accountBalance(){
//         return console.log("accountBalance")
//      }
// }


// const detail = new PersonAccount("Kamran","Siddiqui",55,000,"HandsomeAmount",25,000,"Extra save");
// console.log(detail);

// 2) Create a automobile class
// class Automobile {
//     constructor(name, model, color, type) {
//         this.name = name
//         this.model = model
//         this.color = color
//         this.type = type
//     }
//     start() {
//         return console.log("Car is ready to drive")
//     }
//     openDoor() {
//         return console.log("Door is open")
//     }
// }

// class Car extends Automobile {
//     constructor(name, model, color, type, doors, maxSpeed) {
//         super(name, model, color, type)
//         this.name = name
//         this.model = model
//         this.color = color
//         this.type = type
//         this.doors = doors
//         this.maxSpeed = maxSpeed

//     }
// }
// class Bus extends Automobile {
//     constructor(name, model, color, type, doors, maxSpeed) {
//         super(name, model, color, type)
//         this.name = name
//         this.model = model
//         this.color = color
//         this.type = type
//         this.doors = doors
//         this.maxSpeed = maxSpeed

//     }
// }

// class Truck extends Automobile {
//     constructor(name, model, color, type, doors, maxSpeed) {
//         super(name, model, color, type)
//         this.name = name
//         this.model = model
//         this.color = color
//         this.type = type
//         this.doors = doors
//         this.maxSpeed = maxSpeed

//     }
// }

// const meraTruck = new Truck("mera",2012,"black","Nissan","2",200);
// console.log(meraTruck)
// meraTruck.openDoor();
// meraTruck.start()