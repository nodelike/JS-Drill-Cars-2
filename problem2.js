// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"
function problem2(inventory){
    try {
        const lastCar = inventory.reduce((acc, curr) => {
            return curr
        });
        return  `Last car is a ${lastCar.car_make} ${lastCar.car_model}`
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    };
}

module.exports.problem2 = problem2;