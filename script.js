import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';


neonCursor({
    el: document.getElementById('app'), // The container element
    shaderPoints: 20, // Number of glowing points in the trail
    curvePoints: 100, // Smoothness of the curve
    curveLerp: .70, // Smoothing factor for curve movement
    radius1: 8.5, // Inner radius of the cursor trail
    radius2: 60, // Outer radius of the cursor trail
    velocityTreshold: 5, // Speed threshold for changing behavior
    sleepRadiusX: 80, // Radius while idle in the X-axis
    sleepRadiusY: 80, // Radius while idle in the Y-axis
    sleepTimeCoefX: 0.002, // Animation speed while idle (X-axis)
    sleepTimeCoefY: 0.002, // Animation speed while idle (Y-axis)
});
const cursor = document.getElementById('custom-cursor');
const trail = document.getElementById('trail');

const customCursor = document.getElementById('custom-cursor');

// Choose a hand emoji or symbol as the cursor
customCursor.innerHTML = "🖐";  // You can use any emoji or symbol here

document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate(${e.pageX - 30}px, ${e.pageY - 30}px)`;  // Adjust position
});




