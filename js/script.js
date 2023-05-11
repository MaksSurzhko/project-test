const osnDiv = document.querySelector('.osnova');
const osnTitle = document.querySelector('.title');
const osnSpan = document.querySelector('.title-span');
const testBtn = document.querySelector('.click');
const secDiv = document.querySelector('.list');



const apiParams = {
  params: {
    key: _id,
    q: '2',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
};

function fetchData() {
    const bookId = _id;
  fetch(`https://books-backend.p.goit.global/books/${bookId}`, apiParams)
    .then((response) => response.json())
    .then((data) => {
      const books = data.hits;
      if (books.length === 0) {
        osnDiv.innerHTML = bookInfo;
      } else {
        const bookInfo = books
          .map((book) => {
            const { book_image, title, list_name, book_uri, author, bookId } = book;
            return `
              <li class="list" data-id ="${bookId}">
                <img src="${book_image}" alt="${title}">
                <div class="amas">
                  <h3 class="text-one"> ${title}</h3>
                  <p class="text-two">${list_name}</p>
                  <p class="text-three">${book_uri}</p>
                  <p class="text-four">${author}</p>
                </div>
              </li>
            `;
          })
          .join('');
          secDiv.insertAdjacentHTML('beforeend', bookInfo);
      }
    });
}

testBtn.addEventListener('click', fetchData);