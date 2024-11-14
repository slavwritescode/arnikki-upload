import { useEffect, useState } from 'react';
import { getStorage } from 'firebase/storage';

import './index.css';

const VideoPreview = ({ videoUrl, handleRemoveVideo, confirmVideoUpload }) => {
    useEffect(() => {

    }, [])

    return (videoUrl && <div id="videoPreview">
        <video controls width="500" src={videoUrl} />
        <div id="videoButtonsContainer">
            <button onClick={handleRemoveVideo}>Remove Video</button>
            <button onClick={confirmVideoUpload}>Confirm Video Upload</button>
        </div>
    </div>)
}

export default VideoPreview