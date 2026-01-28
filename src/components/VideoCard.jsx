import { useState, useRef, useEffect } from 'react';

const VideoCard = ({ video, onClick }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Generate thumbnail from video file
  useEffect(() => {
    // Skip thumbnail generation for Coming Soon videos
    if (video.comingSoon || !video.videoUrl) {
      setIsLoading(false);
      return;
    }
    
    if (video.videoUrl && (video.videoUrl.startsWith('/src/assets/') || video.videoUrl.startsWith('/videos/'))) {
      const videoElement = document.createElement('video');
      videoElement.crossOrigin = 'anonymous';
      videoElement.muted = true;
      videoElement.preload = 'metadata';
      
      videoElement.onloadeddata = () => {
        videoElement.currentTime = Math.min(2, videoElement.duration * 0.1);
      };
      
      videoElement.onseeked = () => {
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        
        try {
          const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
          setThumbnail(dataUrl);
        } catch (e) {
          console.log('Could not generate thumbnail for:', video.title);
        }
        setIsLoading(false);
      };

      videoElement.onerror = () => {
        setIsLoading(false);
      };

      videoElement.src = video.videoUrl;
    } else {
      setIsLoading(false);
    }
  }, [video.videoUrl, video.title, video.comingSoon]);

  const displayThumbnail = thumbnail || video.thumbnailUrl;

  return (
    <div 
      onClick={() => !video.comingSoon && onClick(video)}
      style={{
        background: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: video.comingSoon ? 'not-allowed' : 'pointer',
        transition: 'all var(--transition-bounce)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        opacity: video.comingSoon ? 0.85 : 1
      }}
      onMouseEnter={(e) => {
        if (!video.comingSoon) {
          e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          e.currentTarget.style.borderColor = 'var(--primary-light)';
        }
      }}
      onMouseLeave={(e) => {
        if (!video.comingSoon) {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
          e.currentTarget.style.borderColor = 'var(--border)';
        }
      }}
    >
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        {video.comingSoon ? (
          // Coming Soon placeholder
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            gap: '1rem'
          }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.9">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.1rem', 
                fontWeight: 700,
                marginBottom: '0.25rem',
                letterSpacing: '0.5px'
              }}>
                COMING SOON
              </div>
              <div style={{ 
                fontSize: '0.75rem', 
                opacity: 0.9,
                fontWeight: 500
              }}>
                Video sẽ được cập nhật
              </div>
            </div>
          </div>
        ) : isLoading ? (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, var(--border) 0%, var(--border-light) 50%, var(--border) 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" strokeWidth="1.5" opacity="0.5">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
              <line x1="7" y1="2" x2="7" y2="22"/>
              <line x1="17" y1="2" x2="17" y2="22"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <line x1="2" y1="7" x2="7" y2="7"/>
              <line x1="2" y1="17" x2="7" y2="17"/>
              <line x1="17" y1="17" x2="22" y2="17"/>
              <line x1="17" y1="7" x2="22" y2="7"/>
            </svg>
          </div>
        ) : displayThumbnail ? (
          <img 
            src={displayThumbnail} 
            alt={video.title}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )}
        
        {/* Play button overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity var(--transition)'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = 1}
        onMouseLeave={e => e.currentTarget.style.opacity = 0}
        >
          <div style={{
            width: '60px',
            height: '60px',
            background: 'var(--gradient-primary)',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 8px 24px rgba(46, 158, 138, 0.4)',
            transition: 'transform var(--transition-bounce)'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '3px' }}>
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        
        {/* Video badge indicator */}
        {thumbnail && (
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: 'var(--gradient-secondary)',
            color: 'white',
            padding: '0.2rem 0.5rem',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.7rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
            </svg>
            Video
          </div>
        )}
        
        {/* Duration badge */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          background: 'rgba(0, 0, 0, 0.75)',
          color: 'white',
          padding: '0.25rem 0.6rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.75rem',
          fontWeight: 600
        }}>
          2:30
        </div>
      </div>
      <div style={{ padding: '1rem 1.25rem' }}>
        <h3 style={{ 
          fontSize: '0.95rem', 
          fontWeight: 600,
          marginBottom: '0.5rem', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          whiteSpace: 'nowrap',
          color: 'var(--text)'
        }}>
          {video.title}
        </h3>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.6rem' 
        }}>
          <div style={{
            width: '28px',
            height: '28px',
            background: 'var(--gradient-secondary)',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            color: 'white',
            fontWeight: 700,
            boxShadow: '0 2px 6px rgba(245, 166, 35, 0.3)'
          }}>
            {video.studentName?.charAt(0) || 'H'}
          </div>
          <div>
            <p style={{ 
              fontSize: '0.825rem', 
              color: 'var(--text-secondary)',
              fontWeight: 500,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {video.studentName}
            </p>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default VideoCard;
