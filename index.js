const inquirer = require('inquirer'); 
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const team = [];

// original
const getManager = () => {
inquirer
.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?'
    },

])
.then((response)=> {
    team.push(new Manager(response.name, response.id, response.email, response.officeNumber) )
    addMember()})
};

// opition/comprehensive
addMember = () => {
    inquirer
    .prompt ([
        {
            type: 'list',
            name:  'newMember',
            message: 'What type of employee would you like to add to your team?',
            choices: ['Engineer', 'Intern', 'My team is complete!']
        }
    ]).then(function(response) {
        if(response.newMember === 'Engineer') {
            getEngineer()
        } else if (response.newMember === 'Intern') {
             getIntern()
        } else {
            createTeam()
        }
    })
    }
    const getEngineer = () => {
        inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Engineers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their employee ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is their github username?'
            },
        
        ])
        .then(()=> addMember())
        }

        const getIntern = () => {
            inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your Interns name?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is their employee ID number?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is their email address?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school did they attend?'
                },
            
            ])
            .then(()=> addMember())
            }
const createTeam = () => console.log('Team Created!')

getManager()

























