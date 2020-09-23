
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: "TESTVIN1", make: "infiniti", model: "g37S", mileage: 85000, transmission: "6 speed manual", titleStatus: 'clean'},
        {vin: "TESTVIN2", make: "Yamaha", model: "YZF-R3", mileage: 11000, transmission: "6 speed manual", titleStatus: 'clean'},
        {vin: "TESTVIN3", make: "Dodge", model: "Durango", mileage: 101000, transmission: "Automatic", titleStatus: 'clean'},
      ]);
    });
};
