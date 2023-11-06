// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
      
//         import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
//         import{ getDatabase, ref, set, child, get, update, remove} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js"
//         // TODO: Add SDKs for Firebase products that you want to use
//         // https://firebase.google.com/docs/web/setup#available-libraries
      
//         // Your web app's Firebase configuration
//         const firebaseConfig = {
//           apiKey: "AIzaSyBfarBPupvy8ndzA99rar9zB8Y5orIBtl4",
//           authDomain: "admin-side-481cd.firebaseapp.com",
//           databaseURL: "https://admin-side-481cd-default-rtdb.firebaseio.com",
//           projectId: "admin-side-481cd",
//           storageBucket: "admin-side-481cd.appspot.com",
//           messagingSenderId: "1082701688062",
//           appId: "1:1082701688062:web:4ff669cf89e6ed9c1b49af"
//         };
      
//         const app = initializeApp(firebaseConfig);
      
        
//     const auth=getAuth(app);
    
    
//     const dbref=getDatabase(app);

//code that generates qrcode
function generateQRCode(text) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      width: 300,
      height: 300,

    });
    
// expiration time of qrcode
var expireTime=10;

setTimeout(function(){
    qrcode.clear();
    alert("The qrcode has been expired!");
},expireTime*60*1000);

    qrcode.makeCode(text);
}


//   qrcode encoded on the date of that day
var button=document.getElementById("generateBtn").addEventListener("click", function() {
    var currentDate = new Date().toISOString().slice(0, 10); 
    generateQRCode(currentDate);

     });
// to make the button disappear after being clicked
var button2=document.getElementById("generateBtn")

    button2.addEventListener("click",function(){
        button2.classList.add('remove')
    })















    // // function to increment attendance
    // function incrementAttendance() {
    //     var currentDate = new Date().toISOString().slice(0, 10); // Get the current date (YYYY-MM-DD format)
    //     var attendanceRef = dbref.ref('attendance/' + currentDate);
      
    //     attendanceRef.transaction(function(currentAttendance) {
    //       return (currentAttendance || 0) + 1; // Increment attendance by 1
    //     });
    //   }

    