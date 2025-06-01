import type { Coordinates } from "@/api/types";
import { useEffect, useState } from "react";

interface GeolocationState {
    coordinates : Coordinates | null;
    error : string | null;
    isLoading : boolean;
}

export function useGeolocation() {
    const [locationData, setLocationData] = useState<GeolocationState>({
        coordinates : null,
        error : null,
        isLoading : true,
    })

    const getLocation = () => {
        setLocationData((prev) => ({...prev, isLoading: true, error : null}));

        //in case we dont have the location data or user didnt gave the permisssion to access location data
        if(!navigator.geolocation) {
            setLocationData({
                coordinates : null,
                error : "GeoLocation is not supported by your browser",
                isLoading: false,
            })
            return;
        }
        //getting the location of the user
        navigator.geolocation.getCurrentPosition((position) => {
            setLocationData({
                coordinates : {
                    lat : position.coords.latitude,
                    lon : position.coords.longitude
                },
                error : null,
                isLoading : false
            })
        },(error) => {
            let errorMessage : string

            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = "Location permission denied. Please enable location access";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailabe";
                    break;
                case error.TIMEOUT:
                    errorMessage = "Location request timed out";
                    break;
                default:
                    errorMessage = "An unknown error occurred";
            }
            setLocationData({
                coordinates : null,
                error : errorMessage,
                isLoading : false
            })
        },{
            enableHighAccuracy:true,
            timeout : 5000,
            maximumAge : 0
        })
    }

    useEffect(() => {
        getLocation()
    },[])

    return {
        ...locationData,
        getLocation
    };
}