import { CurrentWeather } from "@/components/current-weather";
import { HourlyTemperature } from "@/components/hourly-temp";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button"
import { WeatherDetails } from "@/components/weather-details";
import { WeatherForecast } from "@/components/weather-forecast";
import { useGeolocation } from "@/hooks/use-geolocation"
import { useForecastQuery, useReverseGeocodeQuery, useWeatherQuery } from "@/hooks/use-weather";
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react"

export const WeatherDashboard = () => {
    const {
        coordinates,
        error : locationError, 
        getLocation, 
        isLoading : locationLoading

    } = useGeolocation();

    const weatherQuery = useWeatherQuery(coordinates)
    const forecastQuery = useForecastQuery(coordinates)
    const locationQuery = useReverseGeocodeQuery(coordinates)

    console.log(weatherQuery)
    console.log(forecastQuery)
    console.log(locationQuery)
        

    //console.log(coordinates);
    const handleRefresh = () => {
        getLocation()
        if(coordinates) {
            //reload weather data
            weatherQuery.refetch()
            forecastQuery.refetch()
            locationQuery.refetch()
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

    const locationName = locationQuery.data?.[0]

    if(weatherQuery.error || locationQuery.error) {
      return( <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data.Please try again!</p>
          <Button onClick={handleRefresh} variant={"outline"} className="w-fit cursor-pointer">
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </AlertDescription>
      </Alert>
      )
    }

    if(!weatherQuery.data || !forecastQuery.data) {
      return <WeatherSkeleton />
    }


  return (
    // Favourite cities
    <div className="space-y-4">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">My Location</h1>
            <Button className="cursor-pointer"
            variant={"outline"}
            size={"icon"}
            onClick={handleRefresh}
            disabled = {weatherQuery.isFetching || forecastQuery.isFetching}
            >
                <RefreshCw className= {`h-4 w-4 ${weatherQuery.isFetching ? "animate-spin" : "" }` } />
            </Button>
        </div>
        {/* current and hourly weather */}
        <div className="grid gap-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Displaying the current weather */}
            <CurrentWeather data = {weatherQuery.data} locationName = {locationName} /> 
            {/* Hourly Temperature */}
            <HourlyTemperature data = {forecastQuery.data}/>
          </div>
          <div>
            {/* details about weather */}
            <WeatherDetails data = {weatherQuery.data} />
            
          </div>
          {/* forecast */}
          <div>
            <WeatherForecast data = {forecastQuery.data} />
          </div>

        </div>
    </div>
  )
}
