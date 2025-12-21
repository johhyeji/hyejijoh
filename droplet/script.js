const droplet = document.getElementById("droplet");

// zoom factor inside the droplet
const zoom = 1.5;

// mouse move listener
document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    /*
    STEP 1. move the droplet itself
    
    subtract half the droplet size so that the cursor is centered insid the circle.
    */

    const radius = droplet.offsetWidth / 2;

    droplet.style.left = `${mouseX - radius}px`;
    droplet.style.top  = `${mouseY - radius}px`;

    /* 
    STEP 2. background maginification logic 
    
    - mouse poisition: local origin
    - scale the background
    - shift it so the zoomed content aligns under the droplet
    */

    droplet.style.backgroundPosition = 
        `${-mouseX * (zoom - 1)}px ${-mouseY * (zoom -1)}px`;

    droplet.style.backgroundSize = `${zoom * 100}%`;
});