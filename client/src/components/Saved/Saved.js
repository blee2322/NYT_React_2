import React, { Component } from "react";
import API from '../../utils/API';
import Article from '../Article'

class Saved extends Component{
  state = {
    savedArticles : []
  }

  componentDidMount(){
    this.loadArticles();
  }

  loadArticles = () => {
    API.getSavedArticles()
    .then(res => {
      console.log("result", res)
      this.setState({savedArticles: res.data})
      })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              Saved Articles
            </div>
            <div className="panel-body">
              {
                this.state.savedArticles ? 
                (this.state.savedArticles.map ((article) => (
                  <Article 
                    headline = {article.headLine}
                    published = {article.publishedDate}
                    url = {article.url}
                    key = {article._id}
                    saved = {true}
                    id ={article._id}
                    loadArticles = {this.loadArticles}
                  />
                ))) 
                : (<h3>No Saved Articles</h3>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;