const sounds = ['applause','roaster','drums','morning-farm','ding-dong'];

sounds.forEach(
    sound => {
     const btn = document.createElement('button');
     btn.classList.add('btn')
     
     btn.innerText = sound  
    // add event listent to listen to click
        btn.addEventListener('click', ()=> {
            stopSongs();
            document.getElementById(sound).play();
        })

     let buttons = document.getElementById('buttons')
     buttons.appendChild(btn)
    }
)

function stopSongs(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound);
        song.pause()
        song.currentTime= 0;
    } )
}