import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import PostDetail from './components/PostDetail/PostDetail';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';
import AddPost from './components/Posts/AddPost/AddPost';
import Posts from './components/Posts/Posts';
import PrivateZone from './guards/PrivateZone';
import AdminZone from './guards/AdminZone';
import NotFound from './components/NotFound/NotFound';
import AddComment from './components/PostDetail/AddComment/AddComment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateZone>
                <Profile />
              </PrivateZone>
            }
          />
          <Route path="/addComment" element={<AddComment />} />
          <Route path="/post/:_id" element={<PostDetail />} />
          <Route path="/posts/" element={<Posts />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/search/:postName" element={<Search />} />
          <Route path="/admin" element={<AdminZone><Admin /></AdminZone>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
