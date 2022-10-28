var employees;
readfile();

function getByRole(role){
  console.log("get by role here");
  for(var i = 0; i <employees.employees.length; i++ ){
    if(employees.employees[i].role == role){
      console.log(employees.employees[i].firstName );
    }
    }

}
function readfile(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(){
    var fileContents = this.responseText;
 //   alert(fileContents);
    const employee = JSON.parse(fileContents);
    employees = employee;
   // alert(employee.employees.length);
    for(var i = 0; i <employee.employees.length; i++ ){
      console.log(employee.employees[i].firstName );
    }
    getByRole("Labourer");
// alert("employee: " + employee);
  }
  xhttp.open("GET","staff.json");
  xhttp.send();
// alert("in code");
}