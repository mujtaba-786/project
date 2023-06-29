// var title = document.getElementById("header-title");
// var title2 = document.getElementById("title");


// title.style.borderBottom = "solid 6px black"; 
// title2.style.fontWeight = "bold";
// title2.style.color = "green";


var lis = document.getElementsByClassName("list-group-item")
console.log(lis)

lis[2].style.color = "red"

for(var i=0;i<lis.length;i++){
    lis[i].style.fontWeight = "bold"
}