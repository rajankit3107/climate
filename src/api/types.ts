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
        temp : Number;
        feels_like : Number;
        temp_min : Number;
        temp_max : Number;
        pressure : Number;
        humidity : Number;
        sea_level : Number;
        grnd_level : Number;
    };
    wind : {
        speed : Number;
        deg : Number
    };
    sys : {
        sunrise : Number;
        sunset : Number;
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
        winf : WeatherData["wind"];
        dt_txt : string;
    }>
    city : {
        name : string;
        country : string;
        sunrise : Number;
        sunset : Number
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