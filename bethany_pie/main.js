// // learning review
// window.addEventListener('DOMContentLoaded', (event)=>{
//     console.log('document is loaded');
//     let btn = document.createElement("button");
//     btn.innerHTML = "Load";
//     btn.style = "color:red;"
//     let body = document.querySelector("body");
//     body.appendChild(btn); 
//     btn.addEventListener('click',function(e){
//         btn.style = "background-color:blue;"
//     })
// });

// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');

// });

// window.addEventListener("orientationchange",function(e){
//     let screen = window.screen;
//     let angle = screen.orientation.angle;
//     let type = screen.orientation.type;
//     console.log(`angle : ${angle} ; screen : ${screen}; type: ${type}` );
// })

// pies page  add order to locals
window.addEventListener("DOMContentLoaded",(e)=>{
    const orderButtons = document.querySelectorAll("button[data-order]");
    
    orderButtons.forEach( (button) => {
        button.addEventListener("click",function(e){
            const button = e.currentTarget;
            const container = button.parentNode;

            const order = {
                id : button.getAttribute("data-order"),
                title: container.querySelector('.title').innerText,
                price : container.querySelector('.price').innerText,
                description : container.querySelector('.desc').innerText
            }

            localStorage.setItem("order",JSON.stringify(order));
            const url = window.location.href.replace("pies.html","order.html");
            window.location.href = url;
        })
    });
})


// make the selected pie appear at top of order page 
window.addEventListener("DOMContentLoaded",(e)=>{
    const order = localStorage.getItem("order");
    if (order){
        const pieOrder = JSON.parse(order);

        const pie = document.querySelector('.pie');
        const title = document.querySelector('.title');
        const price = document.querySelectorAll('.price');
        const desc = document.querySelectorAll('.desc');

        title.innerText = pieOrder.title;
        price.innerText = pieOrder.price;
        desc.innerText = pieOrder.description;

        const img = document.querySelector('img');
        img.setAttribute("src",`./images/${pieOrder.id}.png`);
    }
})