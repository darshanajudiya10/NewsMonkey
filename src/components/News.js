import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c227e4f5e23f4e1191c56ba3c2768bef&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c227e4f5e23f4e1191c56ba3c2768bef&page=${page + 1}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className={props.darkMode ? 'dark-mode' : 'light-mode'}>
      <h1 className="text-center" style={{marginTop: '80px', marginBottom: '20px'}}>{props.category.charAt(0).toUpperCase() + props.category.slice(1)} Top Headlines </h1>
      {loading && articles.length === 0 && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >

      <div className="container">
      <div className="row">
        {articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url || element.id}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={
                    element.description
                      ? element.description
                      : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  darkMode={props.darkMode}
                />
              </div>
            );
          })}
        
      </div>
      </div>
      </InfiniteScroll>
    </div>
  );
}

News.defaultProps = {
  country: "us",
  pagesize: 6,
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
};

export default News;
