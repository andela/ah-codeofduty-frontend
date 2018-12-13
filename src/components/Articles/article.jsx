import React from 'react';
import PropTypes from 'prop-types';
import './articles.scss';
import { ToastContainer } from 'react-toastify';
import DeleteModal from "./deleteModal";
import authUser from "../../utils/authUser";
import Comments from '../Comments/index'
import LikesDislikes from '../like_unlike/index';
import 'react-toastify/dist/ReactToastify.min.css';
import { Footer } from '../Footer/Footer';
import Rating from '../Rating/Rating';
import Average from '../Rating/averageRating';
import Tags from '../Tags/Tags';

const { username } = authUser();
localStorage.setItem('username', username);

const getAuthor = (author) => {
  const currentUser = localStorage.getItem('username');
  if (currentUser === author) {
    return 'btn-display';
  }
  return 'btn-no-display';
};

const articleCreated = (articleDate) => {
  const dateTime = new Date(articleDate);
  const dateOnly = dateTime.toDateString();
  return dateOnly;
};

const Article = ({ article, slug, toggleEdit }) => (
  <div>
    <div><ToastContainer /></div>
    <div>
    <div className="container px-5 pb-5">
      <div className="row pb-4">
        <div className="px-5 pt-3 col-md-8">
          <h1 className="card-title pt-4 font-exo">
            {article.title}
            <Average />
          </h1>

          <p className="text-muted pb-3 font-exo">
            {' '}
            <span>{article.time_to_read}</span>
{' '}
Min Read
{" "}
          </p>
          <p className="card-text">
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </p>
          <p className="card-text pt-3"> THE END </p>
          <div className="row">
            <div className="col-lg-2">
              <img
                className="round-image"
                src="https://images.unsplash.com/photo-1494236536165-dab4d859818b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt="image here"
              />
            </div>
            <div className="col-lg-10 pt-2">
              <i
                className="fas fa-crown float-right pr-5 pt-3 text-large"
                title="Favorite this article"
              />
              <h5 className="font-raleway">Written by</h5>
              <p className="text-large font-exo">{article.author.username}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 pl-5 side-column mt-3 font-raleway">
          <div className="fixed sticky-top">
            <h5 className="mb-4 pt-5 font-raleway">
              {' '}
              Stories by 
{' '}
<b>{article.author.username}</b>
{" "}
            </h5>
            <div className="">
              <a
                href="#"
                className="card-title text-orange font-weight-bold font-raleway"
              >
                Some story title
              </a>
              <p className="text-muted">
                Some very summarized content showing what the story is
                about...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-1 pt-3">
        <div className="col-md-3 text-center pb-3">
          <Rating />
        </div>
        <div className="col-md-4 text-center pb-3">
          <LikesDislikes slug={slug} />
          <span id="buttons" className={getAuthor(article.author.username)}>
            <i
              title="edit"
              id="toggleEdit"
              className="fas fa-pencil-square-o mr-3"
              onClick={toggleEdit}
            />
            <i
              title="delete"
              className="fas fa-trash fa-2x"
              id="delete"
              data-toggle="modal"
              data-target="#deleteModal"
            />
          </span>
          <div>
            <DeleteModal slug={slug} />
          </div>
        </div>
        <div className="col-md-4 text-center pb-2">
          <span className="text-muted font-exo">
            Created on: 
{' '}
<i>{articleCreated(article.time_created)}</i>
          </span>
        </div>
      </div>
    </div>
    <Tags tags={article.tagList} />
    <Comments />
  </div>
    <div className="footer">
    <Footer />
  </div>
    </div>
);

Article.propTypes = {
  article: PropTypes.object.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  slug: PropTypes.string,
};

export default Article;
