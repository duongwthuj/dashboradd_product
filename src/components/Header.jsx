import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header style={{
      padding: '1rem 2rem',
      background: 'rgba(30, 41, 59, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem'
    }}>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
        <span style={{ fontSize: '1.8rem' }}>🎓</span>
        Student Showcase
      </Link>

      <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: '500px', position: 'relative' }}>
        <input 
          type="text" 
          placeholder="Search videos, students..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem 0.75rem 2.5rem',
            borderRadius: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            outline: 'none',
            fontSize: '0.95rem',
            transition: 'all 0.2s'
          }}
          onFocus={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.4)';
            e.target.style.borderColor = 'var(--primary)';
          }}
          onBlur={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.2)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        />
        <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
      </form>

      <nav>
        <Link to="/" style={{ color: 'var(--text)', fontWeight: 500, transition: 'color 0.2s' }}>Home</Link>
      </nav>
    </header>
  );
};

export default Header;
