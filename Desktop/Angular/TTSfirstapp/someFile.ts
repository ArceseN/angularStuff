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

    Person jim = new Person;
    class Employee extends Person {
        HourlyWage: number; 
    }
}
