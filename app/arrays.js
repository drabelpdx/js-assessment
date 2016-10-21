exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => arr.indexOf(item),

  sum: function(arr) {
    return arr.reduce(function(sum, number) {
      return sum + number;
    }, 0);
  },

  remove: (arr, item) => arr.filter(thing => thing !== item),

  removeWithoutCopy: function(arr, item) {
    for(var i = 0; i< arr.length; i++){
       while(arr[i] === item) arr.splice(i,1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(function(thing){
      if(thing === item) {
        count += 1;
      }
    });
    return count;
  },

  duplicates: function(arr) {
    var dups = [];
    arr.forEach(function(number, index) {
      if (arr.indexOf(number, index + 1) > -1) {
        if (dups.indexOf(number) === -1) {
          dups.push(number);
        }
      }
    });
    return dups;
  },

  square: function(arr) {
    return arr.map(function(number){
      return number * number;
    });
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce(function(occurs, number, i) {
      if (number === target) {
        occurs.push(i);
      }
      return occurs;
    }, []);
  }
};
