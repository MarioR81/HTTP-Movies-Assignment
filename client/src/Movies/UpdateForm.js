import React, { useState, useEffect } from "react";
import { useParams } from 'react-roouter-dom';
useEffect ) from 'react';

const initialMovie ={
    id: '',
    title: '',
    director:'',
    metascore: '',
    stars: '',
};

function UpdateForm() {
    return (
        <div className='movie-card'>
            <h2>Update Form</h2>

            <form onSubmit={}>
                <input
                    type='text'
                    name='id'
                    placeholder='ID'
                    onChange={}
                    value={}
                />

                <input
                    type='text'
                    name='title'
                    placeholder='Film Title'
                    onChange={}
                    value={}
                />

                <input
                    type='text'
                    name='director'
                    placeholder='Film Director'
                    onChange={}
                    value={}
                />

                <input
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    onChange={}
                    value={}
                />

                <input
                    type='text'
                    name='stars'
                    placeholder='Starring'
                    onChange={}
                    value={}
                />

                <button>Update</button>
            </form>
            
        </div>
    )
};

export default UpdateForm;