import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts'
import Account from "./components/account/Account";
import AddPhoto from "./components/addphoto/AddPhoto";
import Home from "./components/home/Home"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path="add-photo" element={<AddPhoto></AddPhoto>} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
