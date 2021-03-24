import NavBar from './NavBar';
import { useState } from 'react';
import Article from './Article';
import Footer from './Footer';
import Content from './Content';


const Home = () => {

    let category = [
        'automobiles',
        'business',
        'fashion',
        'food',
        'health',
        'insider',
        'magazine',
        'movies',
        'nyregion',
        'obituaries',
        'politics',
        'realestate',
        'science',
        'sports',
        'sundayreview',
        'technology',
        'theater',
        't-magazine',
        'travel',
        'upshot',
        'us'
    ];

    const [heading,setheading] = useState('North East West South (NEWS)')
    const [Articles,setArticles] = useState([])
    const [inside,setinside] = useState(true)

    const getdata = async (data) => {
        let url = `https://api.nytimes.com/svc/topstories/v2/${data}.json?api-key=bn25GR0JgVJk4bHLBK8pPtrYc5czNKvX`;
        try {
            let data = await fetch(url)
            let responsedata = await data.json()
            setArticles(responsedata.results)
            Articles.concat(setArticles)
            // return responsedata.results;
            // console.log(responsedata.results);
        } catch (error) {
            console.log(error);
        }
    }
    // getdata('home')

const changeheading = (article) =>{
    let modify = article[0].toUpperCase() + article.slice(1);
    setheading(`NEWS from ${modify}`)
    setinside(false)
    getdata(article)
}

    return <div>
        <NavBar />
        <div className="text-center" style={{ background:"#383838",fontSize:"30px",fontWeight:"bold",color:"white" }}>{heading}</div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 pl-5 text-left"style={{ background: "lightgreen" }}>
                    {category.map((item, index) => (
                        <p  
                        className="hover"
                         key={index} 
                         onClick={(article)=>changeheading(article.target.textContent)}>
                             {item}
                        </p>
                    ))}
                </div>
                <div className="col-9">
                {inside && <Content/>}
                {Articles.map((article, id) => (
								<Article
									key={id}
									section={article.section}
									title={article.title}
									byline={article.byline}
									setDate={article.date}
									abstract={article.abstract}
									url={article.multimedia[0].url}
									IMGurl={article.url}
								/>
							))}
                </div>
            </div>
        </div>

        <Footer />
    </div>
}

export default Home;