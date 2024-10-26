import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Landing, Announcement, ProfilePage, ProtectedRoute} from "../../screens"; // Ensure ProfilePage is imported
import NotFound from '../landing/NotFound';
import { menuMain } from '../navigation/menu/MainMen';
import { menuDevMain } from '../navigation/menu/DevMen';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Landing />,
        errorElement: <NotFound  />
    },
    {
        path:'/announcement',
        element:<ProtectedRoute>
                <Announcement />
                </ProtectedRoute>         
    },
    {
      path:'/profile',
      element:<ProtectedRoute>
              <ProfilePage />
              </ProtectedRoute>         
  },
    ...menuMain.map((menu) => ({
        path: menu.path,
        element: <ProtectedRoute>{menu.element ? menu.element : <NotFound />}</ProtectedRoute>,
        errorElement: <NotFound  />
    })),
    ...menuDevMain.map((menuDev) => ({
      path: menuDev.path,
      element: <ProtectedRoute>{menuDev.element ? menuDev.element : <NotFound />}</ProtectedRoute>,
      errorElement: <NotFound  />
  }))
    

]);
const MainRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default MainRoutes