document.addEventListener("mousemove", function(dets) {
    document.querySelector("#circle").style.left = `${dets.x - 15  }px`
    document.querySelector("#circle").style.top = `${dets.y + 15 }px`

    document.querySelector(".in-eye").style.top = `${dets.y / 55}px`
    document.querySelector(".in-eye").style.left = `${dets.x / 55}px`
    document.querySelector(".in-eye2").style.top = `${dets.y / 55}px`
    document.querySelector(".in-eye2").style.left = `${dets.x / 55}px`
        // document.querySelector(".eyes").style.width = "30px "
        // console.log("ehyegfe")
})
var tl = gsap.timeline();
gsap.from(".elem h1", {
    opacity: 0,
    // rotate: 10,
    y: 300,
    duration: "2",
    delay: ".2"
})
gsap.from(".elem h2", {
    opacity: 0,
    // rotate: 10,
    y: 300,
    duration: "2",
    delay: ".4"
})
gsap.from(".elem h3", {
    opacity: 0,
    // rotate: 10,
    y: 300,
    duration: "2",
    delay: ".5"
})
gsap.from("#icons", {
    opacity: 0,
    // rotate: 10,
    duration: "2",
    delay: ".2",
})
gsap.to("#page-1 button", {
    opacity: 1,
    // rotate: 10,
    duration: "2",
    delay: "1",
})


gsap.from("#boximg", {
    opacity: 0,
    // rotate: 10,
    duration: "2",
    delay: "2",
    // scale: "0",
    // y: 100,
})
gsap.from("#page-2 h1", {
    // opacity: 0,
    // rotate: 10,
    duration: "2",
    delay: ".5",
    // scale: "0",
    x: "600",
    scrollTrigger: {
        trigger: "#page-2 h1",
        scroller: "#main",
        start: "top 100%",
        // markers: "true",
        end: "100%",
        scrub: 1,



    }

})
gsap.from("#page-3 h2", {
    // rotate: 8,
    y: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page-3 h2",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 3
    }
})
gsap.from("#page-3 h5", {
    // rotate: 8,
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page-3 h5",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 2
    }
})
gsap.from("#page-3 p", {
    // rotate: 8,
    opacity: 0,
    scale: "1",
    duration: "3",
    scrollTrigger: {
        trigger: "#page-3 p",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 2
    }
})





gsap.to("#page-3 #img-pin ", {
    width: "105vw",

    scrollTrigger: {
        trigger: "#page-3",
        scroller: "#main",
        // markers:true,
        start: "top 30%",
        end: "top -20%",
        scrub: 2,
        pin: true
    }
})
gsap.from("#img-pin2 #img33 ", {
    opacity: "0",
    scale: "1",
    scrollTrigger: {
        trigger: " #img-pin2",
        scroller: "#main",
        // markers: true,
        start: "top 10%",
        end: "top -100%",
        scrub: true,
        pin: true,
    }
})

gsap.from("#page-4 h1", {
    // rotate: 8,
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page-4 h1",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top 40%",
        scrub: 3,
    }
})
gsap.from("#page-4 h2", {
    // rotate: 8,
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page-4 h2",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 3
    }
})
gsap.from(".box-1 h3", {
    // rotate: 8,
    x: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".box-1 h3",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "top 70%",
        scrub: 3
    }
})
gsap.from(".mid-box h5", {
    // rotate: 8,
    x: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".mid-box h5",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top 90%",
        scrub: 3
    }
})
gsap.from(".box-1 p", {
    // rotate: 8,
    x: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".box-1 p",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "top 70%",
        scrub: 3
    }
})
gsap.from(".mid-box p", {
    // rotate: 8,
    x: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".mid-box p",
        scroller: "#main",
        // markers: true,
        start: "top 20%",
        end: "top 70%",
        scrub: 3
    }
})
gsap.from(".box-2 h4", {
    // rotate: 8,
    x: 300,
    color: " yellow ",
    opacity: 0,
    stagger: "1",
    duration: "10",
    scrollTrigger: {
        trigger: ".box-2 h4",
        scroller: "#main",
        // markers: true,
        start: "top 60%",
        end: "top -60%",
        scrub: 8
    }
})
gsap.from("hr", {
    // rotate: 8,
    x: 700,
    opacity: 0,
    scrollTrigger: {
        trigger: "hr",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "top 70%",
        scrub: 10
    }
})
gsap.from("#scroll-2 h1", {
    // opacity: 0,
    // rotate: 10,
    duration: "2",
    delay: ".5",
    scal: "0",
    x: "600",
    scrollTrigger: {
        trigger: "#scroll-2 h1",
        scroller: "#main",
        start: "top 100%",
        // markers: "true",
        end: "100%",
        scrub: 1,
    }

})


