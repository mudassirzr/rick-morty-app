import ReactDOM from "react-dom/client";
// import './index.css';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { EpisodesPage, CharactersPage, LocationsPage, CharacterDetailsPage, LocationDetailsPage, EpisodeDetailsPage } from "routes";
import { store } from "state";
import { Provider } from "react-redux";
import { AppHead, Navigation } from "components";
import { Container } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import { theme } from "styling/theme";
import ResidentRedirect from "routes/residentsDetails";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>

  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <AppHead />
        <Container maxWidth="lg">
        <Navigation />
          <Routes>
            <Route path="/" element={<CharactersPage />} />
            <Route path="/residents/:id" element={<ResidentRedirect />} />
            <Route path="/characters/:id" element={<CharacterDetailsPage />} />
            <Route path="/locations/:id" element={<LocationDetailsPage />} />
            <Route path="/episode/:id" element={<EpisodeDetailsPage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/locations" element={<LocationsPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
