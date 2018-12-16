import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';


const returnArticleURL = slug => `/article/${slug}`;

const SingleArticle = ({ article }) => {
  localStorage.setItem('current_article', article.slug);
  return (
      <Col>
        <Card style={{ width: "22rem" }}>
          <CardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              waves
          />
          <CardBody>
            <CardTitle>{article.title}</CardTitle>
            <CardText >
              {article.description}
            </CardText>
            <centre><Link exact to={returnArticleURL(article.slug)}>Read More...</Link></centre>
          </CardBody>
        </Card>
      </Col>
  );
};

SingleArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default SingleArticle;
