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
   const thisInterval = setInterval(countTimer, 1000, '29 july 2021');

   //  Меню
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
   tooglePopUp();  

   // tabs

   const tabs = () => {
       const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toogleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toogleTabContent(i);
                    }
                });
            }   
        });
    }
   tabs();

    // slider

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide =  (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                 currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if(currentSlide < 0 ) {
                currentSlide = slide.length -1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
             if(event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')){
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')){
                startSlide();
            }
        });

        startSlide(1900);

    };
    slider();

    // Добавление точек на слайде
    const addDots = () => {
        const portfolioItem = document.querySelectorAll('.portfolio-item'),
            portfolioDots = document.querySelector('.portfolio-dots');
        
        portfolioItem.forEach(() => {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            portfolioDots.appendChild(dot)
        });

        portfolioDots.children[0].classList.add('dot-active');
    }
    addDots()

    slider();

    // Картинки

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
    changingAttributes();


    // Валидация

    function formValidation() {
        const calculator = document.querySelector('.calc-block');
        const footerFormInput = document.querySelector('.footer-form-input');
        const mainForm = document.querySelector('.main-form');
        const userForm = document.querySelector('#form3');

        userForm.addEventListener('input', (event) => {
            if (event.target.type === 'text') {
                event.target.value = event.target.value.replace(/[^а-яА-Я\s+\- ]/ig, '');
            }
        });

        userForm.addEventListener('input', (event) => {
            if (event.target.type === 'email') {
                event.target.value = event.target.value.replace(/[^[a-zA-Z+^@-_'~*!]/ig, '');
            }
        });

        userForm.addEventListener('input', (event) => {
            if (event.target.type === 'tel') {
                event.target.value = event.target.value.replace(/[^[0-9()-]/ig, '');
            }
        });

        mainForm.addEventListener('input', (event) => {
            if (event.target.type === 'text') {
                event.target.value = event.target.value.replace(/[^а-яА-Я\- ]/ig, '');
            }
        });

        mainForm.addEventListener('input', (event) => {
            if (event.target.type === 'email') {
                event.target.value = event.target.value.replace(/[^[a-zA-Z+^@-_'~*!]/ig, '');
            }
        });

        mainForm.addEventListener('input', (event) => {
            if (event.target.type === 'tel') {
                event.target.value = event.target.value.replace(/[^[0-9()-]/ig, '');
            }
        });

        calculator.addEventListener('input', (event) => {
            if (event.target.type === 'text') {
                event.target.value = event.target.value.replace(/\s+/g, '');
                event.target.value = event.target.value.replace(/\D/g, '');
            }
        });

        footerFormInput.addEventListener('input', (event) => {
            if (event.target.type === 'text' || event.target.classList === 'mess') {
                event.target.value = event.target.value.replace(/[^а-яА-Я\s+\- ]/ig, '');
            }
        });

        footerFormInput.addEventListener('input', (event) => {
            if (event.target.type === 'email') {
                event.target.value = event.target.value.replace(/[^[a-zA-Z+^@-_'~*!]/ig, '');
            }
        });

        footerFormInput.addEventListener('input', (event) => {
            if (event.target.type === 'tel') {
                event.target.value = event.target.value.replace(/[^[0-9()-]/ig, '');
            }
        });

        function bringingToTheRequiredForm() {
            const form1Name = document.getElementById('form1-name');
            const form1Email = document.getElementById('form1-email');
            const form1Phone = document.getElementById('form1-phone');
            const form2Name = document.getElementById('form2-name');
            const form2Email = document.getElementById('form2-email');
            const form2Phone = document.getElementById('form2-phone');
            const form2Message = document.getElementById('form2-message');
            const form3Name = document.getElementById('form3-name');
            const form3Phone = document.getElementById('form3-phone');
            const form3Email = document.getElementById('form3-email');

            let arrForm = [form2Name, form2Phone, form2Message, form1Name, form1Phone, form3Phone, form3Name];
            arrForm.forEach((item) => {
                item.addEventListener('blur', (event) => {
                    if (event.target.type === 'text') {
                        let newStr;
                        function firstLiterals(str) {
                            if (!str) return str;
                            return str[0].toUpperCase() + str.slice(1);
                        }
                        newStr = firstLiterals(event.target.value);
                        event.target.value = newStr;
                        event.target.value = event.target.value.replace(/^[a-zA-Z]$/gi, '');
                    }
                    event.target.value = event.target.value.trim();
                    event.target.value = event.target.value.replace(/\s+/g, ' ');
                    event.target.value = event.target.value.replace(/-+/g, "-");
                });
            });
        }
        bringingToTheRequiredForm();

    }
    formValidation();

});