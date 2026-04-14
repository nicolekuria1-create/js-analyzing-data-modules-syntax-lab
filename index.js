// Step 6 (as instructed): require datejs
require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const arr of args) {
    if (Array.isArray(arr)) {
      combinedObject.users.push(...arr);
    }
  }

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = { combineUsers };