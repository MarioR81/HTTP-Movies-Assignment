import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const initialInfo ={
    id: '',
    title: '',
    director:'',
    metascore: '',
    stars: '',
};

const UpdateForm = props => {
    const [movieInfo, setMovieInfo] = useState(initialInfo);
    const { id } = useParams()
    
    useEffect(() => {
        // console.log('form props', props)
        const movieToUpdate = props.movieList.find(
            movie => `${movie.id}` === id
        );
        // console.log(movieToUpdate);
        if (movieToUpdate) {
            setMovieInfo(movieToUpdate);
        }
    }, [props.movieList, id]);


    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${id}`, movieInfo)
        .then(res => {
            setMovieInfo(res.data)
            // console.log('props', props, res.data)
            props.history.push(`/movies/${id}`);
        })
        .catch(err => console.log('error at handlesubmit', err));
    };

    const changeHandler = e => {
		e.persist();
		const value = e.target.value;
        
    	setMovieInfo({
			...movieInfo,
			[e.target.name]: value
		});
	};

    return (
        <div className='update-card'>
            <h2>Update Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='id'
                    placeholder='ID'
                    onChange={changeHandler}
                    value={movieInfo.id}
                /><br/><br/>

                <input
                    type='text'
                    name='title'
                    placeholder='Film Title'
                    onChange={changeHandler}
                    value={movieInfo.title}
                /><br/><br/>

                <input
                    type='text'
                    name='director'
                    placeholder='Film Director'
                    onChange={changeHandler}
                    value={movieInfo.director}
                /><br/><br/>

                <input
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    onChange={changeHandler}
                    value={movieInfo.metascore}
                /><br/><br/>

                <input
                    type='text'
                    name='stars'
                    placeholder='Starring'
                    onChange={changeHandler}
                    value={movieInfo.stars}
                /><br/><br/>

                <button>Update</button>
            </form>
            
        </div>
    )
};

export default UpdateForm;