import { Calculator } from "./calculator"

describe('Test for calculator', () => {
  it('#multiply should return a nine', () => {
    /// AAA
    const calculator = new Calculator();

    const rta = calculator.multiply(3,3);

    expect(rta).toEqual(9);
  });

  it('#divide should return a some numbers', () => {
    /// AAA
    const calculator = new Calculator();

    expect(calculator.divider(6,3)).toEqual(2);
    expect(calculator.divider(5,2)).toEqual(2.5);

  });

  it('tests matchers', () => {

    let name = 'manchitas';
    let name2;

    expect(name).toBeDefined();
    expect(name2).toBeUndefined();

    expect(5).toBeLessThan(10); // 5 es mejor que 10?
    expect(20).toBeGreaterThan(10); // 5 es mejor que 10?
    expect(['apples', 'oranges', 'pears']).toContain('oranges');

  });

})
