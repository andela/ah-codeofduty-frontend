import React from "react";
import PropTypes from "prop-types";
import SingleArticle from "./singleArticle";

const ArticlesList = ({ articles }) => (
  <div>
    <div className="container mt-4">
      <div className="row">
        {articles.map(article => (
          <SingleArticle key={article.slug} article={article} />
        ))}
      </div>
    </div>
  </div>
);

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticlesList;
