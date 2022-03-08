import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'


const App = props => (
    <Router>
        <div className="App">
            <Menu />
            <Content />
        </div>
    </Router>

)

export default App