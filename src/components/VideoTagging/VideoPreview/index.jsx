import { useEffect, useState } from 'react';
import { getFileUrl } from '../../../firebase/config';
import { useForm } from "react-hook-form";
import Constants from '../../Constants';
import './index.css';

const VideoPreview = ({ videoUrl }) => {
    const [url, setUrl] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const getSingleFile = async () => {
            const url = await getFileUrl(videoUrl);
            console.log('file url is...', url);
            setUrl(url);
        }

        getSingleFile();
    }, [])

    const review = (data) => {
        //todo
        console.log(data);
    }

    return (<div id="videoPreview">
        {isClicked ? <>
            <button id="backButton" onClick={() => setIsClicked(value => !value)}>Go back</button>
            <video controls width="500" src={url} />

            <form onSubmit={handleSubmit(review)} autoComplete="off">
                <select
                    {...register("scenarios", {
                        required: true,
                        message: "Select a relevant scenario"
                    })}
                >
                    {Object.values(Constants['scenarios']).map((scenarioItem) => <option key={scenarioItem}>{scenarioItem}</option>)}
                </select>
                <select
                    {...register("deviceHeight", {
                        required: true,
                        message: "Select a height"
                    })}
                >
                    {Object.values(Constants['deviceHeight']).map((deviceHeightItem) => <option key={deviceHeightItem}>{deviceHeightItem}</option>)}
                </select>
                <select
                    {...register("lighting", {
                        required: true,
                        message: "Select a type of lighting"
                    })}
                >
                    {Object.values(Constants['lighting']).map((lightingItem) => <option key={lightingItem}>{lightingItem}</option>)}
                </select>
                <select
                    {...register("angle", {
                        required: true,
                        message: "Select an approach angle"
                    })}
                >
                    {Object.values(Constants['approachAngle']).map((approachAngleItem) => <option key={approachAngleItem}>{approachAngleItem}</option>)}
                </select>
                <div className="labelContainer">
                    <label htmlFor='clothingSelect'>Clothing type</label>
                    <select
                        id="clothingSelect"
                        {...register("clothing", {
                            required: true,
                            message: "Select a clothing type"
                        })}
                    >
                        {Object.values(Constants['clothing']).map((clothingItem) => <option key={clothingItem}>{clothingItem}</option>)}
                    </select>
                </div>
                <button type="submit" id="reviewButton">Confirm selections</button>
            </form></> : <button id="reviewButton" onClick={() => setIsClicked(value => !value)}>Review this video item</button>}
    </div>)
}

export default VideoPreview