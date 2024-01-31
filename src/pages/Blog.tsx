import React from "react";
import BlogList from "../components/BlogList";
import Layout from "../components/Layout";

const Blog = () => {
  return (
    <Layout>
     <div className="m-4">
     <BlogList />
     </div>
    </Layout>
  );
};

export default Blog;
