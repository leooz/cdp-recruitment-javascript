const CountService = require('../countService');
const { data } = require('../../data');

describe('CountService', () => {
  test('counts people and animals', () => {
    const result = CountService.countPeopleAndAnimals(data);
    expect(result[0].name).toEqual("Dillauti [5]");
    expect(result[1].name).toEqual("Tohabdal [8]");
    expect(result[3].name).toEqual("Zuhackog [7]");
    expect(result[3].people[3].name).toEqual("Fannie Ancillotti [8]");
    expect(result[0].people[0].name).toEqual("Winifred Graham [6]");
    expect(result[0].people[2].name).toEqual("Philip Murray [7]");
  });

  test('returns empty array when data is empty', () => {
    const result = CountService.countPeopleAndAnimals([]);
    expect(result).toEqual([]);
  });

  test('throws error if data is not an array', () => {
    expect(() => {
      CountService.countPeopleAndAnimals(null);
    }).toThrow("Pas de données");
  });
});

