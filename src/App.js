
import React, { lazy ,Suspense } from 'react'
import './App.css';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/BlogPost" element={<BlogPost />} />
        </Routes>
      </Suspense>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
