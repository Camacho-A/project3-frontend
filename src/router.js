import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import App from "./App"
import Main from "./pages/Main"
import Show from "./pages/Show"
import { musicsLoader, musicLoader } from "./loader"
import { createAction,updateAction,deleteAction } from "./action"
import Create from "./pages/Create"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Main />} loader={musicsLoader} />
        <Route path=":id" element={<Show />} loader={musicLoader} />
        <Route path="create" action={createAction}/>
        <Route path="update/:id" action={updateAction} />
        <Route path="delete/:id" action={deleteAction} />
        <Route path="add" element={<Create/>} />
    </Route>
))

export default router