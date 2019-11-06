import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import {Link} from 'react-router-dom';
class MovieItem extends React.Component {
    //The use of this.props calls the array data into the div and outputs it in order
    //<h4>{this.props.movie.Title}</h4>
    //<p>{this.props.movie.Year}</p>
    //<img src ={this.props.movie.Poster}></img> 
    constructor(){
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(){
        console.log("Delete Button Clicked");

        Axios.delete('http://localhost:4000/api/movies/'+ this.props.movie._id)
        .then()
        .catch();
    }
    render(){
        return (
          <div>
            <Card bg ="dark" text = "white">
                <Card.Header>{this.props.movie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src ={this.props.movie.poster} alt="poster"></img>
                        <footer>
                        <p> {this.props.movie.year} </p>
                        </footer>   
                    </blockquote>
                </Card.Body>
                <Button variant = "danger" onClick={this.DeleteMovie}> Delete</Button>
                <Link to={"/edit/"+ this.props.movie._id} className="Btn_btn-primary"> Edit </Link>
            </Card>
           </div> 
        );
      }
}

export default MovieItem;