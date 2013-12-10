
//this function creates a new room
( username = prompt('Choose a username'))();

var create_room = function () {
    var roomname = document.getElementById("new_room_name").value;
        socket.get('/room/create?name='+roomname+'&user='+username, function (response){
        console.log(response);
        document.getElementById('form').style.display= 'none' ;
    });
};

var join_room = function() {
    var roomname = document.getElementById("new_room_name").value;
    socket.get('/room/join?name='+roomname+'&user='+username, function(response){
    console.log(response);
        document.getElementById('join').style.display= 'none' ;
    });
};