// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = []; 

  // window prompts for employee information
  let addMoreEmployees = true;
  while (addMoreEmployees) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = parseFloat(prompt("Enter employee's salary:"));

    // Using NaN for salary input information
    if (isNaN(salary)) {
      salary = 0; 
    }

    // employee objects and push to array
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    employeesArray.push(employee);

    // confirmation box to add more employees or not
    addMoreEmployees = confirm("Do you want to add more employees?");
  }

  return employeesArray;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;

  //sum calculations & averaging
  for (let i =0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  
  const averageSalary = totalSalary / employeesArray.length;

  // literal string log
  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
}



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  
    // math methods to get the array length and chose randomly within that length
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
    // pick random employee based
    const randomEmployee = employeesArray[randomIndex];
  
    // logs the full name of the  random employee
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
  }










/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
