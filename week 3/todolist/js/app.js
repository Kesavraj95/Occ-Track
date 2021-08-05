//////////////////using javascript////////////////////////////////////////
function addinput(){
  var input = document.getElementById("inputvalue").value;
  if(input){
    document.getElementById("error").innerHTML="";
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.innerHTML=`<i class="fas fa-trash"></i>`
    btn.className="closeid"
    var t = document.createTextNode(input);
    li.appendChild(t);
    li.appendChild(btn);
    document.getElementById("list").appendChild(li);
    document.getElementById("inputvalue").value="";
  }else{
    document.getElementById("error").innerHTML="Enter the value";
  }
  var button =document.getElementsByClassName("closeid")
  for(i= 0; i<button.length; i++) {
   button[i].onclick = function() {
     var deleteVal= this.parentElement;
   deleteVal.remove();
     }
 }
}
//////////////////////////////using jquery///////////////////////////////////////////////
// $(document).ready(function(){
//   $('#submit').click(function(){
//   let val= $('#inputvalue').val();
//   if(val){
//       $('#list').append('<li>'+val+'<button type="button" id="closeid"><i class="fas fa-trash"></i></button> </li>');
//       $('#error').text("")
//       return $('#inputvalue').val("");
//   }else {
//       $('#error').text("enter the value")
//   }
// });
// $("body").delegate("#closeid", "click", function(){
// this.parentElement.remove();
// });
// })





