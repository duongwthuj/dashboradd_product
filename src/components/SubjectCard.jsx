import { Link } from 'react-router-dom';

const SubjectCard = ({ subject }) => {
  return (
    <Link to={`/subject/${subject.id}`} style={{ display: 'block' }}>
      <div style={{
        background: 'var(--surface)',
        borderRadius: '1rem',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(99, 102, 241, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      >
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <img 
            src={subject.thumbnail} 
            alt={subject.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text)' }}>{subject.name}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, flex: 1 }}>{subject.description}</p>
          <div style={{ marginTop: '1rem', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            View Modules <span>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
