import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RequireAuthConsumer from "./components/auth/RequireAuth";
import Layout from "./components/Layout/Layout";
import NewTweetPage from "./components/Twitter/NewTweetPage";
import TweetDetailPage from "./components/Twitter/TweetDetailPage";
import TweetsPage from "./components/Twitter/TweetsPage";
const LoginPage = lazy(() => import("./components/auth/LoginPage"));

function App() {
  return (
    <Suspense fallback="loading page...">
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/tweets" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tweets" element={<Layout />}>
            <Route path="" element={<TweetsPage />} index />
            <Route path=":id" element={<TweetDetailPage />} />
            <Route
              path="new"
              element={
                <RequireAuthConsumer>
                  <NewTweetPage />
                </RequireAuthConsumer>
              }
            />
          </Route>
          <Route path="/404" element={<div> 404 | not found </div>} />
          <Route path="/*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
