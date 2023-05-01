import { useGeolocation } from "../hooks/useGeolocation";

export const LongitudeLatitudeDisplay = () => {

    const currentLocation = useGeolocation();

    if (!currentLocation) {
        return <p>{'Sorry, location is currently unavailable'}</p>
    }

    // currentLocation should have 'latitude' and 'longitude' properties
    const { latitude, longitude } = currentLocation;

    return (
        <section>
            <p>{latitude}° {latitude > 0 ? "N" : "S"}</p>
            <hr/>
            <p>{longitude}° {longitude > 0 ? "E" : "W"}</p>
        </section>
    );
}