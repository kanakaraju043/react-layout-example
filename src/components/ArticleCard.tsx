import React from "react";


type ArticleCardProps = {
    title: string,
    colorClass: string
}
const ArticleCard = ({title, colorClass}: ArticleCardProps) => {
  return (
    
    <div className={`container rounded-md py-5 ${colorClass}`}>
      <h1>
       {title}
      </h1>
    </div>
  );
};

export default ArticleCard;
