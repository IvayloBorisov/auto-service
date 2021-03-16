import { NavigationControl } from "react-map-gl";

const NavControl = () => {
  const navControlStyle = {
    right: 10,
    top: 10,
  };

  return <NavigationControl style={navControlStyle} />;
};

export default NavigationControl;
