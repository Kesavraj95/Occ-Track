function onClick(){
    var color=document.getElementsByName("color");
    var font=document.getElementsByName("fontfamily");
    for(var i=0;i<color.length;i++){
        if(color[i].checked){
            document.body.style.color=color[i].value;
        }
    }
    for(var i=0;i<font.length;i++){
        if(font[i].checked){
            document.body.style.fontFamily=font[i].value;
        }
    }
}