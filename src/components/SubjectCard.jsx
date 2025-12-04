import { Link } from 'react-router-dom';

const SubjectCard = ({ subject }) => {
  return (
    <Link to={`/subject/${subject.id}`} style={{ display: 'block' }}>
      <div className="card-hover" style={{
        background: 'var(--surface)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid var(--border)',
        position: 'relative'
      }}>
        {/* Gradient overlay on hover */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
          opacity: 0,
          transition: 'opacity var(--transition-base)',
          pointerEvents: 'none',
          zIndex: 1
        }} className="card-gradient" />
        
        <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
          <img 
            src={subject.thumbnail} 
            alt={subject.name} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform var(--transition-slow)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.parentElement.nextSibling.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.parentElement.nextSibling.style.opacity = '0';
            }}
          />
          {/* Gradient overlay on image */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)'
          }} />
        </div>
        
        <div style={{ padding: 'var(--spacing-xl)', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: 'var(--spacing-md)', 
            color: 'var(--text)',
            fontWeight: 700
          }}>
            {subject.name}
          </h3>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '0.95rem', 
            lineHeight: 1.6, 
            flex: 1,
            marginBottom: 'var(--spacing-lg)'
          }}>
            {subject.description}
          </p>
          <div style={{ 
            color: 'var(--primary)', 
            fontWeight: 600, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'var(--spacing-sm)',
            fontSize: '0.95rem'
          }}>
            Xem chi tiết 
            <span style={{ 
              transition: 'transform var(--transition-base)',
              display: 'inline-block'
            }} className="arrow">→</span>
          </div>
        </div>
      </div>
      
      <style>{`
        .card-hover:hover .card-gradient {
          opacity: 1 !important;
        }
        .card-hover:hover .arrow {
          transform: translateX(4px);
        }
      `}</style>
    </Link>
  );
};

export default SubjectCard;
