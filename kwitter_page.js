//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

    function send(){

      msg=document.getElementById("msg").value;

firebase.database().ref(room_name).push({

      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4' >"+message+"</h4>";
button_tag="<button class='btn btn-info' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like : "+like+"</span></button>";
row=name_tag+message_tag+button_tag+span_tag; 
document.getElementById("output").innerHTML+=row;



//End code
      } });  }); }
getData();

function update_like(message_id)
{
      console.log("Clicked on Like button"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({

            like: updated_likes

      });
}


function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";

      
}