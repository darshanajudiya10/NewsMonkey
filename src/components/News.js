import React from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';

class News extends React.Component {
  static defaultProps = {
    country: "us",
    pagesize: 6,
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c227e4f5e23f4e1191c56ba3c2768bef&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }

  // handlePrevClick = async () => {

  //   this.setState({ page: this.state.page - 1 }, () => {
  //     this.updateNews();
  //   });
  // };

  // handleNextClick = async () => {

  //   this.setState({ page: this.state.page + 1 }, () => {
  //     this.updateNews();
  //   });
  // };

  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c227e4f5e23f4e1191c56ba3c2768bef&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  }

  render() {
    return (
      <div className={this.props.darkMode ? 'dark-mode' : 'light-mode'}>
        <h1 className="text-center" style={{marginTop: '80px', marginBottom: '20px'}}>{this.props.category} Top Headlines </h1>
        {this.state.loading && this.state.articles.length === 0 && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >

        <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
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
                    darkMode={this.props.darkMode}
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
}

export default News;
