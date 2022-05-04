const button = document.getElementById("button");
const toastContainer = document.getElementById("toasts");


const msgs = [ 
    "Alert one",
    "notification one",
    "Notification two"
];
countClick =0;
button.addEventListener('click', ()=>showNotifications());



function showNotifications()  {
    msgs.forEach(msg =>{
        const toast = document.createElement("button");
        toast.classList.toggle("toast");
        toast.classList.toggle("show");
        toast.innerText = msg;
        toastContainer.appendChild(toast);
    })
    const toasts = document.querySelectorAll(".toast");
    console.log(toasts);
    hideNofitications(toasts)
}

function hideNofitications(toasts){
            toasts.prototype.foreach(toast => {
            console.log(toast);
            toast.addEventListener('click',()=>{
            toast.classList.toggle('hide')})})
   
}