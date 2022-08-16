import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {EpisodesPage, CharactersPage, LocationsPage} from 'routes';
import { store } from 'state';
import { Provider } from 'react-redux';
import {Navigation} from 'components';
import { Container } from '@mui/system';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Container maxWidth="md">
          <Navigation />
          <Routes>
              <Route path="/" element={<CharactersPage />}/>
              <Route path="/episodes" element={<EpisodesPage />}/>
              <Route path="/locations" element={<LocationsPage />}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
