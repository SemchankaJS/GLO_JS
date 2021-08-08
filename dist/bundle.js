(()=>{"use strict";var e,t,n,o,c,r,a,l,i,u,s,d,m,v,f,p,g;(function(e){var t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds");function c(e){return 1===String(e).length?"0"+e:String(e)}!function e(){var r,a,l,i=(r=(new Date("1 december 2022").getTime()-(new Date).getTime())/1e3,a=Math.floor(r%60),l=Math.floor(r/60%60),{timeRemaining:r,hours:Math.floor(r/60/60),minutes:l,seconds:a});t.textContent=c(i.hours),n.textContent=c(i.minutes),o.textContent=c(i.seconds),i.timeRemaining>0&&setTimeout(e,1e3),i.timeRemaining<0&&(clearInterval(thisInterval),t.textContent="00",n.textContent="00",o.textContent="00")}()})(),f=document.querySelector("menu"),p=document.querySelector("html"),g=function(){f.classList.toggle("active-menu")},p.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".menu"))?g():t=e.target,(t=t.closest("menu"))&&g()})),i=document.querySelector(".popup"),u=document.querySelectorAll(".popup-btn"),s=document.querySelector(".popup-close"),d=document.querySelector(".popup-content"),m=-100,v=function e(){if(!(++m<=0))return cancelAnimationFrame(l),void(m=-100);d.style.transform="translateX(".concat(4*m-10,"%)"),l=requestAnimationFrame(e)},u.forEach((function(e){e.addEventListener("click",(function(){document.body.clientWidth<768?i.style.display="block":(i.style.display="block",l=requestAnimationFrame(v))}))})),s.addEventListener("click",(function(){i.style.display="none"})),i.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".popup-content"))||(i.style.display="none")})),c=document.querySelector(".service-header"),r=c.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab"),c.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&r.forEach((function(e,n){e===t&&function(e){for(var t=0;t<a.length;t++)e===t?(r[t].classList.add("active"),a[t].classList.remove("d-none")):(r[t].classList.remove("active"),a[t].classList.add("d-none"))}(n)}))})),function(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1900,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=document.querySelectorAll(".portfolio-item"),c=document.querySelector(".portfolio-content"),r=document.querySelector(".portfolio-dots"),a=0,l=0;l<o.length;l++){var i=document.createElement("li");i.className="dot",r.appendChild(i)}var u=document.querySelectorAll(".dot");u[0].classList.add("dot-active");var s=function(e,t,n){e[t].classList.remove(n)},d=function(e,t,n){e[t].classList.add(n)},m=function(){s(o,a,"portfolio-item-active"),s(u,a,"dot-active"),++a>=o.length&&(a=0),d(o,a,"portfolio-item-active"),d(u,a,"dot-active")},v=function(){n&&(e=setInterval(m,t))},f=function(){clearInterval(e)};c.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".portfolio-btn, .dot")&&(s(o,a,"portfolio-item-active"),s(u,a,"dot-active"),t.matches("#arrow-right")?a++:t.matches("#arrow-left")?a--:t.matches(".dot")&&u.forEach((function(e,n){e===t&&(a=n)})),a>=o.length&&(a=0),a<0&&(a=o.length-1),d(o,a,"portfolio-item-active"),d(u,a,"dot-active"))})),c.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&f()})),c.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&v()})),v()}(),n=document.querySelector("#command .row"),o=function(e){if(e.target.classList.contains("command__photo")){var t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}},n.addEventListener("mouseover",o),n.addEventListener("mouseout",o),function(){document.querySelector(".calc-block").addEventListener("input",(function(e){e.target.closest(".calc-square, .calc-count, .calc-day")&&(e.target.value=e.target.value.replace(/\D/g,""))})),document.addEventListener("input",(function(e){var t=event.target;t.closest("#form1-name, #form2-name, #form2-message")&&(t.value=t.value.replace(/[^а-яё\-\s]/gi,"")),e.target.closest("#form1-email, #form2-email")&&(t.value=t.value.replace(/[а-яё0-9+^$\][}{)(?/]/gi,"")),e.target.closest("#form1-phone, #form2-phone")&&(t.value=t.value.replace(/[^0-9\-)()]/gi,""))}));var e=document.querySelectorAll("input"),t=document.getElementById("form1-name"),n=document.getElementById("form2-name");e.forEach((function(e){e.addEventListener("blur",(function(){e.value=e.value.replace(/\s+/g," ").replace(/\-+/g,"-").replace(/^\-*\s*\-*|\-*\s*\-*$/g,"").replace(/^\s*\-*\s*|\s*\-*\s*$/g,"").trim(),t.value=t.value.replace(/([а-яё])([а-яё]+)/gi,(function(e,t,n){return t.toUpperCase()+n})),n.value=n.value.replace(/([а-яё])([а-яё]+)/gi,(function(e,t,n){return t.toUpperCase()+n}))}))}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),c=document.querySelector(".calc-day"),r=document.querySelector(".calc-count"),a=document.getElementById("total"),l=function(){var t=0,l=1,i=1,u=n.options[n.selectedIndex].value,s=+o.value;r.value>1&&(l+=(r.value-1)/10),c.value&&c.value<5?i*=2:c.value&&c.value<10&&(i*=1.5),u&&s&&(t=e*u*s*l*i),a.textContent=t};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&l()}))}(),e=document.querySelectorAll("input"),(t=document.createElement("div")).style.csstext="font-size: 2rem;",t.style.color="white",document.addEventListener("submit",(function(n){n.preventDefault();var o=n.target;o.appendChild(t),t.textContent="Загрузка...";var c=new FormData(o),r={};c.forEach((function(e,t){r[t]=e})),e.forEach((function(e){e.value=""})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(r).then((function(e){if(200!==e.status)throw new Error("Status network not 200");t.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(e){t.textContent="Что-то пошло не так...",console.error(e)}))}))})();