
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => data.forEach((album) => {
// document.body.insertAdjacentHTML('beforeEnd',  `
// <p>${album.userId}</p>
// <p>${album.id}</p>
// <p>${album.title}</p>
// <p>${album.body}</p>
// `)
// }))

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(r => r.json())
  .then(r => {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="wrapper">${r.map(n => `
        <div class="item">
          <div class="item__column">
            <p>UserId:</p>
            <p>${n.userId}</p>
          </div>
          <div class="item__column">
            <p>Id:</p>
            <p>${n.id}</p>
          </div>
          <div class="item__column">
            <p>Title:</p>
            <p>${n.title}</p>
          </div>
          <div class="item__column">
            <p>Body:</p>
            <p>${n.body}</p>
          </div>
        </div>`).join('')}
      </div>
    `);
  });
