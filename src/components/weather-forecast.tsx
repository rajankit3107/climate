import type { ForecastData, WeatherCondition } from "@/api/types";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";

interface WeatherForecastProps {
  data: ForecastData;
}

interface DailyForecast {
  date: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind: number;
  weather: WeatherCondition;
}

export const WeatherForecast = ({ data }: WeatherForecastProps) => {
  const dailyForecast = data.list.reduce((acc, forecast) => {
    const date = format(new Date(forecast.dt * 1000), "yyyy-mm-dd");

    if (!acc[date]) {
      acc[date] = {
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        humidity: forecast.main.humidity,
        wind: forecast.wind.speed,
        weather: forecast.weather[0],
        date: forecast.dt,
      };
    } else {
      acc[date].temp_min = Math.min(acc[date].temp_min, forecast.main.temp_min);
      acc[date].temp_max = Math.max(acc[date].temp_max, forecast.main.temp_max);
    }
    return acc;
  }, {} as Record<string, DailyForecast>);

  const nextDays = Object.values(dailyForecast).slice(0, 6);

  const formatTemp = (temp: number) => `${Math.round(temp)}°`;

  const getWeatherIcon = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            5-Day Weather Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {nextDays.map((day) => (
              <div
                key={day.date}
                className="grid grid-cols-4 items-center gap-4 rounded-lg border p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={getWeatherIcon(day.weather.icon)}
                    alt={day.weather.description}
                    className="w-12 h-12"
                  />
                  <div>
                    <p className="font-medium">
                      {format(new Date(day.date * 1000), "EEE, MMM d")}
                    </p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {day.weather.description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <span className="flex items-center text-blue-500">
                    <ArrowDown className="mr-1 h-4 w-4" />
                    {formatTemp(day.temp_min)}
                  </span>
                  <span className="flex items-center text-red-500">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    {formatTemp(day.temp_max)}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-blue-600">
                  <Droplets className="h-4 w-4" />
                  <span>{day.humidity}%</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Wind className="h-4 w-4" />
                  <span>{Math.round(day.wind)} m/s</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
