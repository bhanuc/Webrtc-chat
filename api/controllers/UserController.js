/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
var randomString = (function() {
  // Define character classes to pick from randomly.
  var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowers = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var specials = '_-|@.,?/!~#$%^&*(){}[]+=';
  var charClasses = [uppers, lowers, numbers, specials];
  var minLen = charClasses.length;
  function chooseRandom(x) {
    var i = Math.floor(Math.random() * x.length);
    return (typeof(x)==='string') ? x.substr(i,1) : x[i];
  }
  // Define the function to actually generate a random string.
  return function(maxLen) {
    maxLen = (maxLen || 36);
    if (maxLen < minLen) { throw new Error('length must be >= ' + minLen); }
    do { // Append a random char from a random char class.
      var str='', usedClasses={}, charClass;
      while (str.length < maxLen) {
        charClass = chooseRandom(charClasses);
        usedClasses[charClass] = true;
        str += chooseRandom(charClass);
      }
      // Ensure we have picked from every char class.
    } while (Object.keys(usedClasses).length !== charClasses.length);
    return str;
  }
})();

module.exports = {
    
  
     login: function (req, res) {
    var name = req.param('name');
    req.session.id = name+randomString();
    req.session.name = name;
    res.json({'id':req.session.id,
                'name': name
             });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
