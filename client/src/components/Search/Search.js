import React, { Component } from 'react';
import API from '../../utils/Api';
import Results from '../Results'

class Search extends Component {

  state = {
    topic: '',
    startYear: '',
    endYear: '',
    articles: [],
  }

  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  }

  handleStartYearChange = (event) => {
    this.setState({ startYear: event.target.value });
  }

  handleEndYearChange = (event) => {
    this.setState({ endYear: event.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.topic, this.state.startYear, this.state.endYear)
    .then((res) => {
      console.log(res);
      this.setState({ articles: res.data.response.docs})
    })
  }

  handleSaveArticle = (event) => {
    
  }

  render() {

    return(
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='panel panel-primary'>
                <div className='panel-heading'>
                    <h3 className='panel-title'>
                      <strong>
                        Search for Articles
                      </strong>
                    </h3>
                </div>
                <div className='panel-body'>
                  <form>
                    <div className='form-group'>
                        <label>Topic</label>
                        <input onChange= {this.handleTopicChange} type='text' className='form-control' id='topic' />
                    </div>
                    <div className='form-group'>
                        <label>Start Year</label>
                        <input onChange= {this.handleStartYearChange} type='text' className='form-control' id='startyear' />
                    </div>
                    <div className='form-group'>
                        <label>End Year</label>
                        <input onChange= {this.handleEndYearChange} type='text' className='form-control' id='endyear' />
                    </div>
                    <button onClick={this.handleFormSubmit} type='submit' className='btn btn-primary'>Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br/><br/>

      {this.state.articles ? ( 
        <Results
        articles = {this.state.articles}
        onSave = {this.handleSaveArticle}
        />
        ):(
        <h3>No Results to Display</h3>
      )}
      </div>



    );
  }
}

export default Search;


