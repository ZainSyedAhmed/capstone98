var firebaseConfig = {
    apiKey: "AIzaSyDSXbO0L3H9OSKTlEyh33IQ5jEFaQsx4mw",
    authDomain: "kwitter-5e22d.firebaseapp.com",
    databaseURL: "https://kwitter-5e22d-default-rtdb.firebaseio.com",
    projectId: "kwitter-5e22d",
    storageBucket: "kwitter-5e22d.appspot.com",
    messagingSenderId: "36830644294",
    appId: "1:36830644294:web:7c9700ac8d235461aee247"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  
  user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");

  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}