import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import BlogsSection from './BlogsSection/BlogsSection';

function Blog() {
  return (
    <>
    <Header/>
    <BlogsSection/>
    </>
  )
}

export default Blog;