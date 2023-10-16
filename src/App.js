import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminRoute from './routes/AdminRoute';
import UserRoute from './routes/UserRoute';
import { Provider } from 'react-redux';
import { configurestore } from './redux/store';


function App() {
  let store = configurestore();
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route exact path='/*' element={<UserRoute />} />
          <Route exact path='/admin/*' element={<AdminRoute />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
