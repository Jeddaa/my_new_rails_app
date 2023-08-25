// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Greetings from './greetings';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello world!</div>
//   },
//   {
//     path: '/greeting',
//     element: <Greetings />
//   }
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from '../store/createStore';
import Greetings from './greetings';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greetings />} />
        </Routes>
      </BrowserRouter>
  );
}
