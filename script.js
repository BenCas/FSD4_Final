class Database {
    constructor(laptop, desktop, users){
    this.laptop = [];
    this.desktop = [];
    this.users = users;
}
addLaptop(amount, laptop) {
    this.laptop.push(...Array(amount).fill(laptop));
}
addDesktop(amount, desktop){ 
    this.desktop.push(...Array(amount).fill(desktop));
}
}

class Laptop extends App{
    constructor(brand, model, warranty){
    this.brand=brand;
    this.model=model;
    this.warranty=warranty;
    }
}
class Desktop extends Laptop{
    constructor(brand, model, warranty){
        super(brand, model, warranty);
    }
}

class Warranty {
    constructor(current, expired, start){
        this.current=current;
        this.expired=expired;
        this.start=start;
    }    
        }
class User{
    constructor(admin, customer){
        this.admin=admin;
        this.customer=customer;
    }
}

function removeLaptops(){
let a = prompt("please enter the Laptop ID you wish to view");
var laptop = [{
    "id": 1,"brand": "Lenovo", "model": 534, "warranty": "expired"
},{ "id": 2,"brand": "HP", "model": 345, "warranty": "expired"
},{ "id": 3,"brand": "Alienware", "model": 456, "warranty": "current"
},{ "id": 4,"brand": "Gateway", "model": 756, "warranty": "current"
},{ "id": 5,"brand": "HP", "model": 987, "warranty": "expired"}
]

if (a =="expired")
{
    alert("Laptop needs to be removed");
}
else  alert("Laptop is in compliance");
}

function removeDesktops(){
let b = prompt("please enter the Desktop ID you wish to view")

var desktop=[{
    "id":1, "brand": "Vaio", "model": 123, "warranty": "current"
},{ "id":2, "brand": "HP", "model": 234, "warranty": "current"
},{ "id":3, "brand": "HP", "model": 567, "warranty": "expired"
},{ "id":4, "brand": "Dell", "model": 987, "warranty": "expired"
},{ "id":5, "brand": "Dell", "model": 657, "warranty": "current"
}]
if (b=="expired")
{
    alert("desktop needs to be removed");
}
else  alert("Desktop is in compliance")
}

const Gateway1 = new Laptop("Gateway", 756, "start" )
const Dell1 = new Laptop("Dell", 876, "start")
const Lenovo1 = new Desktop("Lenovo", 879, "start")
const HP3 = new Desktop("HP", 987, "start")
const database = new Database();
database.addLaptop(1, Gateway1)
database.addLaptop(3, Dell1)
database.addDesktop(5, Lenovo1)
database.addDekstop(2, HP3)

