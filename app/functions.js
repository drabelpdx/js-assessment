exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: (fn, obj) => fn.apply(obj),

  functionFunction: function(str) {
    return function(str2) {
    	return `${str}, ${str2}`;
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(item) {
      return function() {
        return fn(item);
      }
    });
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments: function(...args) {
    return args.reduce(function(sum, num) {
      return sum += num;
    }, 0);
  },

  callIt: function(fn, ...args) {
    return fn(...args);
  },

  partialUsingArguments: function(fn) {
    var args = [].slice.call(arguments);
    return function() {
      return fn(...args);
    }
  },

  curryIt: function(fn) {
    return function curried() {
      var args = [].slice.call(arguments);
      return args.length >= fn.length ?
      fn.apply(null, args) :
      function () {
        var rest = [].slice.call(arguments);
        return curried.apply(null, args.concat(rest));
      };
    };
  }
};
