import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/aboutPage.js/AboutPage';
import ContactPage from './pages/contactPage/ContactPage';
import MainPage from './pages/mainPage/MainPage';
// import Menu from './components/menu/Menu';
import NotfoundPage from './pages/notfoundPage/NotfoundPage';
import Description from './components/description/Description';
import PortfolioPage from './pages/portfolioPage/PortfolioPage';
import BlogsPage from './pages/blogsPage/BlogsPage';
import Blog from './components/blog/Blog';
import Layout from './components/layouts/Layout';
import News from './components/news/News';
import LayoutBack from './components/layoutBack/LayoutBack';

function App() {
  return (
    <>
    {/* <Menu/> */}
    <Routes>
    <Route path ="/" element={<Layout/>}>
    
      <Route index element={<MainPage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
      <Route path='description' element={<Description/>}/>
      <Route path='portfolio' element={<PortfolioPage/>}/>
      <Route path='blogs' element={<BlogsPage/>}/>
      <Route path='news' element={<News/>}/>

    </Route>
    <Route path ="/" element={<LayoutBack/>}>
    <Route path='blogs/:news' element={<Blog/>}/>
    </Route>

      <Route path='*' element={<NotfoundPage/>}/>
    </Routes>
    
   
    </>
  );
}

export default App;
