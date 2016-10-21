exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var string = str.split('');
    var item = '';
    var count = 1;
    var array = [];
    	string.forEach(function(ltr) {
        if(ltr !== item) {
      		array +=ltr;
          item = ltr;
          count = 1;
        } else if(ltr === item && count < amount) {
      		array +=ltr;
          count++
      }
  	});
    return array;
  },

  wordWrap: function(str, cols) {
    var words = str.split(' ');
    var lineLength = 0;
  	var string = words.map((word) => {
    if (word.length >= cols) {
        word += '\n';
        lineLength = 0;
    	} else if(lineLength + word.length >= cols) {
      	lineLength =+ word.length;
        word = '\n' + word;
      } else {
        if(lineLength > 0) {
        	word = ' ' + word;
        }
        lineLength += word.length;
      }
      return word;
    });
    return string.join('');
  },

  reverseString: function(str) {
    var arr = str.split('');
    arr.reverse();
    var newString = arr.join('');
    return newString;
  }
};
