import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../components/auth/LoginPage";
import RequireAuth from "../components/auth/RequireAuth";
import { AuthProvider } from "../components/auth/_back/00_context";
import Layout from "../components/Layout/Layout";
import NewTweetPage from "../components/Twitter/NewTweetPage";
import TweetDetailPage from "../components/Twitter/TweetDetailPage";
import TweetsPage from "../components/Twitter/TweetsPage";

function App({ isInitallyLogged }) {
  //esta propiedad me la siervviene de index.js
  const [isLogged, setIsLogged] = useState(isInitallyLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  return (
    <div className="App">
      <AuthProvider value={{ isLogged, handleLogin, handleLogout }}>
        <Routes>
          <Route path="/" element={<Navigate to="/tweets" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tweets" element={<Layout />}>
            <Route path="" element={<TweetsPage />} index />
            <Route path=":id" element={<TweetDetailPage />} />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <NewTweetPage />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="/404" element={<div> 404 | not found </div>} />
          <Route path="/*" element={<Navigate to="/404" />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
