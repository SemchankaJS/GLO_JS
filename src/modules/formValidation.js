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

export default formValidation;