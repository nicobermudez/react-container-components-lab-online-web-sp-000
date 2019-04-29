import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      latest-movie-reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(data => this.setState({latest-movie-reviews}))
  }

  render() {
    return <MovieReviews latest-movie-reviews={this.state.latest-movie-reviews}
  }
}
