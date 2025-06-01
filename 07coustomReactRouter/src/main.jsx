import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import Github from './components/Github/Github';
import Layout from './Layout.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact-us",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<Contact/>}/>
      <Route path ='user/:userid' element ={<User/>}/>
      <Route path='github' element = {<Github/>} />
      {/* read about react router loader to optimize api calls */}
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Since we have used react-router-dom, we are wrapping the contents (Header, Body, Footer) here directly. */}
    <RouterProvider router={router} /> {/* RouterProvider is used to supply the router object to the application. */}
  </StrictMode>
);
