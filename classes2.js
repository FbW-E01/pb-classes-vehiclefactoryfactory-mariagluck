// Create "factory factory" function that returns a constructor function.
// The factory factory takes in one parameter, "type".
// Each created factory needs to create objects with this given type.
// Each created factory needs to take in three parameters and save them to the created objects:
// - make
// - model

// Use your factory factory to create at least five factories, such as
// - bicycle factory
// - car factory
// - boat factory
// - blimp factory
// - train factory

// Lastly, use those factories to create some vehicles.

// Store all your created vehicles inside one array, loop over that array and print out each vehicle.

// Question: Check the *type* of your factories and of the objects that your factories create - what is the type of a factory and what is the type of a created object? Add your answer as comments into into your solution file.

 function factoryFactory(type) {

    return function ConstructorFunction(make, model) {
       this.type = type;
       this.make = make;
       this.model = model;
    }
 }
 
 const bikeFactory = factoryFactory("bicycle");
 const carFactory = factoryFactory("car");
 const boatFactory = factoryFactory("boat");
 const blimpFactory = factoryFactory("blimp");
 const trainFactory = factoryFactory("train");


 const allVehicles = [];

 allVehicles.push(new bikeFactory("Pinnarello","Dogma_12"));
 allVehicles.push(new carFactory("Mercedes Benz","Smart"));
 allVehicles.push(new boatFactory("Bertram","35"));
 allVehicles.push(new blimpFactory("Goodyear","A-170L"));
 allVehicles.push(new trainFactory("Talgo","230"));

//print with loop all vehicles in the array
 for(vehicle in allVehicles){
    console.log(allVehicles[vehicle]);
}

console.log(typeof bikeFactory); // function
console.log(typeof carFactory); // function
console.log(typeof boatFactory); // function
console.log(typeof blimpFactory); // function
console.log(typeof trainFactory); // function

console.log(typeof allVehicles); //object







