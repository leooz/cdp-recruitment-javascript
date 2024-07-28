const FilterService = require('../filterService');
const { data } = require('../../data');

describe('FilterService', () => {
  test('filters animals by pattern', () => {
    const pattern = 'ry';
    let result = FilterService.filterAnimals(data, pattern);
    expect(result).toEqual([
      {
        name: 'Uzuzozne',
        people: [
          {
            name: 'Lillie Abbott',
            animals: [
              { name: 'John Dory' }
            ]
          }
        ]
      },
      {
        name: 'Satanwi',
        people: [
          {
            name: 'Anthony Bruno',
            animals: [
              { name: 'Oryx' }
            ]
          }
        ]
      }
    ]);


    result = FilterService.filterAnimals(data, "di");
    expect(result).toEqual([
      {
        name: 'Uzuzozne',
        people: [
          {
            name: 'Lina Allen',
            animals: [
              { name: 'Jaguarundi' }
            ]
          }
        ]
      }]);
  });

  test('returns empty array when no animals match the pattern', () => {
    const pattern = 'xyz';
    const result = FilterService.filterAnimals(data, pattern);
    expect(result).toEqual(null);
  });

  test('returns all animals when pattern is empty string', () => {
    const pattern = '';
    const result = FilterService.filterAnimals(data, pattern);
    expect(result).toEqual(data);
  });

  test('returns all animals when pattern is null', () => {
    const result = FilterService.filterAnimals(data, null);
    expect(result).toEqual(data);
  });


  test('throws error for no data', () => {
    expect(() => {
      FilterService.filterAnimals(null, "")
    }).toThrow("Pas de données")
  });
});
