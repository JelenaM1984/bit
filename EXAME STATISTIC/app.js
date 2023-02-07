function addStudent(event){
    var program=$('#validationCustom04').val();
    var name=$('#validationCustom01').val();
    var grade=$('#validationCustom02').val();
    console.log(program);
    console.log(name);
    console.log(grade);
}


    $(document).ready(function(event) {
        $("body").on('click', addStudent());
        $("button").on('click', function(){
      
        });
})