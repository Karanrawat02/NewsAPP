import './App.css';
import BNavbar from './components/Navbar';
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom';
import Details from './components/Details';
import NewsPage from './components/NewsPage';

function App() {
  return (
    <>
    <BNavbar />
    <Routes>
    <Route path='/' element={<NewsPage />} />
    <Route path="/news/:index" element={<Details />} />
    </Routes>
  </>
  );
}
export default App;
