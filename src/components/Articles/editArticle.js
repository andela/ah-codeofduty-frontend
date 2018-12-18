import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import {
    fetchSpecificArticle,
    updateArticle,
} from './articleActions';
import Article from './article';
import ArticleForm from './articleForm';

export class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            body: '',
            tagList: [],
            isEditing: false,
            redirect: false,
        };
    }

    componentDidMount() {
        const { match: { params: { slug } }, fetchSpecificArticle } = this.props;
        fetchSpecificArticle(slug);
    }

    componentWillReceiveProps(nextProps) {
        const { editArticleSuccess } = nextProps;
        const { articlePayload } = this.props;
        if (nextProps && nextProps.articlePayload && (nextProps.articlePayload !== articlePayload)){
            const  { title, body, description, tagList }  = nextProps.articlePayload;
            this.setState({...this.state, title, body, description, tagList });
        }
        if (editArticleSuccess === true) {
            this.setState({ isEditing: false });
            const { history } = this.props;
            history.push('/articles');
        }

    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({...this.state, [name]: value });
    };

    handleTagChange = tagList => {
        this.setState({...this.state, tagList});
    }

    handleEditorChange = value => {
        this.setState({ ...this.state, body: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { title, description, body, tagList } = this.state;
        const payload = 
             {
                title,
                description,
                body,
                tagList,
            };

        const { updateArticle } = this.props;
        const {
            match: {
                params: { slug },
            },
        } = this.props;
        updateArticle(slug, payload);
    };

    resetForm = () => {
        this.setState({
            title: '',
            description: '',
            body: '',
            tagList: [],
        });
    };

    toggleEdit = () => {
        const { isEditing } = this.state;
        this.setState({...this.state, isEditing: !isEditing });
    };

    render() {
        const {
            title,
            description,
            body,
            tagList,
            isEditing,
            redirect,
        } = this.state;
        const {
            loading,
            articlePayload,
            match: { params: { slug } },
        } = this.props;
        if (isEditing) {
            return (
                <ArticleForm
                    handleChange={this.handleChange}
                    handleEditorChange={this.handleEditorChange}
                    handleTagChange={this.handleTagChange}
                    handleSubmit={this.handleSubmit}
                    resetForm={this.resetForm}
                    title={title}
                    description={description}
                    body={body}
                    tags={tagList}
                    loading={loading}
                />
            );
        }
        if (redirect) {
            const to = { pathname: '/' };
            return (
                <Redirect to={to} />
            );
        }
        return (
            <div>
                <Loader loaded={!loading}>
                    {Object.keys(articlePayload).length > 0
                    && (<Article
                            article={articlePayload}
                            toggleEdit={this.toggleEdit}
                            loading={loading}
                            slug={slug}
                        />
                    )
                    }
                </Loader>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    articlePayload: state.articleReducer.articlePayload,
    editArticleSuccess: state.articleReducer.editArticleSuccess,
    loading: state.articleReducer.loading,
});

const matchDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchSpecificArticle,
            updateArticle,
        },
        dispatch,
    );

EditArticle.defaultProps = {
    loading: false,
};

EditArticle.propTypes = {
    fetchSpecificArticle: PropTypes.func.isRequired,
    updateArticle: PropTypes.func.isRequired,
    articlePayload: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    editArticleSuccess: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
};

export default connect(
    mapStateToProps,
    matchDispatchToProps,
)(EditArticle);
