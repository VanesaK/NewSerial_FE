import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";
import Mypage from "./pages/Mypage/index";
import TempPassword from "./pages/TempPassword";
import SocialLoginCallback from "./pages/SocialLoginCallback";
import NewsDetail from "./pages/NewsDetail";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import SearchResult from "./pages/SearchResult";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/search" element={<Search />} />
              <Route path="/search-result" element={<SearchResult />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/newsdetail" element={<NewsDetail />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/temp-password" element={<TempPassword />} />
              <Route
                path="/social-login-callback"
                element={<SocialLoginCallback />}
              />
            </Route>
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
