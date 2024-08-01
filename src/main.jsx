import ReactDOM from "react-dom/client";
import React from "react";
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Feed from "./components/Feed/Feed";
import VideoDetails from "./components/VideoDetails/VideoDetails"
import SearchFeed from "./components/SearchFeed/SearchFeed"
import ChannelDetails from "./components/ChannelDetails/ChannelDetails";

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Feed />} />
      <Route path="/video/:id" exact element={<VideoDetails />} />
      <Route path="/channel/:id" exact element={<ChannelDetails />} />
      <Route path="/search/:searchTerm" exact element={<SearchFeed />} /> 
    </Route>
  ) 
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
