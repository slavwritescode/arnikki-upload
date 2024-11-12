import { useForm } from "react-hook-form";
import { useEffect } from "react";

const VideoTagging = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();  

  useEffect(()=>{

  })
  return (
    <div>
        <p>All recently uploaded videos</p>
        {/**have a form for uploading a video */}
        <form>
        <label htmlFor="video_file">Choose a file to upload</label>
        <input 
          type="file" 
          id="video_file" 
          name="video_file" 
          accept="image/png, image/jpeg" />
        </form>

        {/**have a list for all previous uploaded videos */}


    </div>
  )
}

export default VideoTagging;