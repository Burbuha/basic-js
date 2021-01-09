const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach((item) => {
    item.forEach((e) => {
      if (e && e === "^^") {
        count++;
      }
    });
  });
  return count;
};
