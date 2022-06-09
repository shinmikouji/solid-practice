/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import Header from './Header';

render(() => <Header />, document.getElementById('root'));
