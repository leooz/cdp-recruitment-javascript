class FilterService {
  static filterAnimals(data, pattern) {
    if(!data) throw new Error("Pas de données");
    if(!pattern) return data;
    const dataFiltered = data
      .map(country => ({
        name: country.name,
        people: country.people
          .map(person => ({
            name: person.name,
            animals: person.animals.filter(animal => animal.name.includes(pattern))
          }))
          .filter(person => person.animals.length > 0)
      }))
      .filter(country => country.people.length > 0);
    return dataFiltered.length > 0 ? dataFiltered : null; 
  }
}

module.exports = FilterService;
