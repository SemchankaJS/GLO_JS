const changingAttributes = () => {
    const commandShell = document.querySelector('#command .row');

    const toggleImage = (event) => {
        if (event.target.classList.contains('command__photo')) {
            const lastImage = event.target.src;

            event.target.src = event.target.dataset.img;
            event.target.dataset.img = lastImage;
        }
    }
    
    commandShell.addEventListener('mouseover', toggleImage);
    commandShell.addEventListener('mouseout', toggleImage);       
}

export default changingAttributes;