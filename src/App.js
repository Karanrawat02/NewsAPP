import './App.css';
import BNavbar from './components/Navbar';
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom';
import Details from './components/Details';
import NewsPage from './components/NewsPage';

function App() {
  return (
    <>
    <BNavbar />
    <NewsPage/>
    <Routes>
    <Route path='/' element={<NewsPage />}></Route>
      <Route path="/news/:index" element={<Details />}></Route>
    </Routes>
  </>
  );
}
export default App;
