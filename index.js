var sitenameInput = document.getElementById("SName")
var sitelinkInput = document.getElementById("SURL")
var productList=[];
if (localStorage.getItem("list")==null){
    productList=[]
}
else{
    productList=JSON.parse(localStorage.getItem("list"))
    displayData()
}
function addLink() {
    var product = {
        sitename:sitenameInput.value,
        sitelink:sitelinkInput.value,
    }
    productList.push(product)
    localStorage.setItem("list", JSON.stringify(productList))
    display()
}

function display() {
    var temp = ""
    for (var i = 0; i < productList.length; i++) {
        temp +=
        `<div class="column pt-4 mt-3 w-100" id="bookmarkList"  style="background-image: linear-gradient(#EEE,#FFF);">
        <h3 class="w-50 mt-3 ps-2">`+ productList[i].sitename+`</h3>
        <div class="w-50">
         <a class="btn btn-primary" href="`+productList[i].sitelink+`" target="_blank">Visit</a>
         <button class="btn btn-danger btndelete" onclick="deleteProduct(`+i+`)">Delete</button>
       
       </div>
    </div>`
    }
    document.getElementById("demo").innerHTML = temp
}
function deleteProduct(x){
    productList.splice(x,1)
    localStorage.setItem("list",JSON.stringify(productList))
    display()
}