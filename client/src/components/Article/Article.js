import React, { Component } from "react";
import API from '../../utils/API';

class Article extends Component {

constructor(props) {
  super(props);
  this.state = props;
}

handleSaveArticle = event => {
  API.saveArticle({
    headLine: this.state.headline,
    url: this.state.url,
    publishedDate: this.state.published
  });
}
 
render (){
  return(
    <div className="card">
      <div className="card-block">
        <h3 className="card-title">
        {this.state.headline}
        </h3>
        <a href={this.state.url} target='_blank'>
          <button className='btn btn-default' href={this.state.url}>View Article</button>
        </a>
        <button className='btn btn-primary' onClick= {this.handleSaveArticle}>Save Article</button>
        <p>Date Published: {this.state.published} </p>
      </div>
    </div>
    );
  }
}

export default Article;