const url = "https://api.tvmaze.com/shows";
const url2 = "https://api.tvmaze.com/search/shows?q=";
var cardHolder = $(".cardholder");

function bitShow() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      response.length = 50;
      cardHolder.html("");
      response.forEach(function (item) {
        if (item.image === null) {
          var randomImage = "../fotos/pexels-david-bartus-714926.jpg";
          var newCard = $(
            `<div class="col-lg-4 col-md-6 col-xs-12  mt-3">
            <div class="card" style="width:19rem">
                <img src="${randomImage}" class="img-thumbnail" alt="noImage" style="width 100%;height:430px">
                <div class='card-body'>
                    <h5 class='card-title' style="font-size:1.5rem">${item.name}</h5>
                    <p class="card-text">${item.genres[0]}</p>
                    <a  onclick='goToDetail(${item.id})' class='btn btn-info' style="color:white;font-weight:bold;font-size:1rem">Go to detail</a>
                </div>
            </div>
        </div>`
          );
          cardHolder.append(newCard);
        } else {
          var newCard = $(`<div class="col-lg-4 col-md-6 col-xs-12 mt-3">
    <div class="card" style="width:19rem">
        <img src="${item.image.original}" class="img-thumbnail" alt="image">
        <div class='card-body'>
            <h5 class='card-title' style="font-size:1.5rem">${item.name}</h5>
            <p class="card-text">${item.genres[0]}</p>
            <a onclick='goToDetail(${item.id})' class='btn btn-info' style="color:white;font-weight:bold;font-size:1rem">Go to profile</a>
                </div>
    </div>
</div>`);
          cardHolder.append(newCard);
        }
      });
    });
}

// function bitShow(input) {
//   console.log(input);
//   var request = $.ajax({
//     url: `${url}${input}`,
//     method: "GET",
//   });
//   request.done(function (response) {
//     if (!response) {
//       alertElement.text("No results");
//       alertElement.toggle();
//     }
//     console.log(response);

//       }
//     });
//   });
//   request.fail(function () {
//     alertElement.text("Failed to connect bitShow API");
//     alertElement.toggle();
//   });
//   request.always(function () {});
// }
// DOCUMENT READY
$(document).ready(function () {
  bitShow("a");
  // SEARCH
  $("#textsearch").on("keypress", function (e) {
    if (e.key === "Enter") {
      var searhText = $("#textsearch").val();
      bitShow(`${searhText}`);
      e.preventDefault();
    }
  });
});

$(document).ready(function () {
  $("#textsearch").keyup(function () {
    searchText2 = this.value;
    // inputSearch();
  });
  $("#textsearch").autocomplete({
    source: function (request, response) {
      $.get(`${url2}${searchText2}`, function (data) {
        response(
          $.map(data, function (item) {
            return {
              value: item.show.id,
              label: item.show.name,
            };
          })
        );
      });
    },
    select: function (event, ui) {
      goToDetail(ui.item.value, ui.item.label);
      ui.item.value = ui.item.label;
      return ui.item.label;
    },
  });
});

function goToDetail(id) {
  sessionStorage.setItem("movieId", id);
  location.assign("./info.html");
}
