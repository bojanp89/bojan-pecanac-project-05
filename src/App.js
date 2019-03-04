import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header';
import Print from './Print';

class App extends Component {
  // call the getCountries function once the component has been mounted
  componentDidMount() {
  }

  // setting the initial state of the app.
  constructor() {
    super();
    this.state = {
      apiResults: [],
      country: '',
      isLoading: '',
      currencies: '',
      languages: '',
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      isLoading: true
    })
    this.getCountries(this.state.country);
  };

  getCountries = (url) => {
    axios({
      method: 'GET',
      url: 'https://restcountries.eu/rest/v2/name/' + url,
    }).then(response => {
      this.setState({
        isLoading: false,
        apiResults: response.data[0],
        currencies: response.data[0].currencies[0],
        languages: response.data[0].languages[0]
      })
    })
  }

  render() {
    return (
      <Fragment>
        <div className = 'wrapper'>
        <Header />
        <main>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter country"
            onChange={this.handleChange}
            name="country"
            value={this.state.country}
          />
          <button type="submit">Find Country</button>
        </form>

        {this.state.isLoading ? (
          <p>Loading:</p>
        ) : (
          this.state.apiResults.length !== 0 && 
          <div>
            <h2>{this.state.apiResults.name}</h2>
            <p>Currencies: {this.state.currencies.code} {this.state.currencies.name}</p>
            <p>Capital: {this.state.apiResults.capital}</p>
            <p>Language: {this.state.languages.name}</p>
            <p>Population: {this.state.apiResults.population} people</p>
            <img src={this.state.apiResults.flag} />
        </div>
        )}
        </main>
        </div>
      </Fragment>
    );
  }
}

export default App;
