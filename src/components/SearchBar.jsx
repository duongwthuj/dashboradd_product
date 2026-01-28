import { useState } from 'react';

const SearchBar = ({ placeholder = 'Tìm kiếm...', onSearch, onClear }) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch?.(newValue);
  };

  const handleClear = () => {
    setValue('');
    onSearch?.('');
    onClear?.();
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '500px'
    }}>
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--surface)',
        border: `2px solid ${isFocused ? 'var(--primary)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-full)',
        padding: '0.75rem 1.25rem',
        transition: 'all var(--transition)',
        boxShadow: isFocused ? '0 4px 20px rgba(46, 158, 138, 0.15)' : 'var(--shadow-sm)'
      }}>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke={isFocused ? 'var(--primary)' : 'var(--text-muted)'} 
          strokeWidth="2.5"
          style={{
            transition: 'stroke var(--transition)',
            marginRight: '0.75rem'
          }}
        >
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>

        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          style={{
            flex: 1,
            border: 'none',
            background: 'transparent',
            outline: 'none',
            fontSize: '0.95rem',
            color: 'var(--text)',
            fontWeight: 500
          }}
        />

        {value && (
          <button
            onClick={handleClear}
            style={{
              width: '24px',
              height: '24px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: 'var(--border-light)',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all var(--transition)',
              marginLeft: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-soft)';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--border-light)';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </div>

      <style>{`
        input::placeholder {
          color: var(--text-muted);
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
