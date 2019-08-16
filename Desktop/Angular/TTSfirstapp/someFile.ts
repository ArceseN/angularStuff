function sayHello(person: string): string {
    return "Hello, " + person;
}

var user = "Super Student";

function thingy (){
    document.getElementById("para").innerHTML = sayHello(user)};

//creating a person object with full name and contact info
class Person {
    FirstName: string;
    LastName: string;
    Age: number;
    Phone: number;
    State: string;
    ZipCode: string;
    Occupation: string;

//creating a constructor for the attributes of person object
    constructor(firstName: string, lastName: string, age: number,phone: number, state: string, zipCode: string, occupation: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
        this.Phone = phone;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation;
    }
    //method to return full name of person
    fullName(){
        return "Full name: " + this.FirstName + this.LastName; 
    }
    //method to introduce person with full name, age, home, and job.
    quickIntro(){
        return "Meet" + this.FirstName + this.LastName + "." + "They are " + this.Age + "and live in " + this.State + ". " + "Their job is " + this.Occupation + ".";
    }
    //method to return full name and phone number
    contactInfo(){
        return "You can reach" + this.FirstName + this.LastName + "at " + this.Phone;
    }
}
//creating people 
var jim = new Person("Jim", "Halpert", 32, 111_111_1111, "PA", "18503","Salesperson");
var pam = new Person("Pam", "Beasley", 30, 222_222_2222, "PA", "18503","Receptionist");
var angela = new Person("Angela", "Martin", 34, 333_333_3333, "PA","18503","Accountant"); 
var dwight = new Person("Dwight", "Schrute", 35, 444_444_4444, "PA", "18503", "Assistant Regional Manager"); 

//using person object to create employee object with added hourly wage
class Employee extends Person {
    constructor(
        FirstName: string,
        LastName: string,
        Age: number,
        Phone: number,
        State: string,
        ZipCode: string,
        Occupation: string,
        hourlyWage: number) 
    {super(FirstName, LastName, Age, Phone, State, ZipCode, Occupation);}
    }
    //y: number; 
    //WeeklyWage: number;
    //function to calculate weekly earnings
    function WeeklyWage(hourlyWage: number, y: number): number{
       return hourlyWage * y;}
    