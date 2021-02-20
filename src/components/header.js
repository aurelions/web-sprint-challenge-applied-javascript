const headerContainer = document.querySelector(`.header-container`);


const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


  const div = document.createElement('div');
  const spanOne = document.createElement('span');
  const h1 = document.createElement('h1');
  const lastSpan = document.createElement('span');
  
  div.classList.add('header');
  spanOne.classList.add('date');
  lastSpan.classList.add('temp');
  
  spanOne.textContent = date;
  h1.textContent = title;
  lastSpan.textContent = temp;
  
  div.appendChild(lastSpan);
  div.appendChild(h1);
  div.appendChild(spanOne);
  headerContainer.appendChild(div);
  
  return div;
  }
  
  
const headerAppender = (selector) => {

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  document.querySelector(selector).appendChild(Header('Lambda Times', 'February 19th', '23 Degrees'));
}

export { Header, headerAppender }