
var typed = new Typed(".text", {
    strings: ["Web Designing..." ,"Web Development..." ,"UI UX Designing...", "Storyboarding...","Script Development...", "Mobile Appilication Designing...", "Interior Designing...","Film Direction..."],
    typeSpeed:100,
    backSpeed:60,
    backDelay:800,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})