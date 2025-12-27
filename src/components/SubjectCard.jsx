import { Link } from 'react-router-dom';

const SubjectCard = ({ subject }) => {
  return (
    <Link to={`/subject/${subject.id}`} style={{ display: 'block' }}>
      <div style={{
        background: 'var(--surface)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        transition: 'all var(--transition-bounce)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
        e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
        e.currentTarget.style.borderColor = 'var(--primary-light)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = 'var(--shadow)';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
      >
        <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
          <img 
            src={subject.thumbnail} 
            alt={subject.name} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              transition: 'transform var(--transition-slow)' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
            pointerEvents: 'none'
          }} />
          {/* Category badge */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'var(--gradient-primary)',
            color: 'white',
            padding: '0.4rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 600,
            boxShadow: 'var(--shadow-md)'
          }}>
            {subject.id}
          </div>
          {/* Module count badge */}
          <div style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(4px)',
            color: 'var(--text)',
            padding: '0.4rem 0.75rem',
            borderRadius: 'var(--radius)',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {subject.modules?.length || 0} học phần
          </div>
        </div>
        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 700, 
            marginBottom: '0.5rem', 
            color: 'var(--text)',
            lineHeight: 1.35
          }}>
            {subject.name}
          </h3>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '0.9rem', 
            lineHeight: 1.6, 
            flex: 1,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {subject.description}
          </p>
          <div style={{ 
            marginTop: '1.25rem', 
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-light)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between'
          }}>
            <span style={{
              color: 'var(--primary)',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Khám phá ngay
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '26px',
                height: '26px',
                background: 'var(--primary-soft)',
                color: 'var(--primary)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                transition: 'all var(--transition)'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
