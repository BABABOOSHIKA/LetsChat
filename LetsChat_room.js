var firebaseConfig = {
    apiKey: "AIzaSyBTNOtfLkoADE45V8VZKCfBSyKN2cP9qHk",
    authDomain: "LetsChat-65b6b.firebaseapp.com",
    databaseURL: "https://LetsChat-65b6b-default-rtdb.firebaseio.com",
    projectId: "LetsChat-65b6b",
    storageBucket: "LetsChat-65b6b.appspot.com",
    messagingSenderId: "466484735795",
    appId: "1:466484735795:web:812c9236cfa2534dfe9846"
};


firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "LetsChat_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;


          });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "LetsChat_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "LetsChat.html";
}