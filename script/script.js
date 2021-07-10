window.addEventListener('DOMContentLoaded', () => {
	 'use strict';

    // timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours =  Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }

        function getZero(event) {
            if (String(event).length === 1) {
                return '0' + event;
            } else {
                return String(event);
            }
        };

        function updateClock() {
            let timer = getTimeRemaining();
            timerHours.textContent = getZero(timer.hours);
            timerMinutes.textContent = getZero(timer.minutes);
            timerSeconds.textContent = getZero(timer.seconds);

            if(timer.timeRemaining > 0) {
                setTimeout(updateClock, 1000);
            }
            if (timer.timeRemaining < 0) {
                clearInterval(thisInterval);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }
        updateClock();
    }
    const thisInterval = setInterval(countTimer, 1000, '15 july 2021');

    //  Меню
   function toggleMenu() {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li');
    const popupContent = document.querySelector('.popup-content');

    function heandlerMenu() {
        menu.classList.toggle('active-menu');
    }
    btnMenu.addEventListener('click', heandlerMenu);
    closeBtn.addEventListener('click', heandlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', heandlerMenu))}

    toggleMenu();

    // popup
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
            popupContent.style.transform = `translateX(${count  * 2 - 10}%)`;
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
        

    };
    tooglePopUp();  



});

