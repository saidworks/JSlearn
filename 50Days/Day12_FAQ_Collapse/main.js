const faqs = document.querySelectorAll('.faq');
const faqToggles =  document.querySelectorAll('.faq-toggle');
/* for each faq box when I click the button I want to see the text*/

faqToggles.forEach((faqToggle,idx) => { 
    faqToggle.addEventListener('click',() => {
      faqs[idx].classList.toggle('active');
    
    })
})