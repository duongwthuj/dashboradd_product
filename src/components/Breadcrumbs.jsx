import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.5rem', 
      color: 'var(--text-muted)', 
      fontSize: '0.9rem',
      marginBottom: '1.5rem'
    }}>
      <Link to="/" style={{ hover: { color: 'var(--primary)' }, transition: 'color 0.2s' }}>Home</Link>
      
      {items.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>/</span>
          {item.path ? (
            <Link 
              to={item.path}
              style={{ 
                color: index === items.length - 1 ? 'var(--text)' : 'inherit',
                fontWeight: index === items.length - 1 ? 600 : 400
              }}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ 
              color: index === items.length - 1 ? 'var(--text)' : 'inherit',
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
