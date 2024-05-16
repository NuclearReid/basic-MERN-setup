import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import TestPage from './pages/Profile';
import LoggedIn from './pages/LoggedIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/Profile',
        element: <TestPage />,
      },{
        path: '/LoggedIn',
        element: <LoggedIn />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
