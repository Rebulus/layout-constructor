import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import layoutConstructor from './reducers';
import { addContainer }  from './actions';
import App from './containers/app'

let store = createStore(layoutConstructor, {
    items: {
        '0': addContainer().payload
    }
});

/**
 * Render application and connect App component to store
 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
