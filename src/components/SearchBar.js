import React from 'react';

class SearchBar extends React.Component {
  state = {
    textSearch: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    alert(this.state.textSearch)
  }

  render() {
    return (
      <div className="SearchBar col-6">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input 
              name="textSearch"
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={this.handleChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar