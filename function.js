let student=[{name:"Ramu",marks:80},
    {name:"Ravi",marks:60},
    {name:"Kumar",marks:70}];
    function name(){
        let total=0;
        for(let i=0; i < student.length; i++){
            total=total+student[i].marks;
        } console.log(total);
       let avg=total/student.length
       console.log(avg)
    }  
    name();
    let highestMarks=(student)=>{
        let max=student[0].marks;
        let person=student[0].name;
        for(let i=0;i<student.length;i++){
            if(student[i].marks>max){
                max=student[i].marks;
                person=student[i].name;
            }
        }
        console.log(person);
    } 
    highestMarks(student);
    