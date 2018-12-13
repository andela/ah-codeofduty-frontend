import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';
import { postArticle } from './articleActions';
import ArticleForm from './articleForm';

export class CreateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            body: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.createArticleSuccess === true) {
            const { history } = this.props;
            history.push('/articles');
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const { title, description, body } = this.state;
        console.log('here', title, description, body);
        const payload = {
                title,
                description,
                body,
        };
        const { addArticle } = this.props;
        addArticle(payload);
    };

    resetForm = () => {
        this.setState({
            title: '',
            description: '',
            body: '',
        });
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleEditorChange = value => {
        this.setState({ body: value });
    };

    render() {
        const { title, description, body } = this.state;
        const { loading } = this.props;
        return (
            <ArticleForm
                handleChange={this.handleChange}
                handleEditorChange={this.handleEditorChange}
                handleSubmit={this.handleSubmit}
                resetForm={this.resetForm}
                title={title}
                description={description}
                body={body}
                loading={loading}
            />
        );
    }
}

CreateArticle.propTypes = {
    addArticle: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    createArticleSuccess: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
};

CreateArticle.defaultProps = {
    loading: false,
};

const mapStateToProps = state => ({
    createArticleSuccess: state.articleReducer.createArticleSuccess,
    loading: state.articleReducer.loading,
});

export default connect(
    mapStateToProps,
    { addArticle: postArticle },
)(CreateArticle);
