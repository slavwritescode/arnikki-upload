import { useEffect, useState } from "react";
import { realtimeDb } from "../../firebase/config";
import { useSelector } from "react-redux";
import VideoPreview from "./VideoPreview";


import './index.css';

const VideoTagging = () => {
  const [allUploadedVideos, setAllUploadedVideos] = useState(null);
  const [error, setError] = useState();

  const userInfo = useSelector((state) => state.userInfo.value) || {};
  const userId = userInfo['userId'];

  useEffect(() => {
    const listAllVidoes = async () => {
      console.log()
      let mainQuery = realtimeDb.ref('/videos');
      //it is going to be equal to whatever the id
      console.log('mainQuery before try catch', mainQuery);
      try {
        mainQuery = mainQuery.orderByChild('moderator').equalTo(userId);
        mainQuery.on('value', (data) => {
          const videoData = data.val() || null;
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
      <h3>All recently uploaded videos</h3>
      <div id="videoContainer">
        {error
          ? <p>An error occured when displaying the videos you have recently uploaded</p>
          : <ul className="allVideosList">
            {allUploadedVideos ? Object.entries(allUploadedVideos).map(singleVideo => {
              const keyIdentifier = singleVideo[0];
              const data = singleVideo[1];
              return <li key={keyIdentifier}>
                <span>Date:</span> {data.date} <span>Moderator:</span> {data.moderator}
                <VideoPreview videoUrl={"/videos/" + keyIdentifier + '.mov'} />
              </li>
            }) : <p>{"It appears you haven't uploaded recently. "}</p>}
            {/* {console.log(allUploadedVideos)} */}
          </ul>}
      </div>
    </div>
  )
}

export default VideoTagging;