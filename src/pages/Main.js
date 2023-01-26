import { Link, useLoaderData, Form } from 'react-router-dom'
import '../css/app.css'
function Main(props) {
  const musics = useLoaderData()

  return (
    <>
    <div className="main__container">
    
        <Form action="/create" method="post">
          <input className='main__input' type="input" name="song" placeholder="Song" required />
          <input className='main__input' type="input" name="url" placeholder="URL" />
          <input className='main__input' type="input" name="artist" placeholder="Artist" />
          <input className='main__input' type="input" name="genre" placeholder="Genre" />
          <input className='main__input' type="input" name="albumImage" placeholder="Album Image" /><br/>
    <div className='btn--add'>
          <input className='btn btn--main__input' type="submit" value="Add Song" />
</div>
        </Form>
     </div>
<div className='main__list'>
      {musics.map((music) => (
        <div key={music._id} className="music">
          <Link to={`/${music._id}`}>
          <img src={music.albumImage} alt={music.song}/>
          </Link>
          <p >{music.artist}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Main