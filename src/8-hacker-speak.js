export const hackerSpeak = (words) => {
  String.prototype.allReplace = function (obj) {
    let stringArr = this;
    Object.keys(obj).forEach((key) => {
      stringArr = stringArr.replace(new RegExp(key, "g"), obj[key]);
    });
    return stringArr;
  };
  return words.allReplace({ "a|A": 4, "e|E": 3, "i|I": 1, "o|O": 0, "s|S": 5 });
};
