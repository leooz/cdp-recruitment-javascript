class CountService {
  static countPeopleAndAnimals(data) {
    if(!data) throw new Error("Pas de données")
    return data.map(country => ({
      name: `${country.name} [${country.people.length}]`,
      people: country.people.map(person => ({
        name: `${person.name} [${person.animals.length}]`,
        animals: person.animals
      }))
    }));
  }
}

module.exports = CountService;

