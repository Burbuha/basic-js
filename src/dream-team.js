const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let secretName = [];
  if (!Array.isArray(members)) return false;
  members.forEach((member) => {
    if (typeof member == "string") {
      secretName.push(member.trim()[0].toUpperCase());
    }
    return secretName;
  });
  return secretName.length ? secretName.sort().join("") : false;
};
