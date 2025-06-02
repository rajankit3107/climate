import type { GeoCodingResponse, WeatherData } from "@/api/types";
import { Card, CardContent } from "./ui/card";
import { ArrowDown } from "lucide-react";

interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeoCodingResponse;
}

export const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
  const {
    weather: [currentWeather],
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
  } = data;
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-end gap-1">
                <h2 className="text-2xl font-bold tracking-tighter">
                  {locationName?.name}
                </h2>
                {locationName?.state && (
                  <span className="text-muted-foreground">
                    , {locationName.state}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {locationName?.country}
              </p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-7xl font-bold tracking-tighter">
                    {Math.round(Number(temp))}°C
                </p>
                <div className="space-y-1 ml-2">
                    <p className="text-sm font-medium text-muted-foreground">
                        Feels like {Math.round(Number(feels_like))}°C
                    </p>
                    <div className="flex gap-2 text-sm font-medium">
                      <span className="flex items-center gap-1 text-blue-500">
                        <ArrowDown className="h-3 w-3" />
                        {Math.round(Number(temp_min))}°C
                      </span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
