function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phone, state, zipCode, occupation) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
        this.Phone = phone;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation;
    }
    Person.prototype.fullName = function () {
        return "Full name: " + this.FirstName + this.LastName;
    };
    Person.prototype.quickIntro = function () {
        return "Meet" + this.FirstName + this.LastName + "." + "They are " + this.Age + "and live in " + this.State + ". " + "Their job is " + this.Occupation + ".";
    };
    Person.prototype.contactInfo = function () {
        return "You can reach" + this.FirstName + this.LastName + "at " + this.Phone;
    };
    return Person;
}());
