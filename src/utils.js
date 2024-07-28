class Utils {

  static parseArguments(args) {
    if (!Array.isArray(args) || args.length < 3) {
      throw new Error('Arguments invalides');
    }
    const commandArgs = args.slice(2);
    if (!commandArgs[0].includes('--')) {
      throw new Error('Argument non valide. Utilisez le format --commande ou --commande=valeur');
    }
    let command;
    let value;
    if(commandArgs[0].includes("=") && commandArgs[0].includes("filter")) {
      [command, value] = commandArgs[0].split('=');
    } else if (commandArgs[0].includes("count")){
      [command, value] = [commandArgs[0],null];
    } 

    return { command, value };
  }
}

module.exports = Utils;

