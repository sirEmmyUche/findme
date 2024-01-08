import {createBrowserRouter,
  RouterProvider,
  Routes,
  Route,} from 'react-router-dom';
  import Home from "./pages/home";
import './App.css'

const router = createBrowserRouter([{path:'*', Component:Root}]);

function Root(){
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

function App() {
    return < RouterProvider router={router}/>
}

export default App
