import {useLoaderData, Form} from "react-router-dom"


function Show(props){
    const music = useLoaderData()
    return(
        <div>
            <h1>{music.artist}</h1>
            <h2>{music.genre}</h2>
            <img src={music.albumImage} alt={music.song}/>
            <a href={music.url} target="_blank" rel="noreferrer">{music.song}</a>
        
            <h2>Update {music.artist}</h2>
            <Form action={`/update/${music._id}`} method="post">
                <input type="input" name="artist" placeholder={music.artist} defaultValue={music.artist}/>
                <input type="input" name="genre" placeholder={music.genre} defaultValue={music.genre}/>
                <input type="input" name="song" placeholder={music.song} defaultValue={music.song}/>
                <input type="input" name="url" placeholder={music.url} defaultValue={music.url}/>
                <input type="input" name="albumImage" placeholder={music.albumImage} defaultValue={music.albumImage}/>
                <input type="submit" value={`update ${music.artist}`}/>
            </Form>

            <h2>Delete Music</h2>
            <Form action={`/delete/${music._id}`} method="post">
                <input type="submit" value={`delete ${music.artist}`} />
            </Form>
        </div>
    )
}

export default Show