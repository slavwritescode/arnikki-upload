import { useEffect, useState } from 'react';
import { getStorage } from 'firebase/storage';
import { getFileUrl } from '../../../firebase/config';

import './index.css';

const VideoPreview = ({ videoUrl }) => {
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const getSingleFile = async () => {
            const url = await getFileUrl(videoUrl);
            console.log('file url is', url);
            setUrl(url);
        }

        getSingleFile();
    }, [])

    return (videoUrl && <div id="videoPreview">
        <video controls width="500" src={url} />
        {/* <div id="videoButtonsContainer">
            <button onClick={handleRemoveVideo}>Remove Video</button>
            <button onClick={confirmVideoUpload}>Confirm Video Upload</button>
        </div> */}
    </div>)
}

export default VideoPreview