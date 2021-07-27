
//config

var firebaseConfig = {
    apiKey: "AIzaSyCjTK2KfdJU-nohpWd3WaYjXm9SWtNeJh4",
    authDomain: "veille-backend.firebaseapp.com",
    //databaseUrl: "https://veille-backend-default-rtdb.firebaseio.com/",
    projectId: "veille-backend",
    storageBucket: "veille-backend.appspot.com",
    messagingSenderId: "600022519546",
    appId: "1:600022519546:web:547fc71c8dd1884abd0343",
    measurementId: "G-35XLQLVNSV"
};

// Initialiser firebase

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()
// variable d'accès à la base de données
const db = firestore.collection("users")

// variable du boutton submit

let boutonEnvoi = document.getElementById('submit');

//créer l'évènement qui se déclenche lors d'un clique sur le bouton d'envoi

boutonEnvoi.addEventListener("click", (e) => {
    e.preventDefault();

    let nomp =  document.getElementById("nom").value
    let prenomp = document.getElementById("prenom").value
    let emailp =  document.getElementById("email").value

    // Envoi des élément récuperer dans le formulaire  pour envoyer dans firebase

    db.doc().set({
        nom: nomp,
        prenom: prenomp,
        email: emailp
    }).then(() => {
        console.log("Eléments sauvegarder dans la base de donnée!")
    }).catch((error) => {
        console.log(error)
    })

    alert("Vos informations ont étés enregistrer dans la base de données")

})




// <script>
    

//     function envoiData() {
//         firebase.database().ref("Users").set({
//             nom: document.getElementById("nom").value,
//             prenom: document.getElementById("prenom").value,
//             email: document.getElementById("email").value
//         })

//             getData();
//         }

//     function getData() {
//         firebase.database().ref('/').once('value', function (snapshot) {
//             snapshot.array.forEach(function (childSnapshot) {
//                 var childkey = childSnapshot.apiKey;
//                 var childdata = childSnapshot.val();
//                 document.getElementById("data").innerHTML = childdata['nom'] + ' ' + childdata['prenom'] + ' email : ' + childdata['email'];
//             });
//         })
//     }

//     getData();
// </script>