const FilterService = require('./filterService');
const CountService = require('./countService');

const commandMapper = {
  '--filter': FilterService.filterAnimals,
  '--count': CountService.countPeopleAndAnimals
};

module.exports = commandMapper;

