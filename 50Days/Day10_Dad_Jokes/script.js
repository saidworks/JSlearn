const jokeEL = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click',generateJoke)

generateJoke()

// //Fetch API
// function generateJoke(){
//     const config = { headers :{
//             'Accept': 'application/json'}
//                     }
//     fetch('https://icanhazdadjoke.com/', config)
//     .then(response=>response.json())
//     .then(data=>{
//         jokeEL.innerHTML = data.joke
//     });
// }

// promises /async
async function generateJoke(){
    const config = { headers :{
                   'Accept': 'application/json'}
                     }
    
    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    jokeEL.innerHTML = data.joke;

}