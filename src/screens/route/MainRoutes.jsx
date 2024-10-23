import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Landing, Dashboard, ProtectedRoute} from "../../screens"; // Ensure ProfilePage is imported
import NotFound from '../landing/NotFound';
import { menuMain } from '../navigation/menu/MainMen';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Landing />,
        errorElement: <NotFound  />
    },
    {
        path:'/dashboard',
        element:<ProtectedRoute>
                <Dashboard />
                </ProtectedRoute>         
    },
    ...menuMain.map((menu) => ({
        path: menu.path,
        element: <ProtectedRoute>{menu.element ? menu.element : <NotFound />}</ProtectedRoute>,
        errorElement: <NotFound  />
    }))
    

]);
const MainRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default MainRoutes