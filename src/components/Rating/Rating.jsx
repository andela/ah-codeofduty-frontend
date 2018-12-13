import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StarRatings from "react-star-ratings";
import { rateArticle, avgRate } from "./actions/actions";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      average_rating: 0
    };
  }

  componentDidMount() {
    this.props.ar("add-tag");
  }

  changeRating = newRating => {
    this.props.addRating({ rate: newRating, slug: "add-tag" });
    this.setState({
      rating: newRating
    });
  };

  render() {
    return (
      <div>
        <StarRatings
          rating={this.state.rating}
          starHoverColor="gold"
          starRatedColor="gold"
          changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="5px"
        />
        <StarRatings
          rating={this.props.average_rating.average_rating}
          starDimension="20px"
          starSpacing="5px"
        />
      </div>
    );
  }
}

const matchDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addRating: rateArticle,
      ar: avgRate
    },
    dispatch
  );

const mapStateToProps = state => ({
  average_rating: state.ratingReducer
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Rating);
