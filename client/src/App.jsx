 
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/Index';
import Layout from './pages/Layout';
import Home from './componets/Home';
import Templates from './componets/Templates';
import Projects from './componets/Projects';
import CreateDesign from './componets/CreateDesign';
import Main from './pages/Main';
 
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/templates',
        element:<Templates />
      },
      {
        path:'/projects',
        element:<Projects />
      }

    ]
 
   
  },
 
      {
        path:'/design/create',
        element:<CreateDesign />

      },
      {
        path:'/design/:id/edit',
        element:<Main />

      }
]);
function App() {
 

  return  <RouterProvider router={router} />
}

export default App
