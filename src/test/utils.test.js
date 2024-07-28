const Utils = require('../utils');

describe('Utils', () => {
  test('parses valid arguments with value', () => {
    const args = ['node', 'app.js', '--filter=ry'];
    const result = Utils.parseArguments(args);
    expect(result).toEqual({ command: '--filter', value: 'ry' });
  });

  test('parses valid arguments without value', () => {
    let args = ['node', 'app.js', '--count'];
    let result = Utils.parseArguments(args);
    expect(result).toEqual({ command: '--count', value: null });
    args[2] = '--filter='
    result = Utils.parseArguments(args);
    expect(result).toEqual({ command: '--filter', value: ''});
  });

  test('throws error for invalid arguments', () => {
    expect(() => {
    const args = ['node', 'app.js'];
      Utils.parseArguments(args);
    }).toThrow('Arguments invalides');
  });

  test('throws error for invalid arguments 2', () => {
    expect(() => {
    const args = ['node', 'app.js', '-count'];
      Utils.parseArguments(args);
    }).toThrow('Argument non valide. Utilisez le format --commande ou --commande=valeur');
  });

  test('throws error for invalid arguments format', () => {
    let args = ['node', 'app.js', '--filter'];
    expect(() => Utils.parseArguments(args)).toThrow("Argument non complet")
  });
});
