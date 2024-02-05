import React from 'react';
import { Link } from 'react-router-dom';
import Art from './Art';
import Artists from './Artists';
import Museums from './Museums';

const Header = () => {
    return (
    
        <div>
            <h2>
                Museum App
            </h2>
            <nav>
                <ul>
                    <li>
                        <Link className='Art' to="/Art">Art</Link>
                    </li>
                    <li >
                        <Link className='Artists' to="/Artists">Artists</Link>
                    </li>
                    <li >
                        <Link className='Museums' to="/Museums">Museums</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
 
    )
}

export default Header;
