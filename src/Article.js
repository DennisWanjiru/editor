import React from "react";

export const Article = props => (
  <div>
    <h4>{props.article.tilte}</h4>
    <p>{props.article.body}</p>
  </div>
);
