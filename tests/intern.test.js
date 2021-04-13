const Intern = require("../lib/intern");

describe ('getSchool', () => {
    it ('should return this.school based on user input', ()=>{
        const school = 'test university';
        const int = new Intern('Kirsten', 123, 'test@test.com', school);
        expect(int.school).toBe(school);
    });
});
