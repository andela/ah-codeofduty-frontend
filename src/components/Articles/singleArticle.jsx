import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Col,
} from 'mdbreact';

const returnArticleURL = slug => `/article/${slug}`;

const SingleArticle = ({ article }) => {
  localStorage.setItem('current_article', article.slug);
  localStorage.setItem('article_title', article.title);
  return (
    <Col>
      <Card style={{ width: "21rem" }}>
        <CardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
          waves
        />
        <CardBody>
          <CardTitle>{article.title}</CardTitle>
          <CardText>{article.description}</CardText>
          <ul>
            <li><Link exact to={returnArticleURL(article.slug)}>
              Read More...    
            </Link></li>
            <li><i class="fa fa-eye" aria-hidden="true"> {article.view_count}</i></li>
           
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

SingleArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default SingleArticle;
