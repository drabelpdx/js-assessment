exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {
    n.filter(function(item) {
      return !item.split('').reduce(function(previous, char) {
        if (previous < 0) { return previous; }
        if (char === '(') { return ++previous; }
        if (char === ')') { return --previous; }
        return previous;
      }, 0);
    });
  }
};
