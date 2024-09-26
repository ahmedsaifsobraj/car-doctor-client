import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  </div>
)
