function sayHello(person: string): string {
    return "Hello, " + person;
}

var user = "Super Student";

document.getElementById("para").innerHTML = sayHello(user);
class Person {
    FirstName: string;
    LastName: string;
    Age: number;
    Phone: number;
    State: string;
    ZipCode: string;
    Occupation: string;

    constructor(firstName: string, lastName: string, age: number,phone: number, state: string, zipCode: string, occupation: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
        this.Phone = phone;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation;
    }
    fullName(){
        return "Full name: " + this.FirstName + this.LastName; 
    }
    quickIntro(){
        return "Meet" + this.FirstName + this.LastName + "." + "They are " + this.Age + "and live in " + this.State + ". " + "Their job is " + this.Occupation + ".";
    }
    contactInfo(){
        return "You can reach" + this.FirstName + this.LastName + "at " + this.Phone;
    }
}

var jim = new Person("Jim", "Halpert", 32, 111_111_1111, "PA", "18503","Salesperson");
var pam = new Person("Pam", "Beasley", 30, 222_222_2222, "PA", "18503","Receptionist");
var angela = new Person("Angela", "Martin", 34, 333_333_3333, "PA","18503","Accountant"); 
var dwight = new Person("Dwight", "Schrute", 35, 444_444_4444, "PA", "18503", "Assistant Regional Manager"); 


class Employee extends Person {
    constructor(
        FirstName: string;
        LastName: string;
        Age: number;
        Phone: number;
        State: string;
        ZipCode: string;
        Occupation: string;
        hourlyWage: number;) 
    {super(FirstName, LastName, Age, Phone, State, ZipCode, Occupation);}
     
    HourlyWage(){

    }
}