import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import './index.css';

const VideoTagging = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();  
  
  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);  // Set the selected file in state
  };

  const removeFile = () => {
    setVideoFile(null);
  }

  useEffect(()=>{

  })
  return (
    <div id="videoTaggingPage">
      {/**have a list for all previous uploaded videos */}
      <div id="allVideosByUserContainer">
        <p>All recently uploaded videos</p>

      </div>
      <div id="uploadVideoContainer">
        {/**have a form for uploading a video */}
        {videoFile && (
          <div>
            <p>Selected file: {videoFile.name}</p>
            <button type="button" onClick={removeFile}>Remove File</button>
          </div>
        )}
        <form onChange={handleFileChange}>
        <label htmlFor="video_file">Choose a file to upload</label>
        <input 
          type="file" 
          id="video_file" 
          name="video_file" 
          accept="video/mov" />
        </form>
        
      </div>
        


    </div>
  )
}

export default VideoTagging;