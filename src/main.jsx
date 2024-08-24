import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOut/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import GithubPage from './components/GithubPage/GithubPage';
import Registration from './components/Registration/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/github',
        element: <GithubPage></GithubPage>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-6xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
