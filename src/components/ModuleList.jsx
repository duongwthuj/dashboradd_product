const ModuleList = ({ modules, activeModuleId, onModuleSelect }) => {
  return (
    <div style={{
      background: 'var(--surface)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow)'
    }}>
      <div style={{ 
        padding: '1.25rem 1.5rem', 
        borderBottom: '1px solid var(--border)',
        background: 'var(--primary-soft)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem'
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>
          Danh sách học phần
        </h3>
      </div>
      <div style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto', padding: '0.75rem' }}>
        {modules.map((module, index) => (
          <button
            key={module.id}
            onClick={() => onModuleSelect(module.id)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '0.875rem 1rem',
              margin: '0.25rem 0',
              background: activeModuleId === module.id 
                ? 'var(--primary-soft)' 
                : 'transparent',
              borderRadius: 'var(--radius)',
              borderLeft: activeModuleId === module.id 
                ? '3px solid var(--primary)' 
                : '3px solid transparent',
              color: activeModuleId === module.id 
                ? 'var(--primary)' 
                : 'var(--text-secondary)',
              transition: 'all var(--transition)',
              fontSize: '0.9rem',
              fontWeight: activeModuleId === module.id ? 600 : 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
            onMouseEnter={e => {
              if (activeModuleId !== module.id) {
                e.currentTarget.style.background = 'var(--surface-hover)';
                e.currentTarget.style.color = 'var(--text)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }
            }}
            onMouseLeave={e => {
              if (activeModuleId !== module.id) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.transform = 'translateX(0)';
              }
            }}
          >
            <span style={{ 
              width: '26px',
              height: '26px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: activeModuleId === module.id 
                ? 'var(--gradient-primary)' 
                : 'var(--border)',
              color: activeModuleId === module.id 
                ? 'white' 
                : 'var(--text-muted)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.75rem',
              fontWeight: 700,
              flexShrink: 0,
              transition: 'all var(--transition)'
            }}>
              {index + 1}
            </span>
            <span style={{ 
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {module.name.split(': ')[1] || module.name}
            </span>
            {activeModuleId === module.id && (
              <svg style={{ marginLeft: 'auto', flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModuleList;
