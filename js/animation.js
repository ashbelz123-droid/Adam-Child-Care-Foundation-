const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

})

document.querySelectorAll(".card, .child-card, .section").forEach(el => {

el.classList.add("fade-in")

observer.observe(el)

})
