

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import IntroPage from './pages/Intro';
import ErrorPage from './pages/Error';
import TodoPage from './pages/Todo';
import ReactPage from './pages/React';
import RootLayout from './components/RootLayout';
import IntroLayout from './components/IntroLayout';
import TodoLayout from './components/TodoLayout';
import ReactLayout from './components/ReactLayout';
import IntroDetailPage from './pages/IntroDetailPage';


const router = createBrowserRouter([
 
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <HomePage/>,
      },
      {
        path:'intro',
        element: <IntroLayout/>,
        children:[
          {
            index:true,
            element: <IntroPage/>,
          },
          {
            path: ':id',
            element: <IntroDetailPage/>,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <HomePage/>,
      },
      {
        path:'work',
        element: <TodoLayout/>,
        children:[
          {
            index:true,
            element: <TodoPage/>,
          },
        ],
      },
    ],
  },
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          index:true,
          element: <HomePage/>,
        },
        {
          path:'React',
          element: <ReactLayout/>,
          children:[
            {
              index:true,
              element: <ReactPage/>,
            },
          ],
        },
      ],
    },
]);

function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
