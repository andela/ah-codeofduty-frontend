import React from 'react';
import Home from './Home.scss';
const Index = () => (
  <div>
    <div className="jumbotron" id="featured_posts">
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

      <div className="container">
        <h3>Most popular</h3>
        <br />
        <div className="card-deck">
          <div className="card">
            <div className="card-body text-center">
              <img className="card-img-top" src="https://afs-calneva.org/wp-content/uploads/sites/8/2016/07/North_Fork_Amer_River_5July2008-003_size-edit.jpg" alt="Photo of sunset" />
              <br />
              <p>Put simply, all of these different types of paragraphs...</p>
            </div>
            <div className="card-footer">
              <i className="fa fa-star" aria-hidden="true" />
              {' '}
              4.5
            </div>
          </div>
          <div className="card">
            <div className="card-body text-center">
              <h4>Sample heading</h4>
              <p>Put simply, all of these different types of paragraphs simply involve layering on a different purpose or intent. When students have the right foundation, it’s just that simple.</p>
            </div>
            <div className="card-footer">
              <i className="fa fa-star" aria-hidden="true" />
              {' '}
              4.5
            </div>
          </div>
          <div className="card">
            <div className="card-body text-center">
              <img className="card-img-top" src="https://afs-calneva.org/wp-content/uploads/sites/8/2016/07/North_Fork_Amer_River_5July2008-003_size-edit.jpg" alt="Photo of sunset" />
              <br />
              <p>Put simply, all of these different types of paragraphs...</p>
            </div>
            <div className="card-footer">
              <i className="fa fa-star" aria-hidden="true" />
              {' '}
              4.5
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />

      <div className="container">
        <h3>Recent Posts</h3>
        <br />

        <div className="card-deck">
          <div className="card">
            <div className="card-body text-center">
              <img className="card-img-top" src="https://afs-calneva.org/wp-content/uploads/sites/8/2016/07/North_Fork_Amer_River_5July2008-003_size-edit.jpg" alt="Photo of sunset" />
              <br />
              <p>Put simply, all of these different types of paragraphs...</p>
            </div>
            <div className="card-footer">
              <i className="fa fa-star" aria-hidden="true" />
              {' '}
              4.5
            </div>
          </div>
          <div className="card">
            <div className="card-body text-center">
              <h4>Sample heading</h4>
              <p>Put simply, all of these different types of paragraphs simply involve layering on a different purpose or intent. When students have the right foundation, it’s just that simple.</p>
            </div>
            <div className="card-footer">
              <i className="fa fa-star" aria-hidden="true" />
              {' '}
              4.5
            </div>
          </div>
          <div className="card">
            <div className="card-body text-center">
              <img className="card-img-top" src="https://afs-calneva.org/wp-content/uploads/sites/8/2016/07/North_Fork_Amer_River_5July2008-003_size-edit.jpg" alt="Photo of sunset" />
              <br />
              <p>Put simply, all of these different types of paragraphs...</p>
            </div>
            <div className="card-footer">
              <i className="fa fa-star" aria-hidden="true" />
              {' '}
              4.5
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />

    </div>

    <div className="footer">
    footer
    </div>
  </div>
);

export default Index;
