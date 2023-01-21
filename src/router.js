import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import App from "./App"
import Main from "./pages/Main"
import Show from "./pages/Show"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Main />} />
        <Route path=":id" element={<Show />} />
        <Route path="create" />
        <Route path="update/:id" />
        <Route path="delete/:id" />
    </Route>
))

export default router