import React from 'react'
import { Form } from 'react-router-dom'

function Create() {
  return (
    <div className="main__container">
      <Form action="/create" method="post">
        <div className='input__div'><input
          className="main__input"
          type="input"
          name="song"
          placeholder="Song"
          required
          autocomplete='off'
        /></div>
       <div className='input__div'> <input
          className="main__input"
          type="input"
          name="url"
          placeholder="URL"
          autocomplete='off'
        /></div>
        <div className='input__div'><input
          className="main__input"
          type="input"
          name="artist"
          placeholder="Artist"
          autocomplete='off'
        /></div>
        <div className='input__div'><input
          className="main__input"
          type="input"
          name="genre"
          placeholder="Genre"
        /></div>
         <div className='input__div'><input
          required
          className="main__input"
          type="input"
          name="albumImage"
          placeholder="Album Image"
          autocomplete='off'
        /></div>
        <br />
        <div className="btn--add">
          <input
            className="btn btn--main__input"
            type="submit"
            value="Add Song"
          />
        </div>
      </Form>
    </div>
  )
}

export default Create
