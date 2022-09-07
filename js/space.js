const nasa =  "https://images-api.nasa.gov/";
const search = document.getElementById("inputBuscar")
const btn = document.getElementById("btnBuscar")
let nasaArray =[]


function getJSONData (url){
    let result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}

btn.addEventListener("click", function(e){
    let nasaimg= nasa + "search=?q"+ search.input
    getJSONData(nasaimg).then(function (resultObj) {
        if (resultObj.status === "ok") {
          console.log(resultObj);
          nasaArray = resultObj.data;
          console.log(nasaArray);
          Showresults();
}
}
)
}
)

function showresults(){
    return alert("hi")
}