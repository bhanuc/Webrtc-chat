/**
 * RoomController
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

module.exports = {
    
  join: function(req, res) {
      var name = req.param('name');
      var username = req.param('username') || 'random_guy';
      if(!req.session.id){
          res.json({'value': 'Get a username '});
      }
     
       Room.findOne({
        name: name
    }).done(function (err,room) {
            if(err || !room) {
            return res.json({value: 'room not found'});
        }
       // room.user = [];
         var roomtoadd = {
                'sessionId': req.sessionid ,
                'otherstuffs': 'otherstuffz'
         };
        room.users[username] = roomtoadd ;
        res.json(room);
    });
   
  },
    
 create: function (req, res) {
    var name = req.param('name');
    var description = req.param('desc');
      //save room
       Room.create({
                   name: name,
                   description: description
                }).exec(function(err, room){
                    if (err) return res.send('An error occured', 500);
                    // Send back the generated project
                    return res.json(room);
                })

       
  },

  
};
