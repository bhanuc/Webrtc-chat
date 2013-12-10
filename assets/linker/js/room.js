
//this function creates a new room


var create_room = function () {
    var roomname = document.getElementById("new_room_name").value;
        socket.get('/room/create?name='+roomname, function (response){
        console.log(response);
        document.getElementById('form').style.display= 'none' ;
        join_room("new_room_name");
    });
};
var join_existing_room = function(){
    join_room("join_room");
};
var join_room = function(roomid) {
    var roomname = document.getElementById(roomid).value;
     var username = document.getElementById("username_input").value;
    socket.get('/room/join?name='+roomname+'&username='+username, function(response){
    console.log(response);
        document.getElementById('join').style.display= 'none';
    });
};

var login_user = function() {
    var username = document.getElementById("username_input").value;
    socket.get('/user/login?name='+username, function(response){
        console.log(response);
        document.getElementById('user_form').style.display= 'none' ; 
        document.getElementById('user_created').textContent = "Your Username is "+username;
    });
};