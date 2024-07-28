const { data } = require("./data");
const commandMapper = require("./src/commandMapper");
const Utils = require("./src/utils");

try {
  const args = Utils.parseArguments(process.argv);
  const { command, value } = args;

  if (command in commandMapper) {
    const result = commandMapper[command](data, value);
    if(result) {
      console.dir(result, { depth: null });
    }
  } else {
    throw new Error("Commande non reconnue");
  }
} catch (error) {
  console.error(error);
}
