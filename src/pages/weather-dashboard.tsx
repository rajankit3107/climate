import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button"
import { useGeolocation } from "@/hooks/use-geolocation"
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react"

export const WeatherDashboard = () => {
    const {
        coordinates,
        error : locationError, 
        getLocation, 
        isLoading : locationLoading

    } = useGeolocation();
        

    //console.log(coordinates);
    const handleRefresh = () => {
        getLocation()
        if(coordinates) {
            //reload weather data
        }
    }
    if(locationLoading) {
        return <WeatherSkeleton />
    }

    if(locationError) {
        return( <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location is Disabled</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit cursor-pointer">
            <MapPin className="mr-2 h-4 w-4" />
            EnableLocation
          </Button>
        </AlertDescription>
      </Alert>
    )}

    if(!coordinates) {
        return( <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Please Enable Location Access to see Ypur Local Weather</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit cursor-pointer">
            <MapPin className="mr-2 h-4 w-4" />
            EnableLocation
          </Button>
        </AlertDescription>
      </Alert>
    )}


  return (
    // Favourite cities
    <div className="space-y-4">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">My Location</h1>
            <Button className="cursor-pointer"
            variant={"outline"}
            size={"icon"}
            // onClick={handleRefresh}
            // disabled = {}
            >
                <RefreshCw className="h-4 w-4" />
            </Button>
        </div>
        {/* current and hourly weather */}
    </div>
  )
}
