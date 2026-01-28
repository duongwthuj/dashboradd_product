const VideoCardSkeleton = () => {
  return (
    <div style={{
      background: 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Thumbnail skeleton */}
      <div style={{ 
        position: 'relative', 
        paddingTop: '56.25%',
        background: 'linear-gradient(90deg, var(--border) 0%, var(--border-light) 50%, var(--border) 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite'
      }} />
      
      {/* Content skeleton */}
      <div style={{ padding: '1rem 1.25rem' }}>
        {/* Title skeleton */}
        <div style={{
          height: '18px',
          background: 'linear-gradient(90deg, var(--border) 0%, var(--border-light) 50%, var(--border) 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          borderRadius: 'var(--radius)',
          marginBottom: '0.75rem',
          width: '80%'
        }} />
        
        {/* Author skeleton */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.6rem' 
        }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(90deg, var(--border) 0%, var(--border-light) 50%, var(--border) 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }} />
          <div style={{
            flex: 1,
            height: '14px',
            background: 'linear-gradient(90deg, var(--border) 0%, var(--border-light) 50%, var(--border) 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            borderRadius: 'var(--radius)',
            width: '60%'
          }} />
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

export default VideoCardSkeleton;
