const button = document.getElementById("button-show");
const buttonHide = document.getElementById("button-hide");
const toastContainer = document.getElementById("toasts");


const msgs = [ 
    "Alert one",
    "notification one",
    "Notification two"
];
countClick =0;
button.addEventListener('click', ()=>showNotifications());
buttonHide.addEventListener('click', hideNotifications);

function showNotifications()  {
    countClick = 0;

    msgs.forEach(msg =>{
        const toast = document.createElement("button");
        toast.classList.toggle("toast");
        toast.classList.toggle("show");
        toast.innerText = msg;
        toastContainer.appendChild(toast);
    })
    document.body.removeChild(button);
    buttonHide.classList.remove("hide");
    document.body.appendChild(buttonHide);
    
}
function hideNotifications()  {
    countClick +=1;
    const toast = document.querySelector(".toast");
    toastContainer.removeChild(toast);
    buttonHide.classList.remove('hide');
    if(countClick==3){
        document.body.removeChild(buttonHide);
        document.body.appendChild(button);

    }
}
