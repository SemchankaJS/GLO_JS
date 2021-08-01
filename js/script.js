const filterByType = (type, ...values) => values.filter(value => typeof value === type), // функция с фильтрацией типа value по type

	hideAllResponseBlocks = () => { 
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block')); //  массив из верстки с сообщениями
		responseBlocksArray.forEach(block => block.style.display = 'none'); // скрывание всех элементов с помощью дисплей none
	}, 

	showResponseBlock = (blockSelector, msgText, spanSelector) => { 
		hideAllResponseBlocks(); // вызов функции скрывания элементов
		document.querySelector(blockSelector).style.display = 'block'; // для блока с выбранным селектором blockSelector дисплей блок
		if (spanSelector) { 
			document.querySelector(spanSelector).textContent = msgText; //  spanSelector текст в верстке msgText
		} 
	}, /

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'), // функция вывода ошибки

	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'), // функция вывода результата

	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'), // функция вывода отсутствия результата

	tryFilterByType = (type, values) => { 
		try { 
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", "); // объявление переменной, преобразовывающей и объединяющей все элементы массива в одно строковое значение
			const alertMsg = (valuesArray.length) ? //  если у valuesArray есть длина, то: 
				`Данные с типом ${type}: ${valuesArray}` : // 1) alertMsg равен этому сообщению
				`Отсутствуют данные типа ${type}`; // 2) то этому
			showResults(alertMsg); // вызов функции вывода результата с сообщением переменной alertMsg
		} catch (e) { // конец конструкции try...catch
			showError(`Ошибка: ${e}`); // вызов функции вывода ошибки с параметром ошибки если не отработает try
		} 
	}; 

const filterButton = document.querySelector('#filter-btn'); //  кнопка фильтрации

filterButton.addEventListener('click', e => { //  слушатель на кнопку 
	const typeInput = document.querySelector('#type'); // переменная селект
	const dataInput = document.querySelector('#data'); // переменая инпут

	if (dataInput.value === '') { // если значение переменной инпута пустое
		dataInput.setCustomValidity('Поле не должно быть пустым!'); //  сообщение 'Поле не должно быть пустым!'
		showNoResults(); // вызов функции вывода отсутствия результата
	} else { 
		dataInput.setCustomValidity(''); // пустое  сообщение 
		e.preventDefault(); // отключение действия по умолчанию
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim()); //  функция с переменными, без пробелов
	} 
}); 