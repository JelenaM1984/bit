var program = [];
var allmouvies = [];
var film = [];

function validate(title, duration, genre) {
  if (!title) {
    return "Please insert valid title of the film";
  } else if (!duration) {
    return "Please enter a valid duration";
  } else if (genre == "Open...") {
    return "Please choose valid genre";
  }

  return null;
}

function createMouvie() {
  var title = $("#inputTitle").val();
  var duration = Number($("#mouvieLength").val());
  var genre = $("#options option:selected").val();
  var validationMessage = validate(title, duration, genre);
  if (validationMessage) {
    alert(validationMessage);
    return;
  }
  var film = new Mouvie(title, duration, genre);
  return film;
}

$(document).ready(function (event) {
  $("#addButton").on("click", function () {
    var film = createMouvie();
    console.log(film.getData());
    var table = $("#tabela");
    table.find("tbody").append(`<tr><td>${film.getData()}</tr></td>`);
  });
});

//onclick button Create program
var allPrograms = [];
function createProgram() {
  var date = $("#date").val();
  var newDate = new Date(date).toLocaleDateString("de-DE");

  var newProgram = new Program(newDate);
  var program = $(`<option>${newProgram.getInfo()}</option>`);
  $(".program-list").append(program);

  allPrograms.push(newProgram);

  $("#date").val("");
  console.log(allPrograms);
}

//onclick button Add Program
function addProgram() {
  var selMovie = $("#selectMouvie option:selected").text();
  console.log(selMovie);
  var programOption = $("#selectProgram option:selected");
  var programSelected = programOption.text();
  var program;
  allPrograms.forEach((item) => {
    var info = item.getInfo();
    if (info == programSelected) {
      program = item;
    }
  });

  var movie;
  allMovies.forEach((item) => {
    if (item.title == selMovie) {
      movie = item;
    }
  });

  if (program) {
    program.addMovie(movie);
    var list = $(".program-list ul li");
    for (let i = 0; i < list.length; i++) {
      if ($(list[i]).text() == programSelected) {
        var info = program.getInfo();
        $(list[i]).text(info);
        programOption.text(info);
      }
    }

    $("#selectMouvie").val(0);
    $("#selectProgram").val(0);
  }

  return selMovie;
}
