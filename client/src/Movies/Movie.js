import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch, useHistory } from 'react-router-dom';
import MovieCard from './MovieCard';

function Movie({ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const match = useRouteMatch();

  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const history = useHistory();
  const handleUpdate = e => {
    e.preventDefault();
    history.push(`/update-form/${movie.id}`);
  };

  const handleDelete = e => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/api/movies/${movie.id}`)
    .then(res => {
      props.setMovie(res.data)
      history.push('/')
    })
    .catch(err => console.log('Error delete axios', err))
  }

  useEffect(() => {
    fetchMovie(match.params.id);
  }, [match.params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />

      <div className='edit-button' onClick={handleUpdate}>Edit/Update</div>
      <div className='delete-button' onClick={handleDelete}>Delete</div>
      <div className='save-button' onClick={saveMovie}>
        Save
      </div>
    </div>
  );
}

export default Movie;
