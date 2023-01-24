import { Form, Link, useLoaderData } from "react-router-dom"

function Main(props){
    const musics = useLoaderData()

    return (
        <div>
            <h2>Create a Profile</h2>
            <Form action ="/create" method="post">
                <input type="input" name="profile" placeholder="Profile's Name" />
                <input type="input" name="image" placeholder="Profile's Image" />
                <input type="submit" value="Create a Profile" />
            </Form>

            <h2>Profiles</h2>
            {musics.map(music => (
                <div key={music._id} className="music">
                    <Link to={`/${music._id}`}>
                        <h1>{music.profile}</h1>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Main