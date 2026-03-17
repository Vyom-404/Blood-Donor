# Blood Donor Finder App

A modern React application built with Vite that helps users find and request blood donors quickly and efficiently. This app demonstrates filtering, sorting, searching, state management, and theme customization in React.

## Features

- **View Donor Data**: Fetch donor information from an API (JSONPlaceholder)
- **Filter by Blood Group**: Filter donors by their blood type (A+, B+, O+, AB+, A-, B-, O-, AB-)
- **Search by City**: Search for donors based on their city of residence
- **Sort Options**: Sort donors by availability or name
- **Request Donor**: Send requests to available donors with button state tracking
- **Theme Toggle**: Switch between dark and light themes with persistent preferences
- **Premium Design**: Modern UI with black, red, and gold color scheme
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Loading State**: Loading spinner while fetching data
- **No Results Handling**: User-friendly message when no donors match the criteria
- **Availability Status**: Visual indicators for donor availability
- **Contact Information**: Display donor email, phone, and location details

## Tech Stack

- **React** - UI library with hooks
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with CSS variables, flexbox, and grid layouts
- **localStorage** - Theme preference persistence

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd blood-donor-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## Project Structure

```
src/
├── components/
│   ├── DonorCard.jsx      - Individual donor card component
│   ├── Filter.jsx         - Blood group filter component
│   ├── SearchBar.jsx      - City search component
│   ├── LoadingSpinner.jsx - Loading state component
│   ├── ThemeToggle.jsx    - Theme switcher component
│   └── index.js           - Component exports
├── App.jsx                - Main application component
├── App.css                - Application styling with theme variables
├── index.css              - Global styles with CSS custom properties
└── main.jsx               - Application entry point
```

## How It Works

### Data Fetching
- The app fetches user data from `https://jsonplaceholder.typicode.com/users`
- Maps user data to donor objects with additional fields (blood group, availability, email)
- Blood groups are assigned cyclically based on user ID
- Availability status is randomly generated (70% chance of being available)

### State Management
The App component manages:
- `donors` - Array of all donors
- `loading` - Loading state during data fetch
- `selectedBloodGroup` - Currently selected blood group filter
- `searchTerm` - Current search input
- `requestedDonors` - Object tracking which donors have been requested
- `sortBy` - Current sort option
- `theme` - Current theme (dark/light) with localStorage persistence

### Theme System
- **CSS Variables**: Uses CSS custom properties for dynamic theming
- **Data Attributes**: Applies `data-theme` attribute to root element
- **Persistent Storage**: Theme preference saved in localStorage
- **Two Themes**: Dark (default) and Light themes with smooth transitions

### Filtering & Sorting
- **Filter**: Donors are filtered by blood group and city (if search term exists)
- **Sort**: Can sort by availability (available first) or name (A-Z)
- **Derived State**: Available donor count is calculated from filtered results

## Components

### DonorCard
Displays individual donor information with:
- Name and blood group
- City, email, and phone number
- Availability status
- Request button with visual feedback

### Filter
Dropdown to select blood group for filtering

### SearchBar
Text input to search donors by city name

### LoadingSpinner
Animated spinner shown while fetching data

### ThemeToggle
Floating button to switch between dark and light themes with persistence

## Learning Outcomes

This project demonstrates:
- **useEffect Hook**: Fetching data on component mount
- **useState Hook**: Managing component state
- **Conditional Rendering**: Displaying different UI based on state
- **Array Methods**: Filtering, sorting, and mapping data
- **Component Composition**: Building UI from reusable components
- **Event Handling**: Button clicks and input changes
- **CSS Grid & Flexbox**: Responsive layout design
- **Derived State**: Computing values based on other state
- **CSS Custom Properties**: Dynamic theming with CSS variables
- **localStorage**: Persisting user preferences
- **Data Attributes**: Theme switching with DOM attributes
- **Component State**: Managing theme state across the application

## Bonus Features

- ✅ Search donors by city
- ✅ Sort by availability and name
- ✅ Responsive mobile design
- ✅ Loading spinner
- ✅ No results message
- ✅ Request tracking with visual feedback
- ✅ **Theme Toggle (Dark/Light)** - Switch themes with persistence
- ✅ **Premium Design** - Modern black, red, and gold color scheme
- ✅ **Enhanced Donor Info** - Display email addresses
- ✅ **Persistent Preferences** - Theme choice saved in localStorage

## Build & Deployment

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- ✅ **Theme Toggle** - Switch between dark/light themes
- ✅ **Enhanced UI** - Premium design with custom color schemes
- ✅ **Contact Details** - Display donor email information
- 🔄 Add user authentication
- 🔄 Persist request history to local storage
- 🔄 Implement real backend API
- 🔄 Add more detailed donor profiles with medical history
- 🔄 Send real notifications and email alerts
- 🔄 Add map integration to show donor locations
- 🔄 Implement rating/review system for donors
- 🔄 Add emergency request priority system
- 🔄 Blood type compatibility checker
- 🔄 Donor verification status badges
- 🔄 Real-time updates with WebSocket simulation

## License

MIT

