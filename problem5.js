// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
function problem5(inventory){
    try {
        const filterdCars = inventory.filter((car) => {
            return car.car_year > 2000
        })
        console.log(`There are ${filterdCars.length} cars older than 2000.`);
        return filterdCars;
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    };
}

module.exports.problem5 = problem5;