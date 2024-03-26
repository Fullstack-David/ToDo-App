
export default function NewPost({handleSubmit,postTitle,setPostTitle,
}){
  return (
    <main className="NewPost">
      <h2>NewPost</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />  
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};


