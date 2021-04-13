const inquirer = require('inquirer'); 
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee')
const managerArray = [];
const engineerArray = [];
const internArray = [];



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
    
managerArray.push(new Manager(response.name, response.id, response.email, response.officeNumber) )
addMember()
  
    })
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
        .then((response)=> {
            engineerArray.push(new Engineer(response.name, response.id, response.email, response.github) )
            addMember()})
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
            .then((response)=> {
                internArray.push(new Intern(response.name, response.id, response.email, response.school) )
                addMember()})
            };
            
   
            getManager()

    const renderManager = () => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${managerArray[0].getName()}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Role: ${managerArray[0].getRole()}</li>
          <li class="list-group-item"> Employee ID: ${managerArray[0].getId()}</li>
          <li class="list-group-item"> Email: ${managerArray[0].getEmail()}</li>
          <li class="list-group-item"> Office Number: ${managerArray[0].getOfficeNumber()}</li>
        </ul>
      </div>`
    }

    const renderEngineer = (engineerArray) => {
        let html = ''
        for (let i=0; i<engineerArray.length; i++){
            html += `<div class="card" style="width: 18rem;">
            <div class="card-header">
              ${engineerArray[i].getName()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"> Role: ${engineerArray[i].getRole()}</li>
              <li class="list-group-item"> Employee ID: ${engineerArray[i].getId()}</li>
              <li class="list-group-item"> Email: ${engineerArray[i].getEmail()}</li>
              <li class="list-group-item"> Github: ${engineerArray[i].getGithub()}</li>
            </ul>
          </div>`
        }
        
        return html
    }

    const renderIntern = (internArray) => {
        let html = ''
        for (let i=0; i<internArray.length; i++){
            html += `<div class="card" style="width: 18rem;">
            <div class="card-header">
              ${internArray[i].getName()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"> Role: ${internArray[i].getRole()}</li>
              <li class="list-group-item"> Employee ID: ${internArray[i].getId()}</li>
              <li class="list-group-item"> Email: ${internArray[i].getEmail()}</li>
              <li class="list-group-item"> School: ${internArray[i].getSchool()}</li>
            </ul>
          </div>`
        }
        
        return html
    }

const createTeam = () => {
   
   const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <style>
            #title {
                text-align: center;
            }
            #main {
                display: flex;
                justify-content: space-between;
                margin: 20px;
              }
        </style>
    </head>
    <body>
    <header>
    <h1 id='title'>Team Profile Generator</h1>
    </header>
    <div id='main'>
    ${renderManager()}
    ${renderEngineer(engineerArray)}
    ${renderIntern(internArray)}
    </div>
    </body>
    </html>`
    fs.writeFile('index.html', html
    
, (error) => {
        if (error) {
            console.log(error)
        }
    })
    
}


























