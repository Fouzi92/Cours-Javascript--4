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
