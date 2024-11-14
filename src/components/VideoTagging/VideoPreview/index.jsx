import { useEffect, useState } from 'react';
import { getFileUrl } from '../../../firebase/config';
import { useForm } from "react-hook-form";
import Constants from '../../Constants';
import './index.css';

const VideoPreview = ({ videoUrl }) => {
    const [url, setUrl] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const getSingleFile = async () => {
            const url = await getFileUrl(videoUrl);
            console.log('file url is', url);
            setUrl(url);
        }

        getSingleFile();
    }, [])

    const review = (data) => {
        //todo
        console.log(data);
    }

    return (videoUrl && <div id="videoPreview">
        <video controls width="500" src={url} />
        {/* <div id="videoButtonsContainer">
            <button onClick={handleRemoveVideo}>Remove Video</button>
            <button onClick={confirmVideoUpload}>Confirm Video Upload</button>
        </div> */}
        <form onSubmit={handleSubmit(review)}>
            <select>
                {console.log(Object.values(Constants['scenarios']))}
                {Object.values(Constants['scenarios']).map((scenarioItem) => <option key={scenarioItem}>{scenarioItem}</option>)}

            </select>
        </form>
    </div>)
}

export default VideoPreview