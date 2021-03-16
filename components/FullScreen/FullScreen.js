import { FullscreenControl } from "react-map-gl";

const FullScreen = () => {

  const fullscreenStyle = {
    top: 0,
    right: 0,
  };

  return <FullscreenControl style={fullscreenStyle} />;
};

export default FullScreen;
