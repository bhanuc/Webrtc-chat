/**
 * Room
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	
  	name: 'string',
    users: {
        type: 'json',
        defaultsTo: { 'jimmy': [{
                        'sessionId': 'sessionId'
        }, {
                        'otherstuff': 'randomstuff'
        }]}
    }
  	
    
  }

};
