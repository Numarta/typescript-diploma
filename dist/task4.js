"use strict";
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
// Создаем дdf интерфейса для типизации и более удобной работы.
// Делаем асинхронную функцию, в которой обрабатываем fetch-запрос, проводим его через then и в итоге возвращаем массив с объектами в нужном нам формате, в конце консолим.
// (на разработку потрачено 25 минут)
const getData = (url) => {
    const comments = fetch(url).then((response) => response.json());
    const finalRes = [];
    comments
        .then((response) => {
        response.forEach((elem) => {
            //console.log(elem);
            finalRes.push({ ID: elem.id, Email: elem.email });
        });
        return finalRes;
    })
        .then((response) => console.log(response));
};
getData(COMMENTS_URL);
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
