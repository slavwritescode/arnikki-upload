import './index.css';

const VideoPreview = ({ videoUrl, handleRemoveVideo, confirmVideoUpload }) => {
    return (videoUrl && <div id="videoPreview">
        <video controls width="500" src={videoUrl} />
        <div id="videoButtonsContainer">
            <button onClick={handleRemoveVideo}>Remove Video</button>
            <button onClick={confirmVideoUpload}>Confirm Video Upload</button>
        </div>
    </div>)
}

export default VideoPreview