import firebase from 'firebase';

// add SDK Firebase

// Initialize Firebase
   const firebaseConfig = {
        apiKey: "AIzaSyA6r2bjyDAoPgb-42AMzXBUizw8dTyXuAk",
        authDomain: "c-68-d94ca.firebaseapp.com",
        projectId: "c-68-d94ca",
        storageBucket: "c-68-d94ca.appspot.com",
        messagingSenderId: "549896524297",
        appId: "1:549896524297:web:3a21185177fc1041161ed8"
      };
    firebase.initializeApp(firebaseConfig);

export default firebase.database();
