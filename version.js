const packageDetails = require('./package.json');

module.exports.getVersion = () => {
  return packageDetails.version;
}

module.exports.getName = () => {
  return packageDetails.name;
}