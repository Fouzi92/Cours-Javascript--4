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

fetch("data.txt")
  .then((res) => res.text())
  .then((data) => console.log(data));
