import React from 'react';
import PropTypes from 'prop-types';
import SingleArticle from './singleArticle';

const ArticlesList = ({ articles }) => (
    <div className="container">
  <div className="row">
    {articles.map(article => (
      <SingleArticle key={article.slug} article={article} />
    ))}
  </div>
    </div>
);

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticlesList;
