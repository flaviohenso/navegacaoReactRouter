import './Content.css'

import React from "react"
import { Route, Routes } from 'react-router-dom'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'


const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" caseSensitive={false} element={<Home />}/>
            <Route path="/about" caseSensitive={false} element={<About />}/>
        </Routes>
    
    </main>
    
)

export default Content