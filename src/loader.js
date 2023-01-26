const URL = "https://dotbeats.onrender.com"

export const musicsLoader = async () => {
  const response = await fetch(URL + "/music")
  const musics = await response.json()
  return musics
}

export const musicLoader = async ({params}) => {
  const response = await fetch(URL + "/music/" + params.id)
  const music = await response.json()
  return music
}