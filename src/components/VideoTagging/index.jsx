import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { realtimeDb } from "../../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import VideoPreview from "./VideoPreview";
import { updateUserInfo } from "../../redux/Features";

import './index.css';

const VideoTagging = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [allUploadedVideos, setAllUploadedVideos] = useState(null);
  const [error, setError] = useState();

  const fileName = useRef(null);
  const userInfo = useSelector((state) => state.userInfo.value) || {};
  const userId = userInfo['userId'];
  console.log('userInfo is', userInfo);
  console.log('userId is:', userId);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispath = useDispatch();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(event.target.files[0]);
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  const removeFile = () => {
    setVideoFile(null);
    setVideoUrl(null);
    URL.revokeObjectURL(videoUrl);
    if (fileName.current) {
      fileName.current.value = '';
    }
  }

  useEffect(() => {
    const listAllVidoes = async () => {
      console.log()
      let mainQuery = realtimeDb.ref('/videos');
      //it is going to be equal to whatever the id
      console.log('mainQuery before try catch', mainQuery);
      try {
        mainQuery = mainQuery.orderByChild('moderator').equalTo(userId);
        mainQuery.on('value', (data) => {
          const videoData = data.val() || {};
          setAllUploadedVideos(videoData);
        })
      } catch (error) {
        setError(error.message);
      }
      // const videos = await realtimeDb.ref('/')
    }
    if (userId) {
      listAllVidoes();
    }
  }, [userId])
  return (
    <div id="videoTaggingPage">
      {/**have a list for all previous uploaded videos */}
      <div id="videoContainer">
        <h3>All recently uploaded videos</h3>
        {error
          ? <p>An error occured when displaying the videos you have recently uploaded</p>
          : <ul className="allVideosList">
            {allUploadedVideos ? Object.entries(allUploadedVideos).map(singleVideo => {
              const keyIdentifier = singleVideo[0];
              const data = singleVideo[1];
              return <li key={keyIdentifier}>Date: {data.date} Moderator: {data.moderator}</li>
            }) : <p>Loading...</p>}
            {/* {console.log(allUploadedVideos)} */}
          </ul>}
      </div>
    </div>
  )
}

export default VideoTagging;