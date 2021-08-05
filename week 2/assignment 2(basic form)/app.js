function myFunction(){
    var firstName= document.getElementById("firstname").value;
    var lastName= document.getElementById("lastname").value;
    var errorf=document.getElementById("fnerror");
    var errorl=document.getElementById("lterror");
    if(firstName){
      errorf.innerHTML=""; 
}else{
    errorf.innerHTML="Firstname required";
    errorf.style.color="red";
};
if(lastName){
    errorl.innerHTML="";
}else{
    errorl.innerHTML="Lastname required";
    errorl.style.color="red";
};
}