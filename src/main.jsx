
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { WelcomePage } from './components/pages/WelomePage.jsx';
import SignupPage from './components/pages/SignupPage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import AccountSettingPage from './components/pages/AccountSettingPage.jsx';

const router = createBrowserRouter([
  {
  path: '/',
    element: <App />,
    children: [
       {
        path: '/',
        element: <WelcomePage />,
      },
      {
        path: '/signup_page',
        element: <SignupPage />,
      },
      {
        path: '/login_page',
        element: <LoginPage />,
      },
      {
        path: '/profile_page',
        element: <AccountSettingPage />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
