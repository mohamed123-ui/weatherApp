let inputSearch=document.querySelector('input')
let btnSearch=document.querySelector(".btn")




btnSearch.addEventListener('click',function(){
    getData(inputSearch.value)
})
getData("")
async function getData(meal){
try {
   
        let response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
     if(response.ok){
         let data=await response.json();
     Allrecipes=data.recipes;
     display();
     }
    }
 catch (error) {
    alert('invalid data')
}}
function display(){
    let contianer="";
    for(let i=0;i<Allrecipes.length;i++){
        contianer+=`  <div class="col-md-4">
        <div>
            <img src="${Allrecipes[i].image_url}"class="w-100 height=50" alt="">
            <h3>${Allrecipes[i].title}</h3>
            <button onclick="ShowDetails(${Allrecipes[i].recipe_id})"  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-info btn "> ShowDetails</button>
        </div>
    </div>`
    }
    document.getElementById('rowData').innerHTML=contianer;
}
async function ShowDetails(id){
    let response= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    if(response.ok)
{
    let details=await response.json();
let allDetails= details.recipe

}
document.getElementById('bodyData').innerHTML=`<img src=" ${ allDetails.image_url}>`
}
