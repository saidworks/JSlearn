const labels = document.querySelectorAll('.form-control label');
const title = document.querySelector('.container h1')

labels.forEach(label=> {
    label.innerHTML = label.innerText
                        .split('')
                        .map((letter,idx)=> `<span style='transition-delay:${idx*50}ms'> ${letter} </span>`)
                        .join('')
})

title.innerHTML = title.innerText
                        .split('')
                        .map((letter,idx)=>`<span style='transition-delay:${idx*50}ms'> ${letter} </span>`)
                        .join('');

                    