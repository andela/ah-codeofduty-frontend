import React from 'react';

import Tags from '../../../Tags/Tags';

import './Story.scss';

const story = ({
  article: {
    description, image, title, average_rating, tagList,
  },
}) => {
  console.log(tagList, 'Taglistssssdt');
  return (
    <div className="Story">
      <div>
        <img
          src={
            image
              ? image[0]
              : 'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          }
          alt={title}
        />
      </div>
      <div>
        <p className="card-title text-center pt-2">{title}</p>
        <p className="text-center text-muted description">{description}</p>
        <p>
          <span className="float-left pb-5 pl-3 stats">
            &#9734;
            <sub className="pl-1">{average_rating}</sub>
          </span>

          <span className="float-right pb-3 pr-3 stats">
            &#128065;
            <sub>5000</sub>
          </span>
        </p>
      </div>
    </div>
  );
};

export default story;
