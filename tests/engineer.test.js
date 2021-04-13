const Engineer = require("../lib/engineer");

describe ('getGithub', () => {
    it ('should return this.github based on user input', ()=>{
        const github = 'username'
        const eng = new Engineer('Kirsten', 123, 'test@test.com', github);
        expect(eng.github).toBe(github);
    });
});