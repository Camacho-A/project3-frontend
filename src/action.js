import { redirect } from "react-router-dom"

const URL = "https://dotbeats.onrender.com"

export const createAction = async ({ request }) => {

  const formData = await request.formData()
  
  const newMusic = {
    artist: formData.get("artist"),
    profile: formData.get("profile"),
    genre: formData.get("genre"),
    url: formData.get("url"),
    song: formData.get("song"),
    albumImage: formData.get("albumImage"),
  }

  await fetch(URL + "/music", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMusic),
  })

  return redirect("/")
}

export const updateAction = async ({ request, params }) => {

	const formData = await request.formData()
	
	const updatedMusic = {
	  artist: formData.get("artist"),
    profile: formData.get("profile"),
    genre: formData.get("genre"),
    url: formData.get("url"),
    song: formData.get("song"),
    albumImage: formData.get("albumImage"),
	}
	
	await fetch(URL + "/music/" + params.id, {
		method: "put",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatedMusic),
	})

	return redirect(`/${params.id}`)
}

export const deleteAction = async ({ params }) => {
 
    await fetch(URL + "/music/" + params.id, {
        method: "delete",
    })

    return redirect("/")
}