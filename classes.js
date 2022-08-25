class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getModel(){
    return `this model is ${this.model}`;
  }

  static getClassDetail(){
    return `this is car class`;
  }
}

const car1 = new Car('tata','Nexon') // instantiation

console.log(Car.getModel()); // this model is Nexon
console.log(Car.getClassDetail()); // this is car class

//give error if we call static method of instantiated object
console.log(car1.getClassDetail()); // error - Uncaught TypeError: car1.getClassDetail is not a function
