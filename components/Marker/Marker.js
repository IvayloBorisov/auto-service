import { Marker } from "react-map-gl";

const LocationMarker = () => {
  const iconSize = 40;

  return (
    <Marker latitude={42.637801} longitude={23.3870729}>
      <div
        style={{
          transform: `translate(${-iconSize / 2}px, ${iconSize / 2}px)`,
        }}
      >
        <img src="/assets/icons/place-marker.png" alt="location pin" />
      </div>
    </Marker>
  );
};

export default LocationMarker;
