var firebaseConfig = {
    apiKey: "AIzaSyDo1INkqkySjHvCDJvbT9xNPf0wcBKTsY4",
    authDomain: "kwitter-52b7b.firebaseapp.com",
    databaseURL: "https://kwitter-52b7b-default-rtdb.firebaseio.com",
    projectId: "kwitter-52b7b",
    storageBucket: "kwitter-52b7b.appspot.com",
    messagingSenderId: "82908280502",
    appId: "1:82908280502:web:73c15f1c648232c7e31817"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name"); 
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });

    localStorage.setItem("room_name", room_name);
    window.location="Kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();