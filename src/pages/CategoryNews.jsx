import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
    const {id} = useParams();
    const data = useLoaderData();
     
 useEffect(() => {
  if(id == "0"){
    setCategoryNews(data);
    return;
  }else if(id == "1"){
    const filteredNews = data.filter((news) => news.others.is_today_pick == true);
    setCategoryNews(filteredNews);
  }else{

    const filteredNews = data.filter((news) => news.category_id == id);
  setCategoryNews(filteredNews)
    
  }
 },[data,id]);   
    
    
  return (
    <div>
    <h2 className='text-sm font-bold'>Total Category News ({categoryNews.length})Found </h2>
    <div className="grid grid-cols-1">
 {

  categoryNews.map((news) => <NewsCard key={news.id} news={news}/>)
 }

    </div>
    </div>
  )
}

export default CategoryNews