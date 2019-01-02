import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StarRatings from "react-star-ratings";
import { rateArticle, initialRate } from "./actions/actions";

export class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      current_rating: 0
    };
  }

  componentDidMount() {
    this.props.cr(localStorage.getItem("currentArticle"));
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
    const current = this.props.current_rating.current_rating;
    return (
      <div>
        <h6>Rate this Article</h6>
        <StarRatings
          rating={current}
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
      addRating: rateArticle,
      cr: initialRate
    },
    dispatch
  );

const mapStateToProps = state => ({
  current_rating: state.ratingReducer
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Rating);
