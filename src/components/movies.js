import React from 'react';
import MovieItem from './movieItem';

class Movies extends React.Component {
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    //This goes and pulls all data from the mtMovies JSON and execute it in this component
    //The map function splits the array into 4 parts(4 movies) and outputs it
    return this.props.myMovies.map((movie)=>{
        console.log(movie);
        return <MovieItem key={movie._id} movie={movie}></MovieItem>
    });
  }
  
}
export default Movies;