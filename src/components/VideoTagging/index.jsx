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
  const fileName = useRef(null);
  const userInfo = useSelector((state) => state.value) || {};
  const userId = userInfo['userId'];
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
      let mainQuery = realtimeDb.ref('/videos');
      //it is going to be equal to whatever the id

      mainQuery = mainQuery.orderByChild('moderator').equalTo(userId);
      mainQuery.on('value', (data) => {
        const videoData = data.val() || {};
        setAllUploadedVideos(videoData);
      })
      // const videos = await realtimeDb.ref('/')
    }
    listAllVidoes();
  })
  return (
    <div id="videoTaggingPage">
      {/**have a list for all previous uploaded videos */}
      <div id="allVideosByUserContainer">
        <p>All recently uploaded videos</p>
        <ul className="allVideosList">

        </ul>
      </div>
      <div id="uploadVideoContainer">
        {/**have a form for uploading a video */}
        <VideoPreview videoUrl={videoUrl} handleRemoveVideo={removeFile} />
        {videoFile && (
          <div id="uploadVideoInfoBlock">
            <p>Selected file: {videoFile.name}</p>
            {/* <button type="button" onClick={removeFile}>Remove File</button> */}
          </div>
        )}
        <form onChange={handleFileChange}>
          {videoFile ? <div></div> : <><label htmlFor="video_file">Choose a file to upload</label>
            <input
              type="file"
              id="video_file"
              name="video_file"
              accept="video/mov"
              ref={fileName}
            /></>}
        </form>

      </div>



    </div>
  )
}

export default VideoTagging;