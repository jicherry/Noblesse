gsap.registerPlugin(ScrollTrigger);

// main_textbox1 등장
const mainTextTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main_textbox1",
    start: "top 80%",
    toggleActions: "restart none none none"
  }
});

mainTextTl
.from(".main_top_text", {
  x: 150,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out"
})
.from(".main_middle_text", {
  x: 150,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out"
}, "-=0.3") 

.from(".main_textbox2", {
  x: -150,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.2")

.add(() => {
  gsap.to(window, {
    duration: 0.6,
    scrollTo: ".high_end",
    ease: "power2.inOut"
  });
});




// props_wrap 이미지 등장 
const propsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mood_img",
    start: "top 90%", 
    toggleActions: "restart none none none", 
    markers: false,
  }
});

propsTl.from([".mood_img", ".props_text"], {
  x: -150,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.5
})
.from(".chair_img", {
  x: 150,
  opacity: 0,
  duration: 1.8,
  ease: "power3.out"
}, "-=1")
.from(".backchair_img", {
  x: -120,
  opacity: 0,
  duration: 1.6,
  ease: "power3.out"
}, "-=1.2");


// cart_img 등장 
gsap.to(".cart_img", {
  y: () => {
    const cart = document.querySelector(".cart_img");
    const target = document.querySelector(".sider_title");

    const cartTop = cart.getBoundingClientRect().top + window.scrollY;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    return (targetTop - cartTop - 50);
  },
  ease: "none",
  scrollTrigger: {
    trigger: ".sider",
    start: "top bottom",
    endTrigger: ".sider",
    end: "top",
    scrub: 0.1,   
  }
});


//couch-img 회전
gsap.fromTo(".couch-img",
  {
    rotationY: 0,
    opacity: 1,
    transformStyle: "preserve-3d",
  },
  {
    rotationY: 180,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".sider_title",
      start: "top 80%",
      toggleActions: "restart none none none"  
    }
  }
);

//sider_subtext 등장
gsap.timeline({
  scrollTrigger: {
    trigger: ".sider_subtext",
    start: "top 70%",
    toggleActions: "restart none none none"  
  }
})
.from(".sider_subtext_title", {
  x: -150,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})
.from(".sider_subtext_box", {
  x: 150,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.5");


//design_item 텍스트 등장
const designTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".design_text",
    start: "top 75%",
    toggleActions: "restart none none none"  
  }
});

designTl.from(
  [".design_text", ".sum_container > div .h3-text", ".sum_container > div p"],
  {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0
  }
);


//introduction 등장
const section5Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".trandy_wrap",
    start: "top 73%",
    toggleActions: "restart none none none"  
  }
});

section5Tl.from(".trandy_wrap", {
  x: 150,
  opacity: 0,
  duration: 1.3,
  ease: "power3.out"
})
.from(".unique_wrap", {
  x: -150,
  opacity: 0,
  duration: 1.3,
  ease: "power3.out"
}, "-=0.5")
.from(".edit_wrap", {
  x: 150,
  opacity: 0,
  duration: 1.3,
  ease: "power3.out"
}, "-=0.5");


//design_system_wrap 등장
gsap.from(".design_system_wrap", {
  x: -150,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".design_system_wrap",
    start: "top 50%",
    toggleActions: "restart none none none" 
  }
});


//.montserrat, .born 등장
gsap.from([".montserrat", ".born"], {
  translateY: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".bottom_line",
    start: "top 50%",
    toggleActions: "restart none none none"  
  }
});


// main_page 이미지 등장
gsap.from("img[src='img/mainpage2.png']", {
  x: 150,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "img[src='img/mainpage2.png']",
    start: "top 70%",
    toggleActions: "restart none none none"  
  }
});

gsap.from("img[src='img/mainpage3.png']", {
  x: -150,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "img[src='img/mainpage3.png']",
    start: "top 80%",
    toggleActions: "restart none none none"  
  }
});

gsap.from(["img[src='img/mainpage4.png']", "img[src='img/mainpage5.png']"], {
  x: 150,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "img[src='img/mainpage4.png']",
    start: "top 80%",
    toggleActions: "restart none none none" 
  }
});


//md_page img 등장
gsap.from("img[src='img/md_front.png']", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "img[src='img/md_front.png']",
    start: "top 70%",
    toggleActions: "restart none none none"  
  }
});


//mobile_imges 롤링
const mobileWrap = document.querySelector(".mobile_imges");
const imgs = gsap.utils.toArray(".mobile_imges img");

imgs.forEach(img => mobileWrap.appendChild(img.cloneNode(true)));

const totalWidth = imgs.reduce((acc, img) => acc + img.offsetWidth + 32, 0);

gsap.to(mobileWrap, {
  x: `-${totalWidth}px`,
  ease: "none",
  duration: 20,
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
  }
});


//  kitchen 이미지 등장
gsap.from(
  [".kitchen_img",".kitchen", ".pet_span",".pet_img", 
  ".lighting_span",".lighting_img", ".beauty", 
  ".beauty_img"],
  {
    opacity: 0,
    duration: 3.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".kitchen",
      start: "top 60%",
      toggleActions: "restart none none none"  
    }
  }
);

//버튼
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
    scrollBtn.classList.remove("hide");
  } else {
    scrollBtn.classList.add("hide");
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


