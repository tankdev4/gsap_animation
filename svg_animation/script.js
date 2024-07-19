/* inspiration animation with below link */
/* https://www.brandium.nl/ */


var path = 'M 10 100 Q 500 100 990 100';
var finalpath = 'M 10 100 Q 500 100 990 100';

var string = document.querySelector("#box");

string.addEventListener("mousemove", function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power1.out"
    });
});

string.addEventListener("mouseleave", function() {
    gsap.to("svg path", {
        attr: { d: finalpath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
    });
});
