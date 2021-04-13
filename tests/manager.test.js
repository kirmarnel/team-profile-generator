const Manager = require("../lib/manager");

describe ('getOfficeNumber', () => {
    it ('should return this.officeNumber based on user input', ()=>{
        const officeNumber = 1;
        const man = new Manager('Kirsten', 123, 'test@test.com', officeNumber);
        expect(man.officeNumber).toBe(officeNumber);
    });
});
