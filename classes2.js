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

 function factoryFactory(type) {

    return function ConstructorFactory(make, model) {
       this.type = type;
       this.make = make;
       this.model = model;
    }
 }
 
 const BikeFactory = factoryFactory("bicycle");
 const CarFactory = factoryFactory("car");
 const BoatFactory = factoryFactory("boat");
 const BlimpFactory = factoryFactory("blimp");
 const TrainFactory = factoryFactory("train");

 //print them in array
 const bicycle1 = new BikeFactory("Pinnarello","Dogma_12");
 const car1 = new CarFactory("Mercedes Benz","Smart");
 const boat1 = new BoatFactory("Bertram","35");
 const blimp1 = new BlimpFactory("Goodyear","A-170L");
 const train1 = new TrainFactory("Talgo","230");

const allVehicles = [
        car1,
        boat1,
        blimp1,
        train1
];

//or like this
 const allVehicles1 = [];

 allVehicles.push(new BikeFactory("Pinnarello","Dogma_12"));
 allVehicles.push(new CarFactory("Mercedes Benz","Smart"));
 allVehicles.push(new BoatFactory("Bertram","35"));
 allVehicles.push(new BlimpFactory("Goodyear","A-170L"));
 allVehicles.push(new TrainFactory("Talgo","230"));


//print with loop all vehicles in the array
 for(vehicle in allVehicles){
    console.log(allVehicles[vehicle]);
}

//or like this
allVehicles1.forEach(function(vehicle) {
    console.log("vehicle", vehicle);
});

// Question: Check the *type* of your factories and of the objects that your factories create - what is the type of a factory and what is the type of a created object? Add your answer as comments into into your solution file.
console.log(typeof BikeFactory); // function
console.log(typeof CarFactory); // function
console.log(typeof BoatFactory); // function
console.log(typeof BlimpFactory); // function
console.log(typeof TrainFactory); // function

console.log(typeof allVehicles[0]); //object
console.log(typeof allVehicles[1]); //object

