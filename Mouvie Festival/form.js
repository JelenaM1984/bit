// var mouvies = [];
// var moviesForDropDown = [];
// var programsForDropDown = [];

function createMouvie() {
  var name = $("#inputMouvie").val();
  var duration = $("#mouvieLength").val();
  var genre = $("#options option:selected").val();
  var film = new Mouvie(name, duration, genre);
  //   if (!name || !duration || !genre) {
  //     alert("Please fill out all fields.");
  return film;
}

$(document).ready(function () {
  $("#addButton").on("click", function () {
    var film = createMouvie();
    var table = $("#mouvie");
    table.find("tbody").append(film.getMouvie());
  });
});
