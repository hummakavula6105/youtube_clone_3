// General Imports
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as dotenv from 'dotenv'
import axios from "axios";
import "./App.css";
import ButtonHandler from "./components/Videos/ButtonHandler";

// Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DisplayVideo from "./pages/VideoPage/DisplayVideos";
import DisplayComment from "./pages/VideoPage/DisplayComments";

// // Component Imports
// import Navbar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [video, setVideo] = useState([]);
  const [query, setQuery] = useState("");
  const [videoId, setVideoId] = useState("lOfZLb33uCg");
  const [userName, setUserName] = useState([]);
  const [comment, setComment] = useState ([]);
  useEffect(() => {}, []);

  async function getAllVideos() {
    let videos = [...video, video];
    let response = await axios.get("http://127.0.0.1:8000/api/comments/");
    console.log(response.data);
    setVideo(response.data);
  }


  async function getRelatedVideos(videoId) {
    dotenv.config()

    const APIurl = `https://youtube.googleapis.com/youtube/v3/search`
    const headers = {
      Authorization: `Bearer ${process.env.TOKEN}`,
      Accept: 'application/json'
    }

    const params = {
      part: 'snippet',
      type: 'video',
      relatedToVideoId: videoId
    }
    let response = await axios.get(APIurl, {params} ,{headers});

    return response.data;
  }

    let relatedVideos = getRelatedVideos(videoId);

  return (
    <div>
      {/* <Navbar query={query} setQuery={setQuery} /> */}
      <div className="dc__flex--container">
        <div className="dc__left">
          <div className="dc__left--video-container">
            <iframe
              id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameborder="0"
            ></iframe>
          </div>
          <div className="dc__left--comment-container">
            {/* form */}
            {/* comments (mapped) */}
            {/* <DisplayComment/> */}
          </div>
        </div>
        <div className="dc__right">
          {/* related vids mapped (WORK ON THIS LAST) */}
          <DisplayVideo videos={ relatedVideos } />
        </div>
      </div>
     
      {/* <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video" element={<DisplayVideo parentEntries={video} />}/>
      </Routes>
      <button onClick={() => getAllVideos(video)}>Videos</button>
      <Footer /> */}
    </div>
  );
}

export default App;
