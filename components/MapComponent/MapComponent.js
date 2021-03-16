import ReactMapGL from 'react-map-gl';
import {useState} from 'react';
import {LocationMarker, NavControl, PopupComponent, FullScreen} from '../index';
import styles from './MapComponent.module.css';

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY;

const MapComponent = () => {

    const [viewport, setViewport] = useState({
        latitude: 42.637801,
        longitude: 23.3870729,
        zoom: 15,
    })

    return (
        <div className={styles.container}>
            <ReactMapGL
              {...viewport}
              width="320px"
              height="320px"
              onViewportChange={(newViewport => setViewport(newViewport))}
              mapboxApiAccessToken={ACCESS_TOKEN}
            >
             <NavControl />
             <FullScreen />
             <PopupComponent />
             <LocationMarker />
            </ReactMapGL>
         
        </div>
    )

}

export default MapComponent;