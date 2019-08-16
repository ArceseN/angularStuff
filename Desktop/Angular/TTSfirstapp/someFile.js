var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
function thingy() {
    document.getElementById("para").innerHTML = sayHello(user);
}
;
//creating a person object with full name and contact info
var Person = /** @class */ (function () {
    //creating a constructor for the attributes of person object
    function Person(firstName, lastName, age, phone, state, zipCode, occupation) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
        this.Phone = phone;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation;
    }
    //method to return full name of person
    Person.prototype.fullName = function () {
        return "Full name: " + this.FirstName + this.LastName;
    };
    //method to introduce person with full name, age, home, and job.
    Person.prototype.quickIntro = function () {
        return "Meet" + this.FirstName + this.LastName + "." + "They are " + this.Age + "and live in " + this.State + ". " + "Their job is " + this.Occupation + ".";
    };
    //method to return full name and phone number
    Person.prototype.contactInfo = function () {
        return "You can reach" + this.FirstName + this.LastName + "at " + this.Phone;
    };
    return Person;
}());
//creating people 
var jim = new Person("Jim", "Halpert", 32, 1111111111, "PA", "18503", "Salesperson");
var pam = new Person("Pam", "Beasley", 30, 2222222222, "PA", "18503", "Receptionist");
var angela = new Person("Angela", "Martin", 34, 3333333333, "PA", "18503", "Accountant");
var dwight = new Person("Dwight", "Schrute", 35, 4444444444, "PA", "18503", "Assistant Regional Manager");
//using person object to create employee object with added hourly wage
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(FirstName, LastName, Age, Phone, State, ZipCode, Occupation, hourlyWage) {
        return _super.call(this, FirstName, LastName, Age, Phone, State, ZipCode, Occupation) || this;
    }
    return Employee;
}(Person));
//y: number; 
//WeeklyWage: number;
//function to calculate weekly earnings
function WeeklyWage(hourlyWage, y) {
    return hourlyWage * y;
}
