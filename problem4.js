// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
function problem4(inventory){
    try {
        const carYears = inventory.map((cars) => {
            return cars.car_year;
        });
        return carYears;
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    };
}

module.exports.problem4 = problem4;