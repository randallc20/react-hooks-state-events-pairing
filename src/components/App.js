import video from "../data/video.js";
import Video from "./Video";
import Search from "./Search.js";
import Sort from "./Sort.js";

//need to read in FILTER and SEARCH and add them here I think

function App() {
  //console.log("Here's your data:", video);

  return (
    <div>
      <Video video={video}/>
      <Search />
      <Sort />
    </div>
    
  );
}

export default App;
