import { useLoaderData, Form } from 'react-router-dom'

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
          <input type="submit" value="Update" />
        </Form>
      </div>

      <div className='show__img'>
        <img src={music.albumImage} alt={music.artist}></img>
      </div>

      <div className="show__list">
        <div className="show__text">
          <div className="show__info">
            <span className="show__span">Song: </span>
            <span>{music.song}</span>
          </div>

          <div className="show__info">
            <span className="show__span">Artist: </span>
            <span>{music.artist}</span>
          </div>
          <div className="show__info">
            <span className="show__span">Genre: </span>
            <span> {music.genre}</span>
          </div>
          <div className="show__info">
            <span className="show__span">Link: </span>
            <span>
              <a href={music.url}>{music.song}</a>
            </span>
          </div>
        </div>
      </div>



      <div>
        <Form action={`/delete/${music._id}`} method="post">
          <input type="submit" value="delete" />
        </Form>
      </div>
    </>
  )
}

export default Show
