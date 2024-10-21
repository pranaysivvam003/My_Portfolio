
var typed = new Typed(".text", {
    strings: ["UI/UX Designer" ,"Web Developer" ,"Freelancer","Mobile App Designer", "Graphic Designer"],
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