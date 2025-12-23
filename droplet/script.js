const droplet = document.getElementById("droplet");
const zoomText = document.getElementById("zoom-text-layer")
const baseText = document.getElementById("text-layer");
const zoomWorld = document.getElementById("zoom-world");

// zoom factor inside the droplet
const zoom = 1;

// add robust width size check for base layer 
function syncZoomwidth() {
    zoomWorld.style.width = `${baseText.offsetWidth}px`;
}

syncZoomwidth();
window.addEventListener("resize", syncZoomwidth);

// mouse move listener
function handleMouseMove(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    /*
    STEP 1. move the droplet itself
    
    subtract half the droplet size so that the cursor is centered insid the circle.
    */

    // convert viewport coords -> document coords
    const docX = mouseX + window.scrollX
    const docY = mouseY + window.scrollY

    const radius = droplet.offsetWidth / 2;

    /*'droplet' is a DOM element, '.style' is an inline CSS attached the that element.
    So JS is mutating CSS at every runtime. 
    - move window */
    droplet.style.left = `${mouseX - radius}px`; 
    droplet.style.top  = `${mouseY - radius}px`;

    /* in html, zoom-text-layer lives inside droplet.
    I want "the page point under the mouse appears at the center of the droplet.
    The zoom-text should be shifted so that mouseX, mouseY align with (radius, radius) inside the droplet." 
    - move world (inverse alignment)*/
    zoomText.style.transform = `
        translate(${radius - docX * zoom}px, ${radius - docY * zoom}px)
        scale(${zoom})
        `;
    // zoomText.style.left = `${radius - docX}px`;
    // zoomText.style.top  = `${radius - docY}px`;
}

document.addEventListener("mousemove", handleMouseMove)

