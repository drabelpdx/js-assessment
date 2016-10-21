exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var digit = (num >>> 0).toString(2);
    return digit[(bit-1)];
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    return num.toString(2);
  },

  multiply: function(a, b) {
    var num = a * b;
    return Math.round(num * 10000) / 10000;
  }
};
