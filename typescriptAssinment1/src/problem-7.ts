{
    //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

    class Car {
        constructor(public make: string, public model: string, public year: number) { }
        getCarAge() {
            const presentDate = new Date().getFullYear()
            const result = presentDate - this.year;
            return ` ${result} (assuming current year is ${presentDate})`
        }
    }

    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge())




  
  
    
   
    // 
    // 
    // 
}