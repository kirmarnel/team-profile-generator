const Employee = require("../lib/employee");

describe (Employee, () => {
    describe ('getName', () => {
        it ('should return this.name based on user input', ()=>{
            const name = 'Kirsten';
            const emp = new Employee(name);
            expect(emp.name).toBe(name);
        });
    });
    describe ('getId', () => {
        it ('should return this.id based on user input', ()=>{
            const id = '123';
            const emp = new Employee('Kirsten', id);
            expect(emp.id).toBe(id);
        });
    });
    describe ('getEmail', () => {
        it ('should return this.email based on user input', ()=>{
            const email = 'test@test.com';
            const emp = new Employee('Kirsten', 123, email);
            expect(emp.email).toBe(email);
        });
    });
});













//test should pass when we create an employee
//test should pass when a name is entered
//test should pass when an id is entered
//test should pass when an email is entered
//test should pass when a role is selected
//test should pass for each function running successfully
