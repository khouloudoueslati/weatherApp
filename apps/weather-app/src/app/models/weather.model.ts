export class Weather { 
    id: string;
    cityName: string; 
    tempC: string; 
    status: string;
    icon: string;

    constructor(data) {
        Object.assign(this, data);
    }
}

export enum Status {
    Clear = 'clear',
    Sunny = 'sunny',
    Cloudy = 'cloudy',
}

export enum StatusSVG {
    Clear = 'assets/images/clear.png',
    Sunny = 'assets/images/sunny.png',
    Cloudy = 'assets/images/cloudy.png',
}
