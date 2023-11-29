/*Complete any 1 of the following - upload to GitHub and share the link
Question 1
Create an application that asks a user to enter how many subjects they have. 
The application should then ask the user to enter the results for each subject. 
Store these results in an array and print them back to the user along with their overall average and grade for each module.
*/
let resultOfSubjects = [];
let numberOfSubjects;
let sumResults=0;
let overallAverage=0;
let grades = []

function enterResultsOfSubjects(){
numberOfSubjects = prompt("Enter how many subjects you have");
for(i=0;i<numberOfSubjects;i++){
    resultOfSubjects[i]=parseInt(prompt("enter the results for each subject"));
    sumResults+=resultOfSubjects[i];
    if (resultOfSubjects[i] <= 100 && resultOfSubjects[i] >= 80) {
        grade = 'A';
    } else if (resultOfSubjects[i] <= 79 && resultOfSubjects[i] >= 70) {
        grade = 'B';
    } else if (resultOfSubjects[i] <= 69 && resultOfSubjects[i] >= 50) {
        grade = 'C';
    } else if (resultOfSubjects[i] <= 49 && resultOfSubjects[i] >= 40) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    grades[i] = grade;
}
overallAverage=sumResults/numberOfSubjects;
printResults();
}

function printResults(){
    for(i=0;i<numberOfSubjects;i++){
       document.getElementById("main").innerHTML+="<br />" + "For subject #" + (i+1) + " result is " + resultOfSubjects[i] + " and grade is " + grades[i];
    }
    document.getElementById("sumResults").innerHTML="Your overall average is "+ overallAverage;
    
}