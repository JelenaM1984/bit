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
          `<div class="col-4" style="margin-top:2.5rem">
            <div class="card" style="width:18rem">
                <img src="${randomImage}" class="card-img-top" alt="noImage" style="width 100%;height:400px">
                <div class='card-body'>
                    <h5 class='card-title' style="font-size:1.5rem">${item.show.name}</h5>
                    <p class="card-text">${item.show.genres[0]}</p>
                    <a href='${item.show._links.self.href}' target='_blank' class='btn btn-info' style="color:white;font-weight:bold;font-size:1rem">Go to profile</a>
                </div>
            </div>
        </div>`
        );
        cardHolder.append(newCard);
      } else {
        var newCard = $(`<div class="col-4" style="margin-top:2.5rem">
    <div class="card" style="width:18rem">
        <img src="${item.show.image.medium}" class="card-img-top" alt="image">
        <div class='card-body'>
            <h5 class='card-title' style="font-size:1.5rem">${item.show.name}</h5>
            <p class="card-text">${item.show.genres[0]}</p>
            <a href='${item.show._links.self.href}' target='_blank' class='btn btn-info' style="color:white;font-weight:bold;font-size:1rem">Go to profile</a>
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
  request.always(function () {
    // alertElement.text("Successful");
  });
}
// DOCUMENT READY
$(document).ready(function () {
  bitShow("a");
  // SEARCH
  $("#textsearch").on("keypress", function (e) {
    if (e.key === "Enter") {
      var searhText = $("#textsearch").val(); // Ne radi sa '.value'
      //   alert(searhText);
      bitShow(`${searhText}`);
      e.preventDefault();
    }
  });
});
function infoPage(e) {
  var id = e;

  sessionStorage.setItem("id", id);
  window.location = "./info.html";
}

function inputSearch() {
  var req = $.ajax({
    url: `${url}${searchText2}`,
    method: "GET",
  });
  req
    .done(function (response) {
      console.log(response);

      response.forEach(function (item) {
        var newItem = item.show.name;
        autoComp2.push(newItem);
      });
    })
    .fail(function (response) {
      console.log(response);
    })
    .always(function (response) {
      console.log("zahtev zavsen");
    });
}
var autoComp2 = [];
$(document).ready(function () {
  $("#textsearch").change(function () {
    searchText = this.value;
    bitShow();
  });
  // searchText = "a";
  // bitShow();
  $("#textsearch").autocomplete({
    source: autoComp2,
  });
  $("#textsearch").keyup(function () {
    searchText2 = this.value;
    inputSearch();
  });
});
