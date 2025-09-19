class Student {
    #marks;
    constructor(name, age, gender, phone, email, course, marks) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.course = course;
        this.#marks = marks;
    }
    data() {
        console.log(`name ${this.name} age ${this.age} gender ${this.gender} phone ${this.phone} email ${this.email} course ${this.course} marks ${this.getMarks()}`)

    }
    getMarks() {
        return this.#marks;
    }
}
const details = new Student("Ramu", 25, "Male", 9014057080, 'ramudowlapalli999@gmail.com', "MCA", 19);
details.data();
