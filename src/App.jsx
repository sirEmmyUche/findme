import {createBrowserRouter,
  RouterProvider,
  Routes,
  Route,} from 'react-router-dom';
  import Home from "./pages/home";
  import VisitorLayout from './layouts/visitors'
  import AboutUs from './pages/about';
import './App.css'

const router = createBrowserRouter([{path:'*', Component:Root}]);

function Root(){
  return (
    <Routes>
      <Route element={<VisitorLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Route>
    </Routes>
  )
}  

function App() {
    return < RouterProvider router={router}/>
}

export default App
