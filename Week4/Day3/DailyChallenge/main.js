// part 1
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];



function getCarHonda(carInventory) {
    let honda = carInventory.find(car => car.car_make=="Honda");
    return `This is a ${honda.car_make} ${honda.car_model} from ${honda.car_year}.`;
}
getCarHonda(inventory);


// part 2
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];


function sortCarInventoryByYear(carInventory) {
carInventory.sort(function (x,y) {
    return x.car_year - y.car_year;
});
return carInventory
}

sortCarInventoryByYear(inventory);