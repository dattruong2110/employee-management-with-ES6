import Employee from "./Employee.js";

const main = () => {
  let employees = [];

  employees = initEmployee(employees);
  console.log(employees);
  inputEmployees(employees);
  console.log("List employees: ");
  outputEmployess(employees);

  calculateSalary(employees);
  console.log("Calculating salary...");
  outputEmployess(employees);

  sortEmployeeTotalSalary(employees);
  console.log("Sorting employee...");
  outputEmployess(employees);

  console.log("Filtering employee have max salary...");
  employees = searchEmployeeMaxSalary(employees);
  console.log(employees);

  editEmployeeInfo(employees);
  calculateSalary(employees);
  sortEmployeeTotalSalary(employees);

  console.log("Editing employee information...");
  outputEmployess(employees);

  employees = removeEmployee(employees);
  console.log("Removing employee...");
  outputEmployess(employees);
};

const initEmployee = (listEmployee) => {
  let firstEmployee = new Employee(1, "Tý", 550, 15);
  let secondEmployee = new Employee(2, "Tèo", 550, 15);
  let thirdEmployee = new Employee(3, "Tồ", 550, 15);
  listEmployee.push(firstEmployee);
  listEmployee.push(secondEmployee);
  listEmployee.push(thirdEmployee);

  return listEmployee;
};

const inputEmployee = (index) => {
  const id = Number(index + 1);
  const fullName = prompt(`Enter employee [${id}] fullName: `);
  const baseSalary = Number(prompt(`Enter employee [${id}] base salary: `));
  const productQuantity = Number(
    prompt(`Enter employee [${id}] product quantity: `)
  );

  const employee = new Employee(id, fullName, baseSalary, productQuantity);
  return employee;
};

const inputEmployees = (listEmployee) => {
  const n = Number(prompt("Enter number of employee: "));
  let nextIndex = listEmployee.length;

  for (let i = 0; i < n; i++) {
    let newEmployee = inputEmployee(i + nextIndex);
    listEmployee.push(newEmployee);
  }
  return listEmployee;
};

const outputEmployess = (listEmployee) => {
  // for (let i = 0; i < listEmployee.length; i++) {
  //   console.log(listEmployee[i]);
  // }

  listEmployee.forEach((listEmployees) => {
    console.log(listEmployees);
  });
};

const handleCalculateSalary = (baseSalary, productSalary, productQuantity) => {
  const PRODUCT_TARGET = 50;
  const TOTAL_SALARY_DECREASE_10_PERCENT = 0.9;
  const TOTAL_SALARY_INCREASE_10_PERCENT = 0.1;
  let totalSalary = baseSalary + productSalary * productQuantity;

  if (productQuantity < PRODUCT_TARGET) {
    totalSalary = totalSalary * TOTAL_SALARY_DECREASE_10_PERCENT;
  } else if (productQuantity > PRODUCT_TARGET) {
    let exceededTargetProductQty = productQuantity - PRODUCT_TARGET;
    let exceededSalaryTargetProductQty =
      exceededTargetProductQty *
      TOTAL_SALARY_INCREASE_10_PERCENT *
      productQuantity;

    totalSalary = totalSalary + exceededSalaryTargetProductQty;
  } else {
    return totalSalary;
  }

  return totalSalary;
};

const calculateSalary = (listEmployee) => {
  // for (let i = 0; i < listEmployee.length; i++) {
  //   let baseSalary = listEmployee[i].baseSalary;
  //   let productSalary = listEmployee[i].productSalary;
  //   let productQuantity = listEmployee[i].productQuantity;
  //   let totalSalary = handleCalculateSalary(
  //     baseSalary,
  //     productSalary,
  //     productQuantity
  //   );
  //   listEmployee[i].totalSalary = totalSalary;
  // }

  listEmployee.forEach((employee) => {
    let totalSalary = handleCalculateSalary(
      employee.baseSalary,
      employee.productSalary,
      employee.productQuantity
    );

    employee.totalSalary = totalSalary;
    return totalSalary;
  });
};

const sortEmployeeTotalSalary = (listEmployee) => {
  listEmployee.sort((employeeA, employeeB) => {
    employeeA.totalSalary - employeeB.totalSalarySalaryB;
  });
};

const searchEmployeeMaxSalary = (listEmployee) => {
  listEmployee.sort(
    (employeeA, employeeB) => employeeA.totalSalary - employeeB.totalSalary
  );
  let maxTotalSalary = listEmployee[listEmployee.length - 1].totalSalary;
  return listEmployee.filter(
    (employee) => employee.totalSalary === maxTotalSalary
  );
};

const editEmployeeInfo = (listEmployee) => {
  let editingId = Number(prompt("Enter employee id you want to edit: "));
  // for (let i = 0; i < listEmployee.length; i++) {
  //   if (editingId === listEmployee[i].id) {
  //     listEmployee[i].fullName = prompt("Enter fullName you want to edit");
  //     listEmployee[i].baseSalary = Number(
  //       prompt("Enter baseSalary you want to edit")
  //     );
  //     listEmployee[i].productQuantity = Number(
  //       prompt("Enter productQuantity you want to edit")
  //     );
  //   }
  // }

  let editingEmployee = listEmployee.filter(
    (employee) => employee.id === editingId
  );
  editingEmployee.map((employee) => {
    employee.fullName = prompt("Enter new fullname: ");
    employee.baseSalary = Number(prompt("Enter new base salary"));
    employee.productQuantity = Number(prompt("Enter new product quantity: "));

    return employee;
  });
  return listEmployee;
};

const removeEmployee = (listEmployee) => {
  let removeId = Number(prompt("Enter employee id you want to remove: "));
  // for (let i = 0; i < listEmployee.length; i++) {
  //   if (removeId === listEmployee[i].id) {
  //     listEmployee.splice(i, 1);
  //   }
  // }

  return listEmployee.filter((employee) => employee.id !== removeId);
};

main();
