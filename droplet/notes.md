#### Sun-21-Dec 
- first scaffolding set-up
- ⏭️ To do next:
    - add actual magnifying/refracting effects on the droplet

#### Mon-22-Dec
- Magnifying: 
    - 2 layers of text: original (bottom), copy-magnified (top)
    - when the droplet hovers over the text, ~~make a copy of the text within the circle~~, which is zoomed and then cropped (?)
        - ⚠️ Re-think: Don't create a copy at every move, just create a whole copy, and then let the hover reveal the magnified layer 

- **What is done**:
    - overlap two text layers together
    - decide the window (droplet)
    - crop via `overflow: hidden`
    - make the droplet(lens) track the page correctly

- **For next time**:
    - JavaScript: viewport vs. mouse position

#### Tue-22-Dec
- JS: 
    - shift #zoom-text-layer in the opposite direction so the world point under the mouse stays centered in the droplet
    - use `transform`
    

    