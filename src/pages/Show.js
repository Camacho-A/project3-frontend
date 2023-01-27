import { useLoaderData, Form, Link  } from 'react-router-dom'

function Show(props) {
  const music = useLoaderData()
  return (
    <>
      <div className="show__container">
        <Form action={`/update/${music._id}`} method="post">
          <input
            className="show__input"
            type="input"
            name="song"
            placeholder="Song"
            defaultValue={music.song}
            required
          />
          <input
            className="show__input"
            type="input"
            name="url"
            placeholder="URL"
            defaultValue={music.url}
          />
          <input
            className="show__input"
            type="input"
            name="artist"
            placeholder="Artist"
            defaultValue={music.artist}
          />
          <input
            className="show__input"
            type="input"
            name="genre"
            placeholder="Genre"
            defaultValue={music.genre}
          />
          <input
            className="show__input"
            type="input"
            name="albumImage"
            placeholder="Album Image"
            defaultValue={music.albumImage}
          />
          <input className='btn__show--update' type="submit" value="Update" />
        </Form>
      </div>

{/* Show */}

      <div className="show__img--container">
        <img
          className="show__img"
          src={music.albumImage}
          alt={music.artist}
        ></img>
      </div>

      <div className="show__list">
        <div className="show__text">
          <div className="show__info">
            <span className="show__span">Song: </span>
            <span className='show__span2'> <a href={music.url} target='_blank' rel="noopener noreferrer" className='link'>{music.song}</a></span>
          </div>

          <div className="show__info">
            <span className="show__span">Artist: </span>
            <span className='show__span2'>{music.artist}</span>
          </div>
          <div className="show__info">
            <span className="show__span">Genre: </span>
            <span className='show__span2' > {music.genre}</span>
          </div>
          
        </div>
      </div>
<div className='show__btn'>

  <Link to="/">
   <button className='btn__btn blue' > Return</button>
  </Link>

   
        <Form action={`/delete/${music._id}`} method="post">
          <input className='btn__btn red' type="submit" value="Delete" />
        </Form>
      
      </div>
    </>
  )
}

export default Show
