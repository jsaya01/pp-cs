// Imports: Dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';

const middleware = [thunk];
// Redux: Store
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);

// Exports
export {
    store
}
