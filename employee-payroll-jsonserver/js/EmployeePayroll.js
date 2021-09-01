class EmployeePayroll {
    name;
    picture;
    gender;
    department;
    salary;
    startDate;
    notes;

    constructor(name, picture, gender, department, salary, startDate, notes){
        this.name = name;
        this.picture = picture;
        this.gender = gender;
        this.department = department;
        this.salary = salary;
        this.notes = notes;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        let nameRegex = RegExp('^([A-Z]{1,}[a-z]{2,}$)');
        if (nameRegex.test(name))
            this.name = name;
        else
            throw "Name is invalied";
    }

    getPicture() {
        return this.picture;
    }
    setPicture(picture) {
        this.picture = picture;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getDepartment() {
        return this.department;
    }

    setDepartment(department) {
        this.department = department;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getStartDate() {
        return this.startDate;
    }

    setStartDate(startDate) {
        this.startDate = startDate;
    }

    getNotes() {
        return this.notes;
    }

    setNotes(notes) {
        this.notes = notes;
    }

    toString ()
    {
        return `name = ${this.name} profileImage = ${this.picture}  gender ${this.gender} department = ${this.department} salary = ${this.salary} startDate =  ${this.startDate} notes = ${this.notes} `;
    }
}