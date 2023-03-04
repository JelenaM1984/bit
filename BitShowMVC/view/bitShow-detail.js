import { Show } from "../entites/show.js";

$(document).ready(function (event) {
  fetchShowInfo();
});

function fetchShowInfo() {
  const id = sessionStorage.getItem("movieId");
  fetch(
    `https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      const imageSrc = response.image
        ? response.image.original
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmhOQIdkehQclCNlvATZe4QCQoaBPRVftOSbW0E4xxnWmvc4r8Q";
      const show = new Show(response.id, response.name, imageSrc);
      show.summary = response.summary;
      response._embedded.seasons.forEach(({ premiereDate, endDate }) => {
        const seasonString =
          premiereDate && endDate
            ? `${premiereDate} - ${endDate}`
            : "Data Not Available";
        show.seasons.push(seasonString);
      });
      response._embedded.cast.forEach(({ person }) => {
        show.cast.push(person.name);
      });
      var repos = $(`.repos`);
      repos.html("");
      var newImage = "";
      if (response.image == null) {
        newImage = "../fotos/pexels-david-bartus-714926.jpg";
      } else {
        newImage = imageSrc;
      }
      var newCard = $(
        `<div id="InfoDate">
          <h1 style="text-align:center"><span id="title" >Title:</span> ${response.name}</h1>
           <div class="row d-flex justify-content-center">
           <div class="col-lg-4 col-md-6 col-sm-12 " style="margin-top:5rem">
               <img src="${newImage}" class="img-thumbnail" alt="no Image" id="noImage" style='width:20rem'>
           </div>
           <div class="col-lg-4 col-md-6 col-sm-12 " style="margin-top:5rem">
               <h3>Sesons</h3>
               <div id="sesons">${show.seasons}</div>
               <h3>Cast</h3>
               <div id="cast">${show.cast}</div>
           </div>
           </div>
           <h3>Show Details</h3>
           <p>${response.summary}</p>
       </div>
        `
      );
      repos.append(newCard);
      console.log(show);
      return show;
    });
}
