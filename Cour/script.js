// XMLHttpRequest

function reqListener() {
  //console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open("get", "data.txt", true);
//req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

//-------------------------------------------------------------------------------------------
// FETCH
//-------------------------------------------------------------------------------------------

//fetch("MOnLIen", "object d'options")
//.then((response) => { // THEN = EN SUITE OU ALORS OU UNE PROMESE UNE L'ACTION QUI DOIT SUITRE
// console.log(response);
//})
//.catch((err) => console.log(err)); //CATCH = si le Then ne fonction pas envoi-moi une erreur

//fetch("data.txt")
//.then((res) => res.text())
//.then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
//.then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

// CRUD => Create (POST), read (GET) , Update (PUT),  delete (DELETE)

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  // La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON. Optionnellement, elle peut remplacer des valeurs ou spécifier les propriétés à inclure si un tableau de propriétés a été fourni.
  body: JSON.stringify({
    pseudo: "Chomeur",
    message: "Salut les chomeurs",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyée")
  );
});

//-----------------------------------------------------------------------------
// Asynchrone
//-----------------------------------------------------------------------------
setTimeout(() => {
  //console.log("test");
}, 5000);

//Promise
// fetch("monlien").then((res) => res);

// async/await
async function fetchData() {
  await fetch("monlien");
  // attent que le "await" soit exécuté avant de faire la suite
  executeFonction();
}

const fetchData2 = async () => {
  await fetch("monlien");
  // attent que le "await" soit exécuté avant de faire la suite
  executeFonction();
};

//-----------------------------------------------------------------------------
// Le JSON
//-----------------------------------------------------------------------------

// Méthode .json() => méthode qui s'auto-résout en royant le Body de la requete

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // Stringify => convertit en JSON
    let settings = JSON.stringify(data);
    // Parse => transforme json en object js
    //console.log(JSON.parse(settings));
  });

//-----------------------------------------------------------------------------
//  Web APi
//-----------------------------------------------------------------------------

//CLIENT STORAGE
//--------------

//Local storage

localStorage.data = "JE suis chomeur";
//document.body.textContent = localStorage.data;
localStorage.removeItem("data");

const obj = {
  name: "Denis",
  age: "49",
  profession: "Chomeur",
};
// il faut passer des chaines de caractéres
localStorage.user = JSON.stringify(obj);

//console.log(JSON.parse(localStorage.user));

// Session Storage
//sessionStorage.dataSettings = "55px";
//console.log(sessionStorage.dataSettings);

//-----------------------------------------------------------------------------
//  Cookies
//-----------------------------------------------------------------------------

document.cookie = "username=Chomeur123";
// Bonne pratique
document.cookie = "Pseudo=POle-Enploi;path=/;max-age=450000; secure; samesite";
