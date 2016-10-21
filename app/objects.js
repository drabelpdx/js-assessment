exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: (fn, obj) => fn.apply(obj),

  alterObjects: (constructor, greeting) => constructor.prototype.greeting = greeting,

  iterate: (obj) => {
    var answer = [];
    for (var prop in obj) {
      if ( obj.hasOwnProperty( prop ) ) {
        answer.push(prop + ': ' + obj[prop]);
      }
    } return answer;
  }
};
