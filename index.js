const { Vehicle } = require("./classes/vehicle");
const { ParkingLot } = require("./classes/parking_lot");
const { ParkingSlot } = require("./classes/parking_slot");

const moment = require("moment");

const slots = [
  new ParkingSlot({
    id: 0,
    size: 0,
    distances: [0, 1, 2],
    occupied: false,
  }),
  new ParkingSlot({
    id: 1,
    size: 1,
    distances: [1, 2, 3],
    occupied: false,
  }),
  new ParkingSlot({
    id: 2,
    size: 2,
    distances: [2, 3, 4],
    occupied: false,
  }),
  new ParkingSlot({
    id: 3,
    size: 0,
    distances: [3, 4, 5],
    occupied: false,
  }),
  new ParkingSlot({
    id: 4,
    size: 1,
    distances: [4, 5, 6],
    occupied: false,
  }),
  new ParkingSlot({
    id: 5,
    size: 2,
    distances: [1, 0, 1],
    occupied: true,
  }),
  new ParkingSlot({
    id: 6,
    size: 0,
    distances: [2, 1, 2],
    occupied: false,
  }),
  new ParkingSlot({
    id: 7,
    size: 1,
    distances: [3, 2, 3],
    occupied: false,
  }),
  new ParkingSlot({
    id: 8,
    size: 2,
    distances: [4, 3, 4],
    occupied: true,
  }),
  new ParkingSlot({
    id: 9,
    size: 0,
    distances: [5, 4, 5],
    occupied: true,
  }),
  new ParkingSlot({
    id: 10,
    size: 1,
    distances: [2, 1, 0],
    occupied: true,
  }),
  new ParkingSlot({
    id: 11,
    size: 2,
    distances: [3, 2, 1],
    occupied: false,
  }),
  new ParkingSlot({
    id: 12,
    size: 0,
    distances: [4, 3, 2],
    occupied: false,
  }),
  new ParkingSlot({
    id: 13,
    size: 1,
    distances: [5, 4, 3],
    occupied: false,
  }),
  new ParkingSlot({
    id: 14,
    size: 2,
    distances: [6, 5, 4],
    occupied: false,
  }),
]; // 5 slots each per exit for testing

const parkingLot = new ParkingLot({ entry_points: 3, parking_slots: slots });

const testCars = [
  new Vehicle({
    id: 0,
    size: 1,
    entry_point: 0,
    entry_time: null,
    exit_time: null,
    slot: null,
  }),
  new Vehicle({
    id: 1,
    size: 2,
    entry_point: 2,
    entry_time: moment().subtract(5, "hours"),
    exit_time: null,
    slot: 5,
  }),
  new Vehicle({
    id: 2,
    size: 0,
    entry_point: 1,
    entry_time: moment().subtract(24, "hours"),
    exit_time: null,
    slot: 9,
  }),
  new Vehicle({
    id: 3,
    size: 1,
    entry_point: 2,
    entry_time: null,
    exit_time: null,
    slot: null,
  }),
  new Vehicle({
    id: 4,
    size: 0,
    entry_point: 1,
    entry_time: moment().subtract(47, "hours"),
    exit_time: null,
    slot: 10,
  }),
  new Vehicle({
    id: 5,
    size: 2,
    entry_point: 0,
    entry_time: null,
    exit_time: null,
    slot: null,
  }),
  new Vehicle({
    id: 6,
    size: 3,
    entry_point: 2,
    entry_time: null,
    exit_time: null,
    slot: null,
  }),
  new Vehicle({
    id: 7,
    size: 1,
    entry_point: 0,
    entry_time: moment().subtract(28, "hours"),
    exit_time: null,
    slot: 8,
  }),
  new Vehicle({
    id: 8,
    size: 2,
    entry_point: 1,
    entry_time: null,
    exit_time: null,
    slot: null,
  }),
  new Vehicle({
    id: 9,
    size: 0,
    entry_point: 1,
    entry_time: null,
    exit_time: null,
    slot: null,
  }),
];

// console.log(testCars[0].park(parkingLot)); // minimum
testCars[0].park(parkingLot);

console.log(
  `Unparking: Slot ${testCars[0].slot} = ${testCars[0].unpark(parkingLot)}`
); // 40 pesos
console.log(
  `Unparking: Slot ${testCars[1].slot} = ${testCars[1].unpark(parkingLot)}`
);
console.log(
  `Unparking: Slot ${testCars[4].slot} = ${testCars[4].unpark(parkingLot)}`
);
console.log(
  `Unparking: Slot ${testCars[2].slot} = ${testCars[2].unpark(parkingLot)}`
);
console.log(
  `Unparking: Slot ${testCars[7].slot} = ${testCars[7].unpark(parkingLot)}`
);
