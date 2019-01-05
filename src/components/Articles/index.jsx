/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import './articles.scss';
import { ToastContainer } from 'react-toastify';
import DeleteModal from './deleteModal';
import authUser from '../../utils/authUser';
import Comments from '../Comments/index';
import LikesDislikes from '../like_unlike/index';
import 'react-toastify/dist/ReactToastify.min.css';
import { Footer } from '../Footer/Footer';
import Rating from '../Rating/Rating';
import Average from '../Rating/averageRating';
import { Tags } from '../Tags/Tags';
import ReportArticle from  '../Reports/ReportArticle'
import SocialShare, { cursorStyle } from './share';
import BookmarkArticle from '../Bookmarks/bookmark';

const { username } = authUser();
localStorage.setItem('username', username);

const getAuthor = (author, slug, toggleEdit) => {
  const currentUser = localStorage.getItem('username');
  if (currentUser === author) {
    return (
      <span id="buttons" style={{ display: 'inline-block' }}>
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
    );
  }
  return <LikesDislikes slug={slug} />;
};

const articleCreated = (articleDate) => {
  const dateTime = new Date(articleDate);
  const dateOnly = dateTime.toDateString();
  return dateOnly;
};

const Articles = ({ article, slug, toggleEdit }) => (
  <div>
    <div>
      <ToastContainer />
    </div>
    <div>
      <div className="container px-5 pb-5">
        <div className="row pb-4">
          <div className="px-5 pt-3 col-md-8">
            <h1 className="card-title pt-4 font-exo">
              {article.title} 
{' '}
<Average />
              <BookmarkArticle />
            </h1>
            <p className="text-muted pb-3 font-exo">
              <span>
{article.time_to_read}
{' '}
Min Read
</span>
            </p>
            <p className="card-text">
              <div dangerouslySetInnerHTML={{ __html: article.body }} />
            </p>
            <p className="card-text pt-3"> THE END </p>
            <div>
              <i
                className="fas fa-share-alt"
                data-toggle="collapse"
                data-target="#social-sharing"
                aria-expanded="false"
                aria-controls="collapseExample"
                style={cursorStyle}
              >
                {' '}
              </i>
              <SocialShare />
            </div>
            <div className="row">
              <div className="col-lg-2">
                <img
                  className="round-image"
                  src="https://images.unsplash.com/photo-1494236536165-dab4d859818b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="image here"
                />
              </div>
              <div className="col-lg-10 pt-2">
                <h5 className="font-raleway">Written by</h5>
                <p className="text-large font-exo">{article.author.username}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pl-5 side-column mt-3 font-raleway">
            <div className="fixed sticky-top">
              <h5 className="mb-4 pt-5 font-raleway">
                Stories by 
{' '}
<b>{article.author.username}</b>
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
      </div>
      <div className="row pb-1 pt-3">
        <div className="col-md-4 text-center pb-3 pl-5">
          <Rating />
        </div>
        <div className="col-md-4 text-center pb-3">
          {getAuthor(article.author.username, slug, toggleEdit)}
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
    <ReportArticle slug={slug} />
    <Comments />
    <div className="footer">
      <Footer />
    </div>
  </div>
);

Articles.propTypes = {
  article: PropTypes.object.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  slug: PropTypes.string,
};

export default Articles;
