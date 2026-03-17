import { useState, useEffect } from 'react';
import { DonorCard, Filter, SearchBar, LoadingSpinner, ThemeToggle } from './components';
import './App.css';

function App() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [requestedDonors, setRequestedDonors] = useState({});
  const [sortBy, setSortBy] = useState('availability');
  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage or default to 'dark'
    return localStorage.getItem('theme') || 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const bloodGroups = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const mappedDonors = users.map((user, index) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          bloodGroup: bloodGroups[index % bloodGroups.length],
          availability: Math.random() > 0.3,
        }));

        setDonors(mappedDonors);
      } catch (error) {
        console.error('Error fetching donors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const handleRequest = (donorId) => {
    setRequestedDonors((prev) => ({
      ...prev,
      [donorId]: true,
    }));
  };

  const filteredDonors = donors
    .filter((donor) => {
      const matchesBloodGroup =
        selectedBloodGroup === 'All' || donor.bloodGroup === selectedBloodGroup;
      const matchesCity =
        donor.address?.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        false;
      const hasSearchTerm = searchTerm.trim() !== '';

      return matchesBloodGroup && (hasSearchTerm ? matchesCity : true);
    })
    .sort((a, b) => {
      if (sortBy === 'availability') {
        return b.availability - a.availability;
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const availableDonorCount = filteredDonors.filter(
    (donor) => donor.availability
  ).length;

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="app-container">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <header className="app-header">
        <h1> Blood Donor Finder</h1>
        <p>Find and request blood donors quickly and efficiently</p>
      </header>

      <main className="app-main">
        <div className="controls-section">
          <Filter
            selectedBloodGroup={selectedBloodGroup}
            onBloodGroupChange={setSelectedBloodGroup}
            totalDonors={availableDonorCount}
          />

          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <div className="sort-section">
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="availability">Availability</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {filteredDonors.length === 0 ? (
          <div className="no-donors-message">
            <p>No donors found matching your criteria.</p>
            <p className="hint">Try adjusting your filters or search term.</p>
          </div>
        ) : (
          <div className="donors-grid">
            {filteredDonors.map((donor) => (
              <DonorCard
                key={donor.id}
                donor={donor}
                onRequest={handleRequest}
                isRequested={requestedDonors[donor.id] || false}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Total Donors: {donors.length} | Available: {availableDonorCount}</p>
      </footer>
    </div>
  );
}

export default App;
