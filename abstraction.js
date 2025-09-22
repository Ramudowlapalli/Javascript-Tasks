class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  #startEngine() {
    console.log("Engine started...");
  }

  startCar() {
    this.#startEngine();
    console.log(`${this.brand} ${this.model} is ready to go!`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.startCar();
