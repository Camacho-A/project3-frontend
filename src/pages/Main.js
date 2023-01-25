import { Form, Link, useLoaderData } from "react-router-dom"

function Main(props){
    const musics = useLoaderData()

    return (
        <div>
            <h2>Create a Profile</h2>
            <Form action={`/create`} method="post">
                <input type="input" name="artist" placeholder="artist name"/>
                <input type="input" name="genre" placeholder="genre"/>
                <input type="input" name="song" placeholder="song"/>
                <input type="input" name="url" placeholder="song url"/>
                <input type="input" name="albumImage" placeholder="album image"/>
                <input type="submit" value={`Add an Artist`}/>
            </Form>

            <h2>Artists</h2>
            {musics.map(music => (
                <div key={music._id} className="music">
                    <Link to={`/${music._id}`}>
                        <img src={music.albumImage} alt={music.song}/>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Main