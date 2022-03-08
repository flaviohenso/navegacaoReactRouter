import './Menu.css'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Sobre</a>
                </li>
            </ul>
        </nav>
        
    </aside>
    
)

export default Menu