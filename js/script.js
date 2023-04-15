const worksList = document.getElementById('works-list');

const works = [
  {title: '夜の地図', author: '村上春樹', genre: '小説'},
  {title: '君たちはどう生きるか', author: '吉野源三郎', genre: '小説'},
  {title: '人間失格', author: '太宰治', genre: '小説'},
  {title: '走れメロス', author: '太宰治', genre: '小説'},
  {title: '青空文庫', author: '多数', genre: 'オンライン小説'},
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: '小説'},
  {title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: '小説'},
  {title: '1984', author: 'George Orwell', genre: '小説'},
  {title: 'Animal Farm', author: 'George Orwell', genre: '小説'}
];

works.forEach(work => {
  const li = document.createElement('li');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const genre = document.createElement('p');

  title.textContent = work.title;
  author.textContent = `作者: ${work.author}`;
  genre.textContent = `ジャンル: ${work.genre}`;

  li.appendChild(title);
  li.appendChild(author);
  li.appendChild(genre);
  worksList.appendChild(li);
});
