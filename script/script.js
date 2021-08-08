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
   const thisInterval = setInterval(countTimer, 1000, '29 july 2022');

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

    const slider = (time = 1900, booling = true) => {
        const slide = document.querySelectorAll('.portfolio-item'),
        slider = document.querySelector('.portfolio-content'),
        dotAdd = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval;

        for (let i = 0; i < slide.length; i++) {
            const dots = document.createElement('li');
            dots.className = 'dot';
            dotAdd.appendChild(dots);
        }

        const dot = document.querySelectorAll('.dot');
            dot[0].classList.add('dot-active');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = () => {
            if(booling){
                interval = setInterval(autoPlaySlide, time);
            }
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target;

            if(!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')) {
                currentSlide++;
            } else if(target.matches('#arrow-left')) {
                currentSlide--;
            } else if(target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if(elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if(currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if(currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });
            
            slider.addEventListener('mouseover', (event) => {
                if(event.target.matches('.portfolio-btn') || 
                event.target.matches('.dot')) {
                    stopSlide();
                }
            });

            slider.addEventListener('mouseout', (event) => {
                if(event.target.matches('.portfolio-btn') || 
                    event.target.matches('.dot')) {
                        startSlide();
                }
            });

        startSlide();
    };
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

    const formValidation = () => {
        const calcBlock = document.querySelector('.calc-block');
            calcBlock.addEventListener('input', (e) => {
                if(e.target.closest('.calc-square, .calc-count, .calc-day')) {
                    e.target.value = e.target.value.replace(/\D/g, '');
                }
            });

        document.addEventListener('input', (e) => {
            const target = event.target;
                if(target.closest('#form1-name, #form2-name, #form2-message')){
                    target.value = target.value.replace(/[^а-яё\-\s]/gi,'');
                }
                if(e.target.closest('#form1-email, #form2-email')){
                    target.value = target.value.replace(/[а-яё0-9+^$\][}{)(?/]/gi, '');
                }
                if(e.target.closest('#form1-phone, #form2-phone')){
                    target.value = target.value.replace(/[^0-9\-)()]/gi, '');
                }
        });

        const inputForm = document.querySelectorAll('input'),
            nameForm1 = document.getElementById('form1-name'),
            nameForm2 = document.getElementById('form2-name');

        inputForm.forEach((elem) => {
            elem.addEventListener('blur', () => {
                elem.value = elem.value.replace(/\s+/g, ' ')
                                        .replace(/\-+/g, '-')
                                        .replace(/^\-*\s*\-*|\-*\s*\-*$/g, '')
                                        .replace(/^\s*\-*\s*|\s*\-*\s*$/g, '').trim();
                nameForm1.value = nameForm1.value.replace(/([а-яё])([а-яё]+)/gi, (match, val1, val2) => val1.toUpperCase() + val2);
                nameForm2.value = nameForm2.value.replace(/([а-яё])([а-яё]+)/gi, (match, val1, val2) => val1.toUpperCase() + val2);
            });
        });
    
    };
    formValidation();

    // калькулятор

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if(calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if(calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if(calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            } 

            if(typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }
            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            if(target.matches('select') || target.matches('input')){
                countSum();
            }
        });
    };
    calc();

  // Запросы на сервер (Ajax)

    const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
          loadMessage = 'Загрузка...',
          successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const input = document.querySelectorAll('input'),
          statusMessage = document.createElement('div');
    statusMessage.style.csstext = 'font-size: 2rem;';
    statusMessage.style.color = 'white';

    const postData = (body) => {
        return fetch('./server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body),
        });
    };

    document.addEventListener('submit', (event) => {
      event.preventDefault();
      let target = event.target;
      target.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(target);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      input.forEach((item) => {
        item.value = '';
      });
      postData(body)
              .then((response) => {
                if(response.status !== 200){
                  throw new Error('Status network not 200');
                }
                statusMessage.textContent = successMessage;
              })
              .catch(error => {
                statusMessage.textContent = errorMessage;
                console.error(error);
              });
    });
  };
  sendForm();

});