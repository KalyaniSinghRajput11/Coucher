var tl=gsap.timeline()

tl.from("#nav , #nav1, #nav2 h3, #nav3",{
    y:-100,
    delay: 0.5,
    duration: 1,
    opacity:0,
    stagger: 0.5
})
tl.from("#left h1 , #bottom ",{
    x: -800,
    opacity:0,
    duration: 0.7,
    stagger: 0.7
})
tl.from("#right",{
    scale:0,
    opacity:0,
    duration: 0.5,
})

//page2
gsap.from(" #div1 ,  #div2 button",{
    x: -400,
    opacity:0,
    duration: 1,
    stagger: 1,
    scrollTrigger:{
        trigger:"#page2 #side1",
        scroller:"body",
        scrub:1,
        // markers :true,
        start: "top 60%",
        end:"top 30%"
    }
})
gsap.from("#side2 .box1", {
    x: 900,
    opacity:0,
    delay:1,
    duration: 3,
    stagger: 2,
    scrollTrigger:{
        trigger:"#page2 #side1",
        scroller:"body",
        scrub:1,
        // markers :true,
        start: "top 60%",
        end:"top 30%"}
})