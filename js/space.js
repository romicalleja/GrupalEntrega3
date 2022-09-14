const nasa =  "https://images-api.nasa.gov/";
const search = document.getElementById("inputBuscar")
const btn = document.getElementById("btnBuscar")
let nasaArray =[]
let items=[]
const andro= "http://images-api.nasa.gov/search?q=andromeda"

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
  getJSONData(andro).then(function (resultObj) {
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
          <img class="bd-placeholder-img card-img-top" src="${busqueda.links.href}">
          <h3>${busqueda.data.title}</h3>
          <div>
            <p>${busqueda.data.description}</p>
          </div>
        </div>
      </div
      `;
      document.getElementById("contenedor").innerHTML=result
}
}}