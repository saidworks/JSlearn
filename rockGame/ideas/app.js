const imgs = document.querySelectorAll('.img')
const injection = document.querySelector('.injection')

imgs.forEach((image) => {
    image.addEventListener("click", (e) => {
        const currentImg = document.querySelector('.injected')
        if (!currentImg) {
            const newImg = document.createElement('img')
            newImg.setAttribute('src', e.target.getAttribute('src'))
            newImg.setAttribute('class', 'injected')
            document.body.insertBefore(newImg, injection);
        } else {
            currentImg.setAttribute("src", e.target.getAttribute('src'))
        }
    })
})