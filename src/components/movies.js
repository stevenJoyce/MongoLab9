import React from 'react';
import MovieItem from './movieItem';
import Card from 'react-bootstrap/Card'

class Movies extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render() {
    return (
    <div>
    {/* <h4>{this.props.movie.Title}</h4>
    <p>{this.props.movie.Year}</p>
    <img src={this.props.movie.Poster} width="200" height="200"></img>
    */}
    <Card>
    <Card.Header>{this.props.movie.title}</Card.Header>
    <Card.Body>
    <blockquote className="blockquote mb-0">
    <img src={this.props.movie.poster} width="200" height="200"></img>
    <footer>
    {this.props.movie.year}
    </footer>
    </blockquote>
    </Card.Body>
    </Card>
    </div>
    );
    }
  
}

export default Movies;