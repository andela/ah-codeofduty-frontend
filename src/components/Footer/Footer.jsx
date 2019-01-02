import React from 'react';
import './Footer.scss';

export const Footer = () => (
  <footer>
  <hr className="hr-footer"/>
  <div className="text-center">
    <span>
        <a href="/articles">All posts</a>
        <a href="/#recent">Most recent articles</a>
        <a href="/#popular">Popular articles</a>
      </span>
      <p>© 2018</p>
  </div>
      
       
  </footer>
);
