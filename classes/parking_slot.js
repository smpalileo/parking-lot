const moment = require("moment");

class ParkingSlot {
  constructor({ id, size, distances, occupied }) {
    this.id = id; // integer
    this.size = size; // integer enum
    this.distances = distances; // array of integers, length equal to entry_points
    this.occupied = occupied; // boolean
  }

  toggleOccupied = () => {
    this.occupied = !this.occupied;
    return this;
  };
}

module.exports = { ParkingSlot };
