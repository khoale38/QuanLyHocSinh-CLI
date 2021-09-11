var fs = require('fs');
var readlineSync = require('readline-sync');

function showMenu() {
    console.log('1.Show all');
    console.log('2.Create new');
    console.log('3.Save and quit');
    var option = readlineSync.questionInt('Ans: ');
    switch (option) {
        case 1:
            showAll();
            showMenu();
            break;

        case 2:
            createNew();
            console.log(students);
            showMenu();
            break;
        case 3:
            saveAndQuit();
            break;
        default:
            console.log('please type 1 ,2 or 3');
            showMenu();
            break;
    }
}

var students = [];

function loadData() {
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showAll()
{
for (var student of students)
{
    console.log(student.name ,student.age)
}

}

function saveAndQuit()
{
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json',content,{encoding: 'utf-8'});

}

function createNew()
{
    var name = readlineSync.question("Name :");
    var age = readlineSync.question("Age :");
    var student=
    {
        name:name,
        age:parseInt(age)
    };
    students.push(student);
}



function saveAndQuit()
{
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json',content,{encoding: 'utf-8'});

}

function main() {
    loadData();
    showMenu();
}

main();