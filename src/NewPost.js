import React from "react";

const NewPost = ({
  handleSubmit,
  posttitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          required
          value={posttitle}
          onChange={(e) => setPostTitle(e.target.value)}
          type="text"
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
