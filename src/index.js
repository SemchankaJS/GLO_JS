'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import tooglePopUp from './modules/tooglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changingAttributes from './modules/changingAttributes';
import formValidation from './modules/formValidation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// timer
countTimer('1 december 2022');

//  Меню
toggleMenu();

// popup
tooglePopUp();  

// tabs
tabs();

// slider
slider();

// Картинки
changingAttributes();

// Валидация
formValidation();

// калькулятор
calc();

// Запросы на сервер (Ajax)
sendForm();