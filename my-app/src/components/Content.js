import React, { Component } from 'react';
import savedPosts from '../posts.json'; // Assuming this is the correct path to your JSON file
import css from "./css/Content.module.css";
import PostItem from "./PostItem";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedPosts: savedPosts // Initialize state with savedPosts from JSON
    };
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>Photos</h1>
        </div>

        <div className={css.SearchResults}>
          {/* Pass savedPosts state as a prop to PostItem */}
          <PostItem savedPosts={this.state.savedPosts} />
        </div>
      </div>
    );
  }
}

export default Content;
