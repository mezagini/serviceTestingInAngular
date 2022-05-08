import { Person } from "./person.model";


describe('Test for Person', () => {
  let person: Person;
  beforeEach(() => {
    person = new Person('Nicolas', 'Molina', 38, 40, 1.65);

  });

  // Pruebas de los atributos que llegan al objeto
  it('attrbs', () => {
    expect(person.name).toEqual('Nicolas');
    expect(person.lastName).toEqual('Molina');
  });

  describe('tests for calcIMC', () => {

    it('should retunr a string: down', () => {
      // Arrange
      person.weigth = 40;
      person.heigth = 1.65;

      //Act
      const rta = person.calcIMC();

      //Assert
      expect(rta).toEqual('down');
    });

  });

});
