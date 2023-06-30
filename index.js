var item = document.querySelector(".list-group-item:nth-child(2)")
item.style.color = "green"

var item = document.querySelector(".list-group-item:nth-child(3)")
item.style.display = "none"

var item = document.querySelectorAll(".list-group-item")
item[1].style.color = "green"

for(var i=0;i<item.length;i++){
    if(i%2==1){
        item[i].style.backgroundColor = "green"
    }
}