gsap.from("#page5 .project", {
        // x: "-2000",
        right: "-100%",
        duration: "10",
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            start: "left 0%",
            // markers: "true",
            end: "right",
            scrub: 1,
            pin: true,
        }

    })
    // var tl = gsap.timeline();
gsap.from(".pp1", {
    opacity: 0,
    x: "-1000",
    duration: "1",
    // delay: "1",
    scrollTrigger: {
        trigger: ".pp1",
        scroller: "#main",
        start: "top 30%",
        // markers: "true",
        scrub: 1,
        // pin: true,
    }

})
gsap.from(".pp2", {
    opacity: 0.6,
    y: "600",
    duration: "1",
    // delay: "1",
    scrollTrigger: {
        trigger: ".pp2",
        scroller: "#main",
        start: "top 40%",
        // markers: "true",
        scrub: 1,
        // pin: true,
    }

})
gsap.from("#page6 h1", {
    opacity: 0,
    x: "300",
    duration: "1",
    scrollTrigger: {
        trigger: "#page6 h1",
        scroller: "#main",
        start: "top 40%",
        // markers: "true",
        scrub: true,
    }

})
gsap.from("#page6 h2", {
    opacity: 0,
    x: "-100",
    duration: "1",
    scrollTrigger: {
        trigger: "#page6 h2",
        scroller: "#main",
        start: "top 70%",
        // markers: "true",
        scrub: true,
    }

})
gsap.from("#page7 h1", {
    opacity: 0,
    x: "-100",
    duration: "1",
    scrollTrigger: {
        trigger: "#page7 h1",
        scroller: "#main",
        start: "top 80%",
        // markers: "true",
        scrub: true,
    }

})
gsap.from("#page7 h2", {
    opacity: 0,
    x: "100",
    duration: "1",
    scrollTrigger: {
        trigger: "#page7 h2",
        scroller: "#main",
        start: "top 90%",
        // markers: "true",
        scrub: true,
    }

})
gsap.from("#page7 h3", {
    opacity: 0,
    x: "-100",
    duration: "1",
    scrollTrigger: {
        trigger: "#page7 h3",
        scroller: "#main",
        start: "top 95%",
        // markers: "true",
        scrub: true,
    }

})
gsap.from("#scroll3 h1", {
    // opacity: 0,
    // rotate: 10,
    duration: "2",
    delay: ".5",
    scal: "0",
    x: "600",
    scrollTrigger: {
        trigger: "#scroll3 h1",
        scroller: "#main",
        start: "top 100%",
        // markers: "true",
        end: "100%",
        scrub: 1,
    }

})
gsap.from("#page9 h1", {
    opacity: 0,
    y: "-100",
    duration: "1",
    scrollTrigger: {
        trigger: "#page9 h1",
        scroller: "#main",
        start: "top 95%",
        // markers: "true",
        scrub: true,
    }

})
document.addEventListener("mousemove", function(dets) {
    document.querySelector("#circle").style.left = `${dets.x - 15  }px`
    document.querySelector("#circle").style.top = `${dets.y + 15 }px`

    document.querySelector(".in-8-1").style.top = `${dets.y / 55}px`
    document.querySelector(".in-8-1").style.left = `${dets.x / 55}px`
    document.querySelector(".in-8-2").style.top = `${dets.y / 55}px`
    document.querySelector(".in-8-2").style.left = `${dets.x / 55}px`
        // document.querySelector(".eyes").style.width = "30px "
        // console.log("ehyegfe")
})