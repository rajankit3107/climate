# CLIMATE

A modern, elegant weather application built with React and TypeScript that provides real-time weather information with a clean and intuitive user interface.

## Features

- 🌍 Real-time weather data for any location
- 🌡️ Current temperature display with feels-like temperature
- 📍 Location-based weather information
- 📱 Responsive design for all devices
- 🎨 Modern and clean UI with elegant typography
- 🔍 Detailed weather metrics including:
  - Minimum and maximum temperatures
  - Humidity levels
  - Wind speed

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Lucide Icons
- Shadcn UI Components

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rajankit3107/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your API keys:
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── api/          # API integration and types
├── components/   # React components
│   ├── ui/       # UI components
│   └── current-weather.tsx  # Main weather display
├── types/        # TypeScript type definitions
└── ...
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Lucide](https://lucide.dev/)
- UI components by [shadcn/ui](https://ui.shadcn.com/)
