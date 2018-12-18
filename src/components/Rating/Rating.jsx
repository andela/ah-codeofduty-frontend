import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StarRatings from "react-star-ratings";
import { rateArticle, avgRate } from "./actions/actions";

export class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  changeRating = newRating => {
    this.props.addRating({
      rate: newRating,
      slug: localStorage.getItem("currentArticle")
    });
    this.setState({
      rating: newRating
    });
  };

  render() {
    return (
      <div>
        <h6>Rate this Article</h6>
        <StarRatings
          rating={this.state.rating}
          starHoverColor="gold"
          starRatedColor="gold"
          changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="4px"
        />
      </div>
    );
  }
}

const matchDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addRating: rateArticle
    },
    dispatch
  );

export default connect(
  null,
  matchDispatchToProps
)(Rating);
