import React from 'react';
import ReactDOM from 'react-dom/client';

// const Greeting = () => {
//     return <h2>My First Component</h2>
// }

// function Greeting() {
//     return React.createElement('h2', {}, 'hello world');
// }

// function Greeting() {
//     return(
//         <div>
//             <h2>My First Component</h2>;
//         </div>
//     )
// }

const Greeting = () => {
  return (
    React.createElement('div', {}, 
        React.createElement('h2', {}, 'hello world'),
    )
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting/>)


