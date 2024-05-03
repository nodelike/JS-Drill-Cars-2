// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
function problem3(inventory){
    try {
        const carModels = inventory.map((cars) => {
            return cars.car_model;
        });
        return carModels.sort();
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    };
}

module.exports.problem3 = problem3;