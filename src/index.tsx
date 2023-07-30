import {render} from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvader from './theme/ThemeProvader';

render (
        <BrowserRouter>
            <ThemeProvader>
                <App/>
            </ThemeProvader>
        </BrowserRouter>,
        
        document.getElementById('root')
)












