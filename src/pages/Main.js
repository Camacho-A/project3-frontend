import { Link, useLoaderData } from "react-router-dom"

function Main(props){
    const musics = useLoaderData()

    return musics.map(music => (
        <div key={music._id} className="music">
            <Link to={`/${music._id}`}>
                <h1>{music.profile}</h1>
            </Link>
        </div>
    ))
}

export default Main