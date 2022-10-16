// const canvas = document.getElementById("canvas_one");
// let myFluid = new Fluid(canvas);

// myFluid.PARAMS.emitter_size = 0;
// myFluid.PARAMS.transparent = true;

// myFluid.activate();
// myFluid.PARAMS.emitter_size = 0.5;

window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
