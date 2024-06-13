import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Review from "./pages/Review"
import Rate from "./pages/Rate"
import User1_1 from "./subpages/User1_1"
import User1_2 from "./subpages/User1_2"
import User1_3 from "./subpages/User1_3"


import A_time_export from "./pages/A_time_export"
import A_time_page1 from "./pages/A_time_page1"
import A_time_page2 from "./pages/A_time_page2"

import B_time_export from "./pages/B_time_export"
import C_time_page1 from "./pages/C_time_page1"
import C_time_page2 from "./pages/C_time_page2"

import C_time_export from "./pages/C_time_export"
import B_time_page1 from "./pages/B_time_page1"
import B_time_page2 from "./pages/B_time_page2"
import B_time_page3 from "./pages/B_time_page3"
import B_time_page4 from "./pages/B_time_page4"
import B_time_page5 from "./pages/B_time_page5"
import B_time_page6 from "./pages/B_time_page6"
import B_time_page7 from "./pages/B_time_page7"
import B_time_page8 from "./pages/B_time_page8"
import B_time_page9 from "./pages/B_time_page9"


const Router = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rate" element={<Rate />} />
                <Route path="/a1" element={<A_time_page1/>} />
                <Route path="/a2" element={<A_time_page2/>} />
                <Route path="/c1" element={<C_time_page1/>} />
                <Route path="/c2" element={<C_time_page2/>} />
                <Route path="/b1" element={<B_time_page1/>} />
                <Route path="/b2" element={<B_time_page2/>} />
                <Route path="/b3" element={<B_time_page3/>} />
                <Route path="/b4" element={<B_time_page4/>} />
                <Route path="/b5" element={<B_time_page5/>} />
                <Route path="/b6" element={<B_time_page6/>} />
                <Route path="/b7" element={<B_time_page7/>} />
                <Route path="/b8" element={<B_time_page8/>} />
                <Route path="/b9" element={<B_time_page9/>} />
                <Route path="/review" element={<Review />} />
                <Route path="/exportA" element={<A_time_export />} />
                <Route path="/exportB" element={<B_time_export />} />
                <Route path="/exportC" element={<C_time_export />} />
                <Route path="/user1_1" element={<User1_1 />} />
                <Route path="/user1_2" element={<User1_2 />} />
                <Route path="/user1_3" element={<User1_3 />} />
            </Routes>
        </Fragment>
    )
}

export default Router