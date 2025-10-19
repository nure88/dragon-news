
import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useEffect, useState } from 'react';

const NewsDetails = () => {
 const data = useLoaderData();
const {id} = useParams();

 const [news, setNews] = useState({});

 useEffect(() => {
const newDetails = data.find((singleNews) => singleNews.id == id);
setNews(newDetails)
 },[data, id, news]);

    
  return (
    <div>
<header className='py-3'>
    <Header />
</header>

<main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-5'>
<section className='col-span-9'>

<h2 className='font-bold'>News Details</h2>
 <NewsDetailsCard key={news.id} news={news}/>


</section>

<aside className='col-span-3'>


    <RightAside />
</aside>

</main>

    </div>
  )
}

export default NewsDetails