const tooglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close');
    const popupContent = document.querySelector('.popup-content');    

    let count = -100;
    let flyInterval;
    let flyAnimate = () => {
      count++;
      if(count <= 0){
        popupContent.style.transform = `translateX(${count  * 4 - 10}%)`;
      } 
    else {
        cancelAnimationFrame(flyInterval);
        count = -100;
        return;
      }
      flyInterval = requestAnimationFrame(flyAnimate);
      
    };

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (document.body.clientWidth < 768 ) {
                popup.style.display = 'block';
                
            } else {
                popup.style.display = 'block';
                flyInterval = requestAnimationFrame(flyAnimate);
            }
        });
    });



    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;
             target = target.closest('.popup-content');
        if (!target) {
            popup.style.display = 'none';
        }     
    })

};

export default tooglePopUp;