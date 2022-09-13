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

const getnasa = (search) => {
  return getJSONData(`${nasa}&"search?q="&query=${search}`);

}

btn.addEventListener("click", function(e){
  getJSONData(nasa+"search?q="+{search}).then(function (resultObj) {
        if (resultObj.status === "ok") {
          nasaArray = resultObj.data
          collection =resultObj.data.collection.items;
          console.log(nasaArray);
          console.log(collection)
          showresults();
}
}
)
}
)

function showresults(){
let result =""
let busqueda = collection
{
  result+=`<div class="row">
        <div class="col-1-4">
        <div>
          <img class="bd-placeholder-img card-img-top" src="${busqueda.href}"
          <h3>${busqueda.title}</h3>
          <div>
            <p>${busqueda.description}</p>
          </div>
        </div>
      </div
      `
}
}