var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_Name");

//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyASXn3qMYascMv-T7DI4mX_zPRvYZ0-c3w",
      authDomain: "kwitter-practice-bde08.firebaseapp.com",
      databaseURL: "https://kwitter-practice-bde08-default-rtdb.firebaseio.com",
      projectId: "kwitter-practice-bde08",
      storageBucket: "kwitter-practice-bde08.appspot.com",
      messagingSenderId: "737090073592",
      appId: "1:737090073592:web:895ea7a96922a30e32dc0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}