var menu = document.querySelector(".outernavbar i")
var close = document.querySelector(".innernavbar i")

var tl = gsap.timeline()

tl.to(".innernavbar",{
    right:0,
    duration:0.5,
})

tl.from(".innernavbar h4",{
    x:100,
    duration:0.5,
    stagger:0.2,
    opacity:0
})

tl.pause()
menu.addEventListener("click", function(){
    tl.play()
})
close.addEventListener("click", function(){
    tl.reverse()
})