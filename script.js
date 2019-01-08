var addbutton = document.getElementById("add");
var resetbutton = document.getElementById("reset");
var thelist = document.getElementById("unlist");
var theinput = document.getElementById("inputs");



addbutton.addEventListener("click", function add(){
    var text = theinput.value;
    if(text.trim()){
        var thenod = document.createTextNode(text);
        var child = document.createElement("LI");
        child.appendChild(thenod);
        var finish = document.createElement("button");
        finish.innerHTML="Finish";
        finish.className="finish";
        finish.addEventListener("click",function remove(e){
            var item = e.target.parentElement;
            thelist.removeChild(item);
        })
        child.appendChild(finish);
        thelist.appendChild(child);
        theinput.value="";

    }
    else{
        theinput.value="";
        theinput.placeholder="Text please ...";

       
    
}})
resetbutton.addEventListener("click", function re(){
    theinput.value="";
    thelist.innerHTML="";
    
})




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
