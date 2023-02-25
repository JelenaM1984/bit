import { validate } from './form.js';
import { Subject } from './subject.js';
import { Student } from './student.js';
import { Exame } from './exame.js';

function addStudent(event) {
  var program = $("#subject option:selected").val();
  var name = $("#validationCustom01").val();
  var grade = Number($("#validationCustom02 option:selected").val());
  var validationMessage = validate(program, name, grade);
  if (validationMessage) {
    alert(validationMessage);
    return;
  }

  var nameSplit = name.split(" ");
  var student = new Student(nameSplit[0], nameSplit[1]);
  var subject = new Subject(program);
  var exam = new Exame(subject, student, grade);
  return exam;
}

function calculateStatistics(passed) {
  var totalHeader = $("#total");
  var total = 1 + Number(totalHeader.text());
  totalHeader.text(total);
  var passedTotal = $("#passed");
  var passedPerc = $("#passedPerc");
  var failedTotal = $("#failed");
  var failedPerc = $("#failedPerc");
  var passedTotalNumber = Number(passedTotal.text());
  var failedTotalNumber = Number(failedTotal.text());
  if (passed) {
    ++passedTotalNumber;
  } else {
    ++failedTotalNumber;
  }

  passedTotal.text(passedTotalNumber);
  passedPerc.text((passedTotalNumber / total).toFixed(2) * 100 + "%");
  failedTotal.text(failedTotalNumber);
  failedPerc.text((failedTotalNumber / total).toFixed(2) * 100 + "%");
}

$(document).ready(function (event) {
  // $("body").on('click', addStudent());
  $("#addButton").on("click", function () {
    var exam = addStudent();
    console.log(exam.getExameInfo());
    //add statistics
    var passed = exam.hasPased();
    if (passed) {
      var table = $("#tableOne");
      table.find("tbody").append(`<tr><td>${exam.getExameInfo()}</td></tr>`);
    } else {
      var tableOne = $("#tableTwo");
      tableOne.find("tbody").append(`<tr><td>${exam.getExameInfo()}</td></tr>`);
    }

    calculateStatistics(passed);
  });
});

export { addStudent, calculateStatistics }