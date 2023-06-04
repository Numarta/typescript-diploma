"use strict";
const buttons = document.querySelectorAll('button');
let formData = {
    email: '',
    title: '',
    text: '',
    checkbox: false,
};
const inputEmail = document.querySelector('input[type="email"]');
const inputText = document.querySelector('input[type="text"]');
const inputArea = document.querySelector('textarea');
const inputCheck = document.querySelector('input[type="checkbox"]');
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    if (Object.values(data).every((value) => value)) {
        return true;
    }
    else {
        console.log('Please, complete all fields');
        return false;
    }
}
function checkFormData(data) {
    const { email } = data;
    const emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];
    // Если email совпадает хотя бы с одним из массива
    if (emails.includes(email)) {
        console.log('This email is already exist');
    }
    else {
        console.log('Posting data...');
    }
}
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        formData = {
            email: inputEmail.value || '',
            title: inputText.value || '',
            text: inputArea.value || '',
            checkbox: inputCheck.checked ? true : false,
        };
        if (validateFormData(formData)) {
            checkFormData(formData);
        }
        else {
            console.log('Пшёл вон');
        }
    });
});
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
