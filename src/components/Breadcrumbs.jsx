import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.5rem', 
      color: 'var(--text-muted)', 
      fontSize: '0.875rem',
      marginBottom: '1.5rem',
      padding: '0.75rem 1rem',
      background: 'var(--surface)',
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)'
    }}>
      <Link 
        to="/" 
        style={{ 
          color: 'var(--text-muted)',
          transition: 'color var(--transition)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem'
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        Trang chủ
      </Link>
      
      {items.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
          {item.path ? (
            <Link 
              to={item.path}
              style={{ 
                color: index === items.length - 1 ? 'var(--primary)' : 'var(--text-muted)',
                fontWeight: index === items.length - 1 ? 600 : 400,
                transition: 'color var(--transition)'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={e => e.currentTarget.style.color = index === items.length - 1 ? 'var(--primary)' : 'var(--text-muted)'}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ 
              color: index === items.length - 1 ? 'var(--primary)' : 'var(--text-muted)',
              fontWeight: index === items.length - 1 ? 600 : 400
            }}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
