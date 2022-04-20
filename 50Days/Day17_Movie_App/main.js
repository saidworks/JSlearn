//API logic
//https://www.thesportsdb.com/api.php
const API_URL = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php";

//implement search https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/

// get sports names
const sportNames = getsportsName(API_URL);

//fetch the data from API
async function getsportsName(url){
    const res = await fetch(url);
    const data = await res.json();
    return data.sports;
}

//DOM Logic
const sport  = document.querySelector('.sport');
const overview = document.querySelector('.overview');
const sportInfo  = document.querySelector('.sport-info');
const form = document.getElementById('form');
const sports = document.querySelectorAll('.sport');
const search = document.getElementById('search');

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const searchTerm = search.value;
    
    for(let i=0;i<sports.length;i++){
       
       if(sports[i].textContent.toLowerCase().includes(searchTerm.toLowerCase())){
        
        sports[i].classList.remove("is-hidden")
       }
       else{
        sports[i].classList.add("is-hidden");
    
          }
        }
    })


console.log(sportNames);
// sportNames.forEach(sport=> {console.log(sport)
    
// });