import React from "react";
import Article from "./Article";
function ArticleList({ posts }) {
  return (
    <div>
      <main>
        {posts.map(function (post) {
          const { id, title, date, preview } = post;
          return (
            <Article key={id} title={title} date={date} preview={preview} />
          );
        })}
      </main>
    </div>
  );
}

export default ArticleList;
