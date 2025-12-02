gsap.registerPlugin(ScrollTrigger);

gsap.to(".cart_img", {
  y: () => {
    // cart_img 위치 ~ sider_title 직전까지의 이동 거리 자동 계산
    const cart = document.querySelector(".cart_img");
    const target = document.querySelector(".sider_title");

    const cartTop = cart.getBoundingClientRect().top + window.scrollY;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    // 목표 지점 - 현재 시작 지점 - 약간의 여유 거리
    return (targetTop - cartTop - 50);
  },
  ease: "none",
  scrollTrigger: {
    trigger: ".sider",
    start: "top bottom", 
    endTrigger: ".sider",
    end: "top",    
    scrub: 0.2,        
  }
});
