function addStudent(event) {
  var program = $("#subject option:selected").val();
  var name = $("#validationCustom01").val();
  var nameSplit = name.split(" ");
  var grade = Number($("#validationCustom02 option:selected").val());
  var student = new Student(nameSplit[0], nameSplit[1]);
  var subject = new Subject(program);
  var exam = new Exame(subject, student, grade);
  return exam;
}


$(document).ready(function (event) {
  // $("body").on('click', addStudent());
  $("#addButton").on("click", function () {
    var exam = addStudent();
    console.log(exam.getExameInfo());
    //add statistics
    if (exam.hasPased()) {
      var table=$('#tableOne');
      table.find('tbody')
      .append(exam.getExameInfo())
    } else {
      var tableOne=$('#tableTwo');
      tableOne.find('tbody')
      .append(exam.getExameInfo())
    }

  });
});
