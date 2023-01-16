// General Imports
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import useAuth from "./hooks/useAuth";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DisplayComment from "./pages/VideoPage/DisplayComments";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddComment from "./components/Videos/AddComment";
import VidMapper from "./components/Videos/VidMapper";
import {API_KEY} from "./API_KEYS/API_KEYS";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  const [videos, setVideos] = useState([
    {
        "kind": "youtube#searchResult",
        "etag": "hcOAnTv0tDBYFdSLAVPxj5shxWU",
        "id": {
            "kind": "youtube#video",
            "videoId": "N9qYF9DZPdw"
        },
        "snippet": {
            "publishedAt": "2009-10-03T04:56:23Z",
            "channelId": "UCshnCkfV7U6DqR4IHbQbI7Q",
            "title": "&quot;Weird Al&quot; Yankovic - White &amp; Nerdy (Official Music Video)",
            "description": "\"Follow Weird Al Yankovic on Spotify: http://smarturl.it/WeirdAlSpotify Check out more great videos from the 00's here: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/N9qYF9DZPdw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/N9qYF9DZPdw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/N9qYF9DZPdw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "alyankovicVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2009-10-03T04:56:23Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "VTWYkou-TIqFVarbk_ilrNIzM40",
        "id": {
            "kind": "youtube#video",
            "videoId": "ZcJjMnHoIBI"
        },
        "snippet": {
            "publishedAt": "2010-07-27T19:43:52Z",
            "channelId": "UCshnCkfV7U6DqR4IHbQbI7Q",
            "title": "&quot;Weird Al&quot; Yankovic - Eat It (Official 4K Video)",
            "description": "Eat It” by \"Weird Al\" Yankovic - NOW IN 4K Follow \"Weird Al\" Yankovic on Spotify: http://smarturl.it/WeirdAlSpotify In the new biopic ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ZcJjMnHoIBI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ZcJjMnHoIBI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ZcJjMnHoIBI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "alyankovicVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2010-07-27T19:43:52Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "nXGeUOAvgugdPsYEHjAR51_7opI",
        "id": {
            "kind": "youtube#video",
            "videoId": "notKtAgfwDA"
        },
        "snippet": {
            "publishedAt": "2010-07-27T19:47:12Z",
            "channelId": "UCshnCkfV7U6DqR4IHbQbI7Q",
            "title": "&quot;Weird Al&quot; Yankovic - Like A Surgeon",
            "description": "Order 'Squeeze Box: The Complete Works of \"Weird Al\" Yankovic,' a career-spanning box set of all fourteen of Al's studio albums: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/notKtAgfwDA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/notKtAgfwDA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/notKtAgfwDA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "alyankovicVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2010-07-27T19:47:12Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "XithpHD0B806Ox_GR1xd87ioxjg",
        "id": {
            "kind": "youtube#video",
            "videoId": "FklUAoZ6KxY"
        },
        "snippet": {
            "publishedAt": "2009-10-03T04:57:26Z",
            "channelId": "UCshnCkfV7U6DqR4IHbQbI7Q",
            "title": "&quot;Weird Al&quot; Yankovic - Smells Like Nirvana",
            "description": "Music video by \"Weird Al\" Yankovic performing Smells Like Nirvana. YouTube view counts pre-VEVO: 7037 (C) 1992 Volcano ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/FklUAoZ6KxY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/FklUAoZ6KxY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/FklUAoZ6KxY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "alyankovicVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2009-10-03T04:57:26Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "TZKiinbW4uPnvsu3C4Ov0PUgvqo",
        "id": {
            "kind": "youtube#video",
            "videoId": "lOfZLb33uCg"
        },
        "snippet": {
            "publishedAt": "2009-10-03T04:57:57Z",
            "channelId": "UCshnCkfV7U6DqR4IHbQbI7Q",
            "title": "&quot;Weird&quot; Al Yankovic - Amish Paradise (Parody of &quot;Gangsta&#39;s Paradise&quot;)",
            "description": "Music video by \"Weird\" Al Yankovic performing Amish Paradise. YouTube view counts pre-VEVO: 14859 (C) 1999 Volcano ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/lOfZLb33uCg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/lOfZLb33uCg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/lOfZLb33uCg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "alyankovicVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2009-10-03T04:57:57Z"
        }
    }
]);
  const [videoId, setVideoId] = useState("lOfZLb33uCg");
  const [query, setQuery] = useState("");
  const [userName, setUserName] = useState([]);
  const [comments, setComments] = useState ([]);
  const [user, token] = useAuth();
  useEffect(() => {}, [comments]);

  const getVids = async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?Type=Video&Part=Snippet&maxResults=5&relatedToVideoID=lOfZLb33uCg&key=${API_KEY}`
      )
      .then((res) => {
        setVideos(res.data.items);
      });
  };

  const getVideoComments = async() =>{
    let response = await axios.get(`http://127.0.0.1:8000/api/comments?video_id=${videoId}`, {headers:{Authorization: `Bearer ${token}`}});
    console.log(response.data);
    setComments(response.data);
  }

  return (
    <div>
      <Navbar query={query} setQuery={setQuery} />
      <div className="dc__flex--container">
        <div className="dc__left">
          <div className="dc__left--video-container">
            <iframe
              id="ytplayer"
              type="text/html"
              width="940"
              height="600"
              align-items= "center"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameborder="0"
            ></iframe>
          </div>
          <button onClick={(e) => getVideoComments()}>Comments!</button>
          <div className="dc__left--comment-container">
          <AddComment getVideoComments={getVideoComments} videoId={videoId}/>
            <DisplayComment comments={comments}/>
          </div>
        </div>
        <div className="dc__right">
        <div>
          <VidMapper vidArray={videos} />
        </div>
        </div>
      </div>
     
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  
    </div>
  );
}

export default App;
