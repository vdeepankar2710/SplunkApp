
function getTypesenseType(mongooseType) {
  if (mongooseType === 'String') return 'string';
  if (mongooseType === 'Boolean') return 'bool';

  // Default to 'string' if no mapping is found
  return 'string';
}
module.exports = { getTypesenseType };