let age=years;
try{
    if(age<=18){
        throw new Error("Age cannot be zero or negative");
}
    else if(isNaN (age<=0)){
        throw new Error("Age should be a number");
    }
    else{
        console.log("Age is valid");
    }
}
catch(error){
    console.log(error.message);
}
