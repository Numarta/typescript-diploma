const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface finalItem {
  ID: number;
  Email: string;
}

// Создаем два интерфейса для типизации и более удобной работы.
// Делаем асинхронную функцию, в которой обрабатываем fetch-запрос, проводим его через then и в итоге возвращаем массив с объектами в нужном нам формате, в конце консолим.
// (на разработку потрачено 25 минут)

const getData = (url: string) => {
  const comments = fetch(url).then((response) => response.json());
  const finalRes: Array<finalItem> = [];

  comments
    .then((response: Array<Comment>) => {
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
 * ...
 */
