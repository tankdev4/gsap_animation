// timeline animation
// gsap.to('#box1',{
//     x:1500,
//     rotate:360,
//     duration:2,
//     delay:1
// })
// gsap.to('#box2',{
//     x:1500,
//     BackgroundColor:"lightyellow",    
//     duration:2,
//     delay:2.5
// })
// gsap.to('#box3',{
//     x:1500,
//     BackgroundColor:"lightyellow",    
//     duration:2,
//     delay:2.5,
//     scale:0.5,
//     rotate:360,
//     BorderRadius:"50%"
// })

var tl = gsap.timeline()

tl.from('h2',{
    y:-20,
    opacity:0,   
    duration:1,    
    stagger:0.5  
})
tl.from('h4',{
    y:-20,
    opacity:0,   
    duration:1,    
    stagger:0.5  
})


// tl.to('#box3',{
//     x:1500,
//     BackgroundColor:"lightyellow",    
//     duration:2,
//     delay:1.5,
//     scale:0.5,
//     rotate:360,
//     BorderRadius:"50%"
// })

// tl.to('#box2',{
//     y:500,
//     BackgroundColor:"lightyellow",    
//     duration:2,
//     delay:1,
//     scale:1,
//     rotate:360,    
// })

tl.from('h1',{
    y:20,
    opacity:0,     
    duration:0.5,    
    scale:0.3,        
})