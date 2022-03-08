import './Content.css'

import React from "react"
import { Route, Routes } from 'react-router-dom'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'


const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" caseSensitive={false} element={<Home />}/>
            <Route path="/about" caseSensitive={false} element={<About />}/>
            <Route path="/param/:id" caseSensitive={false} element={<Param />}/>
            <Route path="*" caseSensitive={false} element={<NotFound />}/>
        </Routes>
    
    </main>
    
)

export default Content