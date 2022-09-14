const search = document.getElementById("inputBuscar")
const btn = document.getElementById("btnBuscar")
let nasaArray =[]
let items=[]
const nasa= "http://images-api.nasa.gov/search?q="

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
  let nasaURL= nasa+ search.input
  getJSONData(nasaURL).then(function (resultObj) {
        if (resultObj.status === "ok") {
          nasaArray = resultObj.data
          items =resultObj.data.collection.items;
          console.log(nasaArray);
          console.log(items)
          showresults();
}
}
)})

function showresults(){
let result ="";
for(let i= 0; i < items.length;i++)
{
  let busqueda = items[i]
  {
  result+=`<div class="row">
        <div class="col-1-4">
        <div>
          <img class="bd-placeholder-img card-img-top" src="${busqueda.links[0].href}">
          <h3>${busqueda.data[0].title}</h3>
          <div>
            <p>${busqueda.data[0].description}</p>
          </div>
        </div>
      </div
      `;
      document.getElementById("contenedor").innerHTML=result
}
console.log(busqueda.data.title)
}}