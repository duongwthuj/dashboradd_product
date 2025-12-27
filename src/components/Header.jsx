import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import tekyLogo from '../assets/teky-logo.png';

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
      padding: '0',
      background: 'var(--sidebar-bg)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'stretch',
      minHeight: '70px',
      boxShadow: 'var(--shadow-md)'
    }}>
      {/* Logo Section */}
      <Link to="/" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.875rem',
        padding: '0 1.75rem',
        background: 'white',
        flexShrink: 0,
        borderRight: '1px solid var(--border)',
        transition: 'all var(--transition)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--background)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'white';
      }}
      >
        {/* TEKY Logo */}
        <img 
          src={tekyLogo}
          alt="TEKY Logo"
          style={{
            height: '40px',
            width: 'auto',
            objectFit: 'contain'
          }}
        />
      </Link>

      {/* Main Header Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        background: 'var(--background-white)',
        gap: '2rem'
      }}>
        {/* Search Form */}
        <form onSubmit={handleSearch} style={{ 
          flex: 1, 
          maxWidth: '480px', 
          position: 'relative' 
        }}>
          <svg 
            style={{ 
              position: 'absolute', 
              left: '1rem', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)'
            }} 
            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input 
            type="text" 
            placeholder="Tìm kiếm video, học sinh, khóa học..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.875rem 1.25rem 0.875rem 2.75rem',
              borderRadius: 'var(--radius-full)',
              border: '2px solid var(--border)',
              background: 'var(--background)',
              color: 'var(--text)',
              outline: 'none',
              fontSize: '0.9rem',
              transition: 'all var(--transition)'
            }}
            onFocus={(e) => {
              e.target.style.background = 'var(--background-white)';
              e.target.style.borderColor = 'var(--primary)';
              e.target.style.boxShadow = '0 0 0 4px var(--primary-soft)';
            }}
            onBlur={(e) => {
              e.target.style.background = 'var(--background)';
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </form>

        {/* Navigation */}
        <nav style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem' 
        }}>
          <Link to="/" style={{ 
            color: 'var(--text-secondary)', 
            fontWeight: 500, 
            fontSize: '0.9rem',
            padding: '0.625rem 1rem',
            borderRadius: 'var(--radius)',
            transition: 'all var(--transition)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--primary-soft)';
            e.target.style.color = 'var(--primary)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'var(--text-secondary)';
          }}
          >
            Trang chủ
          </Link>
          
          {/* Register Button */}
          <a 
            href="https://teky.edu.vn" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              background: 'var(--gradient-primary)',
              color: 'white',
              padding: '0.625rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.875rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all var(--transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            Học ngay
          </a>
          
          {/* TEKY Logo on right - links to teky.edu.vn */}
          <a 
            href="https://teky.edu.vn" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: 'var(--radius)',
              transition: 'all var(--transition-bounce)',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-soft)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img 
              src={tekyLogo}
              alt="TEKY"
              style={{
                height: '32px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
