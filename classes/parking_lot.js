const moment = require("moment");

class ParkingLot {
  constructor({ entry_points, parking_slots }) {
    this.entry_points = entry_points >= 3 ? entry_points : 3; // integer
    this.parking_slots = parking_slots; // array of objects
  }

  locateNearestParkingSlot = (vehicle) => {
    const sortedByDistance = this.parking_slots.sort((a, b) => {
      return (
        a.distances[vehicle.entry_point] - b.distances[vehicle.entry_point]
      );
    }); // sort array by distance from vehicle's entry point, similar to driving slowly from entry point until you find a suitable parking slot
    for (let i = 0; i < sortedByDistance.length; i++) {
      if (
        sortedByDistance[i].size >= vehicle.size &&
        sortedByDistance[i].occupied == false
      ) {
        sortedByDistance[i].toggleOccupied();
        return sortedByDistance[i].id;
      }
    }
    return null;
  };

  freeParkingSlot = (vehicle) => {
    const slot = this.parking_slots.find((slot) => vehicle.slot == slot.id);
    slot.toggleOccupied();
    const duration = moment.duration(
      vehicle.exit_time.diff(vehicle.entry_time, "hours")
    );
    if (duration <= 3) return 40;
    else {
      if (duration < 24)
        return 40 + (duration - 3) * this.computeCharges(slot.size);
      else if (duration == 24) return 5000;
      else {
        const exceeding = duration % 24;
        const chunks = Math.floor(duration / 24);
        // console.log("chunks", chunks);
        // console.log("exceeding", exceeding);
        // console.log(
        //   "exceeding charge",
        //   exceeding - 3,
        //   this.computeCharges(slot.size),
        //   (exceeding - 3) * this.computeCharges(slot.size)
        // );
        return exceeding <= 3
          ? chunks * 5000 + 40
          : chunks * 5000 +
              40 +
              (exceeding - 3) * this.computeCharges(slot.size);
      }
    }
  };

  computeCharges = (size) => {
    if (size == 0) return 20;
    else if (size == 1) return 60;
    else if (size == 2) return 100;
  };
}

module.exports = { ParkingLot };
