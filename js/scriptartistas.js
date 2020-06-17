window.onload = function () {
  var queryString = document.location.search;
  var queryStringObj = new URLSearchParams(queryString);

  var idArtistas = queryStringObj.get("id");
  console.log(idArtistas);
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" +
      idArtistas
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);

      var listaDetalles = document.querySelector("#infoArtista");
      var contenidoArdetalles = "";

      contenidoArdetalles += `<img src="${resultado.picture_xl}" class="card-img-top" alt="...">
        
          <div class="card-body">
          <p class="card-text">${resultado.name}</p>
          <p class="card-text"> Fans: ${resultado.nb_fan}</p>
         <p class="card-text"><small class="text-muted"></small></p>
        </div>
        `;

      listaDetalles.innerHTML = contenidoArdetalles;
      console.log(listaDetalles);
    });
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + idArtistas +"/top")
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var contenedorTop = document.querySelector("#Top5");
      var contenidoTop= "";
      for (let i = 0; i < resultado.data.length; i++) {
        const element = resultado.data[i];
        contenidoTop +=
          ' <a class="list-group-item list-group-item-action" href="tracks.html?id=' +
          idArtistas +
          '">' +
          element.title +
          "</a>";
      }
      
      
      contenedorTop.innerHTML=contenidoTop;
      console.log(contenedorTop);
    });
  }

