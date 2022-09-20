const canvas = document.getElementById("canvas_one");
let myFluid = new Fluid(canvas);

myFluid.PARAMS.emitter_size = 0;
myFluid.PARAMS.transparent = true;

myFluid.activate();
myFluid.PARAMS.emitter_size = 0.5;
