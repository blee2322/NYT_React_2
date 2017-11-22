import React from 'react';

const Article = props =>

<div className="card">
    <div className="card-block">
      <h3 className="card-title">
      {props.headline}
      </h3>
      <a href={props.url} target='_blank'>
        <button className='btn btn-default' href={props.url}>View Article</button>
      </a>
      <button className='btn btn-primary' onClick= {props.handleSaveArticle}>Save Article</button>
      <p>Date Published: {props.published} </p>
    </div>
  </div>

export default Article;