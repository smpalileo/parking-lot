const moment = require("moment");

class Vehicle {
  constructor({ id, size, entry_point, entry_time, exit_time, slot }) {
    this.id = id; // integer
    this.size = size; // enum []
    this.entry_point = entry_point; // integer
    this.entry_time = entry_time; // moment
    this.exit_time = exit_time; // moment
    this.slot = slot; // integer (id)
  }

  park = (parking_lot) => {
    this.slot = parking_lot.locateNearestParkingSlot(this);
    this.entry_time = moment();
    return this;
  };

  unpark = (parking_lot) => {
    this.exit_time = moment();
    return parking_lot.freeParkingSlot(this);
  };
}

module.exports = { Vehicle };
