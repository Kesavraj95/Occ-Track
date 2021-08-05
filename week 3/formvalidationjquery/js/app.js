$(document).ready(function(){
    $('#submit').click(function(event){
    event.preventDefault();
     let fname= validatefirstname();
     let lname= validatelastname();
     let mail= validateemail();
     let gendername=validategender();
     let course=validatecourse();
     console.log({Firstname:fname,Lastname:lname,Emailid:mail,Gender:gendername,Checkbox:course});
     return false;
   });   
   function validatefirstname(){
       let firstname= $('#firstname').val();
       $('#fnerror').text("");
       if(firstname){
        return firstname;
       }else{
        $('#fnerror').text("First name is required");
        return false;
       }
   }
   function validatelastname(){
       let lastname= $('#lastname').val();
       $('#lnerror').text("");
       if(lastname){
        return lastname;    
       }else{
        $('#lnerror').text("Last name is required");   
        return false;
           
       }
   }
   function validateemail(){
       let email= $('#email').val();
       let regex =/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
       if(email){
        if(!regex.test(email)){
            $('#emailerror').text("email is invalid");
            return false;   
        }else{
            $('#emailerror').text("");
            return email;
        }    
       }else{
        $('#emailerror').text("email is required");
        return false;    
       }
   }
   function validategender(){
       let gender= $('#genderselect').val();
       if(gender=="select"){
           $('#gendererror').text("mention the gender");
           return false;
       }else{
        $('#gendererror').text("");
           return gender;
       }
   }
   function validatecourse(){
    let validcourse= $('input[name="course"]:checked');
    if(validcourse.length== 0){
        $('#checkboxselect').text("mention any course in it");
        console.log("notvalid");
        return false;
    }
    else{
        var value=[];
        validcourse.each(function(i){
        value[i]=$(this).val()
        })
        $('#checkboxselect').text("");
        return value ;

    }
}
})