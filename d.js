// Following the twgl tiny tutorial, https://twgljs.org/
// Code adapted from https://github.com/greggman/twgl.js/blob/master/examples/tiny.html

const gl = document.getElementById("canvas").getContext("webgl");
const programInfo = twgl.createProgramInfo(gl, ["vertexShader", "fragmentShader"]);

const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};
const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

let mouseX = 0, mouseY = 0;

document.getElementById("canvas").addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});


function render(time) {
  //Paints only 25% pixels in the screen space, 
  //Slightly lower resolution but much better performance!
  //See also: the zoom feature of https://glslsandbox.com/
  
  twgl.resizeCanvasToDisplaySize(gl.canvas, 0.5); 
  
  //Paints 4x the number of pixels.
  //Very computationally expensive in full screen on desktop devices
  //twgl.resizeCanvasToDisplaySize(gl.canvas, 1.0); 

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  const uniforms = {
    u_time: (time) * 0.002,
    u_resolution: [gl.canvas.width, gl.canvas.height],
    u_mouse: [mouseX, mouseY],
  };

  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, bufferInfo);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Qy00zkVgWNqVOy0xGutifGn-qgnn3N0",
  authDomain: "portpolio-afdbb.firebaseapp.com",
  projectId: "portpolio-afdbb",
  storageBucket: "portpolio-afdbb.firebasestorage.app",
  messagingSenderId: "423054068241",
  appId: "1:423054068241:web:8d77f98838302c00b9bfb0",
  measurementId: "G-YZPC5JHT7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);