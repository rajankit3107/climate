# Climate - Modern Weather Application

A sophisticated weather application built with React and TypeScript that provides real-time weather information with a beautiful and intuitive user interface. The application offers detailed weather forecasts, city search functionality, and the ability to save favorite locations.

## Features

- 🌍 Real-time weather data for any location worldwide
- 🔍 Advanced city search with autocomplete
- ⭐ Save and manage favorite locations
- 🌡️ Comprehensive weather information:
  - Current conditions with feels-like temperature
  - Hourly temperature forecasts
  - Detailed weather metrics (humidity, wind, pressure)
  - 5-day weather forecast
- 📱 Fully responsive design for all devices
- 🎨 Modern UI with smooth animations and transitions
- 🌙 Dark/Light mode support

## Tech Stack

- **Frontend Framework:** React 19 with TypeScript
- **State Management:** React Query for data fetching and caching
- **Routing:** React Router v7
- **Styling:** Tailwind CSS with custom animations
- **UI Components:** 
  - Shadcn UI for base components
  - Radix UI for accessible primitives
  - Lucide React for icons
- **Data Visualization:** Recharts for weather charts
- **Build Tool:** Vite 6
- **Development Tools:**
  - ESLint for code linting
  - TypeScript for type safety
  - Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/climate.git
cd climate
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
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
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── city-search.tsx  # City search functionality
│   ├── current-weather.tsx
│   ├── hourly-temp.tsx
│   ├── weather-details.tsx
│   └── weather-forecast.tsx
├── hooks/               # Custom React hooks
│   └── use-weather.ts   # Weather data fetching
├── pages/              # Page components
│   ├── city-page.tsx   # City weather details
│   └── home-page.tsx   # Home page
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Lucide](https://lucide.dev/)
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Charts by [Recharts](https://recharts.org/)
