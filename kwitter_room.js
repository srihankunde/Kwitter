var firebaseConfig = {
      apiKey: "AIzaSyB8ZD6gnKl9JwysjZRMMNxeKkx9zWrAtAI",
      authDomain: "kwitter-d7dd3.firebaseapp.com",
      databaseURL: "https://kwitter-d7dd3-default-rtdb.firebaseio.com",
      projectId: "kwitter-d7dd3",
      storageBucket: "kwitter-d7dd3.appspot.com",
      messagingSenderId: "902821299981",
      appId: "1:902821299981:web:9c237587d4f2fb076ad244"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";

      function addRoom(){

            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
           purpose:"Adding Room Name"
            });

            localStorage.setItem("room_name" ,room_name );

            window.location="kwitter_page.html";
      }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Names :"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;


      //End code
      });});}

getData();

function redirectToRoom(name){

      console.log(name);

      localStorage.setItem("room_name" ,name );

            window.location="kwitter_page.html";
            
}


function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";

}
