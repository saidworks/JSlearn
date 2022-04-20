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
    console.log(data.sports)
    showSports(data.sports);
}

const showSports = function(sports) {
    main.innerHTML = "";
    for(const sport of sports){
        const {strSport,strFormat,strSportThumb,strSportDescription} = sport;
        const sportEl = document.createElement("div");
        sportEl.classList.add("sport");
        sportEl.innerHTML = `
            <div class="sport ">
                <img src="${strSportThumb}" alt="">
                <div class="sport-info">
                    <h3>${strSport}</h3>
                    <span class="green">${strFormat}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${strSportDescription}                
                </div>
            </div>
        `
        main.appendChild(sportEl);
    }
 

}

//DOM Logic
// const sportEl  = document.querySelector('.sport');
const overview = document.querySelector('.overview');
const sportInfo  = document.querySelector('.sport-info');
const form = document.getElementById('form');
const sports = document.querySelectorAll('.sport');
const search = document.getElementById('search');
const main = document.getElementById('main');

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



// sportNames.forEach(sport=> {console.log(sport)
    
// });