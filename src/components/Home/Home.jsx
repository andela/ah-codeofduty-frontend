import React from 'react';
import Rating from '../Rating/Rating';
import './Home.scss';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';
import {Footer} from "../Footer/Footer";

const divStyle = {
  backgroundImage: `url('http://www.brandgradients.com/img/backgrounds/instagram-hex-colors-gradient-background.png')`,
};

const cardSample = () => (<div>
      <div className="card-deck">
        <Col>
          <Card style={{ width: "18rem" }}>
            <CardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
            />
            <CardBody>
              <CardTitle>Sample heading</CardTitle>
              <CardText>
                Sample description
              </CardText>
              <a href="#"> Read More...</a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <CardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
            />
            <CardBody>
              <CardTitle>Sample heading</CardTitle>
              <CardText>
                Sample description
              </CardText>
              <a href="#"> Read More...</a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <CardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
            />
            <CardBody>
              <CardTitle>Sample heading</CardTitle>
              <CardText>
                Sample description
              </CardText>
              <a href="#"> Read More...</a>
            </CardBody>
          </Card>
        </Col>
      </div>
    </div>
);
const Index = () => (

  <div>
    <div className="jumbotron" style={divStyle}>
      <div className="container">
        <h1 className="display-3" id="blog_heading">Featured blog</h1>
        <p id="blog_content">
                This is a template for a simple marketing or
                informational website. It includes a
                large callout called a jumbotron and
                three supporting pieces of content.
                Use it as a starting point to
                create something more unique.
        </p>
        <p><a className="btn btn-warning btn-md" href="#" role="button">Read more &raquo;</a></p>
      </div>
    </div>
    <hr />
    <div className="container" id="most-popular" />


    <div className="container">

      <div className="">
        <h3>Most popular</h3>
        <br />
       <div>
         {cardSample()}
       </div>
      </div>
      <br />
      <hr />


      <div className="container">
        <h3>Recent Posts</h3>
        <br />
        {cardSample()}
      </div>
      <br />
      <hr />

    </div>

    <div className="footer">
    <Footer />
    </div>
  </div>
);

export default Index;
