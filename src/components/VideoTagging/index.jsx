import { useEffect, useState } from "react";
import { realtimeDb } from "../../firebase/config";
import { useSelector } from "react-redux";
import VideoPreview from "./VideoPreview";
import { formatDateTime } from "../../shared";

import './index.css';

const VideoTagging = () => {
  const [allUploadedVideos, setAllUploadedVideos] = useState(null);
  const [error, setError] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const userInfo = useSelector((state) => state.userInfo.value) || {};
  const userId = userInfo['userId'];

  useEffect(() => {
    const listAllVidoes = async () => {
      let videosRef = realtimeDb.ref(`/videos/${userId}`);
      //it is going to be equal to whatever the id

      try {
        // mainQuery = mainQuery.orderByChild('moderator').equalTo(userId);
        // mainQuery.on('value', (data) => {
        //   const videoData = data.val() || null;
        //   setAllUploadedVideos(videoData);
        // })
        videosRef.on('value', data => {
          const videoData = data.val() || null;
          setAllUploadedVideos(videoData);
        });
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
              console.log(data['video_id'], 'is the id')
              return <li key={keyIdentifier}>
                <span>Date:</span> {formatDateTime(data.date)} <span>Moderator:</span> {userId}
                <VideoPreview videoUrl={"/videos/" + data['video_id'] + '.mov'} />
              </li>
            }) : <p>{"It appears you haven't uploaded recently. "}</p>}
            {/* {console.log(allUploadedVideos)} */}
          </ul>}
      </div>
    </div>
  )
}

export default VideoTagging;