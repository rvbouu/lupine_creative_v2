import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import {Home} from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
