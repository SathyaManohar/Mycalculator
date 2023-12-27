for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",calc);
}
    function calc(){
var o1=document.querySelectorAll("button")[0].innerHTML;
var o2=document.querySelectorAll("button")[1].innerHTML;
var o3=document.querySelectorAll("button")[2].innerHTML;
var o4=document.querySelectorAll("button")[3].innerHTML;
var a=parseInt(document.querySelectorAll("input")[0].value,10);
var b=parseInt(document.querySelectorAll("input")[1].value,10);
var a = parseInt(document.getElementById("one").value, 10);
var b = parseInt(document.getElementById("two").value, 10);


if(this.innerHTML==="+"){
    document.getElementById("result").value=a+b;
}
else if(this.innerHTML==="-"){
    document.getElementById("result").value=a-b;
}
else if(this.innerHTML==="*"){
    document.getElementById("result").value=a*b;
}
else if(this.innerHTML==="/"){
    document.getElementById("result").value=a/b;
}
else if(this.innerHTML==="%"){
    document.getElementById("result").value=a%b;
}
};


