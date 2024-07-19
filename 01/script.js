// to mins left to right (initial to final position move box)
gsap.to('#box1',{
    x:1200,
    duration:2,
    delay:1
})

// from mins right to left (final to initial position move box)
gsap.from('#box2',{
    x:1200,    
    duration:2,
    delay:1,
    rotate:360,
    BackgroundColor:"lightyellow",
    BorderRadius:"50%",
    scale:0.5    
})

// text color changes  
gsap.from('h1',{    
    duration:2,
    delay:1,
    // color:"red"
    opacity:0,  
    y:100,
    stagger:0.3 //single single element animation
})

// to mins left to right (initial to final position move box)
gsap.to('#box3',{
    x:1200,
    duration:2,
    delay:1,
    rotate:90,
    repeat:1, // two time animation  (-1 value to infinite start )
    yoyo:true // initial to final position continue loop 
})