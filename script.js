var addbutton = document.getElementById("add");
var resetbutton = document.getElementById("reset");
var thelist = document.getElementById("unlist");
var theinput = document.getElementById("inputs");


addbutton.addEventListener("click", function add(){
    var val = theinput.Value;
    if (val.trim()){
        var lich = document.createTextNode(val);
        var ch = document.createElement("LI");
        var bu = document.createElement("BUTTON");
        bu.innerHTML="Finish";
        ch.appendChild = lich;
        ch.appendChild = bu;
        thelist.appendChild(ch);
        val=""; 
    }
    else{
        val="";
        theinput.setAttribute("placeholder","We Need A Text Here");
    }
})
resetbutton.addEventListener("click", function resetall(){
    theinput = "";
    thelist="";
}
