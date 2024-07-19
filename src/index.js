import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Web3Provider } from '@nexus-grid/web3-react';

ReactDOM.render(
    <Web3Provider>
        <App />
    </Web3Provider>,
    document.getElementById('root')
);
