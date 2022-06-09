import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile/UserProfile';
import { Provider } from 'react-redux';
import store, { persistor } from './store/store';
import {PersistGate}  from 'redux-persist/integration/react';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <UserProfile />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
