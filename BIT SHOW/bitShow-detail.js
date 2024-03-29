$(document).ready(function (event) {
  fetchShowInfo();
});

function fetchShowInfo() {
  const id = sessionStorage.getItem("movieId");
  $.ajax({
    method: "GET",
    url: `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`,
  })
    .done((res) => {
      const imageSrc = res.image
        ? res.image.original
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmhOQIdkehQclCNlvATZe4QCQoaBPRVftOSbW0E4xxnWmvc4r8Q";
      const show = new Show(res.id, res.name, imageSrc);
      show.summary = res.summary;
      res._embedded.seasons.forEach(({ premiereDate, endDate }) => {
        const seasonString =
          premiereDate && endDate
            ? `${premiereDate} - ${endDate}`
            : "Data Not Available";
        show.seasons.push(seasonString);
      });
      res._embedded.cast.forEach(({ person }) => {
        show.cast.push(person.name);
      });
      var repos = $(`.repos`);
      repos.html("");
      var newImage = "";
      if (res.image == null) {
        newImage = "./pexels-david-bartus-714926.jpg";
      } else {
        newImage = res.image.original;
      }
      var newCard = $(
        `<div id="InfoDate">
          <h1 style="text-align:center"><span id="title" >Title:</span> ${res.name}</h1>
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
           <p>${res.summary}</p>
       </div>
        `
      );
      repos.append(newCard);
      console.log(show);
      return show;
    })
    .fail(() => {
      const err = "Network problem, try again later.";
      console.log(err);
    });
}
//find episode list
