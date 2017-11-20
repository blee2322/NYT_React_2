import React, { Component } from 'react';

class Search extends Component {

  state = {
    topic: '',
    startYear: '',
    endYear: '',
    articles: [],
    saved: []
  };

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
                        <input onChange= 'topic handler' type='text' className='form-control' id='topic' />
                    </div>
                    <div className='form-group'>
                        <label>Start Year</label>
                        <input onChange= 'start year handler' type='text' className='form-control' id='startyear' />
                    </div>
                    <div className='form-group'>
                        <label>End Year</label>
                        <input onChange='end year handler' type='text' className='form-control' id='endyear' />
                    </div>
                    <button onClick='submit handler' type='submit' className='btn btn-primary'>Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br/><br/>
      </div>

    );
  }
}

export default Search;


