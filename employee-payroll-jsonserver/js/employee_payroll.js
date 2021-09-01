document.getElementById("reset").onclick = function ()
{
    document.getElementById("form").reset();
	alert("Form has been reseted.");
}

document.getElementById("submitButton").onclick = function ()
{
    let name = document.getElementById("name").value;
    let picture = document.querySelector('input[name = profile]:checked').value;
    let gender = document.querySelector('input[name = gender]:checked').value;
    let department = document.querySelector('input[name = department]:checked').value;
    let salary = document.getElementById("salary").value;
    let notes = document.getElementById("notes").value;
    let startDate = new Date(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value), parseInt(document.getElementById("day").value));
	let employee = new EmployeeInfo(name,picture,gender,department,salary,notes,startDate);
	alert(employee.toString());
};