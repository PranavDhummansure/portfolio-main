

function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

var circle = document.querySelector(".circle")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    circle.style.left = dets.x + 20+"px"
    circle.style.top = dets.y + 20+"px"
})


gsap.from(".page1 h3", {
    x: 80,

    opacity: 0,
    
    duration: 0.7,
    scrollTrigger: {
        trigger: ".page1 h3",
        scroller: ".main",
       
        start: "top 55%",
        end: "top 0",
        scrub: 3
    }

})
gsap.from(".page1 img", {
    x: -80,

    opacity: 0,
    
    duration: 0.7,
    scrollTrigger: {
        trigger: ".page1 img",
        scroller: ".main",
       
        start: "top 45%",
        end: "top 0",
        scrub: 3,
        
    }


})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -100%",
        end: "top -120%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -260%",
        end: "top -300%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})
var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -580%",
        end: "top -585%",   
        scrub: 3
    }
})

tl4.to(".main",{

    backgroundColor:"#fff"
})
tl4.to("#bulb #oneplus",{

    opacity:1,
    duration:1,
    delay:1,
   
    ease:"linear"
})
tl4.to("#bulb #twoplus",{

    opacity:0,
   
    duration:7,
    ease:"linear"
})



var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        circle.style.width = "470px"
        circle.style.height = "370px"
        circle.style.borderRadius = "0"
        circle.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        circle.style.width = "20px"
        circle.style.height = "20px"
        circle.style.borderRadius = "50%"
        circle.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})

  gsap.from(".page1 h1,.page1 h2", {
    y: 20,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})

gsap.from(".page2 ",{
    opacity:0,
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".main",
        // markers:true,
        start: "top 0%",
        end: "top -5%",
        scrub: 3
    }
})
gsap.from(".page3 h1", {
    x: 80,

    opacity: 0,
    
    duration: 0.7,
    scrollTrigger: {
        trigger: ".page3 h1",
        scroller: ".main",
       
        start: "top 85%",
        end: "top 0",
        scrub: 3
    }

})
gsap.from(".page5 h2", {
    y: 50,
    

    opacity: 0,
    
    duration: 0.1,
    scrollTrigger: {
        trigger: ".page5 h2",
        scroller: ".main",
       
        start: "top 77%",
        end: "top 75",
        scrub: 3
    }
})



gsap.from("#bulb #oneplus",{
    opacity:0,
    scrollTrigger: {
        trigger: "#bulb #oneplus",
        
        scroller: ".main",
        // markers:true,
        start: "top -115%",
        end: "top -120%",
        scrub: 1
        
    }
})
gsap.from("#bulb #oneplus",{
    opacity:0,
    scrollTrigger: {
        trigger: "#bulb #oneplus",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 1
        
    }
})




gsap.from("#bulb #twoplus",{
    opacity:1,
    scrollTrigger: {
        trigger: "#bulb #twoplus",
        
        scroller: ".main",
        // markers:true,
        start: "top -115%",
        end: "top -120%",
        scrub: 1
        
    }
})
gsap.from("#bulb #twoplus",{    
    opacity:1,
    scrollTrigger: {
        trigger: "#bulb #twoplus",
        scroller: ".main",
        
        start: "top -280%",
        end: "top -300%",
        scrub: 1
        
    }
})



var path = "M 10 100 Q 500 100 1350 100"
var finalPath = "M 10 100 Q 500 100 1350 100"
var string = document.querySelector("#string0")
string.addEventListener("mousemove", function (dets) { path = `M 10 100 Q ${dets.x} ${dets.y} 1350 100`
gsap.to("svg path", {
attr: { d: path },
duration:0.3,
ease:"power3.out"
})
})
string.addEventListener("mouseleave", function(){
gsap.to("svg path", {
attr:{d:finalPath},
duration:1.5,
ease: "elastic.out(1,0.2)"
})
})

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
animateCircles()

Shery.imageEffect(".emu",{
    style: 2,
    config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":2.12111801242236},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}},
    gooey:true
   

  

}
)
gsap.to('.imj',{
  
    y: -360,
    duration: 6,
  
    ease: 'bounce',
    repeat: -1,
    delay: 0,
    scrollTrigger: {
        trigger: ".imj",
        scroller: ".main",
        // markers:true,
        start: "top -580%",
        end: "top -585%",
        scrub: 3
    }
  });
    
    
