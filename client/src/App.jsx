import './App.css'
import {Route, Routes} from "react-router-dom";
// The code below helps import IndexPage.jsx
import IndexPage from './pages/IndexPage.jsx';
// Another file being imported 
import LoginPage from './pages/LoginPage.jsx';
import Layout from './Layout.jsx';

// Set up routes for the app: each URL path is linked to a specific component, defining what content to render for each route



function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Our first route is imported from our IndexPage.jsx file and rendered into the app */}
        <Route index element={<IndexPage />} />
        {/* Our second route is imported from our LoginPage.jsx file and rendered into the app */}
        <Route path='/login' element={<LoginPage />} /> 
      </Route>
    </Routes>
   
  )
}

export default App
