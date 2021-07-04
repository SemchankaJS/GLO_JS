// Вывести текущий день и время  на страницу в таком формате

// Добрый день (утро, вечер, ночь в зависимости от времени суток)
// Сегодня: Понедельник
// Текущее время:12:05:15 PM
// До нового года осталось 175 дней

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const now = new Date();
    let hours = now.getHours();
    
    function getHello(now) {
        if (hours >= 4 && hours <= 11) {
            document.write('Доброе утро!<br>');
        } else if (hours >= 12 && hours <= 17){
            document.write('Добрый день!<br>');
        } else if (hours >= 18 && hours <= 23) {
            document.write('Добрый вечер!<br>');
        } else if (hours >= 24 && hours <= 4) {
            document.write('Доброй ночи!<br>');
        } else {
            document.write('Доброго времени суток!<br>');
        }
    }
    getHello();

    function getWeekDay(now) {
        let days = ['Воскресенье <br>', 'Понедельник <br>', 'Вторник <br>', 'Среда <br>', 'Четверг <br>', 'Пятница <br>', 'Суббота <br>'];
      
        return days[now.getDay()];
    }
      document.write('Сегодня: ' +  getWeekDay(now) ); 
      
    
    if (hours > 12 && hours < 24 ) {
        document.write('Текущее время: ' + now.getHours() + ':' + now.getMinutes() +':' + now.getSeconds() + ' PM'); 
    } else {
        document.write('Текущее время: ' + now.getHours() + ':' + now.getMinutes() +':' + now.getSeconds() + ' AM');
    }    

    function daysLeftNewYear() {  
        let today = new Date();
        //Можно установить любую дату
        let nextDate = new Date("January 1, 2022");
        //Количество миллисекунд в одном дне
        let msPerDay = 24*60*60*1000;
        //Высчитываем количество дней
        let daysLeft = Math.round((nextDate.getTime() - today.getTime()) / msPerDay);
        let dayname = "";
        let ds = ""+daysLeft;
        //Вырезаем последнею цифру
        let dd=parseInt(ds.substr(ds.length - 1));
        //Склоняем слово ДЕНЬ
        if( daysLeft> 4 && daysLeft < 21)
            dayname = " дней";
        else if(dd == 1)
            dayname = " день";
        else if(dd == 2|| dd == 3||dd == 4)
            dayname = " дня";
        else 
            dayname=" дней";
        //Выводим надпись в документ
        if(daysLeft < 0) {
            document.write("С новым годом!!!");
        } else {
        if(daysLeft == 0) {
            document.write("Завтра новый год!");
        } else {
            document.write(" <br> До нового года осталось "+daysLeft+dayname+"!")
        }
    }
    }
    daysLeftNewYear();

});