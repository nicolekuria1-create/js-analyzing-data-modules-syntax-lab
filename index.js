// Load datejs in Node; browser falls back to native date formatting.
if (typeof require === 'function') {
  try {
    require('datejs');
  } catch (_) {
    // datejs is optional in browser contexts.
  }
}

function formatToday() {
  if (typeof Date.today === 'function') {
    return Date.today().toString('M/d/yyyy');
  }

  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const year = now.getFullYear();
  return month + '/' + day + '/' + year;
}

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const arr of args) {
    if (Array.isArray(arr)) {
      combinedObject.users.push(...arr);
    }
  }

  combinedObject.merge_date = formatToday();

  return combinedObject;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { combineUsers };
}

if (typeof window !== 'undefined') {
  window.combineUsers = combineUsers;
}