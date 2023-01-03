var DATA = new XMLHttpRequest();
DATA.open("GET", "Data.json");
DATA.onreadystatechange = function () {
  var datalist = JSON.parse(DATA.responseText);
  afficher(datalist)


  // RECHERCHE //

  document.getElementById('searche').onkeyup = function () {

    var searche = document.getElementById("searche").value;
    if (searche == "") {
      afficher(datalist)
    }
    else {
      for (var r = 0; r < searche.length; r++) {
        var CALC = datalist.filter(function (item) {

          return item.titre.toLowerCase()[r] == searche.toLowerCase()[r];

        })
      }

    }

    afficher(CALC)
  }
  ////////////////////////////////////
  // items.sort((a, b) => a.value - b.value); Numéros des liens de chat
  document.getElementById('floatingSelect').onchange = function () {
    var COD = document.getElementById('floatingSelect').value;
    if (COD == "1") {
      datalist.sort((a, b) => a.titre.localeCompare(b.titre));
      afficher(datalist)
    }

    else if (COD == "2") {
      datalist.sort((a, b) => a.réalisateur.localeCompare(b.réalisateur));
      afficher(datalist)
    }

    else if (COD == "3") {
      datalist.sort((a, b) => a.durée - b.durée)
      afficher(datalist)
    }
    else if (COD == "4") {
      datalist.sort((a, b) => b.durée - a.durée)
      afficher(datalist)
    }

    else if (COD == "5") {
      datalist.sort((a, b) => b.production - a.production)
      afficher(datalist)
    }

    else if (COD == "6") {
      datalist.sort((a, b) => a.production - b.production)
      afficher(datalist)
    }



  }

};

//////////////////////////////////////////////////////////////////


function afficher(datalist) {
  var table = "";
  for (let i = 0; i < datalist.length; i++) {
    table += `
                      <tr>
                        <td>${datalist[i].titre}</td>
                        <td>${datalist[i].réalisateur}</td>
                        <td>${datalist[i].durée}</td>
                        <td>${datalist[i].production}</td>
                        <td><img src="${datalist[i].Poster}" style="width:150px;"></td>
                        <td>${datalist[i].Festivals}</td>
                        <td>${datalist[i].Acteurs[0].sonmon} ${datalist[i].Acteurs[0].somprenom} ${datalist[i].Acteurs[0].sanationalité}</td>
                      </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = table;
}
DATA.send();