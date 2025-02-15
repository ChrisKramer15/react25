import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return <section>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
}

const Book = () => {
  return <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
}

const Image = () => <img src='https://m.media-amazon.com/images/I/91i3L7p7tIL._SY342_.jpg'/>
const Title = () => <h2>Santa Paws</h2>
const Author = () => {
  return <h4>Nicholas Edwards</h4>
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)