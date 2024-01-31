import React from 'react'
import ArticleCard from '../components/ArticleCard';
import Layout from '../components/Layout';

const ArticlePage = () => {
    const articles = [
        {
          id: 1,
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti corporis doloribus excepturi tempore nobis mollitia, rem blanditiis alias voluptates molestias omnis ex. Illum molestias corporis molestiae dignissimos cupiditate sint.",
          colorClass: 'bg-blue-500'
            
        },
        {
          id: 2,
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti corporis doloribus excepturi tempore nobis mollitia, rem blanditiis alias voluptates molestias omnis ex. Illum molestias corporis molestiae dignissimos cupiditate sint.",
            colorClass: 'bg-red-500'
        },
        {
          id: 3,
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti corporis doloribus excepturi tempore nobis mollitia, rem blanditiis alias voluptates molestias omnis ex. Illum molestias corporis molestiae dignissimos cupiditate sint.",
            colorClass: 'bg-amber-500'
        },
        {
          id: 4,
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti corporis doloribus excepturi tempore nobis mollitia, rem blanditiis alias voluptates molestias omnis ex. Illum molestias corporis molestiae dignissimos cupiditate sint.",
            colorClass: 'bg-cyan-500'
        },
        {
          id: 5,
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti corporis doloribus excepturi tempore nobis mollitia, rem blanditiis alias voluptates molestias omnis ex. Illum molestias corporis molestiae dignissimos cupiditate sint.",
            colorClass: 'bg-amber-500'
        },
        {
          id: 6,
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti corporis doloribus excepturi tempore nobis mollitia, rem blanditiis alias voluptates molestias omnis ex. Illum molestias corporis molestiae dignissimos cupiditate sint.",
          colorClass: 'bg-cyan-500'
            
        },{
          id: 7,
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti corporis doloribus excepturi tempore nobis mollitia, rem blanditiis alias voluptates molestias omnis ex. Illum molestias corporis molestiae dignissimos cupiditate sint.",
          colorClass: 'bg-blue-500'
            
        },
        {
          id: 8,
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti corporis doloribus excepturi tempore nobis mollitia, rem blanditiis alias voluptates molestias omnis ex. Illum molestias corporis molestiae dignissimos cupiditate sint.",
          colorClass: 'bg-amber-500'
            
        },{
          id: 9,
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti corporis doloribus excepturi tempore nobis mollitia, rem blanditiis alias voluptates molestias omnis ex. Illum molestias corporis molestiae dignissimos cupiditate sint.",
          colorClass: 'bg-pink-500'
            
        },{
          id: 10,
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti corporis doloribus excepturi tempore nobis mollitia, rem blanditiis alias voluptates molestias omnis ex. Illum molestias corporis molestiae dignissimos cupiditate sint.",
          colorClass: 'bg-orange-500'
            
        },
        ,{
          id: 11,
          title:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia corrupti corporis doloribus excepturi tempore nobis mollitia, rem blanditiis alias voluptates molestias omnis ex. Illum molestias corporis molestiae dignissimos cupiditate sint.",
          colorClass: 'bg-orange-500'
            
        },
      ];
  return (
   <Layout>
    <div className=" grid grid-cols-1  gap-4 py-3 mx-32 overflow-y-scroll">
        {articles.map((article) => (
          <ArticleCard
            key={article?.id}
            title={article?.title!}
            colorClass={article?.colorClass!}
          />
        ))}
      </div>
   </Layout>
  )
}

export default ArticlePage