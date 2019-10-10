import { applyMiddleware, createStore, compose } from 'redux';
import allReducers, { RootState } from './reducers';
import thunk from 'redux-thunk';
import { getType } from 'typesafe-actions';
import { update } from '../inventory/actions';
import { setD1Manifest, setD2Manifest } from '../manifest/actions';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__(options: any): typeof compose; // eslint-disable-line no-undef
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      serialize: false,
      actionsBlacklist: [getType(update), getType(setD1Manifest), getType(setD2Manifest)],
      stateSanitizer: (state: RootState) =>
        state.inventory ? { ...state, inventory: '<<EXCLUDED>>', manifest: '<<EXCLUDED>>' } : state
    })
  : compose;

const store = createStore<RootState, any, {}, {}>(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
