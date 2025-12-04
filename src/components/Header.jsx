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
    <header className="glass-effect" style={{
      padding: 'var(--spacing-lg) var(--spacing-xl)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--spacing-xl)',
      boxShadow: 'var(--shadow-md)'
    }}>
      <Link to="/" style={{ 
        fontSize: '1.5rem', 
        fontWeight: 800, 
        color: 'var(--text)', 
        display: 'flex', 
        alignItems: 'center', 
        gap: 'var(--spacing-sm)', 
        flexShrink: 0,
        transition: 'transform var(--transition-base)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <span style={{ fontSize: '2rem' }}>🎓</span>
        <span className="gradient-text">Student Showcase</span>
      </Link>

      <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: '500px', position: 'relative' }}>
        <input 
          type="text" 
          placeholder="Tìm kiếm video, học sinh..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem 0.75rem 2.75rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border)',
            background: 'rgba(0, 0, 0, 0.3)',
            color: 'var(--text)',
            outline: 'none',
            fontSize: '0.95rem',
            transition: 'all var(--transition-base)'
          }}
          onFocus={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.5)';
            e.target.style.borderColor = 'var(--primary)';
            e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.3)';
            e.target.style.borderColor = 'var(--border)';
            e.target.style.boxShadow = 'none';
          }}
        />
        <span style={{ 
          position: 'absolute', 
          left: '1rem', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          fontSize: '1.25rem',
          opacity: 0.5 
        }}>🔍</span>
      </form>

      <nav>
        <Link to="/" style={{ 
          color: 'var(--text-secondary)', 
          fontWeight: 600, 
          fontSize: '0.95rem',
          padding: '0.5rem 1rem',
          borderRadius: 'var(--radius-md)',
          transition: 'all var(--transition-base)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(99, 102, 241, 0.1)';
          e.target.style.color = 'var(--primary-light)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'var(--text-secondary)';
        }}
        >
          Trang chủ
        </Link>
      </nav>
    </header>
  );
};

export default Header;
