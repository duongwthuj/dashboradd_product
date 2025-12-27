import { useEffect } from 'react';

const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    if (!video) return;
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    // Save current overflow state
    const originalOverflow = document.body.style.overflow;
    
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      animation: 'fadeIn 0.25s ease'
    }} onClick={onClose}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '960px',
        background: 'var(--surface)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: '0 32px 64px -16px rgba(0, 0, 0, 0.4)',
        animation: 'slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }} onClick={e => e.stopPropagation()}>
        {/* Video Container */}
        <div style={{ position: 'relative', paddingTop: '56.25%', background: '#000' }}>
          <video 
            src={video.videoUrl} 
            controls 
            autoPlay 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
        
        {/* Video Info */}
        <div style={{ padding: '1.75rem' }}>
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            {video.title}
          </h2>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.25rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid var(--border)'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'var(--gradient-secondary)',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: '1.1rem',
              boxShadow: '0 4px 12px rgba(245, 166, 35, 0.3)'
            }}>
              {video.studentName?.charAt(0) || 'H'}
            </div>
            <div>
              <p style={{ 
                fontWeight: 600, 
                color: 'var(--text)',
                fontSize: '1rem',
                marginBottom: '0.15rem'
              }}>
                {video.studentName}
              </p>
              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                Học sinh TEKY
              </p>
            </div>
          </div>
          
          <div style={{
            background: 'var(--primary-soft)',
            padding: '1rem 1.25rem',
            borderRadius: 'var(--radius)',
            border: '1px solid rgba(46, 158, 138, 0.15)'
          }}>
            <p style={{ 
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              fontSize: '0.95rem'
            }}>
              {video.description}
            </p>
          </div>
        </div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(255, 255, 255, 0.95)',
            color: 'var(--text)',
            width: '2.75rem',
            height: '2.75rem',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all var(--transition-bounce)',
            boxShadow: 'var(--shadow-md)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--primary)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'rotate(90deg) scale(1.1)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
            e.currentTarget.style.color = 'var(--text)';
            e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default VideoModal;
