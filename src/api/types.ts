export interface Coordinates {
    lat: Number;
    lon: Number;
}

export interface WeatherCondition {
    id:Number;
    main:string;
    description : string;
    icon : string
}

export interface WeatherData {
    coord : Coordinates;
    weather : WeatherCondition[];
    main : {
        temp : number;
        feels_like : number;
        temp_min : number;
        temp_max : number;
        pressure : number;
        humidity : number;
        sea_level : number;
        grnd_level : number;
    };
    wind : {
        speed : number;
        deg : number
    };
    sys : {
        sunrise : number;
        sunset : number;
        country  :string;   
    };
    name : string;
    dt : string;
}

export interface ForecastData {
    list : Array<{
        dt : number;
        main  :WeatherData["main"];
        weather : WeatherData["weather"];
        wind : WeatherData["wind"];
        dt_txt : string;
    }>
    city : {
        name : string;
        country : string;
        sunrise : number;
        sunset : number
    }
}

export interface GeoCodingResponse {
    name : string;
    local_names : Record<string, string>;
    lat : Number;
    lon:Number;
    country :string;
    state? : string;

}