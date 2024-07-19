gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    
})

// opetion1
// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:"#page2 #box"
// })

//opetion2
gsap.from("#page2 #box",{
    scale:0,    
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})

gsap.from("#page3 h1",{
    opacity:0,
    x:-500,    
    duration:2,    
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})

gsap.from("#page3 h2",{
    opacity:0,
    x:-500,    
    duration:2,    
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})

gsap.from("#page4 #box",{
    opacity:0,
    scale:0,
    rotate:720,       
    duration:1,    
    scrollTrigger:{
        trigger:"#page4 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"end 10%",
        // scrub:true //scroll up down to animation infinite
        scrub:5,  //any value to smooth animation (1,2,3..)
        pin:true
    }
})