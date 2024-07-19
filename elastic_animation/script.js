//  inspiration animation site 
//  https://wethinkelastic.com/ 

gsap.to("#box2 h1",{
    transform: "translateX(-150%)",
    scrollTrigger:{
        trigger:"#box2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -250%",
        scrub:2,
        pin:true //page stop in current postion

    }
})