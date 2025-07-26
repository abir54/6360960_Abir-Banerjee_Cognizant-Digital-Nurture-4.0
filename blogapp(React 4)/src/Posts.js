import React, { Component } from 'react';
import Post from './Post';
import './styles.css';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            error: null
        };
    }

    // Method to load posts from API
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const posts = data.slice(0, 10).map(postData => 
                    new Post(postData.id, postData.userId, postData.title, postData.body)
                );
                this.setState({ 
                    posts: posts, 
                    loading: false 
                });
            })
            .catch(error => {
                this.setState({ 
                    error: error.message, 
                    loading: false 
                });
            });
    }

    // Lifecycle hook - componentDidMount
    componentDidMount() {
        console.log('Component mounted - fetching posts...');
        this.loadPosts();
    }

    // Lifecycle hook - componentDidCatch
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by componentDidCatch:', error, errorInfo);
        alert(`An error occurred: ${error.message}`);
        this.setState({ 
            error: error.message,
            loading: false 
        });
    }

    // Render method
    render() {
        const { posts, loading, error } = this.state;

        if (loading) {
            return (
                <div className="container">
                    <div className="loading">
                        <div className="spinner"></div>
                        <p>Loading posts...</p>
                    </div>
                </div>
            );
        }

        if (error) {
            return (
                <div className="container">
                    <div className="error">
                        <h2>Error Loading Posts</h2>
                        <p>{error}</p>
                        <button onClick={() => this.loadPosts()} className="retry-btn">
                            Try Again
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="container">
                <header className="header">
                    <h1>Blog Posts</h1>
                    <p className="subtitle">Latest posts from our community</p>
                </header>
                
                <div className="posts-grid">
                    {posts.map(post => (
                        <article key={post.id} className="post-card">
                            <div className="post-header">
                                <span className="post-id">#{post.id}</span>
                                <span className="user-id">User {post.userId}</span>
                            </div>
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-body">{post.body}</p>
                            <div className="post-footer">
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </article>
                    ))}
                </div>
                
                <footer className="footer">
                    <p>Showing {posts.length} posts</p>
                </footer>
            </div>
        );
    }
}

export default Posts;