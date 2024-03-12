import logo from './logo.svg';
import './App.css';
import Login from './Component/Login/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Master from './Component/Master/Master';
import Regester from './Component/Regester/Regester';
import Reset from './Component/Reset/Reset';

let router=createBrowserRouter([{
  path:'',element:<Master/>,children:[
    {path:'login', element:<Login/>},
    {path:'register', element:<Regester/>},
    {path:'Reset', element:<Reset/>},
  ]
}])

function App() {
  return <>
<RouterProvider router={router}/>
  
  </>
}

export default App;
