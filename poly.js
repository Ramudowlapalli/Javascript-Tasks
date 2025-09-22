class car {
   Sound() {
        console.log("Car makes a sound");
    }
}

class Audi extends car {
    Sound() {
        console.log("Audi Sounds");
    }
}

class Benz extends car {
   Sound() {
        console.log("Benz Sounds");
    }
}

const audi = new Audi();
audi.Sound(); 

const benz = new Benz();
benz.Sound();