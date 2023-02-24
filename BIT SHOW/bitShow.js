const url = "https://api.tvmaze.com/search/shows?q=";
var cardHolder = $(".cardholder");

function bitShow(input) {
  console.log(input);
  var request = $.ajax({
    url: `${url}${input}`,
    method: "GET",
  });
  request.done(function (response) {
    if (!response) {
      alertElement.text("No results");
      alertElement.toggle();
    }
    console.log(response);
    cardHolder.html("");
    response.forEach(function (item) {
      if (item.show.image === null) {
        var randomImage = "./pexels-david-bartus-714926.jpg";
        var newCard = $(
          `<div class="col-lg-4 col-md-6 col-xs-12  mt-3">
            <div class="card" style="width:19rem">
                <img src="${randomImage}" class="img-thumbnail" alt="noImage" style="width 100%;height:430px">
                <div class='card-body'>
                    <h5 class='card-title' style="font-size:1.5rem">${item.show.name}</h5>
                    <p class="card-text">${item.show.genres[0]}</p>
                    <a  onclick='goToDetail(${item.show.id})' class='btn btn-info' style="color:white;font-weight:bold;font-size:1rem">Go to detail</a>
                </div>
            </div>
        </div>`
        );
        cardHolder.append(newCard);
      } else {
        var newCard = $(`<div class="col-lg-4 col-md-6 col-xs-12 mt-3">
    <div class="card" style="width:19rem">
        <img src="${item.show.image.original}" class="img-thumbnail" alt="image">
        <div class='card-body'>
            <h5 class='card-title' style="font-size:1.5rem">${item.show.name}</h5>
            <p class="card-text">${item.show.genres[0]}</p>
            <a onclick='goToDetail(${item.show.id})' class='btn btn-info' style="color:white;font-weight:bold;font-size:1rem">Go to profile</a>
                </div>
    </div>
</div>`);
        cardHolder.append(newCard);
      }
    });
  });
  request.fail(function () {
    alertElement.text("Failed to connect bitShow API");
    alertElement.toggle();
  });
  request.always(function () {});
}
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
      $.get(`${url}${searchText2}`, function (data) {
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
