import React from "react";

class NewsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div className="my-3">
        <div className="card w-64 h-48">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1' }}>
                {source}
            </span>
          <img
            src={
              !imageUrl
                ? "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className={this.props.darkMode ? "text-muted" : "text-body-secondary"}>By {!author?"Unknown":author} at {new Date(date).toGMTString()}</small>
            </p>

            <a rel="noreferrer" href={newsUrl} className={`btn btn-sm ${this.props.darkMode ? 'btn-primary' : 'btn-dark'}`}>
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
