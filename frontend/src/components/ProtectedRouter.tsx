import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeMenu from "../pages/HomeMenu"

const ProtectedRouter = () => {

    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<HomeMenu />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )

}

export default ProtectedRouter