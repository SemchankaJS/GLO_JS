function toggleMenu() {
        
    const menu = document.querySelector('menu'),
        documentAll = document.querySelector('html');

    const heandlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    documentAll.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('.menu');
        if(target) {
            heandlerMenu();  
        } else {
            target = event.target;  
        }
        target = target.closest('menu');
        if(target) {
        heandlerMenu();
        }
    });
}; 

export default toggleMenu;