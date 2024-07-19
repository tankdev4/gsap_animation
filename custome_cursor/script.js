var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease: "back.out",
        duration:0.6 //smooth move        
    })
})


imageDiv.addEventListener("mouseenter", function(dets){    
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        scale:4,  
        backgroundColor:"#ffffff9a"          
       
    })
})

imageDiv.addEventListener("mouseleave", function(dets){  
    cursor.innerHTML = ""  
    gsap.to(cursor,{
        scale:1,  
        backgroundColor:"#ffffff"          
        
    })
})