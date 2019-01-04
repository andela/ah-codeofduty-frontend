import React from 'react';
import { Link } from "react-router-dom";

const divStyle = {
    backgroundImage: `url('http://www.brandgradients.com/img/backgrounds/instagram-hex-colors-gradient-background.png')`,
  };

const featured = ({article, readMore}) => {
    const {title, description, slug} = article || false;
    return (
    <div className="jumbotron" style={divStyle}>
      <div className="container">
        <h1 className="display-3" id="blog_heading">Featured blog</h1>
        <h3 id="blog_title">{title}</h3>
        <p id="blog_content" className="mb-4">
                {description}
        </p>
        <Link exact to={`/article/${slug}`}>
        <button className="btn btn-warning btn-md">Read more &raquo;</button>
        </Link>
      </div>
    </div>
)};

export default featured;