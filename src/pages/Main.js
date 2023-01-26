import { Link, useLoaderData } from 'react-router-dom'
import '../css/app.css'
function Main(props) {
  const musics = useLoaderData()

  return (
		<>
			<div className="main__list">
				{musics.map((music) => (
					<div key={music._id} className="music">
						<Link to={`/${music._id}`}>
							<img src={music.albumImage} alt={music.song} />
							<div className="overlay">
								<p className="text">{music.artist}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	)
}

export default Main