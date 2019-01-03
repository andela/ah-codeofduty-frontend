import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./articles.scss";
import authUser from "../../utils/authUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Footer } from "../Footer/Footer";
import { avgRate, rateArticle, initialRate } from "../Rating/actions/actions";
import Articles from "./index";

const { username } = authUser();
localStorage.setItem("username", username);

export class Article extends React.Component {
  state = {};

  componentDidMount() {
    this.props.avgRate(this.props.slug);
    this.props.rateArticle(this.props.slug);
    this.props.initialRate(this.props.slug);
  }

  render() {
    const { article, slug, toggleEdit } = this.props;
    return (
      <div>
        <div>
          <ToastContainer />
        </div>
        <div>
          <Articles article={article} slug={slug} toggleEdit={toggleEdit} />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  slug: PropTypes.string
};

const matchDispatchToProps = {
  avgRate,
  rateArticle,
  initialRate
};

const mapStateToProps = state => ({
  average_rating: state.ratingReducer,
  current_rating: state.ratingReducer
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Article);
