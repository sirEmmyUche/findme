import * as React from 'react';
import {createBrowserRouter,
  RouterProvider,
  Routes,
  Route,} from 'react-router-dom';
  // import Home from "./pages/home";
  import VisitorLayout from './layouts/visitors'
  // import About from './pages/about';
import './App.css'
const About = React.lazy(()=>import('./pages/about'))
const Home = React.lazy(()=>import('./pages/home'));

const router = createBrowserRouter([{path:'*', Component:Root}]);

function Root(){
  return (
    <Routes>
      <Route element={<VisitorLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
  )
}  

function App() {
    return < RouterProvider router={router}/>
}

export default App
