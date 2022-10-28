readfile();
function readfile(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(){
    var fileContents = this.responseText;
 //   alert(fileContents);
    const employee = JSON.parse(fileContents);
    alert(employee.employees.length);
    for(var i = 0; i <employee.employees.length; i++ ){
      console.log(employee.employees[i].firstName );
    }
// alert("employee: " + employee);
  }
  xhttp.open("GET","staff.json");
  xhttp.send();
  alert("in code");
}