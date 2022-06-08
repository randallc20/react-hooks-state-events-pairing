import video from "../data/video.js";
import Video from "./Video";

function App() {
  //console.log("Here's your data:", video);

  return (
    <div>
      <Video video={video}/>
    </div>
    
  );
}

export default App;
